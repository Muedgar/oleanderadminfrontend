import React, {useState, useEffect} from 'react'

import './eventatschool.css'

function EVENTATSCHOOL() {
  let getData = "yes"
  let [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      await fetch("https://www.backend.oleanderschool.com/backend/api/event")
      .then(d => d.json())
      .then(d => {
        console.log(d)
        setData(d)
      })
      .catch(e => console.log(e))
    }
    getData()
  },[getData])
  return (
    <div className='src_apps_lifeatschool_lifeatschool_eventatschool'>
      
      {data.length>0?data.map((d,k) => {
        if(d.schoolevent) {
          return(
            <div key={k} className='eventcontainer'>
            <div>
              <p>Upcoming event: {d.schoolevent.productInfo.productName}</p>
            </div>
            <p className='eventDescription'>{d.schoolevent.productInfo.productSubText}</p>
            <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center'}}>

            <button delete-id={d._id} onClick={async e => {
          if(e.target.getAttribute('delete-id')) {
            let id = e.target.getAttribute('delete-id');
            await fetch("https://www.backend.oleanderschool.com/backend/api/event/delete", {
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

            </div>
          </div>
          )
        }
        return <div key={k}>No Events</div>
      }):<div>No Events</div>}
    </div>
  )
}

export default EVENTATSCHOOL