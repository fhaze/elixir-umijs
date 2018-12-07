import {message} from 'antd';
import {connect} from 'dva';
import ProductForm from "../../components/ProductForm";

const ProductsNew = ({ dispatch }) => {
  const onSuccess = (values, form) => {
    dispatch({ type: 'product/save', payload: values })
      .then(product => {
        form.resetFields();
        message.success(`Produto ${product.name} cadastrado.`)
      })
      .catch(() => {
        message.error("Erro ao cadastrar produto")
      });
  };

  return <ProductForm onSuccess={onSuccess}/>;
};

export default connect()(ProductsNew);
