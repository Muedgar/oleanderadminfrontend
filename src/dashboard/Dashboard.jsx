import React, {useState} from 'react'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import logo from './assets/logo.png'
import caretdown from './assets/caretdown.svg'
import menu from './assets/menu.svg'
import gear from './assets/gear.svg'
import rightfrombracket from './assets/rightfrombracket.svg'

import './Dashboard.css'
import ErrorBoundary from './ErrorBoundary';
import ErrorMessage from './ErrorMessage';

import Settings from './Settings';
import { NOTALONE } from '../apps';
import SPONSORS from '../apps/sponsors/sponsors';
import Signin from './Signin';
import LIFEATSCHOOL from '../apps/lifeatschool/lifeatschool';
import STAFF from '../apps/staff/staff';
import ADMISSIONS from '../apps/admissions/admissions';
import ErrorPage from './ErrorPage';


function Dashboard() {
  const [open, setOpen] = useState(true)


  return (
    <>
    <BrowserRouter>
  
    <div className='dashboard'>
        <nav className='dashboard_navbar'>
            <div className='dashboard_navbar_logo_menu_position'>
                <img className='dashboard_navbar_logo' src={logo} alt="logo" />
                <div className='dashboard_navbar_menu_position'>
                    <button onClick={e => setOpen(!open)} className='dashboard_navbar_menu_button'><img style={{width: '20px', height: '20px'}} src={menu} alt="menu" /></button>
                </div>
            </div>
            <div className='dashboard_navbar_admin_profile'>
                <div className='dashboard_navbar_admin_profile_menu'>
                    <p>Welcome Admin!</p>
                    <img className='dashboard_navbar_caret' src={caretdown} alt="caretdown" />
                    <div className='dashboard_navbar_admin_profile_content'>
                    <NavLink style={{textDecoration: 'none'}} to="/onpsadmin/settings">
                    <p><img className='dashboard_navbar_admin_profile_img' src={gear} alt="gear" /><span style={{color: 'black'}}>Settings</span></p>
                    </NavLink>
                    <button onClick={async e => {
                        await fetch("https://www.backend.oleanderschool.com/backend/api/logout",{credentials: 'include'})
                        .then(d => d.json())
                        .then(d => {
                            window.location = "/"
                        }).catch(e => console.log(e))
                    }}><img className='dashboard_navbar_admin_profile_img' src={rightfrombracket} alt="right from bracket" /><span>Sign Out</span></button>
                </div>
                </div>
                
            </div>
        </nav>
        <div className='dashboard_navbar_admin_sidebar_and_content'>
            <aside className={open?'dashboard_navbar_admin_sidebar dashboard_navbar_admin_sidebar_width':'dashboard_navbar_admin_sidebar'}>
                <h1>APPLICATIONS</h1>
                <p>CONTENT MANAGEMENT</p>
                <ul>
                <NavLink
                  to='/onpsadmin'>
                    <li>Nturi Wenyine</li>
                  </NavLink>

                  <NavLink
                  to='/onpsadmin/events'>
                    <li>Life At School</li>
                  </NavLink>

                  <NavLink
                  to='/onpsadmin/staff'>
                    <li>Staff Profiles</li>
                  </NavLink>

                </ul>
                <p>DONATIONS</p>
                <ul>
                <NavLink
                  to='/onpsadmin/sponsors'>
                    <li>Sponsors</li>
                  </NavLink>
                  <NavLink
                  to='/onpsadmin/admissions'>
                    <li>Admissions</li>
                  </NavLink>

                </ul>
                <h1>PROFILE</h1>
                <ul>
                <NavLink
                  to='/onpsadmin/settings'>
                    <li>Settings</li>
                  </NavLink>
                </ul>
            </aside>
            <div className='dashboard_navbar_admin_content'>
                
            <Routes>
    <Route path="*" element={<ErrorPage />} />
                    <Route path='/' element={
                        <ErrorBoundary fallback={<ErrorMessage message="Can not connect to service. Please contact support. Thank you!" />}>
                            <Signin />
                        </ErrorBoundary>
                    } />
                
                <Route path='/onpsadmin' element={
                    <ErrorBoundary fallback={<ErrorMessage message="Can not connect to service. Please contact support. Thank you!" />}>
                        <NOTALONE />
                    </ErrorBoundary>
                } />
                
                <Route path='/onpsadmin/sponsors' element={
                    <ErrorBoundary fallback={<ErrorMessage message="Can not connect to service. Please contact support. Thank you!" />}>
                        <SPONSORS />
                    </ErrorBoundary>
                } />
                {/* LIFEATSCHOOL */}
                <Route path='/onpsadmin/events' element={
                    <ErrorBoundary fallback={<ErrorMessage message="Can not connect to service. Please contact support. Thank you!" />}>
                        <LIFEATSCHOOL />
                    </ErrorBoundary>
                } />
                <Route path='/onpsadmin/staff' element={
                    <ErrorBoundary fallback={<ErrorMessage message="Can not connect to service. Please contact support. Thank you!" />}>
                        <STAFF />
                    </ErrorBoundary>
                } />
                <Route path='/onpsadmin/admissions' element={
                    <ErrorBoundary fallback={<ErrorMessage message="Can not connect to service. Please contact support. Thank you!" />}>
                        <ADMISSIONS />
                    </ErrorBoundary>
                } />
            <Route path='/onpsadmin/settings' element={
                    <ErrorBoundary fallback={<ErrorMessage message="Can not connect to service. Please contact support. Thank you!" />}>
                        <Settings />
                    </ErrorBoundary>
                } />
                
                    </Routes>
                
            </div>
        </div>
    </div>
        </BrowserRouter>
    </>
  )
}

export default Dashboard