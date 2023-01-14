
import React from 'react';
import { IGoodButtonProps } from '@/typing';

export default (props: IGoodButtonProps) => {
  const { text, icon } = props;
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
      {icon}
    </button>
  </>
}