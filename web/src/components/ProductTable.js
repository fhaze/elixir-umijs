import { Table } from 'antd';
import Link from "umi/link";
import formatter from "../utils/formatter";

const columns = [
  {
    title: 'Nome',
    dataIndex: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name)
  },
  {
    title: 'Valor',
    dataIndex: 'value',
    render: formatter.money,
    className: 'column-money',
    filters: [
      { text: 'até R$ 100',        value: "|100" },
      { text: 'R$ 100 até R$ 300', value: "100|300" },
      { text: 'R$ 300 até R$ 800', value: "300|800" },
      { text: 'mais de R$ 800',    value: "|800" },
    ],
    filterMultiple: false,
    onFilter: (value, record) => {
      const values = value.split('|');
      const min    = values[0];
      const max    = values[1];

      if (!min) {
        return record.value > Number(max);
      } else if (!max) {
        return record.value > Number(min);
      } else {
        return record.value > Number(min) && record.value < Number(max);
      }
    },
    sorter: (a, b) => a.value - b.value
  },
  {
    render: (text, record) => <Link to={`/products/${record.id}`}>Editar</Link>
  }
];

const ProductTable = ({ dataSource }) => (
  <Table size="middle" rowKey="id" dataSource={dataSource} columns={columns}/>
);

export default ProductTable;
