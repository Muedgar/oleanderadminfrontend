import React from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import './staff.css'

function STAFF() {
  return (
    <div className='src_apps_lifeatschool_lifeatschool'>
      <Tab.Container id="right-tabs-example" defaultActiveKey="first">
      <Row>
      <Col sm={3}>
        <Nav style={{position: 'fixed', top: '120px'}} variant="pills" className="flex-column">
          <Nav.Item>
            <Nav.Link eventKey="first">Staff - Profiles</Nav.Link>
          </Nav.Item>
         
          <Nav.Item>
            <Nav.Link eventKey="second">CREATE - Staff Profile</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col sm={9}>
        <Tab.Content>
          <Tab.Pane eventKey="first">
            <div>Staff profile</div>
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <div>Create staff profiles</div>
          </Tab.Pane>
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
  </div>
  )
}

export default STAFF