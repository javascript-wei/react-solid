import React, { useEffect, useState } from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { IFilterData, IProduct } from '@/typing';

interface IFilterProps {
  handleFilter?: (filterData: IFilterData) => void;
}
export const filterProductList = (productList,filterData: IFilterData): IProduct[] => {
  const { minNum, maxNum } = filterData;
  const isNull = (value: unknown) => value === undefined || value === null;
  const hasValue = (value: unknown) => value !== undefined && value !== null;
  const discountedPrice = (item: IProduct) => item.price * (item.discount || 1);
  const filterDataMap = {
    all: () => productList,
    onlyMin: (value: number) =>
      productList.filter(item => discountedPrice(item) >= value),
    onlyMax: (value: number) =>
      productList.filter(item => discountedPrice(item) <= value),
    rangeValue: (minValue: number, maxValue: number) =>
      productList.filter(item => discountedPrice(item) <= maxValue && discountedPrice(item) >= minValue),
  }
  if (isNull(minNum) && isNull(maxNum)) {
    return filterDataMap['all']();
  }
  if (hasValue(minNum) && isNull(maxNum)) {
    return filterDataMap['onlyMin'](minNum);
  }
  if (isNull(minNum) && hasValue(maxNum)) {
    return filterDataMap['onlyMax'](maxNum);
  }
  if (hasValue(minNum) && hasValue(maxNum)) {
   return filterDataMap['rangeValue'](minNum, maxNum);
  }
}
export default (props: IFilterProps) => {
  const { handleFilter } = props;
  const [form] = Form.useForm();
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
        <Button type="primary" shape="circle" onClick={() => {
          handleFilter?.(form.getFieldsValue() as IFilterData);
          // const { minNum, maxNum } = form.getFieldsValue();
          // filterProductList?.(minNum, maxNum);
        }} icon={<SearchOutlined />} />
      </Input.Group>
    </Form>
  </>
}