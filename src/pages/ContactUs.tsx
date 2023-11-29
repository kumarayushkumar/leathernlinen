import Header from '../components/Header'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { IScrollToTop } from '../interface'

export default function ContactUs({ scrolltoTop }: IScrollToTop) {
  scrolltoTop()
  return (
    <>
      <Header />
      <Contact />
      <Footer />
    </>
  )
}
