import React, {useState, useEffect} from 'react'

import './ProductPreview.css';


import cart from './cart.svg'
import formatPrice from './formatMoney';

function ProductPreview(props) {
 let role = props.role;
  let productInfos = JSON.parse(localStorage.getItem('product_preview'))
  let [buttonText, setButtonText] = useState('Add To Cart')
  let [count,setCount] = useState(1);
  let [thumbnail, setThumnail] = useState(productInfos.images[0][1]);
  let beforeDiscount = Number(productInfos.productInfo.productPrice) + (Number(productInfos.productInfo.productPrice)*(Number(productInfos.productInfo.productDiscount)/100))
  useEffect(() => {
    function handleResize() {
      if(window.innerWidth>1000) {
        document.querySelector(".sofa_light_dashboard_furniturestore_components_productpreview").style.flexDirection = "row"
        document.querySelector(".sofa_light_dashboard_furniturestore_components_productpreview_imagepreview").style.width = "60%"
        document.querySelector(".sofa_light_dashboard_furniturestore_components_productpreview_description").style.width = "40%"
      }
      if(window.innerWidth<1000) {
        document.querySelector(".sofa_light_dashboard_furniturestore_components_productpreview").style.flexDirection = "column"
        document.querySelector(".sofa_light_dashboard_furniturestore_components_productpreview_imagepreview").style.width = "90%"
        document.querySelector(".sofa_light_dashboard_furniturestore_components_productpreview_description").style.width = "90%"
    }
}
    window.addEventListener('resize', handleResize)
  })
  return (
    <div className='sofa_light_dashboard_furniturestore_components_productpreview'>
        <div className='sofa_light_dashboard_furniturestore_components_productpreview_imagepreview'>
            <div className='imagePreview'>
                <img src={thumbnail} alt='preview'/>
            </div>
            <div className='thumbnails'>
                {
                    productInfos.images.map((img,k) => (
                <div key={k} onClick={e=>setThumnail(img[1])}>
                    <img src={img[1]} alt='preview'/>
                </div>
                    ))
                }
                
                
            </div>
        </div>
        <div className='sofa_light_dashboard_furniturestore_components_productpreview_description'>
            <h1 className='productTitle'>{productInfos.productInfo.productName}</h1>
            <h6 className='productBrand'><span>Brand : </span><span>{productInfos.productInfo.productMetaTitle}</span></h6>
            <h4 className='productPrice'>{formatPrice(productInfos.productInfo.productPrice)} RWF</h4>
            <h5 className='productOriginalPrice'><span>{formatPrice(Math.floor(beforeDiscount))} RWF</span> <span>Before Discount</span></h5>
            <p className='productDetails'>{productInfos.productInfo.productDescription}</p>
            <p className='productStatus'><span>Available: </span><span>In Stock</span></p>
            <p className='productCategory'><span>Category: </span><span>{productInfos.productInfo.productCategory}</span></p>
            
            <div className={role==='admin'?'hide':'productQuantity'}><span>Quantity: </span> 
                <div>
                <button 
                    onClick={e => count>1?setCount(--count):setCount(count)}>-</button>
                <span>{count}</span>
                <button onClick={e => setCount(++count)}>+</button>
                </div>
            </div>
            <div className={role==='admin'?'hide':'productActions'}>
                <button>Order Now.</button>
                <button onClick={async e => {
           
           if(localStorage.getItem("cart_items")) {
             // if cart items exist toggle the item
             let items = JSON.parse(localStorage.getItem("cart_items"));
            
             // if items contains item
             let itemStatus = "";
             items.forEach(item => {
               if(item.item_id === productInfos._id) {
                 itemStatus = "found item"
               }
             });
             if(itemStatus === "found item") {
               items = items.filter(el => el.item_id!==productInfos._id)
               let stringItems = JSON.stringify(items);
               localStorage.setItem("cart_items",stringItems);
               setButtonText("Add To Cart.")
               e.target.removeAttribute('disabled')
               return
             }
             // if item is new
             let item = {item_img: productInfos.images[0][1],item_id: productInfos._id, item_name: productInfos.productInfo.productName, item_price: productInfos.productInfo.productPrice, item_quantity: count}
             items.push(item)
             let stringItems = JSON.stringify(items);
             localStorage.setItem("cart_items",stringItems)
           setButtonText("Item Added.")
           e.target.removeAttribute('disabled')
             return;
           }else {
             // else set cart items
             let item = {item_img: productInfos.images[0][1],item_id: productInfos._id, item_name: productInfos.productInfo.productName, item_price: productInfos.productInfo.productPrice, item_quantity: count}
             let items = []
             items.push(item)
             let stringItems = JSON.stringify(items);


           localStorage.setItem("cart_items",stringItems)
           setButtonText("Item Added.")
           e.target.removeAttribute('disabled')
           }
           

           


           
         }}><img src={cart} alt="cart" />{buttonText}</button>
            </div>        
            {/* <p className='productTags'><span>Tags: </span><span>Blue, Green, Light</span></p> */}
        </div>
    </div>
  )
}

export default ProductPreview