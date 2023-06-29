import React from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Form } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import mainservice from '../../services/mainservice';
import { useSelector } from 'react-redux';

function AddCrm() {
  const index = useSelector((state) => state.index)


  // to maintain dark and light mode
  const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
  const [skin, setSkin] = useState(currentSkin);
  const navigate = useNavigate()
  const [form, setForm] = useState(new FormData());
  const [selectedFile, setSelectedFile] = useState(null);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    form.set(name, value);
    console.log(form);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (selectedFile) {
      form.set('image', selectedFile);
    }
    console.log(form);
    createCustomer(form);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  async function createCustomer(form) {
    const res = await mainservice.createCustomer(form, index.CrmID);
    if (res.data != null) {
      console.log("Account Added");
    }
    else {
      console.log(res);
    }
  }
  const [showTemporaryAddress, setShowTemporaryAddress] = useState(false);
  const onCheckboxChange = (e) => {
    setShowTemporaryAddress(e.target.checked);
  };
  return (
    <>
      <form onSubmit={onSubmitHandler} >
        <Header onSkin={setSkin} />
        <div className="main main-app p-3 p-lg-4">
          <div className="d-md-flex align-items-center justify-content-between mb-4">
            <div>
              <ol className="breadcrumb fs-sm mb-1">
                <li className="breadcrumb-item"><Link to="/dashboard/home">Dashboard</Link></li>
                <li className="breadcrumb-item"><Link to="/dashboard/crm">CRM</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Add Customer</li>
              </ol>
              <h4 className="main-title mb-0">Create New Customer</h4>
            </div>
          </div>

          {/* responsive form in a card */}
          <Card className="card-one mt-3 pb-3" >
            <Card.Header>
              <Card.Title as="h6">Personal Information</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row className="g-4">
                <Col lg="4" md="6" xs="12">
                  <div className="mt-1">
                    <Form.Label>Upload Image</Form.Label>
                    <Form.Control name="image" type="file" onChange={handleFileChange} />
                  </div>
                </Col>
                <Col lg="4" md="6" xs="12">
                  <div className="mt-1">
                    <Form.Label htmlFor="exampleFormControlInput1">First Name</Form.Label>
                    <Form.Control type="text" name="FirstName" id="exampleFormControlInput1" placeholder="first name" onChange={onChangeHandler} />
                  </div>
                </Col>
                <Col lg="4" md="6" xs="12">
                  <div className="mt-1">
                    <Form.Label htmlFor="exampleFormControlInput1">Last Name</Form.Label>
                    <Form.Control type="text" name="LastName" id="exampleFormControlInput1" placeholder="second name" onChange={onChangeHandler} />
                  </div>
                </Col>
                <Col lg="4" md="6" xs="12">
                  <div className="mt-1">
                    <Form.Label htmlFor="exampleFormControlInput1">Business Role</Form.Label>
                    <Form.Control type="text" name="BusinessRole" id="exampleFormControlInput1" placeholder="Business Role" onChange={onChangeHandler} />
                  </div>
                </Col>
                <Col lg="4" md="6" xs="12">
                  <div className="mt-1">
                    <Form.Label htmlFor="exampleFormControlInput1">Phone Mobile</Form.Label>
                    <Form.Control type="Number" name="PhoneMobile" id="exampleFormControlInput1" placeholder="Phone Mobile" onChange={onChangeHandler} />
                  </div>
                </Col>
                <Col lg="4" md="6" xs="12">
                  <div className="mt-1">
                    <Form.Label htmlFor="exampleFormControlInput1">Email</Form.Label>
                    <Form.Control type="text" name="Email" id="exampleFormControlInput1" placeholder="Email" onChange={onChangeHandler} />
                  </div>
                </Col>

              </Row>
            </Card.Body>
          </Card>

          <Card className="card-one mt-3 pb-3">
            <Card.Header>
              <Card.Title as="h6">Contact details</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row className="g-4">
                <Col lg="4" md="6" xs="12">
                  <div className="mt-1">
                    <Form.Label htmlFor="exampleFormControlInput1">Phone Home</Form.Label>
                    <Form.Control type="Number" name="PhoneHome" id="exampleFormControlInput1" placeholder="Phone Home" onChange={onChangeHandler} />
                  </div>
                </Col>
                <Col lg="4" md="6" xs="12">
                  <div className="mt-1">
                    <Form.Label htmlFor="exampleFormControlInput1">Phone Work</Form.Label>
                    <Form.Control type="Number" name="PhoneWork" id="exampleFormControlInput1" placeholder="Phone Work" onChange={onChangeHandler} />
                  </div>
                </Col>
                <Col lg="4" md="6" xs="12">
                  <div className="mt-1">
                    <Form.Label htmlFor="exampleFormControlInput1">Office E-mail</Form.Label>
                    <Form.Control type="Number" name="officeEmail" id="exampleFormControlInput1" placeholder="Ofiice E-mail" onChange={onChangeHandler} />
                  </div>
                </Col>

              </Row>
            </Card.Body>
          </Card>

          <Card className="card-one mt-3 pb-3">
            <Card.Header>
              <Card.Title as="h6">Address details</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row className="g-4">
                <Col lg="8" md="12" xs="12">
                  <div className="mt-1">
                    <Form.Label htmlFor="exampleFormControlInput1">Permenent Address</Form.Label>
                    <Form.Control type="text" name="address" id="exampleFormControlInput1" placeholder="Address" onChange={onChangeHandler} />
                  </div>
                </Col>
                <Col lg="4" md="6" xs="12">
                  <div className="mt-1">
                    <Form.Label htmlFor="exampleFormControlInput1">City</Form.Label>
                    <Form.Control type="text" name="PrimaryCity" id="exampleFormControlInput1" placeholder="Primary City" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-1">
                    <Form.Label htmlFor="exampleFormControlInput1">State</Form.Label>
                    <Form.Control type="text" name="PrimaryState" id="exampleFormControlInput1" placeholder="Primary State" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-1">
                    <Form.Label htmlFor="exampleFormControlInput1">Country</Form.Label>
                    <Form.Control type="text" name="PrimaryCountry" id="exampleFormControlInput1" placeholder="Primary Country" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-1">
                    <Form.Label htmlFor="exampleFormControlInput1">Postal Code</Form.Label>
                    <Form.Control type="text" name="PrimaryPostal" id="exampleFormControlInput1" placeholder="Primary Postal" onChange={onChangeHandler} />
                  </div>
                </Col>
              
                        
            
                    <div className="mt-1">
                      <Form.Check
                        type="checkbox"
                        id="temporaryAddressCheckbox"
                        label="Enable Temporary Address"
                        checked={showTemporaryAddress}
                        onChange={onCheckboxChange} />
                    </div>
              
                {showTemporaryAddress && (
                <>
                  <Col lg="8" md="12" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="exampleFormControlInput1">Temperory Address</Form.Label>
                        <Form.Control type="text" name="tempaddress" id="exampleFormControlInput1" placeholder="Address" onChange={onChangeHandler} />
                      </div>
                    </Col><Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="exampleFormControlInput1">City</Form.Label>
                        <Form.Control type="text" name="SecondaryCity" id="exampleFormControlInput1" placeholder="City" onChange={onChangeHandler} />
                      </div>
                    </Col><Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="exampleFormControlInput1">State</Form.Label>
                        <Form.Control type="text" name="SecondaryState" id="exampleFormControlInput1" placeholder="State" onChange={onChangeHandler} />
                      </div>
                    </Col><Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="exampleFormControlInput1">Country</Form.Label>
                        <Form.Control type="text" name="SecondaryCountry" id="exampleFormControlInput1" placeholder="Country" onChange={onChangeHandler} />
                      </div>
                    </Col><Col lg="4" md="6" xs="12">
                      <div className="mt-1">
                        <Form.Label htmlFor="exampleFormControlInput1">Postal</Form.Label>
                        <Form.Control type="text" name="SecondaryPostal" id="exampleFormControlInput1" placeholder="Postal" onChange={onChangeHandler} />
                      </div>
                    </Col></>
                )}
              </Row>
            </Card.Body>
          </Card>

          <Card className="card-one mt-3 pb-3">
            <Card.Header>
              <Card.Title as="h6">Business details</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row className="g-4">
                <Col lg="4" md="6" xs="12">
                  <div className="mt-1">
                    <Form.Label htmlFor="exampleFormControlInput1">Business Name</Form.Label>
                    <Form.Control type="text" name="businessName" id="exampleFormControlInput1" placeholder="Business Name" onChange={onChangeHandler} />
                  </div>
                </Col>
                <Col lg="4" md="6" xs="12">
                  <div className="mt-1">
                    <Form.Label htmlFor="exampleFormControlInput1">Category</Form.Label>
                    <Form.Control type="text" name="Category" id="exampleFormControlInput1" placeholder="Category" onChange={onChangeHandler} />
                  </div>
                </Col>
                <Col lg="4" md="6" xs="12">
                  <div className="mt-1">
                    <Form.Label htmlFor="exampleFormControlInput1">Contact Number</Form.Label>
                    <Form.Control type="text" name="businnesContact" id="exampleFormControlInput1" placeholder="Contact Number" onChange={onChangeHandler} />
                  </div>
                </Col>
                <Col lg="4" md="6" xs="12">
                  <div className="mt-1">
                    <Form.Label htmlFor="exampleFormControlInput1">Email</Form.Label>
                    <Form.Control type="text" name="businnesMail" id="exampleFormControlInput1" placeholder="Email" onChange={onChangeHandler} />
                  </div>
                </Col>
                <Col lg="4" md="6" xs="12">
                  <div className="mt-1">
                    <Form.Label htmlFor="exampleFormControlInput1">Website</Form.Label>
                    <Form.Control type="text" name="Website" id="exampleFormControlInput1" placeholder="https//Website.com" onChange={onChangeHandler} />
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="card-one mt-3 pb-3">
            <Card.Header>
              <Card.Title as="h6">Other Details</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row className="g-4" >
                <Col md="12" xs="12">
                  <div className="mt-1">
                    <Form.Label htmlFor="exampleFormControlInput1">Description</Form.Label>
                    <Form.Control as="textarea" rows="4" name="Description" id="exampleFormControlInput1" placeholder="Description" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col xs="12">
                  <div className="mt-1" style={{ display:'flex', justifyContent: 'flex-end' }}>
                    <Button onClick={onSubmitHandler} type="submit">Submit</Button>
                  </div>
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

export default AddCrm