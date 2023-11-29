import testimonials from '../data/testimonial.ts'

export default function Testimonial() {
  return (
    <section className="testimonial" id="testimonial">
      <div className="heading">What our client says</div>
      <div className="courosal-wrap">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000">
          <div className="carousel-inner">
            {testimonials.map((item, index) => (
              <div
                className={
                  'carousel-item ' +
                  (item.status != undefined ? item.status : '')
                }
                key={index}>
                <div className="content">{item.desc}</div>
                <div className="imagelogo">
                  <img src={item.img} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
