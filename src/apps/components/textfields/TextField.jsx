import React, {useState} from 'react'

import './TextField.css'

function TextField(props) {
  const [val, setVal] = useState(props.typ === 'edit'?props.initVal:'');
  
  return (
    <div className='sofa_light_dashboard_furniturestore_components_textfield'>
        <input id={props.id} type="text" value={val} onChange={e => {
          setVal(e.target.value)
          props.keepSync(e.target.value);
          }}/>
    </div>
  )
}

export default TextField