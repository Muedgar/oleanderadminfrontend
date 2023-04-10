import React, {useState} from 'react'

import './PriceRange.css'

function PriceRange(props) {
   const [val, setVal] = useState(1000000);
   

   function formatPrice(money) {
    let moneyArray = [...String(money)].reverse();
    let moneyArray2 = [];

    let start = 0;
    let end = start + 3;
    let i=0;
    while(i<moneyArray.length) {
        moneyArray2.push(moneyArray.slice(start,end).reverse())
        
        start = end;
        end = start + 3;
        
        i++;
    }


    // filter for empty arrays
    moneyArray2 = moneyArray2.filter(arr => arr.length>=1)
    

    let toJoinMoney = moneyArray2.reverse();

    let formartedMoney = '';
    toJoinMoney.forEach((arr,i) => {
        let comma = i===toJoinMoney.length-1?'':',';
        formartedMoney += arr.join('') + comma;
    });

    return formartedMoney;
   }

   
  return (
    <div className='sofa_light_dashboard_furniturestore_components_pricerange'>
        <p style={{paddingTop: '20px'}} className='sizeOne'>Price Range</p>
        <input className='slider' type="range" value={val} onChange={e => {
            setVal(e.target.value)
            props.keepSync(val)
        }} min={`${props.min}`} max={`${props.max}`}/>
        <p className='sizeTwo'>
            <span>{formatPrice(props.min)} RWF</span>
            -
            <span>{formatPrice(val)} RWF</span>
        </p>
    </div>
  )
}

export default PriceRange