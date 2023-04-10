import React from 'react'

import './Search.css'

import search from './search.svg'

function Search() {
  return (
    <div className='sofa_light_dashboard_furniturestore_components_search'>
        <input type="text"  placeholder='Search'/>
        <div>
          <img src={search} alt='search' />
        </div>
    </div>
  )
}

export default Search