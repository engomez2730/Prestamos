import React from 'react';
import { LaptopOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom'
import type { MenuProps } from 'antd';


const arreglo =[
    {
        icon:LaptopOutlined,
        label:'Clientes',
        key:'1',
        children:[
            {
                icon:LaptopOutlined,
                label:<Link to='/clientes'>Clientes</Link>,
                key:'1',
            }
        ]
    },
    {
      icon:LaptopOutlined,
      label:'Prestamos',
      key:'2',
      children:[
          {
              icon:LaptopOutlined,
              label:<Link to='/prestamos'>Prestamos</Link>,
              key:'2',
          }
      ]
  }
]



export const items2: MenuProps['items'] = arreglo.map(
    (item, index) => {
      return {
        key: item.key,
        icon: React.createElement(item.icon),
        label: item.label,
         children: item.children.map((item, j) => {
          return {
            key: item.key,
            label: item.label,
            icon: React.createElement(item.icon),

          };
        }),
      };
    },
  );