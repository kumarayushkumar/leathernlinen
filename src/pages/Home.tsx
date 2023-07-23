import Header from "../components/Header.tsx"
import Footer from "../components/Footer.tsx"
import ContactUs from "../components/ContactUs.tsx"
import Hero from "../components/Hero.tsx"
import AboutUs from "../components/AboutUs.tsx"
import LatestWork from "../components/LatestWork.tsx"
// import Product from "../components/Product.tsx"


function Home() {
  return (
    <>
      <Header />
      <Hero />
      {/* <Product /> */}
      <AboutUs />
      <LatestWork />
      <ContactUs />
      <Footer />
    </>
  )
}

export default Home
