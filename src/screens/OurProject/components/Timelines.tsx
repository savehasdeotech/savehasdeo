import React, { ReactElement } from 'react'

interface Props {
    
}

function Timelines({}: Props): ReactElement {
    return (
        <section id="timeline" className="pt-120 section-pattern bg-img" style={{backgroundImage: 'url("assets/img/section-pattern/feature-pattern.png")'}}>
        <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="section-title text-center mb-0">
                    <h3>Our Growth</h3>
                    <h2>Timeline</h2>
                </div>
            </div>
        </div>
            <div className="row justify-content-center" style={{alignItems:'flex-end'}}>
           
            <div className="col-lg-4 col-md-6">
                <div className="text-center">
                <div className="image"> 
                    <img src="assets/img/illustrations/seeds.svg" /> </div>
                <h2 className="mt-20">2016 - 2019</h2>
                <div className="content text-center mt-20">
                    <h3>Proof of Concept</h3>
                    <br/>
                    <p className="text-left">Create a “proof of Concept” in one of the most challenging areas of India of an appropriate size.</p>
                </div>
                </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
                <div className="text-center">
                <div className="image"> 
                <img src="assets/img/illustrations/plant.svg" /> </div>
                <h2 className="mt-20">2020 - 2025</h2>

                <div className="content text-center  mt-20">
                    <h3>Replication & Scaling Up</h3>
                    <br/>
                    <p className="text-left">Replicate and scale up similar prototypes across the country in different conditions with varied designs and processes.</p>
                </div>
                </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
                <div className="text-center">
                <div className="image"> 
                <img src="assets/img/illustrations/tree.svg" /> </div>
                <h2 className="mt-20">2026 - 2030</h2>

                <div className="content text-center mt-20">
                    <h3>Institutionalising</h3>
                    <br/>
                    <p className="text-left">Institutionalize the prototypes, work with the state and central Governments on policies that can multiply farmer incomes manifold.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
}

export default Timelines
