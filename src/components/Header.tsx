import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.png'

export default function Header() {

  return (
    <header id="header" className="header">
      <div className="header-content">
        <div className="logo">
          <div className="logo-img">
            <img src={Logo} alt="logo" />
          </div>
        </div>

        <nav>
          <Link to="/product">Products</Link>
          <Link to="/#latest-work">Clients</Link>
          <Link to="/#about-us">About Us</Link>
          <Link to="/#contact-us">Contact Us</Link>
        </nav>

        <Link to="#contact-us" className='downloadbtn'>Download Brochure</Link>

      </div>

    </header>
  )
}