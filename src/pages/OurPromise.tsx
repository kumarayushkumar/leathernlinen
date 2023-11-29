import OurPromises from '../components/OurPromises'
import Header from '../components/Header'
import WhatWeOffer from '../components/WhatWeOffer'
import Footer from '../components/Footer'
import { IScrollToTop } from '../interface'

export default function OurPromise({ scrolltoTop }: IScrollToTop) {
  scrolltoTop()
  return (
    <>
      <Header />
      <OurPromises />
      <WhatWeOffer />
      <Footer />
    </>
  )
}
