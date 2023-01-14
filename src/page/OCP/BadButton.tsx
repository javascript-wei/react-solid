
import React, { isValidElement } from 'react';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import { IButtonProps } from '@/typing';

export default (props: IButtonProps) => {
  const { text, rule } = props;
  return <>
    <button
      style={{
        background: '#1677ff',
        color: '#fff',
        boxShadow: '0 2px 0 rgb(5 145 255 / 10%)',
        border: 'none',
        cursor: 'pointer',
        padding: '6px 16px',
        borderRadius: '6px',
        textAlign: 'center'
      }}>
      {text}
      {rule === 'back' && <RightOutlined />}
      {rule === 'forward' && <LeftOutlined />}
      {isValidElement(rule) && rule}
    </button>
  </>
}