export default interface IProductContent {
  productList: IProductList
}

export interface IProductNavBar {
  productList: IProductList
}

export interface IProduct {
  name: string
  price?: number
  image: string
}

export interface IProductList {
  [key: string]: IProductCategory
}

export interface IProductCategory {
  [key: string]: IProduct
}


export interface IScrollToTop {
  scrolltoTop: () => void
}