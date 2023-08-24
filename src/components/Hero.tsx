import sliderimg from "../data/slider"

export default function Hero() {
  return (
    <section id="hero">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1000">
        <div className="carousel-inner">
          {sliderimg.map((item, index) => (
            <div key={index} className={"carousel-item " + (item.status != undefined ? item.status : "")}>
              <div className={"text " + (item.status != undefined ? item.status : "")}><h1>Hello World</h1></div>
              <img src={item.img} alt="First slide" />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}