import React, {useState} from 'react'

function Counter(props) {
    let [count,setCount] = useState(props.initVal);
  return (
    <div className='productActions'>
                    <button 
                        onClick={e => count>1?setCount(--count):setCount(count)}>-</button>
                    <span>{count}</span>
                    <button onClick={e => setCount(++count)}>+</button>
                 </div>
  )
}

export default Counter