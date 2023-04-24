import React from "react";
import Teacher from "./teacher";

import "./teachers.css";

//
import teacher1 from "./assets/1.JPG";
import teacher2 from "./assets/2.JPG";


import teacher5 from "./assets/5.JPG";
import teacher6 from "./assets/6.JPG";

import teacher7 from "./assets/7.JPG";
import teacher8 from "./assets/8.JPG";
import teacher9 from "./assets/9.JPG";

import teacher10 from "./assets/10.JPG";
import teacher11 from "./assets/11.JPG";
import teacher12 from "./assets/12.JPG";

function Teachers() {
    return(
        <div id="teachers" className="teachersContainer">
          <h1>Some of Our Teachers</h1>
          
          <div className="teachers">
            <Teacher id="teacherId5" image={teacher5} name="Shyaka George" responsibility="Teacher of Mathematics." />
            <Teacher id="teacherId6" image={teacher6} name="Namaseruka Gladys" responsibility="Teacher of English." />
          </div>

          <div className="teachers">
            <Teacher id="teacherId7" image={teacher7} name="Claudine" responsibility="Teacher of Social Studies." />
            <Teacher id="teacherId8" image={teacher8} name="Mweshezi Benon" responsibility="Teacher of Mathematics." />
            <Teacher id="teacherId9" image={teacher9} name="Desire" responsibility="Teacher of English." />
          </div>
          <div className="teachers">
            <Teacher id="teacherId10" image={teacher10} name="Iradukunda Lilian" responsibility="Teacher of French." />
            <Teacher id="teacherId11" image={teacher11} name="Emmerance" responsibility="Teacher of Nursery." />
            <Teacher id="teacherId12" image={teacher12} name="Ahumuza Susan" responsibility="Teacher of Nursery." />
          </div>
          <div className="teachers">
            <Teacher id="teacherId1" image={teacher1} name="Musinguzi Didas" responsibility="Dean of Studies."/>
            <Teacher id="teacherId2" image={teacher2} name="Ngabonziza Dan" responsibility="Teacher of Social Studies." />
          </div>
        </div>
    )
}

export default Teachers;