import React, { ReactElement } from 'react'
import styles from './Training.module.scss'
interface Props {
    
}

function Training({}: Props): ReactElement {
  const TrainingVideos = [
    {
      id:1,
      title:"Save Hasdeo's Sitaphal Plantation Webinar by Dr. Navnath Kaspate",
      youtubeURL:"https://www.youtube.com/watch?v=1WfXYsZe4Ao&feature=youtu.be",
      thumbnailImage:"/assets/img/farms/sitafal.jpg"
    },
    {
      id:2,
      title:"Save Hasdeo's Mango Plantation Webinar by Dr. Mohan Patil",
      youtubeURL:"https://www.youtube.com/watch?v=bAIRlb8bBmg&feature=youtu.be",
      thumbnailImage:"/assets/img/farms/mango.jpg"
    }
  ]
    return (
        <section id="training" className="pt-0 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h3 style={{fontFamily:'Caveat, cursive',fontWeight:'bolder',letterSpacing:1.3,fontSize:'36px'}}>Training</h3>
              <h2>
                Learn from the experts
              </h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          
          {TrainingVideos.map((video)=>{
            return(
            <div key={video.id} className="col-lg-4">
              <a href={video.youtubeURL} target="_blank" className={`video-area style--two mb-50 mb-lg-0 ${styles.videobox}`} style={{backgroundImage:`url(${video.thumbnailImage})`,height:'220px'}}>
              <div className={styles.overlay}/>

                  <img src={'/assets/img/icons/video-play.svg'} alt={'farmer training'} className={styles.playIcon} />
                <h4>{video.title} </h4>
              </a>
            </div>
            )
          })}
        </div>
      </div>
    </section>
    )
}

export default Training
