import React from "react";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import pageSvg from "../assets/svg/software_engineer.svg";

export default function ServiceUnavailable() {

  document.body.classList.remove("sidebar-show");

  return (
    <div className="page-error">
      <div className="header">
        <Container>
          <a href="/" className="sidebar-logo">dashbyte</a>
          <Nav className="nav-icon">
            <Nav.Link href=""><i className="ri-twitter-fill"></i></Nav.Link>
            <Nav.Link href=""><i className="ri-github-fill"></i></Nav.Link>
            <Nav.Link href=""><i className="ri-dribbble-line"></i></Nav.Link>
          </Nav>
        </Container>
      </div>

      <div className="content">
        <Container>
          <Row className="gx-5">
            <Col lg="5" className="d-flex flex-column align-items-center">
              <h1 className="error-number">503</h1>
              <h2 className="error-title">Service Unavailable</h2>
              <p className="error-text">Oopps. The server is unable to service your request due to maintenance downtime or capacity problems. Please try again later.</p>
              <Button variant="primary" className="btn-error">Back to Dashboard</Button>
            </Col>
            <Col xs="8" lg="6" className="mb-5 mb-lg-0">
              <object type="image/svg+xml" data={pageSvg} className="w-100" aria-label="svg image"></object>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}