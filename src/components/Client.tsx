import clientLogo from '../data/client';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';

function Client() {
  const [slidesToShow, setSlidesToShow] = useState(4); // Default slides to show

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setSlidesToShow(6); // Change slides to show when display width is greater than 1180px
      } else {
        setSlidesToShow(4); // Revert to default slides to show
      }
      if (window.innerWidth < 900) {
        setSlidesToShow(3); // Change slides to show when display width is greater than 1180px
      }
      if (window.innerWidth < 600) {
        setSlidesToShow(2); // Change slides to show when display width is greater than 1180px
      }
      if (window.innerWidth < 400) {
        setSlidesToShow(1); // Change slides to show when display width is greater than 1180px
      }
    };

    window.addEventListener('resize', handleResize);

    // Initial call to set the correct number of slides on component mount
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  var settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false
  };
  return (
    <section id="client" className="d-block mt-3">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <h4 className='text-secondary'>Brands we've worked with:</h4>
          </div>
        </div>
      </div>

      {/* <div className="container mt-3 carousel">
        <div className="slider">
          <div className="slide-track">
            {clientLogo.map((client, index) => (
              <div className="slide" key={index}>
                <img src={client.img} alt={`Client Logo ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <div className='container mt-4'>
        <Slider className='slidernew' {...settings}>
          {clientLogo.map((client, index) => (
            <div key={index} className='card'>
              <img src={client.img} alt={`Client Logo ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Client;
