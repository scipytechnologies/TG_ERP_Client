import React from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Form } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import mainservice from '../../services/mainservice';
import { useSelector } from 'react-redux';

function AddCrm() {
  const index = useSelector((state) => state.index)
  
  
  // to maintain dark and light mode
  const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
  const [skin, setSkin] = useState(currentSkin);
  const navigate = useNavigate()
  const [form, setform] = useState("")
  const onChangeHandler = (event) => {
    setform({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    createAccount(form);
}

async function createAccount(form) {
  const res = await mainservice.createCustomer(form,index.CrmID);
  if(res.data != null) {
    console.log ("Account Added");
  }
  else{
    console.log(res.message);
  }
}


  return (
    <>
    <form onSubmit={onSubmitHandler} >
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
              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">First Name</Form.Label>
                  <Form.Control type="text" name="FirstName" id="exampleFormControlInput1" placeholder="first name" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Last Name</Form.Label>
                  <Form.Control type="text" name="LastName" id="exampleFormControlInput1" placeholder="second name" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1"> Primary Account</Form.Label>
                  <Form.Control type="text" name="PrimaryAccount" id="exampleFormControlInput1" placeholder="Primary Account" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Title</Form.Label>
                  <Form.Control type="text" name="Title" id="exampleFormControlInput1" placeholder="Title" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Phone Work</Form.Label>
                  <Form.Control type="Number" name="PhoneWork" id="exampleFormControlInput1" placeholder="Phone Work" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Phone Home</Form.Label>
                  <Form.Control type="Number" name="PhoneHome" id="exampleFormControlInput1" placeholder="Phone Home" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Phone Mobile</Form.Label>
                  <Form.Control type="Number" name="PhoneMobile" id="exampleFormControlInput1" placeholder="Phone Mobile" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Phone Other</Form.Label>
                  <Form.Control type="Number" name="PhoneOther" id="exampleFormControlInput1" placeholder="Phone Other" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Website</Form.Label>
                  <Form.Control type="text" name="Website" id="exampleFormControlInput1" placeholder="https//Website.com" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Assigned</Form.Label>
                  <Form.Control type="text" name="Assigned" id="exampleFormControlInput1" placeholder="Assigned" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Teams</Form.Label>
                  <Form.Control type="text" name="Teams" id="exampleFormControlInput1" placeholder="Teams" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Partner</Form.Label>
                  <Form.Control type="text" name="Partner" id="exampleFormControlInput1" placeholder="Partner name" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Category</Form.Label>
                  <Form.Control type="text" name="Category" id="exampleFormControlInput1" placeholder="Category" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Department</Form.Label>
                  <Form.Control type="text" name="Department" id="exampleFormControlInput1" placeholder="Department" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Business Role</Form.Label>
                  <Form.Control type="text" name="BusinessRole" id="exampleFormControlInput1" placeholder="Business Role" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Reports</Form.Label>
                  <Form.Control type="text" name="Reports" id="exampleFormControlInput1" placeholder="Reports" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Assistant Ph</Form.Label>
                  <Form.Control type="Number" name="AssistantPh" id="exampleFormControlInput1" placeholder="Assistant Ph" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Primary City</Form.Label>
                  <Form.Control type="text" name="PrimaryCity" id="exampleFormControlInput1" placeholder="Primary City" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Primary State</Form.Label>
                  <Form.Control type="text" name="PrimaryState" id="exampleFormControlInput1" placeholder="Primary State" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Primary Country</Form.Label>
                  <Form.Control type="text" name="PrimaryCountry" id="exampleFormControlInput1" placeholder="Primary Country" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Primary Postal</Form.Label>
                  <Form.Control type="text" name="PrimaryPostal" id="exampleFormControlInput1" placeholder="Primary Postal" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Secondary City</Form.Label>
                  <Form.Control type="text" name="SecondaryCity" id="exampleFormControlInput1" placeholder="Secondary City" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Secondary State</Form.Label>
                  <Form.Control type="text" name="SecondaryState" id="exampleFormControlInput1" placeholder="Secondary State" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Secondary Country</Form.Label>
                  <Form.Control type="text" name="SecondaryCountry" id="exampleFormControlInput1" placeholder="Secondary Country" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Secondary Postal</Form.Label>
                  <Form.Control type="text" name="SecondaryPostal" id="exampleFormControlInput1" placeholder="Secondary Postal" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col md="12" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Description</Form.Label>
                  <Form.Control as="textarea" rows= "4" name="Description" id="exampleFormControlInput1" placeholder="Description" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col xs="12">
                <div className="mt-3">
                  <Button onClick={onSubmitHandler} type="submit">Submit</Button>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Footer />
      </div>
    </form>
    </>
  )
}

export default AddCrm