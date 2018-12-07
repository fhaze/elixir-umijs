import api from "../api";

export default {
  state: {
    list: [],
    current: null
  },
  reducers: {
    setList (state, { payload: products }) {
      state.list = products;
    },
    setCurrent (state, { payload: product }) {
      state.current = product;
    }
  },
  effects: {
    *fetch(_, { put, call }) {
      const response = yield call(api.products.fetch);
      const products = response.data;

      yield put({ type: 'setList', payload: products });
    },
    *get({ payload: id }, { put, call }) {
      const response = yield call(api.products.get, id);
      const product = response.data;

      yield put({ type: 'setCurrent', payload: product });
    },
    *save({ payload: values }, { put, call }) {
      const response = yield call(api.products.post, values);
      return response.data;
    },
    *update({ payload }, { put, call }) {
      const { id, values } = payload;
      const response = yield call(api.products.put, id, values);
      return response.data;
    },
  },
  subscriptions: {
    setup({ history, dispatch }) {
      return history.listen(props => {
        if (props.pathname === '/products')
          dispatch({ type: 'fetch' });

        const match = props.pathname.match(/\/products\/([0-9]+)/);
        if (match) {
          dispatch({ type: 'get', payload: match[1] });
        }
      });
    }
  }
}
