import data from "../data/testimonial";

// drop down
// whoe we are
// why merchanise gift
// why to choose us
// our promises and commitment
// what we offer
// Testimonials


export default function AboutUs() {
  return (
    <section id="about-us">
      <div className="container-fluid">
        <div className="row bg-primary">
          <div className="col-md-6">
            <h3 className="display-3">Who the hell we are</h3>
            A diverse and talented team working in the field of merchandising and gifts with a global presence, operating from offices in Sydney, Australia, and New Delhi, India. A Team of Director, Designer, sales, Production and Dispatch.
            We Cater to clients based on their choice of designs and products, as it demonstrates a strong commitment to customer satisfaction and a deep understanding of their preferences. Offering a diverse range of products from around the world further enhances your company's appeal
            Considerations: market research, Quality control, Logistics and supply chain and customization
          </div>
          <div className="col-md-6">
            {/* <img src={} alt="About Us" className="img-fluid" /> */}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">

          </div>
          <div className="col-md-6">

          </div>
        </div>

        <div className="row">
          <div className="col-md-6">

          </div>
          <div className="col-md-6">

          </div>
        </div>

        <div className="row">
          <div className="col-md-6">

          </div>
          <div className="col-md-6">

          </div>
        </div>
      </div>

      <div className="container-fluid" id="why-choose-us">
        <div className="row">
          <h2 className="display-2">Why to choose us</h2>
        </div>

        <div className="row">
          <div className="col-md-9">

          </div>
          <div className="col-md-3">
            Our entire approach at GUC comes from our strong family base - whether big or small, we treat your business as if it were our own: your business is our business and your success is our success.
            We strive to match our products to your overall business profile
          </div>
        </div>
      </div>
    </section>
  )
}