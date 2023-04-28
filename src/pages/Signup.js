import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="page-sign">
      <Card className="card-sign">
        <Card.Header>
          <Link to="/" className="header-logo mb-4">dashbyte</Link>
          <Card.Title>Sign Up</Card.Title>
          <Card.Text>It's free to signup and only takes a minute.</Card.Text>
        </Card.Header>
        <Card.Body>
          <div className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter your email address" />
          </div>
          <div className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your password" />
          </div>
          <div className="mb-3">
            <Form.Label>Full name</Form.Label>
            <Form.Control type="text" placeholder="Enter your full name" />
          </div>
          <div className="mb-4">
            <small>By clicking <strong>Create Account</strong> below, you agree to our terms of service and privacy statement.</small>
          </div>
          <Button variant="primary" className="btn-sign">Create Account</Button>

          <div className="divider"><span>or sign up using</span></div>

          <Row className="gx-2">
            <Col><Button variant="" className="btn-facebook"><i className="ri-facebook-fill"></i> Facebook</Button></Col>
            <Col><Button variant="" className="btn-google"><i className="ri-google-fill"></i> Google</Button></Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          Already have an account? <Link to="/pages/signin">Sign In</Link>
        </Card.Footer>
      </Card>
    </div>
  );
}