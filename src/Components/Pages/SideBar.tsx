import React from 'react';
import {  Layout, Menu } from 'antd';
import { items2 } from '../../Data/SiderData';
const {  Sider } = Layout;





const Sidebar:React.FC = () => {
    return (
        <Sider className="site-layout-background" width={250}>
          <Menu mode="inline"
            /* defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']} */
            style={{
              height: '100%',
              background:'#001529',
              color:'#fff',
              fontSize:'20px'
            }}
            items={items2}
          />
        </Sider>
    );
}



export default Sidebar;
