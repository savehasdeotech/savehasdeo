import React, { ReactElement } from 'react'
import Awards from './components/Awards'
import MissionVision from './components/MissionVision'
import OtherProjects from './components/OtherProjects'
import Story from './components/Story'
import Team from './components/Team'

interface Props {
    
}

function AboutUs({}: Props): ReactElement {
    return (
        <>
            <MissionVision/>
            <Story/>
            <Team/>
            <Awards/>
            <OtherProjects/>
        </>
    )
}

export default AboutUs
