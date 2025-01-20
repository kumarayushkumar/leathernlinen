import { useState, useEffect } from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import clientLogo from '../data/client'

export default function Client() {
  const [slidesToShow, setSlidesToShow] = useState(4) // Default slides to show

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setSlidesToShow(6) // Change slides to show when display width is greater than 1180px
      } else {
        setSlidesToShow(4) // Revert to default slides to show
      }
      if (window.innerWidth < 900) {
        setSlidesToShow(3) // Change slides to show when display width is greater than 1180px
      }
      if (window.innerWidth < 600) {
        setSlidesToShow(2) // Change slides to show when display width is greater than 1180px
      }
      if (window.innerWidth < 400) {
        setSlidesToShow(1) // Change slides to show when display width is greater than 1180px
      }
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false
  }
  return (
    <section id="client" className="d-block pt-4 pt-md-5 ">
      <div className="container">
        <div className="row text-md-center">
          <div className="col-12">
            <h5 className="text-black md">Brands we've worked with:</h5>
          </div>
        </div>
      </div>
      <div className="container pt-4 pt-md-5">
        <Slider className="slidernew" {...settings}>
          {clientLogo.map((client, index) => (
            <div key={index} className="card">
              <img
                src={client.img}
                alt={`Client Logo ${index}`}
                className="imgage"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
