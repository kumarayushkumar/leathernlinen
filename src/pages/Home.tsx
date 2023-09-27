import Header from "../components/Header.tsx"
import Footer from "../components/Footer.tsx"
import Hero from "../components/Hero.tsx"
import AboutUs from "../components/AboutUs.tsx"
import Client from "../components/Client.tsx"
import Testimonial from "../components/Testimonial.tsx"
import { IHome } from "../interface.ts"


export default function Home({ scrolltoTop }:IHome) {
  scrolltoTop();
  return (
    <>
      <Header />
      <Hero />
      <Client />
      <AboutUs />
      <Testimonial />
      <Footer />
    </>
  )
}


