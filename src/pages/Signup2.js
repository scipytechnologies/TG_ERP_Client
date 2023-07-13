
import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import mainservice from "../services/mainservice";

import bg1 from "../assets/img/bg1.jpg";

export default function Signup2() {

  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    console.log(form);
  };
  async function SignUp(form) {
    console.log(form);
    const res = await mainservice.SignUp(form)
    if (res.data != null) {
      console.log(res.data);
      navigate("/pages/signin2")
    }
    else {
      console.log("Something went wrong");
    }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    SignUp(form);

  }
  return (
    <div className="page-sign d-block py-0">
      <Row className="g-0">
        <Col md="7" lg="5" xl="4" className="col-wrapper">
          <Card className="card-sign">
            <Card.Header>
              <Link to="/" className="header-logo mb-5">TGrade ERP</Link>
              <Card.Title>Sign Up</Card.Title>
              <Card.Text>It's free to signup and only takes a minute.</Card.Text>
            </Card.Header>
            <Card.Body>
              <Form method="get" onSubmit={onSubmitHandler}>
                <div className="mb-3">
                  <Form.Label>First name</Form.Label>
                  <Form.Control name="firstName" type="text" placeholder="Enter your First name" onChange={onChangeHandler} />
                </div>
                <div className="mb-3">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control name="lastName" type="text" placeholder="Enter your Last name" onChange={onChangeHandler} />
                </div>
                <div className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control name="email" type="text" placeholder="Enter your email address" onChange={onChangeHandler} />
                </div>
                <div className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control name="password" type="password" placeholder="Enter your password" onChange={onChangeHandler} />
                </div>


                <div className="mb-4">
                  <small>By clicking <strong>Create Account</strong> below, you agree to our terms of service and privacy statement.</small>
                </div>
                <Button type="submit" variant="primary" className="btn-sign">Create Account</Button>
              </Form>
              <div className="divider"><span>or sign up using</span></div>

              <Row className="gx-2">
                <Col><Button variant="" className="btn-facebook"><i className="ri-facebook-fill"></i> Facebook</Button></Col>
                <Col><Button variant="" className="btn-google"><i className="ri-google-fill"></i> Google</Button></Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              Already have an account? <Link to="/pages/signin2">Sign In</Link>
            </Card.Footer>
          </Card>
        </Col>
        <Col className="d-none d-lg-block">
          <img src={bg1} className="auth-img" alt="" />
        </Col>
      </Row>
    </div>
  );
}