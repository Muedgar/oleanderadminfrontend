import React from 'react'

import './ActionButton.css'


function EditActionButton(props) {
    

  return (
    <div className='sofa_light_dashboard_furniturestore_components_product_action_button'>
        <button id="editProductButtonIdEdit" onClick={(e) => {
         
          props.handleSave(e)
        }}>Edit Product 
        <svg style={{display: 'none'}} id="editProductStatusButtonIdEdit" className="spinner" viewBox="0 0 50 50">
        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
      </svg></button>
    </div>
  )
}

export default EditActionButton