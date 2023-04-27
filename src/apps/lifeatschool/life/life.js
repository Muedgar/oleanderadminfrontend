import React,{useState} from 'react'

import './life.css'
import ProductPreview from '../../components/productpreview/ProductPreview'
import TITLE from './title'
import DESCRIPTION from './description'


function LIFE(props) {
  let [expand, setExpand] = useState(false)
  return (
    <div className={expand?'src_apps_lifeatschool_lifeatschool_life':'src_apps_lifeatschool_lifeatschool_life heightClass'}>
      <button delete-id={props.id} style={{position: 'absolute', top: '0', right: '0'}} onClick={async e => {
        if(e.target.getAttribute('delete-id')) {
          let id = e.target.getAttribute('delete-id');
          await fetch("https://www.backend.oleanderschool.com/backend/api/news/delete", {
method: "DELETE",
credentials: 'include',
headers: {
  "Content-Type": "application/json",
},
body: JSON.stringify({id}),
})
.then((response) => response.json())
.then((result) => {
  window.location.reload()
})
.catch((error) => {
  console.log(error.message)
});

        }
      }}>Delete</button>
        <TITLE title={props.title} summary={props.summary} author={props.author} dt={props.dt} />
        <ProductPreview images={props.images} />
        <DESCRIPTION description={props.description} />
        <div>
          {expand?<button className='controlHeight' onClick={e=>setExpand(!expand)}>View Less</button>:<button className='controlHeight' onClick={e=>setExpand(!expand)}>View More</button>}
        </div>
    </div>
  )
}

export default LIFE