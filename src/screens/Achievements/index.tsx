import React, { ReactElement } from 'react'
import Achievements2019 from './components/2019'
import Achievements2020 from './components/2020'
import AllRound from './components/AllRound'
import ConstructionStats from './components/ConstructionStats'
import FarmerStats from './components/FarmerStats'
import Landing from './components/Landing'
import Water from './components/Water'

interface Props {
    
}

function index({}: Props): ReactElement {
    return (
        <div>
            {/* <Landing/> */}
            <Achievements2020/>
            {/* <FarmerStats/> */}
            <Achievements2019/>
            {/* <ConstructionStats/> */}
            <AllRound/>
            <Water/>
        </div>
    )
}

export default index
