import React, {useState, useEffect, useRef} from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { CToast,CToastHeader,CToastBody,CButton,CToaster } from '@coreui/react';

import Titles from '../components/titles/Titles'
import Labels from '../components/labels/Labels'

import './AddProduct.css'
import '../components/textarea/TextArea.css'

import '../components/combobox/ComboBox.css'
import "../components/imageuploader/ImageUpload.css"
import ActionButton from '../components/actionbuttons/ActionButton'



function AddProduct() {

  let [summary, setSummary] = useState();
  let [yearOne, setYearOne] = useState();
  let [yearOneDescription, setYearOneDescription] = useState();
  let [yearTwo, setYearTwo] = useState();
  let [yearTwoDescription, setYearTwoDescription] = useState();
  let [yearThree, setYearThree] = useState();
  let [yearThreeDescription, setYearThreeDescription] = useState();
  let [yearFour, setYearFour] = useState();
  let [yearFourDescription, setYearFourDescription] = useState();
  let [yearFive, setYearFive] = useState();
  let [yearFiveDescription, setYearFiveDescription] = useState();
  let [yearSix, setYearSix] = useState();
  let [yearSixDescription, setYearSixDescription] = useState();

  let checkLogin = 'check'
  useEffect(() => {
      async function getUser() {
          await fetch("http://localhost:3003/backend/api/getLoggedIn",{credentials: "include"})
          .then(d => d.json())
          .then(d => {
              if(d.user === "Not Logged in") {
                  console.log(d, "not logged in")
                  window.location = "/"
                  return
              }
              document.getElementById("preloaderScreenAddProduct").style.display = "none";
            })
          .catch(e => {
              console.log("error")
          })
      }
      if(checkLogin === 'check') {
          getUser()
      }
  },[checkLogin])

let getSummary = "yes"
  useEffect(() => {
      async function getData() {
          await fetch("http://localhost:3003/backend/api/notaloneinfo")
          .then(d => d.json())
          .then(d => {
              
              setSummary(d[0]['notAlone']['summary'])
              
              setYearOneDescription(d[0]['notAlone']['yearOneDescription'])
              setYearTwoDescription(d[0]['notAlone']['yearTwoDescription'])
              setYearThreeDescription(d[0]['notAlone']['yearThreeDescription'])
              setYearFourDescription(d[0]['notAlone']['yearFourDescription'])
              setYearFiveDescription(d[0]['notAlone']['yearFiveDescription'])
              setYearSixDescription(d[0]['notAlone']['yearSixDescription'])

              setYearOne(d[0]['notAlone']['yearOne'])
              setYearTwo(d[0]['notAlone']['yearTwo'])
              setYearThree(d[0]['notAlone']['yearThree'])
              setYearFour(d[0]['notAlone']['yearFour'])
              setYearFive(d[0]['notAlone']['yearFive'])
              setYearSix(d[0]['notAlone']['yearSix'])
            })
          .catch(e => {
              console.log("error")
          })
      }
      if(getSummary==="yes") {
        getData()
      }
  },[getSummary])

 

  
  

    const [toast, addToast] = useState(0)
const success = useRef()
const failure = useRef()
const emptyError = useRef()
const successToast = (
  <CToast>
    <CToastHeader closeButton>
      <svg
        className="rounded me-2"
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
      >
        <rect width="100%" height="100%" fill="green"></rect>
      </svg>
      <div className="fw-bold me-auto">Nturi Wenyine Saving Information Status</div>
      <small>Now</small>
    </CToastHeader>
    <CToastBody>Information saved successfully.</CToastBody>
  </CToast>
)
const failureToast = (
  <CToast>
    <CToastHeader closeButton>
      <svg
        className="rounded me-2"
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
      >
        <rect width="100%" height="100%" fill="red"></rect>
      </svg>
      <div className="fw-bold me-auto">Nturi Wenyine Saving Information Status</div>
      <small>Now</small>
    </CToastHeader>
    <CToastBody>Information not saved. Refresh the page and try again.</CToastBody>
  </CToast>
)

const emptyerrorbuttonId = (
  <CToast>
    <CToastHeader closeButton>
      <svg
        className="rounded me-2"
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
      >
        <rect width="100%" height="100%" fill="red"></rect>
      </svg>
      <div className="fw-bold me-auto">Nturi Wenyine Saving Information Status</div>
      <small>Now</small>
    </CToastHeader>
    <CToastBody>Some of information are empty</CToastBody>
  </CToast>
)

    
  return (
    <>
     <div id="preloaderScreenAddProduct">
      <div className='loader'>
        <div className='inner-loader'></div>
      </div>
    </div>
    <div className='sofa_light_dashboard_furniturestore_AddProduct'>
      <>
    <CButton style={{display: 'none'}} id="successbuttonId" onClick={() => addToast(successToast)}>Send a toast</CButton>
    <CToaster ref={success} push={toast} placement="top-end" />

    <CButton style={{display: 'none'}} id="failurebuttonId" onClick={() => addToast(failureToast)}>Send a toast</CButton>
    <CToaster ref={failure} push={toast} placement="top-end" />

    <CButton style={{display: 'none'}} id="emptyerrorbuttonId" onClick={() => addToast(emptyerrorbuttonId)}>Send a toast</CButton>
    <CToaster ref={emptyError} push={toast} placement="top-end" />
  </>
        <Titles title='Nturi Wenyine Program Information' />
        <Labels title='Summary:' />
        <div className='sofa_light_dashboard_furniturestore_components_textarea'>
        <textarea type="text" value={summary} onChange={e => {
          setSummary(e.target.value)
        }}/>
      </div>
        <Labels title='History:' />
        <Labels title='Description:' />
        
        <div className='sofa_light_dashboard_furniturestore_components_textfield'>
          <select value={yearOne} onChange={e => {
          setYearOne(e.target.value)
          }}>
            <option value=''></option>
            <option value='2015'>2015</option>
            <option value='2016'>2016</option>
            <option value='2017'>2017</option>
            <option value='2018'>2018</option>
            <option value='2019'>2019</option>
            <option value='2020'>2020</option>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
            <option value='2023'>2023</option>
          </select>
    </div>
        <div className='sofa_light_dashboard_furniturestore_components_textarea'>
        <textarea type="text" value={yearOneDescription} onChange={e => {
          setYearOneDescription(e.target.value)
        }}/>
      </div>
        <Labels title='Description:' />
        <div className='sofa_light_dashboard_furniturestore_components_textfield'>
          <select value={yearTwo} onChange={e => {
          setYearTwo(e.target.value)
          }}>
            <option value=''></option>
            <option value='2015'>2015</option>
            <option value='2016'>2016</option>
            <option value='2017'>2017</option>
            <option value='2018'>2018</option>
            <option value='2019'>2019</option>
            <option value='2020'>2020</option>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
            <option value='2023'>2023</option>
          </select>
    </div>
        <div className='sofa_light_dashboard_furniturestore_components_textarea'>
        <textarea type="text" value={yearTwoDescription} onChange={e => {
          setYearTwoDescription(e.target.value)
        }}/>
      </div>

        <Labels title='Description:' />
        <div className='sofa_light_dashboard_furniturestore_components_textfield'>
          <select value={yearThree} onChange={e => {
          setYearThree(e.target.value)
          }}>
            <option value=''></option>
            <option value='2015'>2015</option>
            <option value='2016'>2016</option>
            <option value='2017'>2017</option>
            <option value='2018'>2018</option>
            <option value='2019'>2019</option>
            <option value='2020'>2020</option>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
            <option value='2023'>2023</option>
          </select>
    </div>
        
        <div className='sofa_light_dashboard_furniturestore_components_textarea'>
        <textarea type="text" value={yearThreeDescription} onChange={e => {
          setYearThreeDescription(e.target.value)
        }}/>
      </div>

        <Labels title='Description:' />
        <div className='sofa_light_dashboard_furniturestore_components_textfield'>
          <select value={yearFour} onChange={e => {
          setYearFour(e.target.value)
          }}>
            <option value=''></option>
            <option value='2015'>2015</option>
            <option value='2016'>2016</option>
            <option value='2017'>2017</option>
            <option value='2018'>2018</option>
            <option value='2019'>2019</option>
            <option value='2020'>2020</option>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
            <option value='2023'>2023</option>
          </select>
    </div>
        <div className='sofa_light_dashboard_furniturestore_components_textarea'>
        <textarea type="text" value={yearFourDescription} onChange={e => {
          setYearFourDescription(e.target.value)
        }}/>
      </div>
        <Labels title='Description:' />
        <div className='sofa_light_dashboard_furniturestore_components_textfield'>
          <select value={yearFive} onChange={e => {
          setYearFive(e.target.value)
          }}>
            <option value=''></option>
            <option value='2015'>2015</option>
            <option value='2016'>2016</option>
            <option value='2017'>2017</option>
            <option value='2018'>2018</option>
            <option value='2019'>2019</option>
            <option value='2020'>2020</option>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
            <option value='2023'>2023</option>
          </select>
    </div>
        <div className='sofa_light_dashboard_furniturestore_components_textarea'>
        <textarea type="text" value={yearFiveDescription} onChange={e => {
          setYearFiveDescription(e.target.value)
        }}/>
      </div>

        <Labels title='Description:' />
        <div className='sofa_light_dashboard_furniturestore_components_textfield'>
          <select value={yearSix} onChange={e => {
          setYearSix(e.target.value)
          }}>
            <option value=''></option>
            <option value='2015'>2015</option>
            <option value='2016'>2016</option>
            <option value='2017'>2017</option>
            <option value='2018'>2018</option>
            <option value='2019'>2019</option>
            <option value='2020'>2020</option>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
            <option value='2023'>2023</option>
          </select>
    </div>
        <div className='sofa_light_dashboard_furniturestore_components_textarea'>
        <textarea type="text" value={yearSixDescription} onChange={e => {
          setYearSixDescription(e.target.value)
        }}/>
      </div>
        {/* save product */}
        <ActionButton handleSave={async e => {
           let d = {summary,
            yearOne,
            yearOneDescription,
            yearTwo,
            yearTwoDescription,
            yearThree,
            yearThreeDescription,
            yearFour,
            yearFourDescription,
            yearFive,
            yearFiveDescription,
            yearSix,
            yearSixDescription}
            console.log(d)

            for(let i in d) {
              if(!d[`${i}`]) {
                document.getElementById("emptyerrorbuttonId").click();
                return;
              }
            }

            try {
              await fetch("http://localhost:3003/backend/api/savenotaloneinfo", {
                method: "POST",
                credentials: "include",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(d),
              }).then(d => {
                document.getElementById("successbuttonId").click()
              }).catch(e =>{
                throw new Error(e.message)
              })
            } catch (error) {
              document.getElementById("failurebuttonId").click()
            }
        }} />
       
    </div>
    </>
  )
}

export default AddProduct