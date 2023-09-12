import { useEffect, useState } from "react"
import sliderimg from "../data/slider"

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Remove "active" class from the previous child div
      document.querySelectorAll('.child')[activeIndex]?.classList.remove('active');

      // Calculate the next index, wrapping around to 0 if needed
      const nextIndex = (activeIndex + 1) % 8;

      // Add "active" class to the next child div
      document.querySelectorAll('.child')[nextIndex]?.classList.add('active');
      // Update the activeIndex state
      setActiveIndex(nextIndex);
    }, 10000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [activeIndex]);

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

