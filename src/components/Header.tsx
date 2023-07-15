import { Link } from 'react-router-dom'

export default function Header() {  
  return (
    <header id="header" className="header shadow">

      <div className="header-content">

        <div className="logo">
          <h1><span className="leather">Leather</span><span className="ampersand"> & </span><span className="linen">Linen</span></h1>
          <p>Corpotate Gifiting</p>
        </div>

        <nav className="text-white">
          <Link to="/#product">Product</Link>
          <Link to="/#about-us">About Us</Link>
          <Link to="/#latest-work">Latest Work</Link>
          <Link to="/#contact-us">Contact Us</Link>
        </nav>
        
      </div>

    </header>
  )
}