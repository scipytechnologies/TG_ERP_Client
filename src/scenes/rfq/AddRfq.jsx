import React from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Form } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'

function AddRFQ() {
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
                <li className="breadcrumb-item"><Link to="/dashboard/RFQ">RFQ</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Add RFQ</li>
              </ol>
              <h4 className="main-title mb-0">Create New RFQ</h4>
            </div>
          </div>

          {/* responsive form in a card */}
          <Card>
            <Card.Body>
              <Row className="g-4">
                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="RequisitionDate">Requisition Date</Form.Label>
                    <Form.Control type="Date" id="RequisitionDate" name="RequisitionDate" placeholder="Requisition Date" onChange={onChangeHandler}/>
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="PurchaseRequisition">Purchase Requisition</Form.Label>
                    <Form.Control type="text" id="PurchaseRequisition" name="PurchaseRequisition" placeholder="Purchase Requisition" onChange={onChangeHandler}/>
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="TypeofRequisition">Type of Requisition</Form.Label>
                    <Form.Control type="text" id="TypeofRequisition" name="TypeofRequisition" placeholder="Type of Requisition" onChange={onChangeHandler}/>
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="JDERequisition">JDE Requisition</Form.Label>
                    <Form.Control type="text" id="JDERequisition" name="JDERequisition" placeholder="JDE Requisition" onChange={onChangeHandler}/>
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Company">Company</Form.Label>
                    <Form.Control type="text" id="Company" name="Company" placeholder="Company" onChange={onChangeHandler}/>
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="CompanyCode">Company Code</Form.Label>
                    <Form.Control type="text" id="CompanyCode" name="CompanyCode" placeholder="Company Code" onChange={onChangeHandler}/>
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="RequisitorsName">Requisitors Name</Form.Label>
                    <Form.Control type="text" id="RequisitorsName" name="RequisitorsName" placeholder="Requisitors Name" onChange={onChangeHandler}/>
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="ProjectName">Project Name</Form.Label>
                    <Form.Control type="text" id="ProjectName" name="ProjectName" placeholder="Project Name" onChange={onChangeHandler}/>
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="ProjectCode">Project Code</Form.Label>
                    <Form.Control type="text" id="ProjectCode" name="ProjectCode" placeholder="Project Code" onChange={onChangeHandler}/>
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Phone">Phone</Form.Label>
                    <Form.Control type="Number" id="Phone" name="Phone" placeholder="Phone" onChange={onChangeHandler}/>
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Department">Department</Form.Label>
                    <Form.Control type="text" id="Department" name="Department" placeholder="Department" onChange={onChangeHandler}/>
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="DeliveryDate">Delivery Date</Form.Label>
                    <Form.Control type="Date" id="DeliveryDate" name="DeliveryDate" placeholder="Delivery Date" onChange={onChangeHandler}/>
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Priority">Priority</Form.Label>
                    <Form.Control type="text" id="Priority" name="Priority" placeholder="Priority" onChange={onChangeHandler}/>
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="PointofDelivery">Point of Delivery</Form.Label>
                    <Form.Control type="Date" id="PointofDelivery" name="PointofDelivery" placeholder="Point of Delivery" onChange={onChangeHandler}/>
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Receivedby">Received by</Form.Label>
                    <Form.Control type="text" id="Receivedby" name="Receivedby" placeholder="Received by" onChange={onChangeHandler}/>
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Contactdetails">Contact details</Form.Label>
                    <Form.Control type="text" id="Contactdetails" name="Contactdetails" placeholder="Contact details" onChange={onChangeHandler}/>
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Product">Product</Form.Label>
                    <Form.Control type="text" id="Product" name="Product" placeholder="Product" onChange={onChangeHandler}/>
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Specialinstruction">Special instruction</Form.Label>
                    <Form.Control type="text" id="Specialinstruction" name="Specialinstruction" placeholder="Special instruction" onChange={onChangeHandler}/>
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

export default AddRFQ