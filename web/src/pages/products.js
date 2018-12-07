import { connect } from 'dva';
import { Button } from 'antd';
import ProductTable from "../components/ProductTable";

const Products = ({ history, dispatch, products }) => {
  return (
    <div>
      <Button type="primary" onClick={() => history.push('/products/new')}>Novo</Button>
      <ProductTable dataSource={products}/>
    </div>
  );
};

export default connect(({ product }) => ({
  products: product.list
}))(Products);
