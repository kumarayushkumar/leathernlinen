import { Clothblob } from '../assets/images/About_Us/illustrations/Blobs'
import img from '../assets/images/About_Us/img1.png'

export default function WhyMerchenDise() {
  return (
    <div className="whymerchendise" id="whymerchendise">
      <div className="center">


        <div className="text">
          <div className="heading">Why merchandise <br /> and gifts
          </div>
          <div className="content">
            <p>
              Increase brand awareness 
              Create brand advocates 
              Generate leads 
              Increase sales 
            </p>

            <p>
              Here are some additional tips for using 
              merch effectively as a marketing tool: 
            </p>

            <p>
              Choose merch that is relevant to 
              your target audience 
              Make sure the merch is high-quality. 
              Promote your merch 
              Give away free merch 
            </p>
          </div>
        </div>

        <div className="image">
          <div className="background">
            <Clothblob fill='#cbc7c8' className='blob' dur="15s" />
            <Clothblob fill='#b6ea01' className='blob-inside' dur="14s" />
          </div>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  )
}