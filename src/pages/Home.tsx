import Header from "../components/Header.tsx"
import Footer from "../components/Footer.tsx"
import ContactUs from "../components/ContactUs.tsx"
import Hero from "../components/Hero.tsx"
import AboutUs from "../components/AboutUs.tsx"
import Client from "../components/Client.tsx"
// import Product from "../components/Product.tsx"


function Home() {
  return (
    <>
      <Header />
      <Hero />
      {/* <Product /> */}
      <Client />
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  )
}

export default Home
