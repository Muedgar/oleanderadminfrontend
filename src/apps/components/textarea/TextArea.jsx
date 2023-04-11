import React, {useState} from 'react'

import './TextArea.css'

function TextArea(props) {
  const [val, setVal] = useState(props.typ === 'edit'?props.initVal:'');
  console.log("initials ", props.typ, ", ", props.initVal)
  return (
    <div className='sofa_light_dashboard_furniturestore_components_textarea'>
        <textarea id={props.id} type="text" value={val} onChange={e => {
          setVal(e.target.value)
          props.keepSync(e.target.value);
        }}/>
    </div>
  )
}

export default TextArea