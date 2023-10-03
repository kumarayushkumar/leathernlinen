import { useState, useEffect } from 'react'
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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

    // Initial call to set the correct number of slides on component mount
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
    <section id="client" className="d-block pt-2">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <h5 className='text-black'>Brands we've worked with:</h5>
          </div>
        </div>
      </div>
      <div className='container mt-4 pt-3'>
        <Slider className='slidernew' {...settings}>
          {clientLogo.map((client, index) => (
            <div key={index} className='card'>
              <img src={client.img} alt={`Client Logo ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}