import React, { ReactElement } from 'react'

interface Props {
    
}

function Landing({}: Props): ReactElement {
    return (
        <section className="pt-120 pb-90 section-pattern bg-img" style={{backgroundImage: 'url("assets/img/section-pattern/feature-pattern.png")'}}>
        <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="section-title text-center">
                    <h3>Steps</h3>
                    <h2>Media</h2>
                    <p>Delivered dejection necessary objection do mr prevailed. Mr feeling do chiefly cordial in do. Water timed folly right aware if oh truth. Imprudence attachment him his for sympathize.</p>
                </div>
            </div>
        </div>
            <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
                <div className="single-feature text-center">
                <div className="image"> <img src="assets/img/feature/feature-1@2x.png" data-rjs={2} alt="" data-rjs-processed="true" width={166} height={135} /> </div>
                <div className="content">
                    <h3>Best Consulting</h3>
                    <p>Concerns greatest margaret him absolute entrance nay.</p>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="single-feature text-center">
                <div className="image"> <img src="assets/img/feature/feature-2@2x.png" data-rjs={2} alt="" data-rjs-processed="true" width={166} height={135} /> </div>
                <div className="content">
                    <h3>Market Research</h3>
                    <p>Concerns greatest margaret him absolute entrance nay.</p>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="single-feature text-center">
                <div className="image"> <img src="assets/img/feature/feature-3@2x.png" data-rjs={2} alt="" data-rjs-processed="true" width={166} height={135} /> </div>
                <div className="content">
                    <h3>Market Growth</h3>
                    <p>Concerns greatest margaret him absolute entrance nay.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
}

export default Landing
