import React, {useState} from 'react'

import './SortBy.css'


function SortBy() {
  const [active, setActive] = useState('newest')
  return (
    <div className='sofa_light_dashboard_furniturestore_components_sortby'>
        <p>Sort By: </p><p>
          <span onClick={e => setActive('newest')} 
          className={active==='newest'?'sofa_light_dashboard_furniturestore_components_sortby_active':''}>Newest</span>
          <span onClick={e => setActive('oldest')} 
          className={active==='oldest'?'sofa_light_dashboard_furniturestore_components_sortby_active':''}>Oldest</span>
          <span onClick={e => setActive('price')} 
          className={active==='price'?'sofa_light_dashboard_furniturestore_components_sortby_active':''}>Price</span></p>
    </div>
  )
}

export default SortBy