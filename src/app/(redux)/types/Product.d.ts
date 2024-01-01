interface Product {
  _id?: string;
  id?: string;
  url: string;
  name: string;
  tag: string[];
  displayName: string;
  price: number;
  discountPrice: number;
}

export default Product;
