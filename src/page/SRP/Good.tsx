
import React from 'react';
import { Col, Row } from 'antd';
import ShowProduct from './ShowProduct';
import { useFilterProduct } from './hooks/useFilter';
import Filter, { filterProductList } from './Filter';
import { useProduct } from './hooks/useProduct';

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