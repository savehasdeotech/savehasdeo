import React, { ReactElement } from 'react'
import OurFarmersList from './components/OurFarmersList'

interface Props {
    
}

function index({}: Props): ReactElement {
    return (
        <div className="mt-80">
            <OurFarmersList/>
        </div>
    )
}

export default index
