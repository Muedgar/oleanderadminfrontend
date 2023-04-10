import React from 'react'

import './ImageViewer.css'

import del from './delete.svg'

function ImageViewer(props) {
  return (
    <div className='sofa_light_dashboard_furniturestore_components_imageViewer'>
        <div>
            <img src={props.img} alt="name" />
            <p>{props.title}</p>
        </div>
        <img onClick={props.clickedHandler} src={del} alt="delete" />
    </div>
  )
}

export default ImageViewer