import React, {useState} from 'react'

import './CustomTextField.css'

function CustomTextField(props) {
    const [val, setVal] = useState(props.typ === 'edit'?props.initVal:'');
    return (
    <div className='sofa_light_dashboard_furniturestore_components_customtextfield'>
        <input id={props.id} type="number" value={val} onChange={e => {
            if(e.target.value>-1) {
                setVal(e.target.value)
                props.keepSync(e.target.value);
            }
        }}/>
    </div>
  )
}

export default CustomTextField