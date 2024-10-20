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
  gauges?: string;
  inStock?: boolean;
  specs?: {
    [key: string]: string;
  };
  attributes?: {
    color: string;
    scheme: string;
    gauges: [];
  };
  [key: string]: any;
}
