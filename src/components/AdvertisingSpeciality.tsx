import { Headphoneblob } from '../assets/images/About_Us/illustrations/Blobs'
import img from '../assets/images/About_Us/img3.png'

function AdvertisingSpeciality() {
  return (
    <div className="advertisingspecialty" id="advertisingspecialty">
      <div className="center">
        <div className="background">
          <Headphoneblob fill='#777777' className='blob' dur="15s" />
          <Headphoneblob fill='#cbc7c8' stroke='#b6ea01' strokeWidth='0.2rem' className='blob-inside-2' dur="14s" />
        </div>

        <div className="text">
          <div className="heading">THE ADVERTISING SPECIALTY <br />
            INSTITUTE DID A STUDY.
          </div>

          <div className="content">
            <p>
              The study focussed in customer satisfaction
              and looked into exactly how promo merch
              made an impact.
            </p>
            <p>
              The result showed that:
            </p>

            <p>
              more than 83% of people say that they like
              receiving promotional items 83% of people
              said that the promo merch gave them a
              positive impression
            </p>

            <p>
              81% of people will use a piece of merch for
              a year or longer
            </p>

            <p>
              80% of people state that they have at least
              one promotional item at home or in the office
            </p>

            <p>
              53% of people said that they use one or more
              promotional items frequently, at least once in
              seven days
            </p>
          </div>
        </div >

        <div className="image">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default AdvertisingSpeciality