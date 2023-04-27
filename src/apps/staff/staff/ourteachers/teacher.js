import React from "react";

import "./teacher.css";

function Teacher(props) {
    return(
          <div onMouseOver={e => {
            document.getElementById(props.id).style.transform = "rotateY(180deg)";
          }}  onMouseLeave={e => {
            document.getElementById(props.id).style.transform = "rotateY(0)";
          }} className="teacher">
            <div id={props.id} className="teacher-inner">
                <div className="teacher-front-face">
                    <img src={props.image} alt="teacher" aria-hidden="true" />
                </div>
                <div className="teacher-back-face">
                    <p>Name: <span>{props.name}</span></p>
                    <p>Responsibility: <span>{props.responsibility}</span></p>
                    {/* <p>Contact: <span>+250 780 530 000</span></p> */}
                </div>
            </div>
            <button delete-id={props.id} style={{position: 'absolute', top: '0'}}  onClick={async e => {
        if(e.target.getAttribute('delete-id')) {
          let id = e.target.getAttribute('delete-id');
          await fetch("https://www.backend.oleanderschool.com/backend/api/staff/delete", {
method: "DELETE",
credentials: 'include',
headers: {
  "Content-Type": "application/json",
},
body: JSON.stringify({id}),
})
.then((response) => response.json())
.then((result) => {
  window.location.reload()
})
.catch((error) => {
  console.log(error.message)
});

        }
      }}>Delete</button>
          </div>
    )
}

export default Teacher;