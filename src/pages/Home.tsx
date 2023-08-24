import Header from "../components/Header.tsx"
import Footer from "../components/Footer.tsx"
import ContactUs from "../components/ContactUs.tsx"
import Hero from "../components/Hero.tsx"
import AboutUs from "../components/AboutUs.tsx"
import Client from "../components/Client.tsx"
import Testimonial from "../components/Testimonial.tsx"
// import Product from "../components/Product.tsx"


function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Client />
      <AboutUs />
      {/* <ContactUs /> */}
      <Testimonial />
      <Footer />
    </>
  )
}

export default Home
