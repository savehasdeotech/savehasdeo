import React, { ReactElement } from 'react'
import GroundStories from './components/GroundStories'
import Instagram from './components/Instagram'
import Landing from './components/Landing'
import MediaKit from './components/MediaKit'
import News from './components/News'
import Youtube from './components/Youtube'

interface Props {
    
}

function index({}: Props): ReactElement {
    return (
        <div>
            {/* <Landing/> */}
            {/* <GroundStories/> */}
            <MediaKit/>
            <News/>
            {/* <Youtube/> */}
            {/* <Instagram/> */}
        </div>
    )
}

export default index
