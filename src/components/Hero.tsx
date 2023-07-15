import Bag from '../assets/images/bag.jpg';
import Bottle from '../assets/images/bottles.jpg';
import DiaryPen from '../assets/images/diaryandpen.jpg';

export default function Hero() {
  return (
    <section id="hero">
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">

          <div className="carousel-item ">
            <img className="d-block w-100" src={Bag} alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
              <h4>Bag</h4>
              <p>...</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Bottle} alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
              <h4>xyz</h4>
              <p>...</p>
            </div>
          </div>
          <div className="carousel-item active">
            <img className="d-block w-100" src={DiaryPen} alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <h4>xyz</h4>
              <p>...</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  )
}