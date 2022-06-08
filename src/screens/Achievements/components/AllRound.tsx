import React, { ReactElement } from 'react'
import AchievementsData from './../../../data/Achievements.json';
import styles from '../../HomePage/components/FarmerAchievements.module.scss'

interface Props {
    
}

function AllRound({}: Props): ReactElement {
    return (
        <section id="all-round" className="pt-60 pb-60 section-pattern bg-img" style={{backgroundImage: 'url("assets/img/section-pattern/price-pattern.png")'}}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center">
                        <h3>2017</h3>
                        <h2>All Round Development in 15 Villages</h2>
                        <p>Villages are like multiple organ failure. Aap heart pe kaam karoge, liver bund hojayega, liver pe kaam karoge, lungs bund hojayega.</p>
                        </div>
                    </div>
                </div>

                <div  className="row justify-content-center">

                    {AchievementsData.AllRoundDevelopment.map((item)=>{
                        return(
                        <div key={item.id} className="col-lg-6 col-md-6">
                            <div className="single-feature text-center p-0">
                            <div className={styles.achievementImageContainer} style={{height:'240px'}}> 
                                <img src={item.imagePath} data-rjs={2} alt="" data-rjs-processed="true" className={styles.achievementImage} style={{height:'240px'}}/>
                                <div className={styles.achievementImageOverlay}  style={{height:'240px'}} /> 
                                <h1 className={styles.farmerName} style={{display:"flex",flexDirection:'column'}}> <span style={{fontSize:"48px",marginBottom:'12px',color:'white'}}>{item.score}</span> {item.name}</h1>
                                {/* <h1 className={styles.farmerName}>{item.name}</h1> */}
                            </div>
                                <div className={`content ${styles.contentContainer}`}>
                                    <h3 style={{lineHeight:'1.5'}}>{item.description}</h3>
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

export default AllRound
