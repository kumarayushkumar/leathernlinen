import { useEffect, useState } from "react"

import sliderimg from "../data/slider"

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      document.querySelectorAll('.child')[activeIndex]?.classList.remove('active')
      const nextIndex = (activeIndex + 1) % 8
      document.querySelectorAll('.child')[nextIndex]?.classList.add('active')
      setActiveIndex(nextIndex)
    }, 10000)
    return () => clearInterval(interval)
  }, [activeIndex])

  return (
    <section id="hero">
      <div className={"text"}>
        <h1>fill the <span className="color1">colors </span> at your special occasions</h1>
        <h1>fill the <span className="color2">colors </span> at your merchandise</h1>
        <h1>fill the <span className="color3">colors </span> with your gift</h1>
      </div>
      <div className="content">
        {sliderimg.map((item, index) => (
          <div key={index} className={`image ${activeIndex === index ? 'active' : ''}`}>
            <img src={item.img} alt="First slide" />
          </div>
        ))}
      </div>
    </section>
  )
}