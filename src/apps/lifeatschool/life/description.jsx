import React from 'react'

function DESCRIPTION({description}) {
  return (
    <div style={{marginTop: '50px'}}>
        <p className='news_description'>
         {description}
        </p>
    </div>
  )
}

export default DESCRIPTION