import testimonials from '../data/testimonial.ts'

export default function Testimonial() {
  return (
    <section id="testimonial">
      <div className="container">
        <div className="row">
          <div className="col-12">

          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1000">
              <div className="carousel-inner">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className={"carousel-item " + (testimonial.status != undefined ? testimonial.status : "")}>
                    <div className={"text " + (testimonial.status != undefined ? testimonial.status : "")}>
                      <p>{testimonial.desc}</p>
                      </div>
                    <img src={testimonial.img} alt="First slide" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}