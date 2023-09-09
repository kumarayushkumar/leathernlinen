import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Product from './pages/Product.tsx'
import ContactUs from './pages/ContactUs.tsx'

import './sass/style.scss'
import OurPromise from './pages/OurPromise.tsx'
import Printing from './pages/Printing.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/our-promise" element={<OurPromise/>} />
      <Route path="/printing" element={<Printing/>} />
    </Routes>
  </BrowserRouter>
)
