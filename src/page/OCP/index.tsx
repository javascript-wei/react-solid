
import { Divider } from 'antd';
import React from 'react';
import Button  from './Button';
import Validate from './Validate';
export default () => {

  return <>
    <Divider />
    <div>EXAMPLE1:</div>
    <Button text='εθΏ' rule='forward'/>&emsp;
    <Button text='ει' rule='back'/>
    <Divider />
    <div>EXAMPLE2:</div>
    <Validate />
  </>
}