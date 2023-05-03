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
  const [form, setform] = useState("")
  const onChangeHandler = (event) => {
    setform({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(form);
  }


  return (
    <>
      <form onSubmit={onSubmitHandler}>
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
                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="PrjName">Project Name</Form.Label>
                    <Form.Control type="text" id="PrjName" name="PrjName" placeholder="Project Name" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Type">Type</Form.Label>
                    <Form.Control type="text" id="Type" name="Type" placeholder="Type" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Account">Account</Form.Label>
                    <Form.Control type="text" id="Account" name="Account" placeholder="Account" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="AssignedTo">Assigned To</Form.Label>
                    <Form.Control type="text" id="AssignedTo" name="AssignedTo" placeholder="Assigned To" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Teams">Teams</Form.Label>
                    <Form.Control type="text" id="Teams" name="Teams" placeholder="Teams" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Status">Status</Form.Label>
                    <Form.Control type="text" id="Status" name="Status" placeholder="Status" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="StartDate">Start Date</Form.Label>
                    <Form.Control type="Date" id="StartDate" name="StartDate" placeholder="Start Date" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="EndDate">End Date</Form.Label>
                    <Form.Control type="Date" id="EndDate" name="EndDate" placeholder="End Date" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="UseTimesheet">Use Time sheet</Form.Label>
                    <Form.Control type="text" id="UseTimesheet" name="UseTimesheet" placeholder="Use Time sheet" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Amount">Amount</Form.Label>
                    <Form.Control type="Number" id="Amount" name="Amount" placeholder="Amount" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="LeadSource">Lead Source</Form.Label>
                    <Form.Control type="text" id="LeadSource" name="LeadSource" placeholder="Lead Source" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Progress">Progress</Form.Label>
                    <Form.Control type="text" id="Progress" name="Progress" placeholder="Progress" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Description">Description</Form.Label>
                    <Form.Control as="textarea" id="Description" name="Description" rows="4" placeholder="Description" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col md="12">
                  <Button type="submit">Submit</Button>
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

export default AddProject