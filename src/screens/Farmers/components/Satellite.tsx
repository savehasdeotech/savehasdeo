import React, { ReactElement } from 'react'

interface Props {
    
}

function Satellite({}: Props): ReactElement {
    return (
        <section id="satellite" className="pt-60 pb-60">
            <div className="container">
                <div className="row">
                <div className="col-12">
                    <div className="section-title text-center">
                    <h3 style={{fontFamily:'Caveat, cursive',fontWeight:'bolder',letterSpacing:1.3,fontSize:'36px'}}>Coming Soon</h3>
                    <h1>
                        Uni-Global Satellite
                    </h1>
                    </div>
                </div>
                </div>
                <div className="row align-items-center">
                    
                    <div className="col-lg-6">
                        <h2 className={"mb-20"}> Uni-Global Satellite</h2>
                        <p>
                        We are building a portal that uses satellite data as well as ground data to monitor each and every farm and give monitoring reports every five days. Furthermore, it will also trigger alarms whenever a tree/ plant is in distress so that attention can be given to it.
                        </p>
                        <ul className="list-unstyled list-check">
                            <li>
                                <i className="fa fa-check" aria-hidden="true" /> 
                                CROP MONITORING - Uni-Global Satellite provides real-time crop vegetation monitoring via IoT sensors and satellite imagery.
                            </li>
                            <li>
                                <i className="fa fa-check" aria-hidden="true" /> 
                                SMART INTELS - IoT sensors are deployed to provide crop and water requirements at a regular interval.
                            </li>
                            <li>
                                <i className="fa fa-check" aria-hidden="true" /> 
                                FARM ADVISORY - Uni-Global Satellite provides crop-based advisory for better yield by mapping vegetations.
                            </li>
                        </ul>
                    
                        
                    </div>

                    <div className="col-lg-6">
                        <div className="video-area style--two mb-50 mb-lg-0">
                        <img
                            src="assets/img/illustrations/SatelliteMonitoring.svg"
                            data-rjs={2}
                            alt=""
                            data-rjs-processed="true"
                            width={540}
                            height={500}
                        />                    
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Satellite
