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
                <li className="breadcrumb-item"><Link to="/dashboard/crm">Invoice</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Add Invoice</li>
              </ol>
              <h4 className="main-title mb-0">Create New Invoice</h4>
            </div>
          </div>

          {/* responsive form in a card */}
          <Card>
            <Card.Body>
              <Row className="g-4">
                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="InvoiceNumber">Invoice Number</Form.Label>
                    <Form.Control type="Number" id="InvoiceNumber" name="InvoiceNumber" placeholder="Invoice Number" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="InvoiceSubject">Invoice Subject</Form.Label>
                    <Form.Control type="text" id="InvoiceSubject" name='InvoiceSubject' placeholder="Invoice Subject" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Notes">Notes</Form.Label>
                    <Form.Control type="text" id="Notes" name='Notes' placeholder="Notes" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Terms">Terms</Form.Label>
                    <Form.Control type="text" id="Terms" name='Terms' placeholder="Terms" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="InvoiceDate">Invoice Date</Form.Label>
                    <Form.Control type="Date" id="InvoiceDate" name='InvoiceDate' placeholder="Invoice Date" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="DueDate">Due Date</Form.Label>
                    <Form.Control type="Date" id="DueDate" name='DueDate' placeholder="Due Date" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="AmountDue">Amount Due</Form.Label>
                    <Form.Control type="Number" id="AmountDue" name='AmountDue' placeholder="Amount Due" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="QuoteNo">Quote No</Form.Label>
                    <Form.Control type="Number" id="QuoteNo" name='QuoteNo' placeholder="Quote No" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="OrderNo">Order No</Form.Label>
                    <Form.Control type="Number" id="OrderNo" name='OrderNo' placeholder="Order No" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="PurchaseOrderNo">Purchase Order No</Form.Label>
                    <Form.Control type="Number" id="PurchaseOrderNo" name='PurchaseOrderNo' placeholder="Purchase Order No" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="BillingAddress">Billing Address</Form.Label>
                    <Form.Control type="text" id="BillingAddress" name='BillingAddress' placeholder="Billing Address" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="TaxInformation">Tax Information</Form.Label>
                    <Form.Control type="text" id="TaxInformation" name='TaxInformation' placeholder="Tax Information" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col xs="12">
                  <Button type='submit'>Submit</Button>
                </Col>
              </Row>



            </Card.Body>
          </Card>

          <Footer />

        </div >
      </form>

    </>
  )
}

export default AddCrm