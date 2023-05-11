import React from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Form } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import mainservice from '../../services/mainservice';



function PostEmployee() {
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
  async function AddEmployee(form) {
    console.log(form);
    const res = await mainservice.AddEmployee(form);
    if (res.data != null) {
      console.log("Employee Added");
    }
    else {
      console.log(res);
    }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    AddEmployee(form);
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
                <li className="breadcrumb-item"><Link to="/dashboard/employee">Employee</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Add Employee</li>
              </ol>
              <h4 className="main-title mb-0">Create New Employee</h4>
            </div>
          </div>

          {/* responsive form in a card */}
          <Card>
            <Card.Body>
              <Row className="g-4">
                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="EmpCode">Employee Code</Form.Label>
                    <Form.Control type="text" id="EmpCode" name="EmpCode" placeholder="Employee Code" onChange={onChangeHandler}/>
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Name">Name</Form.Label>
                    <Form.Control type="text" id="Name" name="Name" placeholder="Name" onChange={onChangeHandler}/>
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="DOB">DOB</Form.Label>
                    <Form.Control type="text" id="DOB" name="DOB" placeholder="DOB" onChange={onChangeHandler}/>
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Phone">Phone</Form.Label>
                    <Form.Control type="Number" id="Phone" name="Phone" placeholder="Phone" onChange={onChangeHandler}/>
                  </div>
                </Col>

                

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Department">Department</Form.Label>
                    <Form.Control type="text" id="Department" name="Department" placeholder="Department" onChange={onChangeHandler}/>
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Designation">Designation</Form.Label>
                    <Form.Control type="text" id="Designation" name="Designation" placeholder="Designation" onChange={onChangeHandler}/>
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="BankAccNo">Bank Account No</Form.Label>
                    <Form.Control type="Number" id="BankAccountNo" name="BankAccNo" placeholder="Bank Account No" onChange={onChangeHandler}/>
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="BankAccountName">Bank Account Name</Form.Label>
                    <Form.Control type="text" id="BankAccountName" name="BankAccName" placeholder="Bank Account Name" onChange={onChangeHandler}/>
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="BankBranch">Bank Branch</Form.Label>
                    <Form.Control type="text" id="BankBranch" name="BankBranch" placeholder="Bank Branch" onChange={onChangeHandler}/>
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="BankIFSCCode">Bank IFSC Code</Form.Label>
                    <Form.Control type="text" id="BankIFSCCode" name="BankIFSCCode" placeholder="Bank IFSC Code" onChange={onChangeHandler}/>
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="PFNo">PF No</Form.Label>
                    <Form.Control type="Number" id="PFNo" name="PFNo" placeholder="PFNo" onChange={onChangeHandler}/>
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="ESI">ESI</Form.Label>
                    <Form.Control type="text" id="ESI" name="ESI" placeholder="ESI" onChange={onChangeHandler}/>
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="UAN">UAN</Form.Label>
                    <Form.Control type="text" id="UAN" name="UAN" placeholder="UAN" onChange={onChangeHandler}/>
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="From">From</Form.Label>
                    <Form.Control type="text" id="From" name="From" placeholder="From" onChange={onChangeHandler}/>
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="To">To</Form.Label>
                    <Form.Control type="text" id="To" name="To" placeholder="To" onChange={onChangeHandler}/>
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Email">Email</Form.Label>
                    <Form.Control type="email" id="Email" name="Email" placeholder="Email" onChange={onChangeHandler}/>
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Password">Password</Form.Label>
                    <Form.Control type="password" id="Password" name="Password" placeholder="Password" onChange={onChangeHandler}/>
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Role">Role</Form.Label>
                    <Form.Control type="text" id="Role" name="Role" placeholder="Role" onChange={onChangeHandler}/>
                  </div>
                </Col>

                <Col xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Address">Address</Form.Label>
                    <Form.Control as="textarea" id="Address" name="Address" rows="4" placeholder="Address" onChange={onChangeHandler}/>
                  </div>
                </Col>

                <Col md="12">
                  <Button onClick={onSubmitHandler} type="submit">Submit</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Footer />
        </div>
      </form>
    </>
  )
}

export default PostEmployee