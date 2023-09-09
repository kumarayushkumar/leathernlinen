import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAward,faPenNib,faClipboardUser } from "@fortawesome/free-solid-svg-icons"

export default function OurPromises() {
  return (
    <div className="ourpromise" id="our-promise">
      <div className="heading">Our Promises & Commitment</div>
      <div className="content">
        <div className="card">
          <div className="image">
            <FontAwesomeIcon icon={faAward} className="icon" color="#f7f795"/>
          </div>
          <div className="title">Only Quality</div>
          <div className="desc">
            <p>We've curated the best of what's out there.
              We've tested thousands of products and
              95% didn't make the cut. We want to
              make sure every product you order, you're
              proud to show off.</p>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <FontAwesomeIcon icon={faPenNib} className="icon" color="#9acd32" />
          </div>
          <div className="title">Streamlined Experience</div>
          <div className="desc">
            <p>We've automated the entire buying
              experience. Easily find what you're looking
              for, upload your design, mockup your
              products and checkout in a matter of
              seconds. It's that simple.</p>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <FontAwesomeIcon icon={faClipboardUser} color="#fa9beb" className="icon" />
          </div>
          <div className="title">Customer Obsessed</div>
          <div className="desc">
            <p>Our team is always here to help. If you
              don't see what you're looking for, let us
              know, and we will be able to source it for
              you. We will do whatever we can to make
              your experience stress free and fun.</p>
          </div>
        </div>
      </div>
    </div>
  )
}