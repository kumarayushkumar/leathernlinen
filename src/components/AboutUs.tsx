import data from "../data/testimonial";
import aboutus from "../assets/images/About_Us/who_we_are.png";
import { Clothblob } from "../assets/images/About_Us/illustrations/blobs";
import svg1 from "../assets/images/About_Us/illustrations/illustration-1.svg";
import svg2 from "../assets/images/About_Us/illustrations/illustration-2.svg";
import svg3 from "../assets/images/About_Us/illustrations/illustration-3.svg";
import svg4 from "../assets/images/About_Us/illustrations/illustration-4.svg";

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
        <div className="who-we-are">
          <div className="heading">Who the hell we are</div>
            <div className="who-we-are-text">
              A diverse and talented team working in the field of merchandising
              and gifts with a global presence, operating from offices in Sydney,
              Australia, and New Delhi, India. A Team of Director, Designer,
              sales, Production and Dispatch. <br />
              <br />
              We Cater to clients based on their choice of designs and products,
              as it demonstrates a strong commitment to customer satisfaction and
              a deep understanding of their preferences. Offering a diverse range
              of products from around the world further enhances your company's
              appeal <br /> <br />
              <b>Considerations: </b> market research, Quality control, Logistics
              and supply chain and customization
          </div>
        </div>
        <div className="blend-img"> 
          <img src={aboutus} alt="" />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6"></div>
        </div>

        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6"></div>
        </div>

        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6"></div>
        </div>
      </div>

      {/* <div className="container-fluid" id="why-choose-us">
        <div className="row">
          <h2 className="display-2">Why to choose us</h2>
        </div>

        <div className="row">
          <div className="col-md-9"></div>
          <div className="col-md-3">
            Our entire approach at GUC comes from our strong family base -
            whether big or small, we treat your business as if it were our own:
            your business is our business and your success is our success. We
            strive to match our products to your overall business profile
          </div>
        </div>
      </div> */}

      <div className="container-fluid-choseus">

          <div className="illutration-images">
            <img src={svg1} alt="" />
            <img src={svg2} alt="" />
            <img src={svg3} alt="" />
            <img src={svg4} alt="" />
          </div>
          
          <div className="why-to-choose-us">
            <div className="heading-choose-us">Why to choose us</div>
            <div className="choose-us-text">
              Our entire approach at GUC comes from our strong family base -
              whether big or small, we treat your business as if it were our own:
              your business is our business and your success is our success. We
              strive to match our products to your overall business profile
            </div>
          </div>
        
      </div>
      <div className="section2">
        <div className="text"></div>
        <div className="image">
          <Clothblob/>
        </div>
      </div>
    </section>
  );
}
