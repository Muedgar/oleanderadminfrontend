import React from 'react'
import { Link } from 'react-router-dom'

import './ProductAdmin.css'

function ProductAdmin(props)  {
  return (
    <div className='sofa_light_dashboard_furniturestore_components_productadmin'>
      <Link id="productActions_Admin_Preview_A" to="/sofaadmin/productdetails"></Link>
      <div style={{cursor: 'pointer'}} onClick={e => {
        localStorage.setItem('product_preview',JSON.stringify(props.productData))
        document.getElementById("productActions_Admin_Preview_A").click();
      }} className='productImg'>
        <img src={props.src} alt="products"/>
      </div>
      <div className='productDesc'>
        <p>{props.productname}</p>
        <p>{props.productprice} RWF</p>
        <div className='productActions'>
        <Link id="productActions_Admin_Edit_A" to="/sofaadmin/editproduct"></Link>
          <button id={`edit_id_${props.id}`} onClick={async e => {
           localStorage.setItem('product_edit',JSON.stringify(props.productData))
            document.getElementById("productActions_Admin_Edit_A").click();
          }}>Edit Item.</button>
          <button onClick={async e => {
await fetch("https://www.backend.sofalightbusiness.com/sofalight/backend/api/products/delete/"+props.id, {
  method: "DELETE",
  credentials: 'include'
})
  .then((response) => response.json())
  .then((result) => {
    window.location.reload()
  })
  .catch((error) => {
    console.log(error.message)
  });
          }}>Delete.</button>
        </div>
      </div>
    </div>
  )
}
export default ProductAdmin