import React from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Form } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import mainservice from '../../services/mainservice';
import { useSelector } from 'react-redux';

function AddVendor() {
  // to maintain dark and light mode
  const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
  const [skin, setSkin] = useState(currentSkin);
  const navigate = useNavigate()
  const [form, setform] = useState("");
  const index = useSelector((state)=>state.index)
  console.log(index.VendorID, "VendorID");
  const onChangeHandler = (event) => {
    setform({
      ...form,
      [event.target.name]: event.target.value
    });
    console.log(form);
  };

  // console.log('VENDOR ID' + index.VendorID)

  async function PostVendor(form) {
    console.log(form);
    const res = await mainservice.vendor(form, index.VendorID);
    if (res.data != null) {
      console.log("Vendor Added");
    }
    else {
      console.log(res);
    }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    PostVendor(form);
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
                <li className="breadcrumb-item"><Link to="/dashboard/vendor">Vendor</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Add Vendor</li>
              </ol>
              <h4 className="main-title mb-0">Create New Vendor</h4>
            </div>
          </div>

          {/* responsive form in a card */}
          <Card>
            <Card.Body>
              <Row className="g-4">
                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="VendorID">Vendor ID</Form.Label>
                    <Form.Control type="text" id="VendorID" name="VendorID" placeholder="Vendor ID" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="VendorName">Vendor Name</Form.Label>
                    <Form.Control type="text" id="VendorName" name='VendorName' placeholder="Vendor Name" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="VendorAddress">VendorAddress</Form.Label>
                    <Form.Control type="text" id="VendorAddress" name='VendorAddress' placeholder="Vendor Address" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="City">City</Form.Label>
                    <Form.Control type="text" id="City" name='City' placeholder="City" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="State">State</Form.Label>
                    <Form.Control type="text" id="State" name='State' placeholder="State" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Postal">Postal</Form.Label>
                    <Form.Control type="text" id="Postal" name='Postal' placeholder="Postal" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Country">Country</Form.Label>
                    <Form.Control type="text" id="Country" name='Country' placeholder="Country" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="PhoneNumber">Phone Number</Form.Label>
                    <Form.Control type="Number" id="PhoneNumber" name='PhoneNumber' placeholder="Phone Number" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Email">Email</Form.Label>
                    <Form.Control type="text" id="Email" name='Email' placeholder="Email" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Website">Website</Form.Label>
                    <Form.Control type="text" id="Website" name='Website' placeholder="Website" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="BusinessDescription">Business Description</Form.Label>
                    <Form.Control type="text" id="BusinessDescription" name='BusinessDescription' placeholder="Business Description" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="BusinessRegistrationNumber">Business Registration Number</Form.Label>
                    <Form.Control type="Number" id="BusinessRegistrationNumber" name='BusinessRegistrationNumber' placeholder="Business Registration Number" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="TaxIdentificationNumber">Tax Identification Number</Form.Label>
                    <Form.Control type="Number" id="TaxIdentificationNumber" name='TaxIdentificationNumber' placeholder="Tax Identification Number" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="OwnershipInformation">Ownership Information</Form.Label>
                    <Form.Control type="text" id="OwnershipInformation" name='OwnershipInformation' placeholder="Ownership Information" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="FinancialInformation">Financial Information</Form.Label>
                    <Form.Control type="text" id="FinancialInformation" name='FinancialInformation' placeholder="Financial Information" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Certifications">Certifications</Form.Label>
                    <Form.Control type="text" id="Certifications" name='Certifications' placeholder="Certifications" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="References">References</Form.Label>
                    <Form.Control type="text" id="References" name='References' placeholder="References" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="ContractualTerms">Contractual Terms</Form.Label>
                    <Form.Control type="text" id="ContractualTerms" name='ContractualTerms' placeholder="Contractual Terms" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Product">Product</Form.Label>
                    <Form.Control type="text" id="Product" name='Product' placeholder="Product" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Delivery">Delivery</Form.Label>
                    <Form.Control type="text" id="Delivery" name='Delivery' placeholder="Delivery" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col xs="12">
                  <Button onClick={onSubmitHandler} type='submit'>Submit</Button>
                </Col>
              </Row>

            </Card.Body>
          </Card>

          <Footer />

        </div >
      </form>

    </>
  )
}

export default AddVendor