import { Clothblob } from '../assets/images/About_Us/illustrations/Blobs'
import img from '../assets/images/About_Us/img1.png'

export default function WhyMerchenDise() {
  return (
    <div className="whymerchendise" id="whymerchendise">
      <div className="center">
        {/* <div className="background">
          <Clothblob fill='#cbc7c8' className='blob' dur="15s" />
          <Clothblob fill='#b6ea01' className='blob-inside' dur="14s" />
        </div> */}

        <div className="text">
          <div className="heading">Why merchandise <br /> and gifts
          </div>
          <div className="content">
            <p>
              Increase brand awareness <br />
              Create brand advocates <br />
              Generate leads <br />
              Increase sales <br />
            </p>

            <p>
              Here are some additional tips for using <br />
              merch effectively as a marketing tool: <br />
            </p>

            <p>
              Choose merch that is relevant to <br />
              your target audience <br />
              Make sure the merch is high-quality. <br />
              Promote your merch <br />
              Give away free merch <br />
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