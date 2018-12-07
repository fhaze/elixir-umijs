import {Form, Input, InputNumber, Button} from 'antd';
import formatter from "../utils/formatter";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  }
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  }
};

const ProductForm = ({ product, form, onSuccess }) => {
  const { getFieldDecorator } = form;

  const onSubmit = (e) => {
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        onSuccess(values, form);
      }
    });
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Item {...formItemLayout} label="Nome">
        { getFieldDecorator('name', {
          initialValue: product ? product.name : '',
          rules: [ {required: true, message: 'Esse campo é obrigatório'} ]
        })
        (<Input autoFocus/>) }
      </Form.Item>
      <Form.Item {...formItemLayout} label="Valor">
        { getFieldDecorator('value', {
          initialValue: product ? product.value : '',
          rules: [{ required: true, message: 'Esse campo é obrigatório'} ]
        })
        (<InputNumber
          style={{ width: 200 }}
          step={10}
          precision={2}
          decimalSeparator=','
          formatter={value =>  `R$ ${value}` }
          parser={value => value.replace(/R\$ |R|\$/g, '')}
        />) }
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          { product ? "Atualizar" : "Cadastrar" }
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Form.create()(ProductForm);


/**

 let value = event.target.value
 .replace(/[.,]/g, "")
 .replace(/[^0-9]/g, "")
 .padStart(3, "0");

 if (value.startsWith("0") && value.length > 3) {
      value = value.substring(value.length - 3, value.length);
    }

 const match     = value.match(/([0-9]+)([0-9][0-9])/);
 const formatted = formatter.money(`${match[1]}.${match[2]}`);

 this.setState({ value: formatted });

 */
