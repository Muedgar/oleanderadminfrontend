import React, {useEffect} from 'react'

function ADMISSIONS() {
  let checkLogin = 'check'
  useEffect(() => {
      async function getUser() {
          await fetch("https://www.backend.oleanderschool.com/backend/api/getLoggedIn",{credentials: "include"})
          .then(d => d.json())
          .then(d => {
              console.log(d);
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
    <div>ADMISSIONS</div>
    </>
  )
}

export default ADMISSIONS