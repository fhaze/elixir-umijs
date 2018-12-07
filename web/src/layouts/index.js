import styles from './index.css';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

function BasicLayout(props) {
  return (
    <Layout style={{minHeight: '100vh'}}>
      <Header className={styles.header}>
        Elixir + UmiJS
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280, maxWidth: 1200, margin: '0 auto', width: '100%' }}>
          {props.children}
          </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default BasicLayout;
