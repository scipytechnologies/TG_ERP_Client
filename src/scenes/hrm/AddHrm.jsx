import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Nav, Row, Button, Form } from "react-bootstrap";
import Footer from "../../layouts/Footer";
import HeaderMobile from "../../layouts/HeaderMobile";
import Avatar from "../../components/Avatar";
import Header from "../../layouts/Header";
import mainservice from "../../services/mainservice";

import img5 from "../../assets/img/img5.jpg";
import ReactDatePicker from "react-datepicker";
import { useSelector, useDispatch } from "react-redux";

export default function AddHrm() {
  const currentSkin = localStorage.getItem("skin-mode") ? "dark" : "";
  const [skin, setSkin] = useState(currentSkin);
  const index = useSelector((state) => state.index);
  console.log(index);
  const userdata = useSelector((state) => state.loginedUser)

  const [activeTab, setActiveTab] = useState("1");
  function handleTabs(no) {
    setActiveTab(no);
  }

  const [form, setForm] = useState({});
  const [user, setUser] = useState({});

  const onChangeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    console.log(form);
  };

  const onUserChangeHandler = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });   
    console.log(user);
  };

  async function SignUp(data) {
    console.log(data);
    const CData = {Company: userdata.CompanyID}
    const sentData ={...CData,...data}
    const res = await mainservice.SignUp(sentData);
    if (res.data != null) {
      console.log(res.data.id);
      const addon ={UserId: res.data.id,firstName :res.data.firstName,lastName : res.data.lastName,Email: res.data.email}
      const postData = {...addon,...form}
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
  };
  const [showTemporaryAddress, setShowTemporaryAddress] = useState(false);
  const onCheckboxChange = (e) => {
    setShowTemporaryAddress(e.target.checked);
  };

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
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                          name="firstName"
                          type="text"
                          placeholder="Enter your First name"
                          onChange={onUserChangeHandler}
                          value={user.firstName}
                        />
                      </div>
                    </Col>
                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                          name="lastName"
                          type="text"
                          placeholder="Enter your Last name"
                          onChange={onUserChangeHandler}
                          value={user.lastName}
                        />
                      </div>
                    </Col>
                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          name="email"
                          type="text"
                          placeholder="Enter your email address"
                          onChange={onUserChangeHandler}
                          value={user.email}
                        />
                      </div>
                    </Col>
                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          name="password"
                          type="password"
                          placeholder="Enter your password"
                          onChange={onUserChangeHandler}
                          value={user.password}
                        />
                      </div>
                    </Col>
                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          name="Phone"
                          type="Number"
                          placeholder="phone Number"
                          onChange={onChangeHandler}
                          value={form.Phone}
                        />
                      </div>
                    </Col>
                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label>Date of Birth</Form.Label>
                        <ReactDatePicker
                          className="form-control"
                          name="DOB"
                          value={form.DOB}
                        />
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
                        <Form.Label htmlFor="exampleFormControlInput1">
                          Permenent Address
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="PAddress"
                          id="exampleFormControlInput1"
                          placeholder="Address"
                          onChange={onChangeHandler}
                          value={form.PAddress}
                        />
                      </div>
                    </Col>
                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="exampleFormControlInput1">
                          City
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="PCity"
                          id="exampleFormControlInput1"
                          placeholder="Primary City"
                          onChange={onChangeHandler}
                          value={form.PCity}
                        />
                      </div>
                    </Col>

                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="exampleFormControlInput1">
                          State
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="PState"
                          id="exampleFormControlInput1"
                          placeholder="Primary State"
                          onChange={onChangeHandler}
                          value={form.PState}
                        />
                      </div>
                    </Col>

                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="exampleFormControlInput1">
                          Country
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="PCountry"
                          id="exampleFormControlInput1"
                          placeholder="Primary Country"
                          onChange={onChangeHandler}
                          value={form.PCountry}
                        />
                      </div>
                    </Col>

                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="exampleFormControlInput1">
                          Postal Code
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="PPostalCode"
                          id="exampleFormControlInput1"
                          placeholder="Primary Postal"
                          onChange={onChangeHandler}
                          value={form.PPostalCode}
                        />
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
                            <Form.Label htmlFor="exampleFormControlInput1">
                              Temperory Address
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="TAddress"
                              id="exampleFormControlInput1"
                              placeholder="Address"
                              onChange={onChangeHandler}
                              value={form.TAddress}
                            />
                          </div>
                        </Col>
                        <Col lg="4" md="6" xs="12">
                          <div className="mt-1">
                            <Form.Label htmlFor="exampleFormControlInput1">
                              City
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="TCity"
                              id="exampleFormControlInput1"
                              placeholder="City"
                              onChange={onChangeHandler}
                              value={form.TCity}
                            />
                          </div>
                        </Col>
                        <Col lg="4" md="6" xs="12">
                          <div className="mt-1">
                            <Form.Label htmlFor="exampleFormControlInput1">
                              State
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="TState"
                              id="exampleFormControlInput1"
                              placeholder="State"
                              onChange={onChangeHandler}
                              value={form.TState}
                            />
                          </div>
                        </Col>
                        <Col lg="4" md="6" xs="12">
                          <div className="mt-1">
                            <Form.Label htmlFor="exampleFormControlInput1">
                              Country
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="TCountry"
                              id="exampleFormControlInput1"
                              placeholder="Country"
                              onChange={onChangeHandler}
                              value={form.TCountry}
                            />
                          </div>
                        </Col>
                        <Col lg="4" md="6" xs="12">
                          <div className="mt-1">
                            <Form.Label htmlFor="exampleFormControlInput1">
                              Postal
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="TPostalCode"
                              id="exampleFormControlInput1"
                              placeholder="Postal"
                              onChange={onChangeHandler}
                              value={form.TPostalCode}
                            />
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
                        <Form.Label htmlFor="exampleFormControlInput1">
                          Department
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="Department"
                          id="exampleFormControlInput1"
                          placeholder="Department"
                          onChange={onChangeHandler}
                          value={form.Department}
                        />
                      </div>
                    </Col>
                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="exampleFormControlInput1">
                          Designation
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="Designation"
                          id="exampleFormControlInput1"
                          placeholder="Primary City"
                          onChange={onChangeHandler}
                          value={form.Designation}
                        />
                      </div>
                    </Col>
                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="exampleFormControlInput1">
                          From
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="From"
                          id="exampleFormControlInput1"
                          placeholder="Primary City"
                          onChange={onChangeHandler}
                          value={form.From}
                        />
                        <Form.Label htmlFor="exampleFormControlInput1">
                          To
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="To"
                          id="exampleFormControlInput1"
                          placeholder="Primary City"
                          onChange={onChangeHandler}
                          value={form.To}
                        />
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
                        <Form.Label htmlFor="exampleFormControlInput1">
                          Bank Account Number
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="BankAccNo"
                          id="exampleFormControlInput1"
                          placeholder="Primary City"
                          onChange={onChangeHandler}
                          value={form.BankAccNo}
                        />
                      </div>
                    </Col>
                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="exampleFormControlInput1">
                          Bank Account Holder Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="BankAccName"
                          id="exampleFormControlInput1"
                          placeholder="Primary City"
                          onChange={onChangeHandler}
                          value={form.BankAccName}
                        />
                      </div>
                    </Col>
                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="exampleFormControlInput1">
                          Bank Branch
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="BankBranch"
                          id="exampleFormControlInput1"
                          placeholder="Primary City"
                          onChange={onChangeHandler}
                          value={form.BankBranch}
                        />
                      </div>
                    </Col>
                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="exampleFormControlInput1">
                          Bank IFSC
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="BankIFSCCode"
                          id="exampleFormControlInput1"
                          placeholder="Primary City"
                          onChange={onChangeHandler}
                          value={form.BankIFSCCode}
                        />
                      </div>
                    </Col>
                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="exampleFormControlInput1">
                          PF Number
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="PFNo"
                          id="exampleFormControlInput1"
                          placeholder="Primary City"
                          onChange={onChangeHandler}
                          value={form.PFNo}
                        />
                      </div>
                    </Col>
                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="exampleFormControlInput1">
                          ESI
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="ESI"
                          id="exampleFormControlInput1"
                          placeholder="Primary City"
                          onChange={onChangeHandler}
                          value={form.ESI}
                        />
                      </div>
                    </Col>
                    <Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="exampleFormControlInput1">
                          UAN
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="UAN"
                          id="exampleFormControlInput1"
                          placeholder="Primary City"
                          onChange={onChangeHandler}
                          value={form.UAN}
                        />
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
                        onClick={onSubmitHandler}
                      >
                        Next
                      </Button>
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
