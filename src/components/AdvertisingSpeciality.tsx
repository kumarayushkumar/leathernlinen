
import {Headphoneblob } from '../assets/images/About_Us/illustrations/Blobs'
import img from '../assets/images/About_Us/img3.png';
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
                            The study focussed in customer satisfaction <br />
                            and looked into exactly how promo merch <br />
                            made an impact.<br />
                        </p>
                        <p>
                            The result showed that:
                        </p>

                        <p>
                            more than 83% of people say that they like <br />
                            receiving promotional items 83% of people <br />
                            said that the promo merch gave them a <br />
                            positive impression <br />
                        </p>

                        <p>
                            81% of people will use a piece of merch for <br />
                            a year or longer <br />
                        </p>

                        <p>
                            80% of people state that they have at least <br />
                            one promotional item at home or in the office <br />
                        </p>

                        <p>
                            53% of people said that they use one or more <br/>
                            promotional items frequently, at least once in <br />
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