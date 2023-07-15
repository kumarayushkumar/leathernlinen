export default function Product() {
  return (
    <section id="product">
      <div className="container">

        <div className="row text-center">
          <div className="col-12">
            <h2 className="display-3 mt-3 mt-md-5 fw-bold">Our Products</h2>
            <p className="fw-light mt-2 lead">Here are some of our Best Products</p>
          </div>
        </div>

        <div className="row px-sm-4 pt-4 pb-4 pb-md-5">

          <div className="col-lg-4 col-6">
            <div className="product__img shadow">
              <a href="https://growigh.com/product/" target="_blank" rel="noopener noreferrrer"><img src="./assets/images/product/product-1.webp" className="img-fluid" alt="product image" /></a>
              <div className="product__img__info">
                <h3>Drinkware</h3>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-6">
            <div className="product__img shadow">
              <a href="https://growigh.com/product/" target="_blank" rel="noopener noreferrrer"><img src="./assets/images/product/product-1.webp" className="img-fluid" alt="product image" /></a>
              <div className="product__img__info">
                <h3>Bags</h3>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-6">
            <div className="product__img shadow">
              <a href="https://growigh.com/product/" target="_blank" rel="noopener noreferrrer"><img src="./assets/images/product/product-1.webp" className="img-fluid" alt="product image" /></a>
              <div className="product__img__info">
                <h3>T-shirt</h3>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}