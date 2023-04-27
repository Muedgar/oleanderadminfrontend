import React, {useState,useEffect} from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import LIFE from './life/life';
import EVENTATSCHOOL from './eventsatschool/eventatschool';

import './lifeatschool.css'
import CREATELIFENEWS from './createlifenews/createlifenews';
import CREATEEVENTATSCHOOL from './createeventatschool/createeventatschool';

// import context


function LIFEATSCHOOL() {
  let [news, setNews] = useState([])

  ///
let getNews = "get"
  const handleNews = async () => {
    await fetch("https://www.backend.oleanderschool.com/backend/api/news")
    .then(d => d.json())
    .then(d => setNews(d))
    .catch(e => console.log(e.message))
  }
  useEffect(() => {
    handleNews()
  }, [getNews])
  
  
  // manage news info

  let checkLogin = 'check'
  useEffect(() => {
      async function getUser() {
          await fetch("https://www.backend.oleanderschool.com/backend/api/getLoggedIn",{credentials: "include"})
          .then(d => d.json())
          .then(d => {
              if(d.user === "Not Logged in") {
                  console.log(d, "not logged in")
                  window.location = "/"
                  return
              }
              document.getElementById("preloaderScreenLifeAtSchool").style.display = "none";
            })
          .catch(e => {
              console.log("error")
          })
      }
      if(checkLogin === 'check') {
          getUser()
      }
  },[checkLogin])
  return (
    <>
    <div id="preloaderScreenLifeAtSchool">
      <div className='loader'>
        <div className='inner-loader'></div>
      </div>
    </div>
    <div className='src_apps_lifeatschool_lifeatschool'>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav style={{position: 'fixed', top: '120px'}} variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first" onClick={handleNews}>Life At School - News</Nav.Link>
            </Nav.Item>
           
            <Nav.Item>
              <Nav.Link eventKey="second">Events At School - Upcoming</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">CREATE - News</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">CREATE - Upcoming Events</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              {news.length>0?
             news.map((nwz,k) => {
              let processedDate = new Date(nwz.createdAt).toString().split(" ")
              return(
                <LIFE 
                  key={k} 
                  id={nwz._id} 
                  dt={processedDate[0]+" "+processedDate[1]+" "+processedDate[2]+" "+processedDate[3]} 
                  images={nwz.news.images} 
                  title={nwz.news.productInfo.productName} 
                  summary={nwz.news.productInfo.productSubText}
                  author={nwz.news.productInfo.productMetaTitle}
                  description={nwz.news.productInfo.productDescription}/>
               )
             }):
             <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems:'center', marginTop: '100px'}}>No news</div>
            }
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <EVENTATSCHOOL />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <CREATELIFENEWS />
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              <CREATEEVENTATSCHOOL />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </div>
    </>
  );
}

export default LIFEATSCHOOL;