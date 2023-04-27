import React, {useState} from 'react'

import './ProductPreview.css';


function ProductPreview(props) {
 let [images,setImages] = useState(props.images)


 let [thumbnail, setThumnail] = useState(props.images[0][1]);
  
  return (
    <div className='sofa_light_dashboard_furniturestore_components_productpreview'>
        <div className='sofa_light_dashboard_furniturestore_components_productpreview_imagepreview'>
            <div className='imagePreview'>
            <img src={thumbnail} alt='preview'/>
            </div>
            <div className='thumbnails'>
              {images.map((im,k) => (
                <div key={k} onClick={e=>setThumnail(im[1])}>
                  <img src={im[1]} alt='preview'/>
                </div> 
              ))} 
            </div>
        </div>
       
    </div>
  )
}

export default ProductPreview