import React from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Form } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'

function AddCrm() {
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
              <li className="breadcrumb-item active" aria-current="page">Add Customer</li>
            </ol>
            <h4 className="main-title mb-0">Create New Customer</h4>
          </div>
        </div>

        {/* responsive form in a card */}
        <Card>
          <Card.Body>
            <Row className="g-4">
              <Col xl="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">First Name</Form.Label>
                  <Form.Control type="text" id="exampleFormControlInput1" placeholder="first name" />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Last Name</Form.Label>
                  <Form.Control type="text" id="exampleFormControlInput1" placeholder="second name" />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1"> Primary Account</Form.Label>
                  <Form.Control type="text" id="exampleFormControlInput1" placeholder="Primary Account" />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Title</Form.Label>
                  <Form.Control type="text" id="exampleFormControlInput1" placeholder="Title" />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Phone Work</Form.Label>
                  <Form.Control type="Number" id="exampleFormControlInput1" placeholder="Phone Work" />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Phone Home</Form.Label>
                  <Form.Control type="Number" id="exampleFormControlInput1" placeholder="Phone Home" />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Phone Mobile</Form.Label>
                  <Form.Control type="Number" id="exampleFormControlInput1" placeholder="Phone Mobile" />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Phone Other</Form.Label>
                  <Form.Control type="Number" id="exampleFormControlInput1" placeholder="Phone Other" />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Website</Form.Label>
                  <Form.Control type="text" id="exampleFormControlInput1" placeholder="https//Website.com" />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Assigned</Form.Label>
                  <Form.Control type="text" id="exampleFormControlInput1" placeholder="Assigned" />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Teams</Form.Label>
                  <Form.Control type="text" id="exampleFormControlInput1" placeholder="Teams" />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Partner</Form.Label>
                  <Form.Control type="text" id="exampleFormControlInput1" placeholder="Partner name" />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Category</Form.Label>
                  <Form.Control type="text" id="exampleFormControlInput1" placeholder="Category" />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Department</Form.Label>
                  <Form.Control type="text" id="exampleFormControlInput1" placeholder="Department" />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Business Role</Form.Label>
                  <Form.Control type="text" id="exampleFormControlInput1" placeholder="Business Role" />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Reports</Form.Label>
                  <Form.Control type="text" id="exampleFormControlInput1" placeholder="Reports" />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Assistant Ph</Form.Label>
                  <Form.Control type="Number" id="exampleFormControlInput1" placeholder="Assistant Ph" />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Primary City</Form.Label>
                  <Form.Control type="text" id="exampleFormControlInput1" placeholder="Primary City" />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Primary State</Form.Label>
                  <Form.Control type="text" id="exampleFormControlInput1" placeholder="Primary State" />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Primary Country</Form.Label>
                  <Form.Control type="text" id="exampleFormControlInput1" placeholder="Primary Country" />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Primary Postal</Form.Label>
                  <Form.Control type="text" id="exampleFormControlInput1" placeholder="Primary Postal" />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Secondary City</Form.Label>
                  <Form.Control type="text" id="exampleFormControlInput1" placeholder="Secondary City" />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Secondary State</Form.Label>
                  <Form.Control type="text" id="exampleFormControlInput1" placeholder="Secondary State" />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Secondary Country</Form.Label>
                  <Form.Control type="text" id="exampleFormControlInput1" placeholder="Secondary Country" />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Secondary Postal</Form.Label>
                  <Form.Control type="text" id="exampleFormControlInput1" placeholder="Secondary Postal" />
                </div>
              </Col>

              <Col  md="12" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Description</Form.Label>
                  <Form.Control as="textarea" rows= "4" id="exampleFormControlInput1" placeholder="Description" />
                </div>
              </Col>

              <Col xs="12">
                <div className="mt-3">
                  <Button>Submit</Button>
                </div>
              </Col>
            </Row>



          </Card.Body>
        </Card>





        <Footer />
      </div>
    </>
  )
}

export default AddCrm