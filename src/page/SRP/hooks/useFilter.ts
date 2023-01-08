import { useState } from 'react';
import { IFilterData } from '@/typing'

export const useFilterProduct = () => {
  const [filterData, setFilterData] = useState<IFilterData>({});
  const handleFilter = (data: IFilterData) => {
    setFilterData(data);
  }
  return {
    filterData,
    handleFilter
  }
}