import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Card, Col, Nav, Row, Button, Form } from "react-bootstrap";
import Footer from "../../layouts/Footer";
import HeaderMobile from "../../layouts/HeaderMobile";
import Avatar from "../../components/Avatar";
import Header from "../../layouts/Header";
import mainservice from "../../services/mainservice";
import { useEffect } from 'react';
import img5 from "../../assets/img/img5.jpg";
import ReactDatePicker from "react-datepicker";
import { useSelector, useDispatch } from "react-redux";

export default function AddHrm() {
  const currentSkin = localStorage.getItem("skin-mode") ? "dark" : "";
  const [skin, setSkin] = useState(currentSkin);
  const navigate = useNavigate()
  const index = useSelector((state) => state.index);
  console.log(index);
  console.log(index.EmployeeID, "EmployeeID");
  const userdata = useSelector((state) => state.loginedUser)

  const [activeTab, setActiveTab] = useState("1");
  function handleTabs(no) {
    setActiveTab(no);
  }

  const [form, setForm] = useState({});
  const [user, setUser] = useState({});

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    setUform({
      ...uform,
      [event.target.name]: event.target.value
    });
    console.log(uform);
  };

  async function AddEmployee(form) {
    console.log(form);
    const res = await mainservice.addEmployee(form, index.EmployeeID);
    if (res.data != null) {
      console.log("Employee Added");
    }
    else {
      console.log(res);
    }
  }

  const onUserChangeHandler = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
    console.log(user);
  };

  async function SignUp(data) {
    console.log(data);
    const CData = { Company: userdata.CompanyID }
    const sentData = { ...CData, ...data }
    const res = await mainservice.SignUp(sentData);
    if (res.data != null) {
      console.log(res.data.id);
      const addon = { UserId: res.data.id, EmpCode: "696969", firstName: res.data.firstName, lastName: res.data.lastName, Email: res.data.email }
      const postData = { ...addon, ...form }
      const emp = await mainservice.addEmployee(postData, index.EmployeeID);
      if (emp.data != null) {
        console.log("employee Added");
      } else {
        console.log("User Check Employee FAIL");
      }
    } else {
      console.log("Something went wrong");
    }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const addon = { company: "123456", role: "employee" };
    const data = { ...user, ...addon };
    console.log(data, "data");
    SignUp(data);
    AddEmployee(form);
  };
  const [showTemporaryAddress, setShowTemporaryAddress] = useState(false);
  const onCheckboxChange = (e) => {
    setShowTemporaryAddress(e.target.checked);
  };

  const onUpdateHandler = (event) => {
    event.preventDefault();
    console.log(uform);
    editEmployee(uform);
  };

  async function editEmployee(uform) {
    const res = await mainservice.editEmployee(index.EmployeeID, id, uform);
    if (res.data != null) {
      console.log(res.data, "Employee Details updated");
    }
    else {
      console.log(res);
    }
  }

  let [searchParams, setSearchParams] = useSearchParams();
  const [uform, setUform] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const id = searchParams.get("id");
  const CheckEdit = async () => {
    if (id) {
      setEditMode(true)
      const res = await mainservice.getEmployee(index.EmployeeID, id);
      setUform(res.data)
      console.log(res.data, "this");
    }
  }
  useEffect(() => {
    CheckEdit()
  }, []);

  return (
    <React.Fragment>
      <Header onSkin={setSkin} />
      <HeaderMobile />
      <div className="main p-4 p-lg-5">
        <Row className="g-5 mt-5">
          <Col xl>
            <div className="media-profile mb-5">
              <div className="media-body">
                <h5 className="media-name">Add New Employee</h5>
                <p className="mb-0">
                  Redhead, Innovator, Saviour of Mankind, Hopeless Romantic,
                  Attractive 20-something Yogurt Enthusiast. You can replace
                  this with any content and adjust it as needed...{" "}
                  <Link to="">Read more</Link>
                </p>
              </div>
            </div>
            <Nav className="nav-line mt-5">
              <Nav.Link
                className={activeTab === "1" ? "active" : ""}
                onClick={() => handleTabs("1")}
              >
                General
              </Nav.Link>
              <Nav.Link
                className={activeTab === "2" ? "active" : ""}
                onClick={() => handleTabs("2")}
              >
                General
              </Nav.Link>
              <Nav.Link
                className={activeTab === "3" ? "active" : ""}
                onClick={() => handleTabs("3")}
              >
                General
              </Nav.Link>
              <Nav.Link
                className={activeTab === "4" ? "active" : ""}
                onClick={() => handleTabs("4")}
              >
                General
              </Nav.Link>
            </Nav>
            {activeTab === "1" && (
              <Card className="card-post mt-4">
                <Card.Header>
                  <Card.Title>Personal Details</Card.Title>
                  <Link to="" className="link-more">
                    <i className="ri-more-2-fill"></i>
                  </Link>
                </Card.Header>
                <Card.Body>
                  <Row className="g-4">
                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="firstName">First Name</Form.Label>
                        <Form.Control type="text" id="firstName" name="firstName" value={uform.firstName} placeholder="Employee Code" onChange={onChangeHandler} />
                      </div>
                    </Col>
                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="lastName">Last Name</Form.Label>
                        <Form.Control type="text" id="lastName" name="lastName" value={uform.lastName} placeholder="Last Name" onChange={onChangeHandler} />
                      </div>
                    </Col>
                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="Email">Email</Form.Label>
                        <Form.Control type="text" id="Email" name="Email" value={uform.Email} placeholder="Email" onChange={onChangeHandler} />
                      </div>
                    </Col>
                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="Password">Password</Form.Label>
                        <Form.Control type="Password" id="Password" name="Password" value={uform.Password} placeholder="Password" onChange={onChangeHandler} />
                      </div>
                    </Col>
                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="Phone">Phone</Form.Label>
                        <Form.Control type="Number" id="Phone" name="Phone" value={uform.Phone} placeholder="Phone" onChange={onChangeHandler} />
                      </div>
                    </Col>
                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="DOB">Date of Birth</Form.Label>
                        <Form.Control type="Date" id="DOB" name="DOB" value={uform.DOB} placeholder="Date of Birth" onChange={onChangeHandler} />
                      </div>
                    </Col>
                    <Col
                      lg="12"
                      md="12"
                      xs="12"
                      className=" d-grid justify-content-end"
                    >
                      <Button
                        type="submit"
                        variant="primary"
                        className="btn-sign"
                        onClick={() => handleTabs("2")}
                      >
                        Next
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            )}
            {activeTab === "2" && (
              <Card className="card-post mt-4">
                <Card.Header>
                  <Card.Title as="h6">Address details</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Row className="g-4">
                    <Col lg="8" md="12" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="PAddress">Permanent Address</Form.Label>
                        <Form.Control type="text" id="PAddress" name="PAddress" value={uform.PAddress} placeholder="Permanent Address" onChange={onChangeHandler} />
                      </div>
                    </Col>
                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="PCity">Permanent City</Form.Label>
                        <Form.Control type="text" id="PCity" name="PCity" value={uform.PCity} placeholder="Permanent City" onChange={onChangeHandler} />
                      </div>
                    </Col>

                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="PState">Permanent State</Form.Label>
                        <Form.Control type="text" id="PState" name="PState" value={uform.PState} placeholder="Permanent State" onChange={onChangeHandler} />
                      </div>
                    </Col>

                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="PCountry">Permanent Country</Form.Label>
                        <Form.Control type="text" id="PCountry" name="PCountry" value={uform.PCountry} placeholder="Permanent Country" onChange={onChangeHandler} />
                      </div>
                    </Col>

                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="PPostalCode">Permanent Postal Code</Form.Label>
                        <Form.Control type="text" id="PPostalCode" name="PPostalCode" value={uform.PPostalCode} placeholder="Permanent Postal Code" onChange={onChangeHandler} />
                      </div>
                    </Col>

                    <div className="mt-1">
                      <Form.Check
                        type="checkbox"
                        id="temporaryAddressCheckbox"
                        label="Enable Temporary Address"
                        checked={showTemporaryAddress}
                        onChange={onCheckboxChange}
                      />
                    </div>

                    {showTemporaryAddress && (
                      <>
                        <Col lg="8" md="12" xs="12">
                          <div className="mt-1">
                            <Form.Label htmlFor="TAddress">Temporary Address</Form.Label>
                            <Form.Control type="text" id="TAddress" name="TAddress" value={uform.TAddress} placeholder="Temporary Address" onChange={onChangeHandler} />
                          </div>
                        </Col>
                        <Col lg="4" md="6" xs="12">
                          <div className="mt-1">
                            <Form.Label htmlFor="TCity">Temporary City</Form.Label>
                            <Form.Control type="text" id="TCity" name="TCity" value={uform.TCity} placeholder="Temporary City" onChange={onChangeHandler} />
                          </div>
                        </Col>
                        <Col lg="4" md="6" xs="12">
                          <div className="mt-1">
                            <Form.Label htmlFor="TState">Temporary State</Form.Label>
                            <Form.Control type="text" id="TState" name="TState" value={uform.TState} placeholder="Temporary State" onChange={onChangeHandler} />
                          </div>
                        </Col>
                        <Col lg="4" md="6" xs="12">
                          <div className="mt-1">
                            <Form.Label htmlFor="TCountry">Temporary Country</Form.Label>
                            <Form.Control type="text" id="TCountry" name="TCountry" value={uform.TCountry} placeholder="Temporary Country" onChange={onChangeHandler} />
                          </div>
                        </Col>
                        <Col lg="4" md="6" xs="12">
                          <div className="mt-1">
                            <Form.Label htmlFor="TPostalCode">Temporary Postal Code</Form.Label>
                            <Form.Control type="text" id="TPostalCode" name="TPostalCode" value={uform.TPostalCode} placeholder="Temporary Postal Code" onChange={onChangeHandler} />
                          </div>
                        </Col>
                      </>
                    )}
                    <Col
                      lg="12"
                      md="12"
                      xs="12"
                      className=" d-grid justify-content-end"
                    >
                      <Button
                        type="submit"
                        variant="primary"
                        className="btn-sign"
                        onClick={() => handleTabs("3")}
                      >
                        Next
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            )}
            {activeTab === "3" && (
              <Card className="card-post mt-4">
                <Card.Header>
                  <Card.Title as="h6">Address details</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Row className="g-4">
                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="Department">Department</Form.Label>
                        <Form.Control type="text" id="Department" name="Department" value={uform.Department} placeholder="Department" onChange={onChangeHandler} />
                      </div>
                    </Col>
                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="Designation">Designation</Form.Label>
                        <Form.Control type="text" id="Designation" name="Designation" value={uform.Designation} placeholder="Designation" onChange={onChangeHandler} />
                      </div>
                    </Col>
                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="From">From</Form.Label>
                        <Form.Control type="text" id="From" name="From" value={uform.From} placeholder="From" onChange={onChangeHandler} />

                        <Form.Label htmlFor="To">To</Form.Label>
                        <Form.Control type="text" id="To" name="To" value={uform.To} placeholder="To" onChange={onChangeHandler} />
                      </div>
                    </Col>
                    <Col
                      lg="12"
                      md="12"
                      xs="12"
                      className=" d-grid justify-content-end"
                    >
                      <Button
                        type="submit"
                        variant="primary"
                        className="btn-sign"
                        onClick={() => handleTabs("4")}
                      >
                        Next
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            )}
            {activeTab === "4" && (
              <Card className="card-post mt-4">
                <Card.Header>
                  <Card.Title as="h6">Address details</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Row className="g-4">
                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="BankAccNo">Bank Account No</Form.Label>
                        <Form.Control type="text" id="BankAccNo" name="BankAccNo" value={uform.BankAccNo} placeholder="BankAccNo" onChange={onChangeHandler} />
                      </div>
                    </Col>
                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="BankAccName">Bank Account Holder Name</Form.Label>
                        <Form.Control type="text" id="BankAccName" name="BankAccName" value={uform.BankAccName} placeholder="Bank Account Holder Name" onChange={onChangeHandler} />
                      </div>
                    </Col>
                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="BankBranch">Bank Branch</Form.Label>
                        <Form.Control type="text" id="BankBranch" name="BankBranch" value={uform.BankBranch} placeholder="Bank Branch" onChange={onChangeHandler} />
                      </div>
                    </Col>
                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="BankIFSCCode">Bank IFSC Code</Form.Label>
                        <Form.Control type="text" id="BankIFSCCode" name="BankIFSCCode" value={uform.BankIFSCCode} placeholder="Bank IFSC Code" onChange={onChangeHandler} />
                      </div>
                    </Col>
                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="PFNo">PF No</Form.Label>
                        <Form.Control type="text" id="PFNo" name="PFNo" value={uform.PFNo} placeholder="PF No" onChange={onChangeHandler} />
                      </div>
                    </Col>
                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="ESI">ESI</Form.Label>
                        <Form.Control type="text" id="ESI" name="ESI" value={uform.ESI} placeholder="ESI" onChange={onChangeHandler} />
                      </div>
                    </Col>
                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="UAN">UAN</Form.Label>
                        <Form.Control type="text" id="UAN" name="UAN" value={uform.UAN} placeholder="UAN" onChange={onChangeHandler} />
                      </div>
                    </Col>
                    <Col xs="12">
                      {editMode ?
                        <div className="mt-1" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                          <Button onClick={onUpdateHandler} type="submit">Update</Button>
                        </div> :
                        <div className="mt-1" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                          <Button onClick={onSubmitHandler} type="submit">Submit</Button>
                        </div>}

                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
        <Footer />
      </div>
    </React.Fragment>
  );
}
