import React, { useState } from 'react';
import Srp from '@/page/SRP';
import Ocp from '@/page/OCP';
import Lsp from '@/page/LSP';
import Isp from '@/page/ISP';
import Dip from '@/page/DIP';


import 'antd/dist/antd.css';
import { Card, Tabs } from 'antd';

const App = () => {
  return <>
    <div style={{ padding: '24px' }}>
      <Card title="五种设计模式SOLID" style={{ width: '70%', minWidth: '1000px' }}>
        <Tabs
         defaultActiveKey='5'
          items={[
            {
              label: `SRP`,
              key: '1',
              children: <Srp />,
            },
            {
              label: `OCP`,
              key: '2',
              children: <Ocp />,
            },
            {
              label: `LSP`,
              key: '3',
              children: <Lsp />,
            },
            {
              label: `ISP`,
              key: '4',
              children: <Isp />,
            },
            {
              label: `DIP`,
              key: '5',
              children: <Dip />,
            },
          ]}
        />
      </Card>
    </div>
  </>
}
export default App