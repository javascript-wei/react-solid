import React from 'react';
import Srp from '@/page/SRP';
import 'antd/dist/antd.css';
import { Card, Tabs } from 'antd';

const App = () => {
  const onChange = () => {

  }
  return <>
    <div style={{ padding: '24px' }}>
      <Card title="五种设计模式SOLID" style={{width:'70%',minWidth:'500px'}}>
        <Tabs
          defaultActiveKey="1"
          onChange={onChange}
          items={[
            {
              label: `SRP`,
              key: '1',
              children: <Srp />,
            },
            {
                label: `Tab 2`,
                key: '2',
                children: `Content of Tab Pane 2`,
            },
            // {
            //     label: `Tab 3`,
            //     key: '3',
            //     children: `Content of Tab Pane 3`,
            // },
          ]}
        />
      </Card>
    </div>


  </>
}
export default App