import React, {useState} from 'react'

import "./CartTable.css"
import Counter from './counter';
import trash from "./trash.svg"

import Labels from '../labels/Labels';
import TextField from '../textfields/TextField'
import CustomTextField from '../customtextfield/CustomTextField'
import OrderButton from '../orderbutton/OrderButton';
// async function getData() {
//     let result = await fetch("http://localhost:3003/sofalight/backend/api/products/cart")
//          .then(d => d.json())
//          .then(d => d).catch(e => console.log(e));
            
//     return result.items
//  }

function CartTable() {
    let data = JSON.parse(localStorage.getItem("cart_items"))
    

    const [user, setUser] = useState('')
    const [phone, setPhone] = useState(null)
    
  return (
    <>
    <div className='sofa_light_dashboard_furniturestore_components_carttable'>
        <table>
            <thead>
            <tr>
                <th name="product">Product</th>
                <th name="price">Price</th>
                <th name="quantity">Quantity</th>
                <th name="total">Total</th>
            </tr>
            </thead>
            <tbody>
                
           {
            data.map((d,k) => (
                <tr key={k}>
                <td htmlFor="product">
                    <img className='thumbnail' src={d.item_img} alt="thumbnail" />
                    <div className='thumbnailDescription'>
                    <div>
                        <p>{d.item_name}</p>
                    </div>
                    {/* <div>
                        <p>Size: <span>Small</span></p>
                        <p>Color: <span>Golden</span></p>
                    </div> */}
                </div>
                </td>
                <td htmlFor="price" className='money'>{d.item_price} RWF</td>
                <td htmlFor="quantity">
                 <Counter initVal={d.item_quantity} />
                </td>
                <td htmlFor="total" className='money'>
                    <div className='money_trash_div'>
                    {/* <p className=''>200,000 RWF</p> */}
                    <img onClick={e => {
                        let storeData = JSON.stringify(data.filter(da => da.item_id!==d.item_id))
                        localStorage.setItem('cart_items', storeData)
                        window.location.reload();
                    }}className='trash' src={trash} alt="trash"/>
                    </div>
                </td>
            </tr>
            ))
           }
                
                
            </tbody>
        </table>

    
    </div>
    <div className='sofa_light_dashboard_furniturestore_components_carttable'>
        <div className=''>
            <Labels title="Fill information and Order:" />
            <Labels title="Name:" />
            <TextField keepSync={setUser}  id="ordername" />
            <Labels title="Phone Number:" />
            <CustomTextField keepSync={setPhone} id="orderphone" />
            <OrderButton user={user} phone={phone} />
        </div>
    </div>
    </>
  )
}

export default CartTable