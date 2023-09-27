import Header from "../components/Header"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import { IContactUs } from "../interface";
export default function ContactUs({ scrolltoTop }:IContactUs) {
  scrolltoTop();
  return (
    <>
      <Header />
      <Contact />
      <Footer />
    </>
  )
}