import React, {useState} from 'react'

import './Brands.css'

function Brands() {
  const [checked, setChecked] = useState(['cup'])
  const brands = [['Kitchen Cabinets',25], ['Office Desks',25], ['Sofas',25], ['Dining Tables',25]]
  const getChecked = (b) => {
    for(let i=0;i<checked.length;i++) {
      if(checked[i] === b) {
        return "checked";
      }
    }
    return "";
  }
  return (
    <div className='sofa_light_dashboard_furniturestore_components_brands'>
        <p className='sizeOne'>Brands</p>
        <ul>
            {brands.map((brand,ky) => (
                <li className='sizeTwo' key={ky}>
                  <label className="container">{brand[0]}
                    <input type="checkbox" onChange={e => {
                      for(let i=0;i<checked.length;i++) {
                        if(checked[i] === brand[0]) {
                          let newChecked = checked.filter(chk => chk !== brand[0])
                          setChecked(newChecked)
                          return;
                        }
                      }
                      setChecked([...checked,brand[0]])
                    }} checked={getChecked(brand[0])} />
                    <span className="checkmark"></span>
                  </label>
                  {/* <span>({brand[1]})</span> */}
                  </li>
            ))}
        </ul>
    </div>
  )
}

export default Brands