import React, { ReactElement } from 'react'
import Photos from './components/Photo'
import Videos from './components/Video'
interface Props {
    
}


function index({}: Props): ReactElement {
    return (
      <div>
        <Photos />
        <Videos />
      </div>
    )
}

export default index
