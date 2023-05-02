import React from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Form } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'

function AddProject() {
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
              <li className="breadcrumb-item"><Link to="/dashboard/projectManagement">Project</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Add Project</li>
            </ol>
            <h4 className="main-title mb-0">Create New Project</h4>
          </div>
        </div>

        {/* responsive form in a card */}
        <Card>
          <Card.Body>
            <Row className="g-4">
              <Col xl="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Email address</Form.Label>
                  <Form.Control type="email" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Email address</Form.Label>
                  <Form.Control type="email" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Email address</Form.Label>
                  <Form.Control type="email" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
              </Col>

              <Col lg="3" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Email address</Form.Label>
                  <Form.Control type="email" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
              </Col>

              <Col sx="12">
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

export default AddProject