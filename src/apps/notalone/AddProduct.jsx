import React, {useState, useEffect, useRef} from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { CToast,CToastHeader,CToastBody,CButton,CToaster } from '@coreui/react';

import Titles from '../components/titles/Titles'
import Labels from '../components/labels/Labels'

import './AddProduct.css'
import TextArea from '../components/textarea/TextArea'

import ComboBox from '../components/combobox/ComboBox'

import "../components/imageuploader/ImageUpload.css"
import ActionButton from '../components/actionbuttons/ActionButton'



function AddProduct() {

  let checkLogin = 'check'
  useEffect(() => {
      async function getUser() {
          await fetch("http://localhost:3003/backend/api/getLoggedIn",{credentials: "include"})
          .then(d => d.json())
          .then(d => {
              console.log(d);
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
        <TextArea keepSync={val => setSummary(val)} id="sofa_light_dashboard_furniturestore_components_textfield_product_name" />
        <Labels title='History:' />
        <Labels title='Description:' />
        <ComboBox  keepSync={val => setYearOne(val)} id="sofa_light_dashboard_furniturestore_components_textfield_sub_text" />
        <TextArea keepSync={val => setYearOneDescription(val)} id="sofa_light_dashboard_furniturestore_components_textfield_product_name" />
        
        <Labels title='Description:' />
        <ComboBox  keepSync={val => setYearTwo(val)} id="sofa_light_dashboard_furniturestore_components_textfield_sub_text" />
        <TextArea keepSync={val => setYearTwoDescription(val)} id="sofa_light_dashboard_furniturestore_components_textfield_product_name" />
        

        <Labels title='Description:' />
        <ComboBox  keepSync={val => setYearThree(val)} id="sofa_light_dashboard_furniturestore_components_textfield_sub_text" />
        <TextArea keepSync={val => setYearThreeDescription(val)} id="sofa_light_dashboard_furniturestore_components_textfield_product_name" />
        

        <Labels title='Description:' />
        <ComboBox  keepSync={val => setYearFour(val)} id="sofa_light_dashboard_furniturestore_components_textfield_sub_text" />
        <TextArea keepSync={val => setYearFourDescription(val)} id="sofa_light_dashboard_furniturestore_components_textfield_product_name" />
        
        <Labels title='Description:' />
        <ComboBox  keepSync={val => setYearFive(val)} id="sofa_light_dashboard_furniturestore_components_textfield_sub_text" />
        <TextArea keepSync={val => setYearFiveDescription(val)} id="sofa_light_dashboard_furniturestore_components_textfield_product_name" />
        

        <Labels title='Description:' />
        <ComboBox  keepSync={val => setYearSix(val)} id="sofa_light_dashboard_furniturestore_components_textfield_sub_text" />
        <TextArea keepSync={val => setYearSixDescription(val)} id="sofa_light_dashboard_furniturestore_components_textfield_product_name" />
        
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