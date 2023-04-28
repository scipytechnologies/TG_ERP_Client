import React from "react";
import { Button, Card, Col, Container, Form, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import pageSvg from "../assets/svg/forgot_password.svg";

export default function ForgotPassword() {

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
              <Card.Title>Reset your password</Card.Title>
              <Card.Text className="mb-5">Enter your username or email address and we will send you a link to reset your password.</Card.Text>

              <Row className="g-2">
                <Col sm="8"><Form.Control type="text" placeholder="Enter email address" /></Col>
                <Col sm="4"><Button variant="primary" href="">Reset</Button></Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
}