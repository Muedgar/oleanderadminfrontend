import React, {useState} from 'react'

import './Product.css'

import cart from './cart.svg'

function Product(props) {
  const [buttonText, setButtonText] = useState('Add To Cart.')
  return (
    <div className='sofa_light_dashboard_furniturestore_components_product'>
      <div onClick={e => {
        localStorage.setItem('product_preview',JSON.stringify(props.productData))
      }} className='productImg'>
        <img src={props.src} alt="products"/>
      </div>
      <div className='productDesc'>
        <p>{props.productname}</p>
        <p>{props.productprice} RWF</p>
        <div className='productActions'>
          <button onClick={async e => {
           
            if(localStorage.getItem("cart_items")) {
              // if cart items exist toggle the item
              let items = JSON.parse(localStorage.getItem("cart_items"));
             
              // if items contains item
              let itemStatus = "";
              items.forEach(item => {
                if(item.item_id === props.id) {
                  itemStatus = "found item"
                }
              });
              if(itemStatus === "found item") {
                items = items.filter(el => el.item_id!==props.id)
                let stringItems = JSON.stringify(items);
                localStorage.setItem("cart_items",stringItems);
                setButtonText("Add To Cart.")
                e.target.removeAttribute('disabled')
                return
              }
              // if item is new
              let item = {item_img: props.src,item_id: props.id, item_name: props.productname, item_price: props.productprice, item_quantity: 2}
              items.push(item)
              let stringItems = JSON.stringify(items);
              localStorage.setItem("cart_items",stringItems)
            setButtonText("Item Added.")
            e.target.removeAttribute('disabled')
              return;
            }else {
              // else set cart items
              let item = {item_img: props.src,item_id: props.id, item_name: props.productname, item_price: props.productprice, item_quantity: 2}
              let items = []
              items.push(item)
              let stringItems = JSON.stringify(items);


            localStorage.setItem("cart_items",stringItems)
            setButtonText("Item Added.")
            e.target.removeAttribute('disabled')
            }
            

            


            
          }}><img src={cart} alt='cart' />{buttonText}</button>
          <button>Order Now.</button>
        </div>
      </div>
    </div>
  )
}

export default Product