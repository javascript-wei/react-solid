import React from 'react';
import { TaobaoCircleOutlined } from '@ant-design/icons';
import { IProduct } from '@/typing';

interface IShowProductProps {
  data: IProduct,
}
export default (props: IShowProductProps) => {
  const { data: productItem } = props;
  return <>
    <div
      style={{
        padding: '16px',
        margin: '8px',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #f2f2f2',
        width: '234px',
        height: '316px'
      }}>
      <img src={productItem.img} />
      <h3
        style={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis'
        }}
      >{productItem.title}</h3>
      <div>
        <span
          style={{
            color: 'red'
          }}
        >
          ￥{(productItem.price * (productItem.discount || 1)).toFixed(2)}
        </span>&emsp;
        {productItem.discount && <span style={{ textDecoration: 'line-through', opacity: '0.6' }}>￥{productItem.price.toFixed(2)}</span>}
      </div>
      <div>
        <TaobaoCircleOutlined style={{ fontSize: '12px', color: '#fd3f31' }} />
        <span style={{ opacity: '0.6', fontSize: '12px' }}> {productItem.storeName}</span>
      </div>
    </div>
  </>
}