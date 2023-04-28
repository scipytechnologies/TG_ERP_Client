import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import img1 from "../assets/img/img1.jpg";

export default function LockScreen() {
  return (
    <div className="page-sign">
      <Card className="card-sign">
        <Card.Header className="d-flex flex-column align-items-center">
          <Link to="/" className="header-logo mb-4">dashbyte</Link>
          <Card.Title className="text-center">Account Locked</Card.Title>
          <Card.Text className="text-center">Your account was locked due to inactivity.</Card.Text>
        </Card.Header>
        <Card.Body>
          <Link to="/" className="card-thumb"><img src={img1} alt="" /></Link>
          <div className="mb-4">
            <Form.Label className="d-flex justify-content-between">Password <Link to="/">Forgot password?</Link></Form.Label>
            <Form.Control type="password" placeholder="Enter your password" />
          </div>
          <Button variant="primary" className="btn-sign">Unlock</Button>
        </Card.Body>
        <Card.Footer>
          Not you? <Link to="/pages/signin">Sign in with different account</Link>
        </Card.Footer>
      </Card>
    </div>
  )
}