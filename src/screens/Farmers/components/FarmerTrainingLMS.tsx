import React, { ReactElement } from 'react'
import Link from 'next/link'

interface Props {

}

function FarmerTrainingLMS({ }: Props): ReactElement {
    return (
        <section id="traininglms" className="pt-30 pb-60">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h3 style={{ fontFamily: 'Caveat, cursive', fontWeight: 'bolder', letterSpacing: 1.3, fontSize: '36px' }}>Join Now</h3>
                            <h1>
                                Farmer Training LMS
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">

                    <div className="col-lg-6">
                        <h2 className={"mb-20"}>
                            Farmer Training LMS
                        </h2>
                        <p>
                            Farmer Training LMS by Save Hasdeo is a dedicated training portal for rural farmers in India which provides customized, byte sized learning content which aims at empowering farmers and ultimately increase their income.
                        </p>
                        <ul className="list-unstyled list-check">
                            <li>
                                <i className="fa fa-check" aria-hidden="true" />
                                Demonstrative videos for different stages of plant growth in local languages.
                            </li>
                            <li>
                                <i className="fa fa-check" aria-hidden="true" />
                                Illustrated training booklet
                            </li>
                            <li>
                                <i className="fa fa-check" aria-hidden="true" />
                                Crop wise economical calculations
                            </li>
                            <li>
                                <i className="fa fa-check" aria-hidden="true" />
                                Certification of training
                            </li>
                            <li>
                                <i className="fa fa-check" aria-hidden="true" />
                                Calendar for different stages of growth and processes
                            </li>
                            <li>
                                <i className="fa fa-check" aria-hidden="true" />
                                Usage of soil and plant enhancers (e.g. Zeba, Copio, Macarena and others by UPL)
                            </li>
                        </ul>
                        <p>This training is currently tailored in Marathi for farmers in Maharashtra, but soon will be available in multiple languages for a plethora of fruit and crop plantations across India.</p>
                        <p>Only trained farmers can become prosperous and lead to a rural economic transformation.</p>
                    </div>

                    <div className="col-lg-6">
                        <div className="video-area style--two mb-50 mb-lg-0">
                            <img
                                src="assets/img/illustrations/farmer_training.svg"
                                data-rjs={2}
                                alt=""
                                data-rjs-processed="true"
                                width={540}
                                height={500}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 mt-20">
                            <div className="section-title text-center">
                                <a
                                    href="https://training.globalparli.org/"
                                    target="_blank"
                                    //data-toggle="modal"
                                    //data-target="#appointmentModalForm"
                                    className="btn"
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        width: "fit-content",
                                        padding: '0px 18px'
                                    }}
                                >
                                    <span>Click here to visit the training Website</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </section>
    )
}

export default FarmerTrainingLMS
