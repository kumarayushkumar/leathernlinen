// type ProductList = {
//   [key: string]: ProductType
// }

export default interface IProductContent {
  productList: IProductList
}

export interface IProductNavBar {
  productList: IProductList
}

export interface IProduct {
  name: string
  price: number
  image: string
}

export interface IProductType {
  [key: string]: IProduct
}

export interface IProductList {
  [key: string]: IProductType
}
