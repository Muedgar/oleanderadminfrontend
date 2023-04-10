import React, {useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import './Signin.css'
// import axios from 'axios';

async function logIn(email, password) {
    let saveStatus = "not logged in";
    let d = {email,password}
   await fetch("https://www.backend.oleanderschool.com/backend/api/login", {
  method: "POST",
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(d),
})
  .then((response) => response.json())
  .then((result) => {
    if(!result.user) {
        throw new Error("not logged in")
        
    }
    saveStatus = "logged in"
  })
  .catch((error) => {
    console.log(error.message)
  });

  return saveStatus;
}


function Signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let checkLogin = 'check'
    useEffect(() => {
        async function getUser() {
            await fetch("https://www.backend.oleanderschool.com/backend/api/getLoggedIn",{credentials: "include"})
            .then(d => d.json())
            .then(d => {
                console.log(d);
                if(d.user === "Not Logged in") {
                    console.log(d, "not logged in")
                    return
                }
                sessionStorage.setItem("email",d.data.email)
                document.getElementById("moveToAdminDashboard").click();
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
    <div id="adminAppSigin">
        
        <div className='signin'>
        
        <h1>Oleander Nursery and Primary School</h1>
    
    <div className='signin_form'>
        <div className='signin_title'>
            <p>Sign in ONPS</p>
        </div>
        <label htmlFor="email">Email</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <label htmlFor="email">Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <div className='signinbutton'>
            <button onClick={async e => {
                e.target.setAttribute("disabled","true")
                e.target.innerHTML = "Sign in ..."
                let result = await logIn(email, password)

                if(result === "logged in") {
                    console.log("user logged in")
                    document.getElementById("moveToAdminDashboard").click();

                }else {
                    console.log("user not logged in")
                    e.target.removeAttribute("disabled")
                    e.target.innerHTML = "Sign in failed."
                    setTimeout(() => {
                        e.target.innerHTML = "Sign in."
                    }, 5000);
                }
            }}>Sign In</button>
        </div>
    </div>
    <NavLink
    id="moveToAdminDashboard"
              to='/onpsadmin/'>
                
              </NavLink>
</div>
    </div>
  )
}

export default Signin