export interface IProduct {
  img?: string;
  title?: string;
  price?: number;
  discount?: number;
  storeName?: string;
  id?: string;
}
export interface IFilterData {
  minNum?: number | undefined | null;
  maxNum?: number | undefined | null;
}
export interface IButtonProps {
  text?:string,
  rule?:'back'|'forward',
}