import React from 'react';

interface IInputProps
  extends React.InputHTMLAttributes<HTMLElement> {
  label?: string;
}
export default (props: IInputProps) => {
  const { label = '', value, onChange, ...restProps } = props
  return <>
    <div style={{ display: 'flex' }}>
      <span>{label}：</span>
      <input
        type='search'
        onChange={onChange}
        value={value}
        required
        placeholder='请输入'
        style={{
          border: '1px solid #d9d9d9',
          borderRadius: '6px',
          width: '100%',
          flex:'1'
        }}
        {...restProps}
      />
    </div>

  </>
}