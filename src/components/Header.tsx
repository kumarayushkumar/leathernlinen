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

          <div className="dropdown">
            <Link to="/products">Products</Link>

            <div className="dropdown-content">
              <div className="row px-2">
                <div className="col-6 p-2">
                  <Link to="/products/#sweatshirts">Sweatshirts</Link>
                  <Link to="/products/#shirts">Shirts</Link>
                  <Link to="/products/#bottles">Bottles</Link>
                  <Link to="/products/#mugs">Mugs</Link>
                  <Link to="/products/#tumbler">Tumbler</Link>
                  <Link to="/products/#sipper">Sipper</Link>
                  <Link to="/products/#diary">Diary</Link>
                  <Link to="/products/#tote-bags">Tote Bags</Link>
                  <Link to="/products/#backpacks">Backpacks</Link>
                  <Link to="/products/#keyrings">Keyrings</Link>
                  <Link to="/products/#pens">Pens</Link>
                  <Link to="/products/#metal-pens">Metal Pens</Link>
                  <Link to="/products/#umbrella">Umbrella</Link>
                  <Link to="/products/#beanie">Beanie</Link>
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

          </div>

          {/* <Link className="dropdown" to="/#product">Product</Link>

          <div className="dropdown-content">
            <p>Hello World!</p>
          </div> */}

          <Link to="/#about-us">About Us</Link>
          <Link to="/#latest-work">Latest Work</Link>
          <Link to="/#contact-us">Contact Us</Link>
        </nav>

      </div>

    </header>
  )
}