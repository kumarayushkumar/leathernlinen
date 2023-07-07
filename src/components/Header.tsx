import { Link } from 'react-router-dom'

export default function Header() {  
  return (
    <header className="header shadow">

      <div className="header-content">

        <div className="logo">
          <h1><span className="leather">Leather</span><span className="ampersand"> & </span><span className="linen">Linen</span></h1>
        </div>

        <nav className="text-white">
          <Link to="/#services">Services</Link>
          <Link to="/#latest-work">Latest Work</Link>
          <Link to="/#about-us">About Us</Link>
          <Link to="/#form">Contact Us</Link>
          <Link to="/product">Product</Link>
        </nav>
        
      </div>

    </header>
  )
}