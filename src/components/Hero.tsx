import sliderimg from "../data/slider"

export default function Hero() {
  return (
    <section id="hero">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
        <div className="carousel-inner">
          {sliderimg.map((item, index) => (
            <div key={index} className={"carousel-item " + (item.status != undefined ? item.status : "")}>
              <div className={"text " + (item.status != undefined ? item.status : "")}>
                <h1>fill the <span className="color1">colors </span> at your special occasions</h1>
                <h1>fill the <span className="color2">colors </span> at your merchandise</h1>
                <h1>fill the <span className="color3">colors </span> with you gift</h1>
                </div>
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