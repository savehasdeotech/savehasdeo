import React, { ReactElement } from "react";

interface Props {}

function Gramin({}: Props): ReactElement {
  return (
    <section id="gramin" className="pt-60 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h3 style={{fontFamily:'Caveat, cursive',fontWeight:'bolder',letterSpacing:1.3,fontSize:'36px'}}>India’s 1st</h3>
              <h2>Social networking for farmers</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="video-area style--two mb-50 mb-lg-0">
              <img
                src="assets/img/farmersPage/Gramin.png"
                data-rjs={2}
                alt=""
                data-rjs-processed="true"
              />{" "}
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-left">
            <h1>
              Gramin <span>(Coming soon)</span>{" "}
            </h1>
            <br />
            <p>
              In the Indian agriculture ecosystem, the farmers and all
              agri-stakeholders have isolated conversations. Thus the real
              potential of agriculture has not been unleashed.
            </p>
            <p>
              Gramin, which is India’s 1st open and free platform brings
              inclusivity with the help of technology by strengthening the
              communication. It reduces the divide between farmers and various
              integral elements of agriculture like research, new-tech,
              advisory, input and output markets, processing etc. It organises
              and displays information in a personalised way relating to their
              crop’s stage.
            </p>
            <p>
              Gramin leverages the power of social networking to form a digital
              community with a win-win for all stakeholders especially farmers.
            </p>
            <p>
              With Gramin, farmers have access to more choices and opportunities
              for buying agri-inputs and selling their produce. Farmers also
              have access to abundant knowledge, training sessions and
              discussion forums for instant solutions or expert advice.
            </p>
            <p>
              The stakeholders can gain multiple insights into farmers and
              agriculture crop-wise, region-wise, demography-wise, etc to
              increase outreach and analyse customer pain points and needs to
              provide better support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gramin;
