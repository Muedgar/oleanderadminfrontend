import React, {useEffect} from 'react'

import './admissions.css'
import Admission from './Admission'

function ADMISSIONS() {
  let checkLogin = 'check'
  useEffect(() => {
      async function getUser() {
          await fetch("https://www.backend.oleanderschool.com/backend/api/getLoggedIn",{credentials: "include"})
          .then(d => d.json())
          .then(d => {
              if(d.user === "Not Logged in") {
                  console.log(d, "not logged in")
                  window.location = "/"
                  return
              }
              document.getElementById("preloaderScreenAdmissions").style.display = "none";
            })
          .catch(e => {
              console.log("error")
          })
      }
      if(checkLogin === 'check') {
          getUser()
      }
  },[checkLogin])
  return (
    <>
    <div id="preloaderScreenAdmissions">
      <div className='loader'>
        <div className='inner-loader'></div>
      </div>
    </div>
    <Admission />
    </>
  )
}

export default ADMISSIONS