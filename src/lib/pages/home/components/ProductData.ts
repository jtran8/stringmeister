export default interface ProductData {
  id?: number;
  brand?: string;
  logo?: string;
  sku?: string;
  pic?: string;
  price?: number;
  desc?: string;
  type?: string;
  shape?: string;
  colour?: string;
  inStock?: boolean;
  specs?: {
    [key: string]: string;
  };
  stats?: {
    [key: string]: number;
  };
  [key: string]: any;
}
