import React from 'react'
function ErrorPage() {
    return(
        <div style={{
            position: 'fixed', 
            top: 0, 
            width: '100%', 
            height: '100%', 
            zIndex:'9999', 
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '50px',
            }}>
                <h1 style={{textAlign: 'center', fontSize: '3em',
            fontFamily: 'Time New Roman'}}>Page Not Found</h1>
            <button style={{alignSelf: 'center', width: '350px', height: '54px',
            textAlign: 'center', fontSize: '1.5em',
            fontFamily: 'Time New Roman',
            border: 'none', background: 'lightgreen', color: 'white', boxShadow: '10px 10px black'}} onClick={e => {
                window.location = "/onpsadmin"
            }}>Go Back</button>
            </div>
    )
}

export default ErrorPage