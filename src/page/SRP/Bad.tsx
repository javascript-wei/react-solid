
import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Form, Input, InputNumber, Row } from 'antd';
import { SearchOutlined, TaobaoCircleOutlined } from '@ant-design/icons';
import { mockList } from './mock'
import { IProduct } from '@/typing';

export default () => {
  const [form] = Form.useForm();
  const productRef = useRef<IProduct[]>([]);
  const [productList, setProductList] = useState<IProduct[]>([]);

  const filterProductList = () => {
    const { minNum, maxNum } = form.getFieldsValue();
    const allProductList = productRef.current;
    const isNull = (value: unknown) => value === undefined || value === null;
    const hasValue = (value: unknown) => value !== undefined && value !== null;
    const discountedPrice = (item: IProduct) => item.price * (item.discount || 1);
    const filterDataMap = {
      all: () => setProductList(allProductList),
      onlyMin: (value: number) =>
        setProductList(allProductList.filter(item => discountedPrice(item) >= value)),
      onlyMax: (value: number) =>
        setProductList(allProductList.filter(item => discountedPrice(item) <= value)),
      rangeValue: (minValue: number, maxValue: number) =>
        setProductList(allProductList.filter(item => discountedPrice(item) <= maxValue && discountedPrice(item) >= minValue)),
    }
    if (isNull(minNum) && isNull(maxNum)) {
      filterDataMap['all']();
    }
    if (hasValue(minNum) && isNull(maxNum)) {
      filterDataMap['onlyMin'](minNum);
    }
    if (isNull(minNum) && hasValue(maxNum)) {
      filterDataMap['onlyMax'](maxNum);
    }
    if (hasValue(minNum) && hasValue(maxNum)) {
      filterDataMap['rangeValue'](minNum, maxNum);
    }
  }
  const fetchData = () => {
    new Promise((reslove) => {
      setTimeout(() => {
        reslove(mockList);
      }, 1000);
  }).then((data: IProduct[]) => {
      productRef.current = data;
      filterProductList();
    });
  }
  useEffect(() => {
    fetchData();
  }, [])
  return <>
    <Form form={form}>
      <Input.Group compact>
        <Button>价格区间</Button>
        <Form.Item name={"minNum"}>
          <InputNumber style={{ width: 100, textAlign: 'center' }} placeholder="最小值" />
        </Form.Item>
        <Input
          style={{
            width: 30,
            borderLeft: 0,
            borderRight: 0,
            pointerEvents: 'none',
          }}
          placeholder="~"
          disabled
        />
        <Form.Item name={'maxNum'}>
          <InputNumber
            style={{
              width: 100,
              textAlign: 'center',
            }}
            placeholder="最大值"
          />
        </Form.Item>
        <Button type="primary" shape="circle" onClick={filterProductList} icon={<SearchOutlined />} />
      </Input.Group>
    </Form>
    <Row gutter={12} style={{ marginTop: '12px' }}>
      {productList.map(item =>
        <Col key={item.id} span={6}>
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
            <img src={item.img} />
            <h3
              style={{
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis'
              }}
            >{item.title}</h3>
            <div>
              <span
                style={{
                  color: 'red'
                }}
              >
                ￥{(item.price * (item.discount || 1)).toFixed(2)}
              </span>&emsp;
              {item.discount && <span style={{ textDecoration: 'line-through', opacity: '0.6' }}>￥{item.price.toFixed(2)}</span>}
            </div>
            <div>
              <TaobaoCircleOutlined style={{ fontSize: '12px', color: '#fd3f31' }} />
              <span style={{ opacity: '0.6', fontSize: '12px' }}> {item.storeName}</span>
            </div>
          </div>
        </Col>)}
    </Row>
  </>
}