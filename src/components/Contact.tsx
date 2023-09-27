import hero from '../assets/images/Contact_us/contact us page.jpg'
export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="hero">
        <img src={hero} alt="" />
        <div className="text">
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="fluid-container">
        <div className="address">
          <div className="heading">
            <h3>Contact us</h3>
            <h3>MERCH N GIFT HQ</h3>
          </div>
          <div className="desc">
            <p>Level 5/1-3 Fitzwilliam St, Parramatta NSW 2150</p>
            <p>P: +61415816522</p>
            <p>E: naseem.khan10@gmail.com</p>
            {/* <Socials/> */}
          </div>
        </div>
        <form action="" className="form">
          <div className="heading">
            <h3>Leave us your details  and we'll be in touch</h3>
          </div>
          <div className="fname">
            <label htmlFor="fname">First Name</label>
            <input type="text" id='fname' />
          </div>
          <div className="lname">
            <label htmlFor="lname">Last Name</label>
            <input type="text" id='lname' />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="text" id='email' />
          </div>
          <div className="company-name">
            <label htmlFor="company-name">Company Name</label>
            <input type="text" id='company-name' />
          </div>
          <div className="message">
            <label htmlFor="message">Your Message</label>
            <input type="text" id='message' />
          </div>
          <div className="review">
            <label htmlFor="review">How did you hear about us?</label>
            <select id="review">
              <option value="0"> </option>
              <option value="1">X </option>
            </select>
          </div>

          <div className="sector">
            <label htmlFor="sector">Industry sector</label>
            <select id="sector">
              <option value="0"> </option>
              <option value="1">X </option>
            </select>
          </div>

          <div className="future-ref">
            <label htmlFor="future-ref">Please let us know if you wish to recive future marketing communication</label>
            <select id="future-ref">
              <option value="0"> </option>
              <option value="1">X </option>
            </select>
          </div>

          <button type="submit" className='submit'>Send</button>
        </form>
      </div> 
    </div>
  )
}