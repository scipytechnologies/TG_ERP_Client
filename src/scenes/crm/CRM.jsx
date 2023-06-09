import React from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Table } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import { Grid } from "gridjs-react";
import { useSelector } from 'react-redux';

function CRM() {
  // to maintain dark and light mode
  const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
  const [skin, setSkin] = useState(currentSkin);
  const navigate = useNavigate()

  // fetch customer counts from reduxt
  const customerCount = useSelector((state) => state.crmAnaltics.customers);

  return (
    <>
      <Header onSkin={setSkin} />
      <div className="main main-app p-3 p-lg-4">
        <div className="d-md-flex align-items-center justify-content-between mb-4">
          <div>
            <ol className="breadcrumb fs-sm mb-1">
              <li className="breadcrumb-item"><Link to="/dashboard/home">Dashboard</Link></li>
              <li className="breadcrumb-item active" aria-current="page">CRM</li>
            </ol>
            <h4 className="main-title mb-0">Customer Management</h4>
          </div>
        </div>

        {/* analatics cards */}
        <Row className="g-3">
          <Col xs="12" md="4">
            <Card className='card-one p-2'>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="card-icon bg-primary"><i className="ri-team-fill"></i></div>
                  <div className="ms-2">
                    {/* <h4 className="card-value mb-1">{customerCount}</h4> */}
                    <span className="d-block fs-lg fw-medium">Customers</span>
                  </div>
                </div>
                <h2 className="performance-value mb-0">{customerCount} <small className="text-success d-flex align-items-center"><i className="ri-arrow-up-line"></i> 2.8%</small></h2>
              </div>
            </Card>
          </Col>

          <Col xs="12" md="4">
            <Card className='card-one p-2'>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="card-icon bg-ui-02"><i className="ri-line-chart-fill"></i></div>
                  <div className="ms-2">
                    {/* <h4 className="card-value mb-1">200</h4> */}
                    <span className="d-block fs-lg fw-medium">Opportunites</span>
                  </div>
                </div>
                <h2 className="performance-value mb-0">50 <small className="text-success d-flex align-items-center"><i className="ri-arrow-up-line"></i> 2.8%</small></h2>
              </div>
            </Card>
          </Col>

          <Col xs="12" md="4">
            <Card className='card-one p-2'>
              <div className="d-flex align-items-center justify-content-between">
                <div className='d-flex align-items-center'>
                  <div className="card-icon bg-ui-03"><i className="ri-exchange-funds-line"></i></div>
                  <div className="ms-2">
                    {/* <h4 className="card-value mb-1">150</h4> */}
                    <span className="d-block fs-lg fw-medium">Leads</span>
                  </div>
                </div>
                <h2 className="performance-value mb-0">100<small className="text-success d-flex align-items-center"><i className="ri-arrow-up-line"></i> 2.8%</small></h2>
              </div>
            </Card>
          </Col>


          <Col xl="6">
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Latest Leads</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body className="overflow-hidden">

                <Table className="table-one" responsive>
                  <thead>
                    <tr>
                      <th>Opportunity Name</th>
                      <th>Sales Stage</th>
                      <th>Close Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        "name": "Google Chrome",
                        "stage": "Begining",
                        "date": "01-May"
                      },
                      {
                        "name": "Mozilla Firefox",
                        "stage": "Begining",
                        "date": "04-Apr"
                      },
                      {
                        "name": "Apple Safari",
                        "stage": "Begining",
                        "date": "01-May"
                      },
                      {
                        "name": "Microsoft Edge",
                        "stage": "Begining",
                        "date": "20-Dec"
                      },
                      {
                        "name": "Opera",
                        "stage": "Begining",
                        "date": "01-May"
                      },
                      {
                        "name": "Internet Explorer",
                        "stage": "Begining",
                        "date": "30-May"
                      }
                    ].map((item, index) => (
                      <tr key={index}>

                        <td>{item.name}</td>
                        <td>{item.stage}</td>
                        <td>{item.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>

              </Card.Body>
            </Card>
          </Col>


          <Col xl="6">
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Upcoming Meetings</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body className="overflow-hidden">
                <Table className="table-one" responsive>
                  <thead>
                    <tr>
                      <th>Opportunity Name</th>
                      <th>Sales Stage</th>
                      <th>Close Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        "name": "Google Chrome",
                        "stage": "Begining",
                        "date": "01-May"
                      },
                      {
                        "name": "Mozilla Firefox",
                        "stage": "Begining",
                        "date": "04-Apr"
                      },
                      {
                        "name": "Apple Safari",
                        "stage": "Begining",
                        "date": "01-May"
                      },
                      {
                        "name": "Microsoft Edge",
                        "stage": "Begining",
                        "date": "20-Dec"
                      },
                      {
                        "name": "Opera",
                        "stage": "Begining",
                        "date": "01-May"
                      },
                      {
                        "name": "Internet Explorer",
                        "stage": "Begining",
                        "date": "30-May"
                      }
                    ].map((item, index) => (
                      <tr key={index}>

                        <td>{item.name}</td>
                        <td>{item.stage}</td>
                        <td>{item.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>

          <Col lg="12">
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Tasks</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body className="overflow-hidden">

              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Footer />
      </div>
    </>
  )
}

export default CRM