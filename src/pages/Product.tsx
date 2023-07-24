import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductContent from "../components/ProdcutContent";
import ProductNavBar from "../components/ProductNavBar";

export default function Product() {
  return (
    <>
      <Header />

      <section id="product">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <ProductNavBar />
            </div>

            <div className="col-9">
              <ProductContent />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}