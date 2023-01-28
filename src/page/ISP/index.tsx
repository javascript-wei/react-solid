
import React from 'react';
import { Col, DatePicker, Row } from 'antd';
import ShowProduct from './Product';
import { useFilterProduct } from '@/page/SRP/hooks/useFilter';
import Filter, { filterProductList } from '@/page/SRP/Filter';
import { useProduct } from '@/page/SRP/hooks/useProduct';
// import moment from 'moment';

export default () => {
  const { productList } = useProduct();
  const { filterData, handleFilter } = useFilterProduct();

  return <>
    <Filter handleFilter={handleFilter} />
    <Row gutter={12} style={{ marginTop: '12px' }}>
      {filterProductList(productList, filterData).map(item =>
        <Col key={item.id} span={6}>
          <ShowProduct data={item} />
        </Col>)}
    </Row>
  </>
}