
import { Divider } from 'antd';
import React from 'react';
import Button  from './Button';
import Validate from './Validate';
export default () => {

  return <>
    <Divider />
    <div>EXAMPLE1:</div>
    <Button text='前进' rule='forward'/>&emsp;
    <Button text='后退' rule='back'/>
    <Divider />
    <div>EXAMPLE2:</div>
    <Validate />
  </>
}