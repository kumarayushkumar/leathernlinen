import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import productList from '../data/productList'
export default function Header() {
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    
    if(section !=null){
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <header id="header" className="header shadow">

      <div className="header-content">

        <div className="logo">
          {/* <h1><span className="leather">Leather</span><span className="ampersand"> & </span><span className="linen">Linen</span></h1>
           */}
          <div className="logo-img">
            <img src={Logo} alt="logo" />
          </div>
          {/* <p>Corpotate Gifiting</p> */}
        </div>

        <nav className="text-white">

          {/* <div className="dropdown">
            <Link to="/product">Products</Link>

            <div className="dropdown-content">
              <div className="row px-2">
                <div className="col-6 p-2">
                  {Object.entries(productList).map(([productType]) => (
                    <Link to={"/product/#"+productType.replace(/\s/g,"_")} onClick={()=>handleScrollToSection(productType.replace(/\s/g,"_"))} >{productType}</Link>      
                  ))}
                </div>

                <div className="col-6 p-2 vertical-line">
                  <Link to="/products/#tshirt">T-Shirt</Link>
                  <Link to="/products/#polo-tshirts">Polo T-Shirts</Link>
                  <Link to="/products/#hoodies">Hoodies</Link>
                  <Link to="/products/#brochures">Brochures</Link>
                  <Link to="/products/#mobile-covers">Mobile Covers</Link>
                  <Link to="/products/#caps">Caps</Link>
                  <Link to="/products/#boxes">Boxes</Link>
                  <Link to="/products/#corporate-gifts">Corporate Gifts</Link>
                  <Link to="/products/#mouse">Mouse</Link>
                  <Link to="/products/#pendrive">Pendrive</Link>
                  <Link to="/products/#headphones">Headphones</Link>
                </div>
              </div>

            </div>

          </div> */}

          <Link to="/product">Products</Link>
          <Link to="/#latest-work">Clients</Link>
          <Link to="/#about-us">About Us</Link>
          <Link to="/#contact-us">Contact Us</Link>
        </nav>

      </div>

    </header>
  )
}