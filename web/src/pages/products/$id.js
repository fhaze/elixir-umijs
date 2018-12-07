import {message} from 'antd';
import {connect} from 'dva';
import ProductForm from "../../components/ProductForm";

const ProductsEdit = ({ dispatch, product, match }) => {
  const onSuccess = (values) => {
    dispatch({ type: 'product/update', payload: { id: match.params.id, values } })
      .then(product => {
        message.success(`Produto ${product.name} atualizado.`)
      })
      .catch(() => {
        message.error("Erro ao atualizar produto")
      });
  };

  return <ProductForm product={product} onSuccess={onSuccess}/>;
};
export default connect(({ product }) => ({
  product: product.current
}))(ProductsEdit);
