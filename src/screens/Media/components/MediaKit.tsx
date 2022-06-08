import React, { ReactElement } from "react";
import MediaKitData from './../../../data/MediaKitData.json'
interface Props {}

function MediaKit({}: Props): ReactElement {
  return (
    <section className="pt-120 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h3 style={{fontFamily:'Caveat, cursive',fontWeight:'bolder',letterSpacing:1.3,fontSize:'36px'}}>Branding Guidelines</h3>
              <h2>Media Kit</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          
          {MediaKitData.map((file)=>{
              return(
                <div key={file.id} className="col-lg-3 col-sm-6">
                    <div className="single-service text-center">
                    <div className="icon">
                        <img
                        src={file.type === 'pdf' ?  "assets/img/icons/pdficon.svg" : file.type === 'doc' ?  "assets/img/icons/docIcon.webp" :  "assets/img/icons/imgIcon.jpg" }
                        data-rjs={2}
                        alt=""
                        data-rjs-processed="true"
                        width={85}
                        height={75}
                        />
                    </div>
                    <a href={file.fileURL} target="_blank" className="content">
                        <h4>{file.fileName}</h4>
                    </a>
                    </div>
                </div>
              )
          })}
          
         
         </div>
      </div>
    </section>
  );
}

export default MediaKit;
