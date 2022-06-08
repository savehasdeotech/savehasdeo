import React, { ReactElement } from "react";
import MissionVisionData from './../../../data/MissionVision.json'

interface Props {}
function MissionVision({}: Props): ReactElement {
  const [showMission,setShowMission] = React.useState(false)
  
  return (

    <section id="vision" className="pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h3 style={{fontFamily:'Caveat, cursive',fontWeight:'bolder',letterSpacing:1.3,fontSize:'36px'}}>About Save Hasdeo</h3>
              <h2>
                {MissionVisionData.aboutTitle}
              </h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="video-area style--two mb-50 mb-lg-0">
              <img
                src="assets/img/about/community.jpg"
                data-rjs={2}
                alt=""
                data-rjs-processed="true"
                width={540}
                height={500}
              />
              {" "}
              
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-nav-tab">
              <ul className="nav nav-tabs" role="tablist">
                
                <li className="nav-items">
                  <a
                    className={`nav-link ${showMission ? '' : 'active'}`}
                    data-toggle="tab"
                    role="tab"
                    aria-selected="false"
                    onClick={()=>setShowMission(false)}
                    style={{fontFamily:'Caveat, cursive',fontWeight:'bolder',letterSpacing:1.3,fontSize:'22px'}}
                  >
                    Our Vision
                  </a>
                </li>
                <li className="nav-items">
                  <a
                    className={`nav-link ${showMission ? 'active' : ''}`}
                    data-toggle="tab"
                    role="tab"
                    aria-selected="true"
                    onClick={()=>setShowMission(true)}
                    style={{fontFamily:'Caveat, cursive',fontWeight:'bolder',letterSpacing:1.3,fontSize:'22px'}}
                  >
                    Our Mission
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                {showMission ? <Mission/> :  <Vision/>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;

function Mission({}: Props): ReactElement {
  return (
    <div
        className="tab-pane fade show active"
        id="mission"
        role="tabpanel"
      >
        <ul className="list-unstyled list-check">
          {
            MissionVisionData.mission.map((mission)=>{
              return(
              <li>
                <i className="fa fa-check" aria-hidden="true" /> 
                {mission}
              </li>
              )
            })
          }
        </ul>
      </div>
  )
}

function Vision({}: Props): ReactElement {
  return (
    <div className="tab-pane fade show active" id="vision" role="tabpanel">
      {/* <p>
        {MissionVisionData.visionTitle}
      </p> */}
      <ul className="list-unstyled list-check">
        {
            MissionVisionData.vision.map((vision)=>{
              return(
              <li>
                <i className="fa fa-check" aria-hidden="true" /> 
                {vision}
              </li>
              )
            })
          }
        
      </ul>
    </div>
  )
}

