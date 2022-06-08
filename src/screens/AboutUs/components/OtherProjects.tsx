import React, { ReactElement } from 'react'
import OtherProjectsData from './../../../data/OtherProjects.json'
interface Props {
    
}

function OtherProjects({}: Props): ReactElement {

    return (
        <div>
            <section id="other-projects" className="pt-120 pb-90 section-pattern bg-img" style={{backgroundImage: 'url("assets/img/section-pattern/case-study-pattern.png")'}}>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="section-title text-center">
                      {/* <h3>Case Studies</h3> */}
                      <h2>Other Projects</h2>
                      <p>Apart from Save Hasdeo, Our parent organization, 'Global Vikas Trust' has several other projects in the benefit of Humanity.</p>
                    </div>
                  </div>
                </div>
                <div className="row project-items grid">
                  
                  {OtherProjectsData.map((project)=>{
                    return(
                    <div key={project.id} className="col-lg-4 grid-item" >
                      <div className="single-project-item">
                        <div className="image" style={{height:'180px'}}> 
                          <img src={project.url} data-rjs={2} alt="" style={{height:'180px'}}/> 
                        </div>
                        <div className="project-body">
                          <h3><a href="#">{project.projectName}</a></h3>
                          <p>{project.description}</p>
                        </div>
                      </div>
                    </div>
                    )
                  })}
                </div>
              </div>
            </section>


        </div>
    )
}

export default OtherProjects
