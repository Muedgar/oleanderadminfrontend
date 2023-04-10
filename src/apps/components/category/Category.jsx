import React from 'react'

import './Category.css'

function Category() {
  // categories are loaded from database table
  const categories = [['All',25], ['Kitchen',25], ['Office',25], ['Living room',25], ['Dining',25], ['Bed rooms',25], ['Doors',25]]
  return (
    <div className='sofa_light_dashboard_furniturestore_components_category'>
        <p className='sizeOne'>Category</p>
        <ul>
            {categories.map((category,ky) => (
                <li onClick={e => {
                  console.log(category[0]);
                }} className='sizeTwo' key={ky}><span>{category[0]}</span>
                {/* <span>({category[1]})</span> */}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Category