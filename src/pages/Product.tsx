import Footer from "../components/Footer"
import Header from "../components/Header"
import ProductContent from "../components/Product/ProductContent"
import ProductNavBar from "../components/Product/ProductNavBar"
import productList from "../data/productList"

export default function Product() {
  return (
    <>
      <Header />
      <section id="product">
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <ProductNavBar productList={productList} />
            </div>

            <div className="col-9">
              <ProductContent productList={productList} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}