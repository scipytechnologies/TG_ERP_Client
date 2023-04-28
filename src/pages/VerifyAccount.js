import React from "react";
import { Button, Card, Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import pageSvg from "../assets/svg/mailbox.svg";

export default function VerifyAccount() {

  document.body.classList.remove("sidebar-show");

  return (
    <div className="page-auth">
      <div className="header">
        <Container>
          <Link to="/" className="header-logo">dashbyte</Link>
          <Nav className="nav-icon">
            <Nav.Link href=""><i className="ri-twitter-fill"></i></Nav.Link>
            <Nav.Link href=""><i className="ri-github-fill"></i></Nav.Link>
            <Nav.Link href=""><i className="ri-dribbble-line"></i></Nav.Link>
          </Nav>
        </Container>
      </div>

      <div className="content">
        <Container>
          <Card className="card-auth">
            <Card.Body className="text-center">
              <div className="mb-5">
                <object type="image/svg+xml" data={pageSvg} className="w-50" aria-label="svg image"></object>
              </div>
              <Card.Title>Verify your email address</Card.Title>
              <Card.Text className="mb-5">Please check your email and click the verify button or link to verify your account.</Card.Text>

              <Row className="g-2 g-sm-3">
                <Col sm><Button variant="primary" href="">Resend Verification</Button></Col>
                <Col sm><Button variant="secondary">Contact Support</Button></Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
}