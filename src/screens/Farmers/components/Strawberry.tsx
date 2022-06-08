import React, { ReactElement } from "react";

interface Props {}

function Strawberry({}: Props): ReactElement {
  return (
    <section id="strawberry" className="pt-60 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h3 style={{fontFamily:'Caveat, cursive',fontWeight:'bolder',letterSpacing:1.3,fontSize:'36px'}}>Innovation</h3>
              <h2>Strawberry Plantation in Marathwada</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">            
          <p>There is a concept that strawberry farming is practised in cold weathers and high altitudes. But, we at Save Hasdeo in consultation with experts have encouraged strawberry farming with best practices in the hot plains of Marathwada, successfully.<br />Our farmer Sugandh Rupnar followed the best practices provided by the technical team on ground and the fruits have now begun. The best part is that the quality is excellent and it is getting a good market too.</p>
            <p>At our public meeting of farmers on 27th Feb, farmers from all districts of Marathwada had come to witness the farm and learn more about it.</p>
             </div>
             <div className="col-lg-6">
                        <div className="video-area style--two mb-50 mb-lg-0">
                            <img
                                src="assets/img/farms/strawberry.png"
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
  );
}

export default Strawberry;
