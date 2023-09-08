import sliderimg from "../data/slider"

export default function Hero() {
  return (
    <section id="hero">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1000">
        <div className={"text"}>
          <h1>fill the <span className="color1">colors </span> at your special occasions</h1>
          <h1>fill the <span className="color2">colors </span> at your merchandise</h1>
          <h1>fill the <span className="color3">colors </span> with your gift</h1>
        </div>
        <div className="carousel-inner">

          {sliderimg.map((item, index) => (
            <div key={index} className={"carousel-item " + (item.status != undefined ? item.status : "")}>

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