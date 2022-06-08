import React, { ReactElement } from 'react'
import AchievementsData from './../../../data/Achievements.json';
import styles from './Fruits.module.scss'

interface Props {
    
}

function Achievements2020({}: Props): ReactElement {
    return (
        <section id="2020" className="pt-120 pb-120 section-pattern bg-img" style={{backgroundImage: 'url("assets/img/section-pattern/price-pattern.png")'}}>
            <div className="container">
                <div className="row">
                <div className="col-12">
                    <div className="section-title text-center">
                    <h3>In Maharashtra & Madhya Pradesh</h3>
                    <h2>19,06,474 Fruit trees planted in 2020</h2>
                    </div>
                </div>
                </div>
                <div  className="row justify-content-center">
                   {AchievementsData.Achievements2020.map((achievement)=>{
                       return(
                            <div key={achievement.id} className="col-lg-4 col-md-6">
                                <div className="single-feature text-center p-0">
                                    <div className={styles.achievementImageContainer}> 
                                        <img src={achievement.imagePath} data-rjs={2} alt="" data-rjs-processed="true" className={styles.achievementImage}/>
                                        <div className={styles.achievementImageOverlay}  /> 
                                        <h1 className={styles.farmerName} style={{display:"flex",flexDirection:'column'}}> <span style={{fontSize:"48px",marginBottom:'12px',color:'white'}}>{achievement.count}</span> {achievement.title}</h1>
                                    </div>
                                </div>
                            </div>
                       )
                   })}
                </div>
            </div>
            </section>
    )
}

export default Achievements2020
