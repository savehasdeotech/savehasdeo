import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import NavbarComponent from '../Navigation/BootstrapNavbar'

interface Props {
    props:any
}

function Layout(props: any) {
    return (
        <div>
            <Header/>
            <body>
                <NavbarComponent/>
                {props.children}
                <Footer/>
            </body>
        </div>
    )
}

export default (Layout)