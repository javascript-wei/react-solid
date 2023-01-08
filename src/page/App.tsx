import React, { useState } from 'react';
import Srp from '@/page/SRP';
import Ocp from '@/page/OCP';
import 'antd/dist/antd.css';
import { Card, Tabs } from 'antd';

const App = () => {
  return <>
    <div style={{ padding: '24px' }}>
      <Card title="五种设计模式SOLID" style={{ width: '70%', minWidth: '1000px' }}>
        <Tabs
         defaultActiveKey='2'
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
          ]}
        />
      </Card>
    </div>
  </>
}
export default App