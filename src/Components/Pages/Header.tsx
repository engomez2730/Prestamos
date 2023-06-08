import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import './Header.css'

const { Header } = Layout;

const Navbar: React.FC = () => {
  return (
    <Header className='header'>
      <div className='logo'>PRESTAMOS</div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']} className='menu'>
        <Menu.Item key="home" icon={<UserOutlined />}>
          Usuario
        </Menu.Item>
        <Menu.Item key="profile" icon={<UserOutlined />}>
          Entrar
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
