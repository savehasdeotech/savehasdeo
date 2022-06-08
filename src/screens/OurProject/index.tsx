import React, { ReactElement } from 'react'
import MonthlyReport from '../AboutUs/components/MonthlyReport'
import Institutionalization from './components/Institutionalization'
import Reports from './components/MonthlyReports'
import ProofOfConcept from './components/ProofOfConcept'
import Timelines from './components/Timelines'

interface Props {
    
}

function index({}: Props): ReactElement {
    return (
        <div>
            <Timelines/>
            <Reports/>
            <ProofOfConcept/>
            {/* <Replication/> */}
            <Institutionalization/>
            
        </div>
    )
}

export default index
