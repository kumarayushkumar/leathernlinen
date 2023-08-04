import React from 'react'
import clientLogo from '../data/client';
function Slider() {
    return (
        <div className="courosel">
            <div className="slider">
                <div className="slide-track">
                    {clientLogo.map((clientKey) => (
                        <div className="slide">
                            <img src={clientKey.img} height="100" width="250" alt="" />
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Slider