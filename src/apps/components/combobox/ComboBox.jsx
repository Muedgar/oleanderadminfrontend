import React, {useState} from 'react'

import './ComboBox.css'

function TextField(props) {
  const [val, setVal] = useState();
  
  return (
    <div className='sofa_light_dashboard_furniturestore_components_textfield'>
          <select id={props.id} value={val} onChange={e => {
          setVal(e.target.value)
          props.keepSync(e.target.value);
          }}>
            <option value=''></option>
            <option value='2015'>2015</option>
            <option value='2016'>2016</option>
            <option value='2017'>2017</option>
            <option value='2018'>2018</option>
            <option value='2019'>2019</option>
            <option value='2020'>2020</option>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
            <option value='2023'>2023</option>
          </select>
    </div>
  )
}

export default TextField