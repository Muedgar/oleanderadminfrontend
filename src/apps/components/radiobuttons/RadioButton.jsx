import React, { useState } from 'react'

import './RadioButton.css'

function RadioButton(props) {
  let [val, setVal] = useState(props.val1)
  return (
    <div className='sofa_light_dashboard_furniturestore_components_radiobutton'>
        <input onClick={e => {
          setVal(props.val1);
          props.keepSync(props.val1);
          
          console.log(val);
        }} type="radio" name='radio' />
        <label htmlFor="radio">{props.val1}</label>
        <input onClick={e => {
          setVal(props.val2);
          props.keepSync(props.val2);
          
          console.log(val);
        }} type="radio" name='radio' />
        <label htmlFor="radio">{props.val2}</label>
    </div>
  )
}

export default RadioButton