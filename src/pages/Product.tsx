import Footer from "../components/Footer"
import Header from "../components/Header"
import ProductContent from "../components/Product/ProductContent"
import ProductNavBar from "../components/Product/ProductNavBar"
import productList from "../data/productList"
import img from '../assets/images/Product/products-cover.jpg'
export default function Product() {
  return (
    <>
      <Header />
      <section id="product">
        <div className="hero">
          <img src={img} alt="" />
          <div className="text">
            <div className="heading">Products</div>
            <div className="content"> Merch can boost morale, create hype, raise revenue, maintain brand loyalty and just makes people feel good.
</div>
            </div>
        </div>
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