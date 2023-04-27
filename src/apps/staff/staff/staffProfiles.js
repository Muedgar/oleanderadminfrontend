import React, {useEffect, useState} from 'react'

import './staffProfiles.css'
import Teacher from './ourteachers/teacher'



function StaffProfiles() {
  let [data, setData] = useState([])
  let getData = "yes"
  useEffect(() => {
    async function getStaff() {
      await fetch("https://www.backend.oleanderschool.com/backend/api/staff")
      .then(d => d.json())
      .then(d => setData(d))
      .catch(e => console.log(e.message))
    }
    getStaff()
  }, [getData])
  console.log(data)
  return (
    <div className='src_apps_lifeatschool_lifeatschool_life'>
      {data.length>0?
       data.map((d,k) => (
          <Teacher 
            id={d._id}
            image={d.staff.images[0][1]}
            name={d.staff.productInfo.productName}
            responsibility={d.staff.productInfo.productSubText}
          />
       ))
      :
      <div>No Staff Profiles</div>}
    </div>
  )
}

export default StaffProfiles