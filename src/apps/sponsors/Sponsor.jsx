import React, {useState} from 'react'

import "../components/carttable/CartTable.css"


import './Sponsor.css'


function Sponsor() {
   
    const [data, setData] = useState([])
    async function getData() {
        let result = await fetch("https://www.backend.oleanderschool.com/backend/api/sponsors",{credentials: 'include'})
        .then(d => d.json())
        .then(d => d).catch(e => 
            {
                console.log(e)
            });
          //   localStorage.setItem('results',JSON.stringify(result));
          setData(result)
      }
    
  return (
    <>
    <button className='deleteOrdersButton' onClick={async e => {
       getData()
    }}>Display Interested Sponsors List</button>
    <div className='sofa_light_dashboard_furniturestore_components_carttable'>
        
        <table>
            <thead>
            <tr>
                <th name="Student Names"><p>Student Names</p></th>
                <th name="Student Previous Year of Study"><p>Sponsor Address</p></th>
                <th name="Student Current or Next Year of Study"><p>Sponsor Email</p></th>
                <th name="Which School Did The Student Go To?"><p>Sponsor Phone</p></th></tr>
            </thead>
            <tbody>
            
            {data && data.map((d,k) => (
                <tr key={k}>
                {d.sponsor.data.map((t,tk) => (
                    <td style={{padding: '20px'}} key={tk}>
                        {t}
                    </td>
                ))}
    
            </tr>
))}
            </tbody>
        </table>

<div>
    {/* 
    
    {data.map((d,k) => (
                    <div key={k}>
                        {d.admission.studentData.stepOne.map((step,stepKey)=>(<p key={stepKey}>{step[1]}</p>))}
                        
                        {d.admission.studentData.stepTwo.map((step,stepKey)=>(<p key={stepKey}>{step[1]}</p>))}
                        
                        {d.admission.studentData.stepThree.map((step,stepKey)=>(<p key={stepKey}>{step[1]}</p>))}
                    </div>
                    
                ))}
    */}

</div>
    
    </div>
   
    </>
  )
}

export default Sponsor