import React, { ReactElement } from "react";
import MediaData from './../../../data/MediaData.json'
interface Props {}

function News({}: Props): ReactElement {
  return (
    <section className="pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h3 style={{fontFamily:'Caveat, cursive',fontWeight:'bolder',letterSpacing:1.3,fontSize:'36px'}}>News</h3> 
              <h2>Media</h2>
            </div>
          </div>
        </div>
        <div className="row project-items grid">
         
         {MediaData.map((item)=>{
             return(
                <div className="col-lg-4 grid-item">
                    <div className="single-project-item">
                    <div className="image">
                        <img
                        src={item.imagePath}
                        data-rjs={2}
                        alt=""
                        data-rjs-processed="true"
                        width={540}
                        height={300}
                        />
                    </div>

                    <div className="project-body">
                        <h3 style={{fontSize:"20px"}}>
                        <a target="_blank" href={item.URL}>
                        {item.headline}
                        </a>
                        </h3>{" "}
                        <p className="project-meta">
                            By:<span>{item.source} </span>
                        </p>
                        <a href={item.URL} target="_blank" className="btn-inline">
                            Read More
                        </a>
                    </div>
                    </div>
                </div>
          
             )
         })}
          
        </div>

      </div>
    </section>
  );
}

export default News;
