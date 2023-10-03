import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Product from './pages/Product.tsx'
import ContactUs from './pages/ContactUs.tsx'

import './sass/style.scss'
import OurPromise from './pages/OurPromise.tsx'
import Printing from './pages/Printing.tsx'

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home scrolltoTop={scrollToTop} />} />
      <Route path="/product" element={<Product scrolltoTop={scrollToTop} />} />
      <Route path="/contact-us" element={<ContactUs scrolltoTop={scrollToTop} />} />
      <Route path="/our-promise" element={<OurPromise scrolltoTop={scrollToTop} />} />
      <Route path="/printing" element={<Printing scrolltoTop={scrollToTop} />} />
    </Routes>
  </BrowserRouter>
)
