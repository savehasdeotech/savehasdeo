import React, { ReactElement } from 'react'
import BhoomiSanvardhan from './components/BhoomiSanvardhan'
import FarmerTestimonials from './components/FarmerTestimonials'
import Gramin from './components/Gramin'
import Helpline from './components/Helpline'
import Production from './components/Production'
import Saplings from './components/Saplings'
import Satellite from './components/Satellite'
import Training from './components/Training'
import FarmerTrainingLMS from './components/FarmerTrainingLMS'
import Strawberry from './components/Strawberry'

interface Props {
    
}

function index({}: Props): ReactElement {
    return (
        <div>
            {/* <Saplings/> */}
            <FarmerTestimonials/>
            <Training/>
            {/* <Production/> */}
            <FarmerTrainingLMS/>
            <Helpline/>
            <Satellite/>
            <Gramin/>
            <BhoomiSanvardhan/>
            <Strawberry/>
        </div>
    )
}

export default index
