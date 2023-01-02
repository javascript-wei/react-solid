import { IProduct } from '@/typing';
import { useState, useEffect } from 'react';
import { mockList } from '../mock'

export const useProduct = () => {
  const [productList, setProductList] = useState<IProduct[]>([]);
  const fetchData = () => {
    new Promise((reslove) => {
      setTimeout(() => {
        reslove(mockList);
      }, 1000);
    }).then((data: IProduct[]) => setProductList(data));
  }
  useEffect(() => {
    fetchData();
  }, [])
  return {
    productList,
  }
}