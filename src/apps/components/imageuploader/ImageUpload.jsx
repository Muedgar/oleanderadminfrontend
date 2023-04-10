import React from 'react'

import './ImageUpload.css'

import upload from './upload.svg'

function ImageUpload() {
  return (
    <div id='sofa_light_dashboard_furniturestore_components_imageUpload_Id' className='sofa_light_dashboard_furniturestore_components_imageUpload'>
        <img src={upload} alt='upload' />
        <p><span>Browse</span> to Choose a File</p>
    </div>
  )
}

export default ImageUpload