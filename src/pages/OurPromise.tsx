import OurPromises from '../components/OurPromises'
import Header from '../components/Header'
import WhatWeOffer from '../components/WhatWeOffer'
import Footer from '../components/Footer'
import { IPromise } from '../interface'
function OurPromise({ scrolltoTop }:IPromise) {
  scrolltoTop()
  return (
    <>
    <Header/>
    <OurPromises/>
    <WhatWeOffer/>
    <Footer />
    </>
  )
}

export default OurPromise