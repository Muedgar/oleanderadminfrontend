import React from 'react'

import './OrderButton.css'

function OrderButton(props) {
    var animateButton = function(e) {

        //reset animation
        e.target.classList.remove('animate');
        
        e.target.classList.add('animate');
        setTimeout(function(){
          e.target.classList.remove('animate');
        },700);
      };
      
      var bubblyButtons = document.getElementsByClassName("bubbly-button");
      
      for (var i = 0; i < bubblyButtons.length; i++) {
        bubblyButtons[i].addEventListener('click', animateButton, false);
      }
  return (
    <button className="bubbly-button" onClick={async e => {
      if(props.user==='' || props.phone === '') {
        
      return;
      }
      e.target.setAttribute('disabled',"")
      e.target.innerHTML = 'Ordering ...'
      let productData = JSON.parse(localStorage.getItem("cart_items"))
      let userData = {user: props.user, phone: props.phone}
     // console.log(productData, userData)
     let bdy = {orderInfo: [productData, userData]}

     await fetch("http://localhost:3003/sofalight/backend/api/products/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bdy),
    })
      .then((response) => response.json())
      .then((result) => {
        e.target.removeAttribute('disabled')
      e.target.innerHTML = 'Order Sent.'
      }).catch(e => console.log(e))
    }}>Order</button>
  )
}

export default OrderButton