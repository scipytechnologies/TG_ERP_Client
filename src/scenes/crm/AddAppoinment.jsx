import React from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Form } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'

function AddOppoinment() {
  // to maintain dark and light mode
  const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
  const [skin, setSkin] = useState(currentSkin);
  const navigate = useNavigate()


  return (
    <>
      <Header onSkin={setSkin} />
      <div className="main main-app p-3 p-lg-4">
        <div className="d-md-flex align-items-center justify-content-between mb-4">
          <div>
            <ol className="breadcrumb fs-sm mb-1">
              <li className="breadcrumb-item"><Link to="/dashboard/home">Dashboard</Link></li>
              <li className="breadcrumb-item"><Link to="/dashboard/crm">CRM</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Add Appoinment</li>
            </ol>
            <h4 className="main-title mb-0">Create New Customer</h4>
          </div>
        </div>

        {/* responsive form in a card */}
        <Card>
          <Card.Body>
            <Row className="g-4">
              <Col md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Schedule Call</Form.Label>
                  <Form.Control type="text" id="exampleFormControlInput1" placeholder="Schedule Call" />
                </div>
              </Col>

              <Col md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Schedule Meeting</Form.Label>
                  <Form.Control type="text" id="exampleFormControlInput1" placeholder="Schedule Meeting" />
                </div>
              </Col>

              <Col md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Subject</Form.Label>
                  <Form.Control type="text" id="exampleFormControlInput1" placeholder="Subject" />
                </div>
              </Col>

              <Col md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Start Date</Form.Label>
                  <Form.Control type="Date" id="exampleFormControlInput1" placeholder="Start Date" />
                </div>
              </Col>

              <Col md="12" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Description</Form.Label>
                  <Form.Control as="textarea" id="exampleFormControlInput1" rows="4" placeholder="Description" />
                </div>
              </Col>

              <Col xs="12">
                  <Button>Submit</Button>
              </Col>
            </Row>



          </Card.Body>
        </Card>





        <Footer />
      </div>
    </>
  )
}

export default AddOppoinment