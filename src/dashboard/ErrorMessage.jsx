import React from 'react'

function ErrorMessage(props) {
  return (
    <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <p style={{fontSize: '2em', fontWeight: 'bolder'}}>{props.message}</p>
    </div>
  )
}

export default ErrorMessage