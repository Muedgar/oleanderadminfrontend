import React from 'react'

import './ActionButton.css'


function ActionButton(props) {
    

  return (
    <div className='sofa_light_dashboard_furniturestore_components_product_action_button'>
        <button id="saveProductButtonId" onClick={(e) => {
         
          props.handleSave(e)
        }}>Save Information 
        <svg style={{display: 'none'}} id="saveProductStatusButtonId" className="spinner" viewBox="0 0 50 50">
        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
      </svg></button>
    </div>
  )
}

export default ActionButton