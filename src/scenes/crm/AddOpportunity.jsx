import React from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Form } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'

function AddOpportunity() {
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
              <li className="breadcrumb-item active" aria-current="page">Add Opportunity</li>
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
                  <Form.Label htmlFor="OpportunityName">Opportunity Name</Form.Label>
                  <Form.Control type="text" id="OpportunityName" placeholder="OpportunityName" />
                </div>
              </Col>

              <Col md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="SalesStage">Sales Stage</Form.Label>
                  <Form.Control type="text" id="SalesStage" placeholder="SalesStage" />
                </div>
              </Col>

              <Col md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="CloseDate">Close Date</Form.Label>
                  <Form.Control type="Date" id="CloseDate" placeholder="CloseDate" />
                </div>
              </Col>

              <Col md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="Amount">Amount</Form.Label>
                  <Form.Control type="Number" id="Amount" placeholder="Amount" />
                </div>
              </Col>

              <Col md="12" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="Description">Description</Form.Label>
                  <Form.Control as="textarea" id="Description" rows="4" placeholder="Description" />
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

export default AddOpportunity