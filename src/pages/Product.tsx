import Footer from "../components/Footer"
import Header from "../components/Header"
import ProductContent from "../components/Product/ProductContent"
import ProductNavBar from "../components/Product/ProductNavBar"
import { merchendiseProductList } from "../data/productList"
import { uniformProductList } from "../data/productList"
import { IScrollToTop } from "../interface"

export default function Product({ scrolltoTop }: IScrollToTop) {
  scrolltoTop()
  return (
    <>
      <Header />
      <section id="product">
        <div className="hero">
          <div className="text">
            <div className="heading">Products</div>
            <div className="content"> Merch can boost morale, create hype, raise revenue, maintain brand loyalty and just makes people feel good.
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <ProductNavBar merchendiseProductList={merchendiseProductList} uniformProductList={uniformProductList} />
            </div>

            <div className="col-10">
              <ProductContent merchendiseProductList={merchendiseProductList} uniformProductList={uniformProductList} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}