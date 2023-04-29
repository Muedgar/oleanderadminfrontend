import React, {useState} from 'react'

import "../components/carttable/CartTable.css"


import './Admission.css'


function Admission() {
   
    const [data, setData] = useState([])
    async function getData() {
        let result = await fetch("https://www.backend.oleanderschool.com/backend/api/admissions")
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
        console.log("data ",data)
 }}>Display Admission Forms</button>
    <div className='sofa_light_dashboard_furniturestore_components_carttable'>
        
        <table>
            <thead>
            <tr>
                <th name="Student Names"><p>Student Names</p></th>
                <th name="Student Previous Year of Study"><p>Student Previous Year of Study</p></th>
                <th name="Student Current or Next Year of Study"><p>Student Current or Next Year of Study</p></th>
                <th name="Which School Did The Student Go To?"><p>Which School Did The Student Go To?</p></th>
                <th name="Student Date of Birth"><p>Student Date of Birth</p></th>
                <th name="Student Place of Birth"><p>Student Place of Birth</p></th>
                <th name="Student Address"><p>Student Address</p></th>
                <th name="Father's Names"><p>Father's Names</p></th>
                <th name="Mother's Names"><p>Mother's Names</p></th>
                <th name="Guardian's Names"><p>Guardian's Names</p></th>
                <th name="Father's Phone Number"><p>Father's Phone Number</p></th>
                <th name="Mother's Phone Number"><p>Mother's Phone Number</p></th>
                <th name="Guardian's Phone Number"><p>Guardian's Phone Number</p></th>
                <th name="Does a student have a health related situation that needs extra care?"><p>Does a student have a health related situation that needs extra care?</p></th>
                <th name="Supporting Documents"><p>Supporting Documents</p></th>
            </tr>
            </thead>
            <tbody>
            {data && data.map((d,k) => (
                    <tr key={k}>
                        {d.admission.studentData.stepOne && d.admission.studentData.stepOne.map((step,stepKey)=>(<td key={stepKey}>{step[1]}</td>))}
                        
                        
                        {d.admission.studentData.stepTwo && d.admission.studentData.stepTwo.map((step,stepKey)=>(<td key={stepKey}>{step[1]}</td>))}
                        
                        {d.admission.studentData.stepThree && d.admission.studentData.stepThree.map((step,stepKey)=>(<td key={stepKey}>{step[1]}</td>))}
                    
                        <td style={{display: 'flex', flexDirection: 'column', padding: '5px', justifyContent: 'center'}}>
                            {d.admission.supportDoc && d.admission.supportDoc.map((doc,docKey)=>(<td key={docKey}><a rel="noreferrer" href={doc[1]} target='_blank'>{doc[0]}</a></td>))}
                    
                        </td>

                    </tr>
                    
                ))}
            </tbody>
        </table>

    
    </div>
   
    </>
  )
}

export default Admission