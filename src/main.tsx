import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Product from './pages/Product.tsx'

import './sass/style.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Product />} />
    </Routes>
  </BrowserRouter>
)
