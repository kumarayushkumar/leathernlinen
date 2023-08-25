import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Product from './pages/Product.tsx'
import ContactUs from './pages/ContactUs.tsx'

import './sass/style.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  </BrowserRouter>
)
