import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-center mt-4">
          <div className="col-12">
            <h3 className="fw-bold display-5 text-primary">merchNgifts</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            
          </div>

          <div className="col-md-4">
            <ul>
              
            </ul>
          </div>

          <div className="col-md-4">

          </div>

          <div className="col-md-4">
            <div className="d-flex mt-4 f-social">
              <a className="" href="https://api.whatsapp.com/send/?phone=919557914389&text&app_absent=0" target="_blank" rel="noopener noreferrrer">
                <FontAwesomeIcon className="icon-whatsapp" icon={faFacebook} />
              </a>
              <a className="" href="https://api.whatsapp.com/send/?phone=919557914389&text&app_absent=0" target="_blank" rel="noopener noreferrrer">
                <FontAwesomeIcon className="icon-whatsapp" icon={faTwitter} />
              </a>
              <a className="" href="https://api.whatsapp.com/send/?phone=919557914389&text&app_absent=0" target="_blank" rel="noopener noreferrrer">
                <FontAwesomeIcon className="icon-whatsapp" icon={faInstagram} />
              </a>
            </div>
            <div className="d-flex mt-4 f-social">
              <Link to="#contact-us" className='downloadbtn'>Download Brochure</Link>
            </div>
          </div>
        </div>

        <div className="row text-center text-black pt-3 pb-3">
          <div className="col-12 mt-1 mb-2 mt-sm-2 mb-sm-3 ">
            <div className="mt-2">
              <a className="growigh" href="https://www.growigh.com" target="_blank" rel="noopener noreferrrer">Made with ❤️ by <span className="growigh__name">Gro<span className="growigh__name__w">w</span>igh</span></a>
            </div>
          </div>
        </div>

      </div>

      <a className="btt btt__whatsapp shadow rounded-circle" href="https://api.whatsapp.com/send/?phone=919557914389&text&app_absent=0" target="_blank" rel="noopener noreferrrer">
        <FontAwesomeIcon className="icon-whatsapp" icon={faWhatsapp} />
      </a>

      <a className="btt btt__chevron-up shadow rounded-circle" href="#header">
        <FontAwesomeIcon className="icon-chevron-up" icon={faChevronUp} />
      </a>
    </footer>
  )
}