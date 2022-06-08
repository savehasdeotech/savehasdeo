import React, { ReactElement } from 'react'
import Careers from './components/Careers'
import ContactInfo from './components/ContactInfo'
import SocialMedia from './components/SocialMedia'
import Volunteer from './components/Volunteer'

interface Props {
    
}

function index({}: Props): ReactElement {
    return (
        <div>
            <Volunteer/>
            <Careers/>
            <SocialMedia/>
            <ContactInfo/>
        </div>
    )
}

export default index;
