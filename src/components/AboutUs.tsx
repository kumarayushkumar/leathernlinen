
import data from "../data/testimonial";
import AboutUsData from "../data/aboutus"
export default function AboutUs() {
  return (
    <section id="about-us">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="heading m-2 display-3">About Us</h2>
            {AboutUsData.map((item, index) => (
              <div className={index % 2 === 0 ? 'aboutus-card alternate' : 'aboutus-card'} id={item.id}>
                <div className="text">
                  <h2>{item.heading}</h2>
                  <p>{item.description} </p>
                </div>
                <div className="img">
                  <img src={item.image} alt="" />
                </div>
              </div>
            ))}
            
            <h2 className="heading m-2 display-5 mt-5">Testimonial</h2>
            <div className="testmonial-card">
            {data.map((item, idx) => {
              return (
                <div className="testmonial">
                  <div className="text">
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                    <div className="code">
                      {item.mail === "" ? (<></>) : (<a href={item.mail}>{item.mail}</a>)}
                      {item.linkdn === "" ? (<></>) : (<a href={item.linkdn}>Connect with linkdn</a>)}
                    </div>
                  </div>
                  <div className="img">
                    <img
                      src={item.src}
                      alt={item.title}
                      key={idx}
                    />
                  </div>
                </div>
              );
            })}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}