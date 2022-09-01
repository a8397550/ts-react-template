import { 
  MenuUnfoldOutlined, 
  MenuFoldOutlined,
  SettingOutlined 
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { 
  Breadcrumb, 
  Layout, 
  Menu, 
  Button
} from 'antd';
import * as React from 'react';
import './index.less';
import { Route, Routes } from 'react-router-dom';
import Users from '@/pages/system/user'
import Roles from '@/pages/system/role'
import Rules from '@/pages/system/rule'
import { 
  useLocation,
  useSearchParams,
  useNavigate,
  useParams
 } from "react-router-dom";
 import * as qs from 'query-string';

const { Header, Content, Sider } = Layout;

const navs: MenuProps['items'] = ['1', '2', '3'].map(key => ({
  key,
  label: `nav ${key}`,
}));

const settingMenus: MenuProps['items'] = [SettingOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `menu-${key}`,
      icon: React.createElement(icon),
      label: `系统管理`,

      children: [{
        name: '用户管理',
        key: '/users'
      }, {
        name: '角色管理',
        keys: '/roles'
      }, {
        name: '菜单管理',
        key: '/menus'
      },
      {
        name: '权限管理',
        key: '/rules'
      }].map((item, j) => {
        return {
          key: item.key,
          label: `${item.name}`,
        };
      }),
    };
  },
);

const App: React.FC = (props) => {
  const [collapsed, setCollapsed] = React.useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  let [searchParams, setSearchParams] = useSearchParams();
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();
  console.log(searchParams, location, params)
  console.log(qs.parse(location.search))

  return <Layout className='layout-container'>
  <Header className="header">
    <div className="logo"></div>
    <Button type="primary" onClick={toggleCollapsed} className="collapsed-open">
      {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </Button>
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={navs} />
  </Header>
  <Layout>
    <Sider collapsed={collapsed} onCollapse={value => setCollapsed(value)} width={200} className="site-layout-background">
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        items={settingMenus}
      />
    </Sider>
    <Layout style={{ padding: '0 24px 24px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Routes>
        <Route path="/users" element={<Users/>} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
    </Layout>
  </Layout>
</Layout>
}

export default App;