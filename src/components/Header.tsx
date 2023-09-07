import { Link } from 'react-router-dom'
import Logo from './Logo'
import { Hamburger } from '../assets/images/icon'
import { useState } from 'react'

export default function Header() {
  const [nav,setnav] =useState(false);
  const navhandler =() =>{
    setnav(!nav)
  }

  return (
    <header id="header" className="header">
      <div className="header-content">
        <Logo />
        <nav className={nav?"active":""}>
          <ul>
            <li><Link to="/product">Products</Link></li>
            <li><Link to="/product">Services</Link></li>
            {/* <Link to="/#latest-work">Clients</Link> */}
            <li><Link to="/#about-us">About Us</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li> <Link to="/contact-us" className="downloadbtn">Download Brochure</Link></li>

          </ul>
        </nav>
        <Hamburger className='hamburger' onClick={navhandler}/>

      </div>

    </header>
  )
}