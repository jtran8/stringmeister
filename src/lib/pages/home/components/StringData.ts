export default interface StringData {
  id: number;
  brand: string;
  logo: string;
  sku: string;
  pic: string;
  price: number;
  desc: string;
  type: string;
  shape: string;
  color: string;
  [x: string]: any;
}
