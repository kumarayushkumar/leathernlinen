import { Tumblerblob } from '../assets/images/About_Us/illustrations/Blobs'
import img from '../assets/images/About_Us/img2.png'

export default function DoYouKnowThat() {
  return (
    <div className="doyouknowthat" id="doyouknowthat">
      <div className="center">
        <div className="text">
          <div className="content">
            <p>
              "A staggering 88% of individuals affirm that <br />
              they have a more lasting recall of brands <br />
              when they receive branded merchandise." <br />
            </p>

            <p>
              "Employing promotional merchandise can <br />
              boost your potential for attracting new <br />
              customers by a remarkable 83%."
              <br />
            </p>

            <p>
              "A substantial 70% of enterprises hold the <br />
              belief that promotional merchandise ra nks <br />
              among the most potent strategies to achieve
              <br />
              their marketing objectives."
              <br />
            </p>
          </div>
        </div>
        <div className="heading">
          "Do you know that? <br /> The Evidence lies in the figures."
        </div>

        <div className="image">
          <div className="background">
            <Tumblerblob fill="#b6ea01" className="blob" dur="30s" />
            <Tumblerblob fill="#cbc7c8" className="blob-inside" dur="30s" />
          </div>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  )
}
