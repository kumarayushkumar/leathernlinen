import testimonials from '../data/testimonial.ts'
import clientLogo1 from '../assets/images/Client_logos/client-1.webp';
export default function Testimonial() {
  return (
    <section className="testimonial" id="testimonial">
      <div className="heading">What our client says</div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
        <div className="carousel-inner">
          {
            testimonials.map((item, index) => (
              <div className={"carousel-item active "/* + (item.status != undefined ? item.status : "")}*/ key={index}>
              <div className="content">
              {item.desc}
            </div>
            <div className="imagelogo">
              <img src={item.img} alt="" />
            </div>
            </div>
            ))
          }
        </div>
      </div>
      
    </section>
  )
}