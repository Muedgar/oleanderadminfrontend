import React, {useState, useEffect, useRef} from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { CToast,CToastHeader,CToastBody,CButton,CToaster } from '@coreui/react';

import Titles from '../../components/titles/Titles'
import Labels from '../../components/labels/Labels'

import './AddProduct.css'
import TextField from '../../components/textfields/TextField'

import "../../components/imageuploader/ImageUpload.css"
import RadioButton from '../../components/radiobuttons/RadioButton'
import ActionButton from '../../components/actionbuttons/ActionButton'

import saveProduct from './saveProduct'

function AddProduct() {

  // image 
  let [products, setProducts] = useState([]);

  let [productName, setProductName] = useState();
  let [productSubText, setProductSubText] = useState();
  let [productStatus, setProductStatus] = useState();
  

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
      <div className="fw-bold me-auto">Event Creation Status</div>
      <small>Now</small>
    </CToastHeader>
    <CToastBody>Event created successfully.</CToastBody>
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
      <div className="fw-bold me-auto">Event Creation Status</div>
      <small>Now</small>
    </CToastHeader>
    <CToastBody>Event not created. Refresh the page and try again.</CToastBody>
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
      <div className="fw-bold me-auto">Event Creation Status</div>
      <small>Now</small>
    </CToastHeader>
    <CToastBody>Some of event information are empty and you need to upload at least one image</CToastBody>
  </CToast>
)
const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: process.env.REACT_APP_CLOUD_NAME,
            uploadPreset: process.env.REACT_APP_UPLOAD_PRESET
        }, function(error, result) {
            if(!error && result && result.event === "success") {
             console.log(result)
                setProducts([...products, [result.info.original_filename, result.info.secure_url, result.info.public_id]]);
                
            }
        })
    },[products])
    
  return (
    <>
    
    <div className='sofa_light_dashboard_furniturestore_AddProduct'>
      <>
    <CButton style={{display: 'none'}} id="successbuttonId2" onClick={() => addToast(successToast)}>Send a toast</CButton>
    <CToaster ref={success} push={toast} placement="top-end" />

    <CButton style={{display: 'none'}} id="failurebuttonId" onClick={() => addToast(failureToast)}>Send a toast</CButton>
    <CToaster ref={failure} push={toast} placement="top-end" />

    <CButton style={{display: 'none'}} id="emptyerrorbuttonId" onClick={() => addToast(emptyerrorbuttonId)}>Send a toast</CButton>
    <CToaster ref={emptyError} push={toast} placement="top-end" />
  </>
        <Titles title='Life At School (Create - Event)' />
        <Labels title='Event Title:' />
        <TextField keepSync={val => setProductName(val)} id="sofa_light_dashboard_furniturestore_components_textfield_product_name" />
        <Labels title='Event Summary:' />
        <TextField  keepSync={val => setProductSubText(val)} id="sofa_light_dashboard_furniturestore_components_textfield_sub_text" />
        <Labels title='Status:' />
        <RadioButton keepSync={val => setProductStatus(val)} val1="Published" val2="Draft" />
        
        

        {/* save product */}
        <ActionButton handleSave={async e => {
          /*
            let [productName, setProductName] = useState();
  let [productSubText, setProductSubText] = useState();
  let [productDescription, setProductDescription] = useState();
  let [productMetaTitle, setProductMetaTitle] = useState();
          */
          if(productName===''||productSubText===''||productStatus==='') {
            document.getElementById("emptyerrorbuttonId").click();
            return;
          }
          let textInfo = {
            productName,
            productSubText,
            productStatus
          }
          document.getElementById("saveProductStatusButtonId").style.display = "block"
          document.getElementById("saveProductButtonId").setAttribute("disabled","true")
          /// how to send data to the back end.
          let saveStatus =await saveProduct(products, textInfo)
          console.log("save status", saveStatus);
          if(saveStatus === "saved") {
            // get ready to process next save
            setProducts([])
            document.getElementById("saveProductStatusButtonId").style.display = "none"
            document.getElementById("successbuttonId2").click();
            document.getElementById("saveProductButtonId").removeAttribute("disabled")
           
          }else {
            document.getElementById("failurebuttonId").click();
          }
        }} />
       
    </div>
    </>
  )
}

export default AddProduct