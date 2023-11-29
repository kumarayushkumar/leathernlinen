import img1 from '../assets/images/About_Us/illustrations/illustration-2.svg'
import img2 from '../assets/images/About_Us/illustrations/illustration-1.svg'
import img3 from '../assets/images/About_Us/illustrations/illustration-3.svg'
import img4 from '../assets/images/About_Us/illustrations/illustration-4.svg'

export default function WhyChooseUs() {
  return (
    <div className="whychooseus" id="whychooseus">
      <div className="heading">Why to choose us</div>
      <div className="fluid-container d-flex justify-content-between ">
        <div className="image d-flex justify-content-center">
          <div className="illustration">
            <div className="caption">
              Better & effective
              <br /> communication
            </div>
            <img src={img1} alt="" />
          </div>
          <div className="illustration">
            <div className="caption">Free art work</div>
            <img src={img2} alt="" />
          </div>
          <div className="illustration">
            <div className="caption">
              Cost effective
              <br />
              NO hidden Charges
            </div>
            <img src={img3} alt="" />
          </div>
          <div className="illustration">
            <div className="caption">Fast and safe delivery</div>
            <img src={img4} alt="" />
          </div>
        </div>
        <div className="text">
          <div className="content">
            <p>
              Our entire approach at GUC comes from our strong family base —
              whether big or small, we treat your business as if it were our
              own: your business is our business and your success is our
              success. We strive to match our products to your overall business
              profile "
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
