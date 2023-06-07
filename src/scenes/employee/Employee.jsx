import React from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Table } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'

function Employee() {
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
              <li className="breadcrumb-item active" aria-current="page">Employee</li>
            </ol>
            <h4 className="main-title mb-0">Employee Managment</h4>
          </div>

        </div>

        {/* analatics cards */}
        <Row className="g-3">
          <Col xs="12" md="4">
            <Card>
              <Card.Body>
                <div className="d-flex align-item-center justify-content-between">
                  <div>
                    <h6>Total Employees</h6>
                    <h2>1,409</h2>
                  </div>
                  <small className="text-success d-flex align-items-center"><i className="ri-arrow-up-line"></i> 2.8%</small>
                </div>
              </Card.Body>
              <Card.Footer className="bg-primary text-light">
                13 new applications need review
              </Card.Footer>
            </Card>
          </Col>

          <Col xs="12" md="4">
            <Card>
              <Card.Body>
                <div className="d-flex align-item-center justify-content-between">
                  <div>
                    <h6>Total Overtime</h6>
                    <h2>569</h2>
                  </div>
                  <small className="text-success d-flex align-items-center"><i className="ri-arrow-up-line"></i> 2.8%</small>
                </div>
              </Card.Body>
              <Card.Footer className="bg-primary text-light">
                103 overtime schedules needed approval
              </Card.Footer>
            </Card>
          </Col>

          <Col xs="12" md="4">
            <Card>
              <Card.Body>
                <div className="d-flex align-item-center justify-content-between">
                  <div>
                    <h6>Total Leaves</h6>
                    <h2>103</h2>
                  </div>
                  <small className="text-success d-flex align-items-center"><i className="ri-arrow-up-line"></i> 2.8%</small>
                </div>
              </Card.Body>
              <Card.Footer className="bg-primary text-light">
                98 paid leave plan need approval
              </Card.Footer>
            </Card>
          </Col>



          <Col xs="12" md="8">
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Performance Reached</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                  <Nav.Link href=""><i className="ri-more-2-fill"></i></Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body className="px-3 pt-2">
                {/* <ReactApexChart series={seriesFive} options={optionFive} type="area" height={200} className="apex-chart-three" /> */}

                <Table className="table-agent mb-0" responsive>
                  <thead>
                    <tr>
                      <th>PerID</th>
                      <th>Name of Performer</th>
                      <th>Status</th>
                      <th>Quota</th>
                      <th>Reached</th>
                      <th>Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        "id": "00035",
                        "avatar": {
                          "initial": "A"
                        },
                        "name": "Allan R. Palban",
                        "email": "allan@themepixels.me",
                        "status": {
                          "variant": "primary",
                          "label": "Active"
                        },
                        "quota": "120",
                        "reached": "64",
                        "star": ["fill", "fill", "fill", "half-fill", "line"]
                      }, {
                        "id": "00028",
                        "avatar": {
                          "initial": "C"
                        },
                        "name": "Charlene S. Plateros",
                        "email": "charlene@themepixels.me",
                        "status": {
                          "variant": "ui-02",
                          "label": "Away"
                        },
                        "quota": "100",
                        "reached": "79",
                        "star": ["fill", "fill", "fill", "fill", "line"]
                      }, {
                        "id": "00025",
                        "avatar": {
                          "initial": "A",
                          "bg": "bg-gray-700"
                        },
                        "name": "Adrian M. Moniño",
                        "email": "adrian@themepixels.me",
                        "status": {
                          "variant": "primary",
                          "label": "Active"
                        },
                        "quota": "130",
                        "reached": "108",
                        "star": ["fill", "fill", "fill", "line", "line"]
                      }, {
                        "id": "00024",
                        "avatar": {
                          "initial": "M"
                        },
                        "name": "Marianne B. Audrey",
                        "email": "marianne@themepixels.me",
                        "status": {
                          "variant": "primary",
                          "label": "Active"
                        },
                        "quota": "110",
                        "reached": "45",
                        "star": ["fill", "fill", "fill", "fill", "line"]
                      }, {
                        "id": "00023",
                        "avatar": {
                          "initial": "C",
                          "bg": "bg-gray-700"
                        },
                        "name": "Carlyn Y. Salomon",
                        "email": "carlyn@themepixels.me",
                        "status": {
                          "variant": "secondary",
                          "label": "Inactive"
                        },
                        "quota": "120",
                        "reached": "32",
                        "star": ["fill", "fill", "fill", "half-fill", "line"]
                      }
                    ].map((item, index) => (
                      <tr key={index}>
                        <td><span className="ff-numerals">{item.id}</span></td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="avatar"><span className={"avatar-initial" + (item.avatar.bg ? " " + item.avatar.bg : "")}>{item.avatar.initial}</span></div>
                            <div>
                              <h6 className="mb-0">{item.name}</h6>
                              <span className="fs-xs text-secondary">{item.email}</span>
                            </div>
                          </div>
                        </td>
                        <td><span className={"badge bg-" + item.status.variant}>{item.status.label}</span></td>
                        <td><span className="ff-numerals">{item.quota}</span></td>
                        <td><span className="ff-numerals">{item.reached}</span></td>
                        <td>
                          <div className="d-flex gap-1 text-primary fs-16">
                            {item.star.map((star, ind) => (
                              <i key={ind} className={"ri-star-" + star}></i>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>

          <Col xs="12" md="4">
            <Card>
              <Card.Body>

              </Card.Body>
            </Card>
          </Col>


          <Col xs="12" md="6">
            <Card>
              <Card.Body>

              </Card.Body>

            </Card>
          </Col>

          <Col xs="12" md="6">
            <Card>
              <Card.Body>

              </Card.Body>
            </Card>
          </Col>

        </Row>
        <Footer />
      </div>
    </>
  )
}

export default Employee