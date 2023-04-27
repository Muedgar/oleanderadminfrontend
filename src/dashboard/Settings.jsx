import React, {useEffect, useState} from 'react'

import './Signin.css'

function Settings() {
  const [newPassword, setNewPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('')
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
              document.getElementById("preloaderScreenSettings").style.display = "none";
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
   <div id="preloaderScreenSettings">
      <div className='loader'>
        <div className='inner-loader'></div>
      </div>
    </div>
   <div className="signin">
      <div className='signin_form'>
        <div className='signin_title'>
            <p>Change Password ONPS Admin</p>
        </div>
        <label>Enter Password</label>
        <input type="password" value={oldPassword} onChange={e => setOldPassword(e.target.value)} />
        <label>Confirm Password</label>
        <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
        <div className='signinbutton'>
            <button onClick={async e => {
                e.target.innerHTML = 'Changing Password ...'
                if(oldPassword.trim() !== newPassword.trim()) {
                    e.target.innerHTML = "Passwords Don't Match"
                    setTimeout(() => {
                        e.target.innerHTML = "Change Password"
                    }, 3000);
                    return;
                } 
                await fetch("https://www.backend.oleanderschool.com/backend/api/changePassword",{
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        "Content-Type": "application/json",
                      },
                    body: JSON.stringify({password: newPassword}),
                })
                .then(d => d.json())
                .then(d => {
                    if(d.user === 'You are not authorized for this action' || d.user === 'Not Logged in') {
                        e.target.innerHTML = 'Password Not Changed.'
                    setTimeout(() => {
                        e.target.innerHTML = 'Change Password'
                    }, 5000);
                        return
                    } 
                    e.target.innerHTML = 'Password Changed.'
                    setTimeout(() => {
                        e.target.innerHTML = 'Change Password'
                    }, 5000);
                })
                .catch(e => console.log(e))
            }}>Change Password</button>
        </div>
    </div>
   </div>
   </>
  )
}

export default Settings