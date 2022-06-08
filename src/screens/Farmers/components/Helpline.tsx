import React, { ReactElement } from 'react'

interface Props {
    
}

function Helpline({}: Props): ReactElement {
    return (
        <section id="helpline" className="pt-60 pb-60">
            <div className="container">
                <div className="row">
                <div className="col-12">
                    <div className="section-title text-center">
                    <h3 style={{fontFamily:'Caveat, cursive',fontWeight:'bolder',letterSpacing:1.3,fontSize:'36px'}}>Always available for Farmers</h3>
                    <h2>
                        24/7 Farmer Helpline
                    </h2>
                    </div>
                </div>
                </div>
                <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="video-area style--two mb-50 mb-lg-0">
                    <img
                        src="assets/img/illustrations/helpline.svg"
                        data-rjs={2}
                        alt=""
                        data-rjs-processed="true"
                        width={540}
                        height={500}
                    />{" "}
                    
                    </div>
                </div>
                <div className="col-lg-6 text-center">
                    <h1>8591314651</h1>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Helpline
