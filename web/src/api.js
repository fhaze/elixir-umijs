import axios from 'axios';

export default {
  products: {
    fetch() {
      return axios.get('http://localhost:4000/api/products')
        .then(res => res.data);
    },
    get(id) {
      return axios.get(`http://localhost:4000/api/products/${id}`)
        .then(res => res.data);
    },
    post({ name, value }) {
      return axios.post('http://localhost:4000/api/products', {
        product: { name, value }
      }).then(res => res.data);
    },
    put(id, { name, value }) {
      return axios.put(`http://localhost:4000/api/products/${id}`, {
        product: { name, value }
      }).then(res => res.data);
    }
  }
}
