import React, { ReactElement } from 'react'

interface Props {
    
}

function GroundStories({}: Props): ReactElement {
    return (
        <section className="pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              {/* <h3>News</h3>  */}
              <h2>Ground Stories</h2>
            </div>
          </div>
        </div>
        <div className="row project-items grid">
          <div
            className="col-lg-6 grid-item sales business"
          >
            <div className="single-project-item">
              <div className="image">
                <img
                  src="assets/img/project/project-1@2x.png"
                  data-rjs={2}
                  alt=""
                  data-rjs-processed="true"
                  width={540}
                  height={300}
                />{" "}
              </div>
              <div className="project-body">
                <h3>
                  <a href="#">
                    Business consultant finds more ways to bring business to
                    light
                  </a>
                </h3>{" "}
                <p className="project-meta">
                  Client:<span>Alto Palermo S.A.</span>
                </p>
                <p>
                  Imprudence attachment him his for sympathize. Large above be
                  to means. Dashwood do provided stronger is. But discretion
                  frequently.
                </p>
                <a href="#" className="btn-inline">
                  Read More
                </a>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </section>
    )
}

export default GroundStories
