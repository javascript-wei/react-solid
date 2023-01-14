
import { Divider } from 'antd';
import React from 'react';
import BadButton from './BadButton';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

import GoodButton from './GoodButton';
import Validate from './Validate';

export default () => {

  return <>
    <Divider />
    <div>EXAMPLE1:</div>
    <GoodButton text='前进' icon={<RightOutlined />} />&emsp;
    <GoodButton text='后退' icon={<LeftOutlined />} />
    <Divider />
    <div>EXAMPLE2:</div>
    <Validate />
  </>
}