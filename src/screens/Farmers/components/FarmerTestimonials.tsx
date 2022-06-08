import React, { ReactElement } from 'react'
import styles from "./FarmerTestimonials.module.scss";
import FarmerTestimonialsData from './../../../data/FarmerTestimonialsData.json'
import ModalVideo from "react-modal-video";

interface Props {
    
}

function FarmerTestimonials({}: Props): ReactElement {
  const [isOpen, setOpen] = React.useState(false);

  const [videoID,setVideoID] = React.useState('')
    return (
        <section id="testimonials" >
          {/* <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={videoID}
          onClose={() => setOpen(false)}
        /> */}
        <div className="container">
          <div className="row">
            <div className="col-12 pt-100">
              <div className="section-title text-center">
                {/* <h3>Training</h3> */}
                <h2>
                  Farmer Testimonials
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            
            {FarmerTestimonialsData.map((video)=>{
              return(
              <div key={video.id} className="col-lg-4 mb-70">
                <a onClick={()=>{setVideoID(video.videoID),setOpen(true)}} target="_blank" className={`video-area style--two mb-50 mb-lg-0 ${styles.videobox}`} style={{backgroundImage:`url(${video.videoThumbnail})`,height:'220px'}}>
                <div className={styles.overlay}/>
                  <img src={'/assets/img/icons/video-play.svg'} alt={'farmer testimonials'} className={styles.playIcon} />
                  <h4 style={{fontFamily:'Caveat, cursive',fontWeight:'bolder',letterSpacing:1.3,fontSize:'26px'}}>{video.farmerName} </h4>
                </a>
                <div className={'mt-20 text-center'}>
                    <p>"{video.message}"</p>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </section>
    )
}

export default FarmerTestimonials
