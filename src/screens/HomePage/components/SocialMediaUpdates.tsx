import React, { ReactElement } from 'react'
import styles from './Partners.module.scss'
interface Props {
    
}

function SocialMediaUpdates({}: Props): ReactElement {
    return (
        <>
        <div className="row">
                <div className="col-12">
                    <div className="section-title text-center">
                        <h3>Latest updates</h3>
                        <h2>Social Media</h2>
                    </div>
                </div>
            </div>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginBottom:'48px'}}>
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fglobalparli&tabs=timeline&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" style={{border:'none',overflow:'hidden',width:'360px',height:'500px'}} scrolling="no" frameBorder={0} allowTransparency allow="encrypted-media"></iframe>
        </div>
        </>
    )
}

export default SocialMediaUpdates
