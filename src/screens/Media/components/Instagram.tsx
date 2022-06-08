import React, { ReactElement } from 'react'

interface Props {
    
}

function Instagram({}: Props): ReactElement {
    return (
        <>
        <section className="pt-120 pb-120">
            <div className="container">
                <div className="row">
                <div className="col-12">
                    <div className="section-title text-center">
                    <h3>Photo Gallery</h3> 
                    <h2>Instagram</h2>
                    </div>
                </div>
                </div>
            </div>
            <div id="instafeed" className="container"></div>
        </section>
        <script src="https://cdn.boomcdn.com/libs/instafeed-js/1.4.1/instafeed.min.js"></script>
        <script src='https://gp-ig-token.herokuapp.com/token.js'></script>
        <script src="/assets/js/instafeed.js"></script>
    </>
    )
}

export default Instagram
