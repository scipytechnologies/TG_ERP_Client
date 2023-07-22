import React from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Form } from "react-bootstrap";
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import mainservice from '../../services/mainservice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function AddVendor() {
  // to maintain dark and light mode
  const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
  const [skin, setSkin] = useState(currentSkin);
  const navigate = useNavigate()
  const [form, setform] = useState("");
  const index = useSelector((state)=>state.index)
  console.log(index.VendorID, "VendorID");
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setform({
      ...form,
      [event.target.name] : event.target.value
    })
    setUform({
      ...uform,
      [event.target.name]: event.target.value
    });
    console.log(uform);
  };

  // console.log('VENDOR ID' + index.VendorID)

  async function PostVendor(form) {
    console.log(form);
    const res = await mainservice.vendor(form,index.VendorID);
    
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

  const onUpdateHandler = (event) => {
    event.preventDefault();
    console.log(uform);
    updatevendor(uform);
  }

  async function updatevendor(uform){
    const res = await mainservice.updatevendor(index.VendorID,id,uform);
    if(res.data!= null){
      console.log(res.data,"Vendor Details updated");
    }
    else{
      console.log(res);
    }
  }

  let [searchParams,setSearchParams] = useSearchParams();
  const [uform, setUform] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const id = searchParams.get("id");
  const CheckEdit = async() => {
    if(id){
      setEditMode(true)
      const res = await mainservice.getvendorById(index.VendorID,id);
      setUform(res.data)
      console.log(res.data,"this");
    }
  }
  useEffect(() => {
    CheckEdit()
  },[])

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
                    <Form.Control type="text" id="VendorID" name="VendorID" value={uform.VendorID} placeholder="Vendor ID" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="VendorName">Vendor Name</Form.Label>
                    <Form.Control type="text" id="VendorName" name='VendorName' value={uform.VendorName} placeholder="Vendor Name" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="VendorAddress">VendorAddress</Form.Label>
                    <Form.Control type="text" id="VendorAddress" name='VendorAddress' value={uform.VendorAddress} placeholder="Vendor Address" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="City">City</Form.Label>
                    <Form.Control type="text" id="City" name='City' value={uform.City} placeholder="City" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="State">State</Form.Label>
                    <Form.Control type="text" id="State" name='State' value={uform.State} placeholder="State" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Postal">Postal</Form.Label>
                    <Form.Control type="text" id="Postal" name='Postal' value={uform.Postal} placeholder="Postal" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Country">Country</Form.Label>
                    <Form.Control type="text" id="Country" name='Country' value={uform.Country} placeholder="Country" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="PhoneNumber">Phone Number</Form.Label>
                    <Form.Control type="Number" id="PhoneNumber" name='PhoneNumber' value={uform.PhoneNumber} placeholder="Phone Number" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Email">Email</Form.Label>
                    <Form.Control type="text" id="Email" name='Email' value={uform.Email} placeholder="Email" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Website">Website</Form.Label>
                    <Form.Control type="text" id="Website" name='Website' value={uform.Website} placeholder="Website" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="BusinessDescription">Business Description</Form.Label>
                    <Form.Control type="text" id="BusinessDescription" name='BusinessDescription' value={uform.BusinessDescription} placeholder="Business Description" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="BusinessRegistrationNumber">Business Registration Number</Form.Label>
                    <Form.Control type="Number" id="BusinessRegistrationNumber" name='BusinessRegistrationNumber' value={uform.BusinessRegistrationNumber} placeholder="Business Registration Number" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="TaxIdentificationNumber">Tax Identification Number</Form.Label>
                    <Form.Control type="Number" id="TaxIdentificationNumber" name='TaxIdentificationNumber' value={uform.TaxIdentificationNumber} placeholder="Tax Identification Number" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="OwnershipInformation">Ownership Information</Form.Label>
                    <Form.Control type="text" id="OwnershipInformation" name='OwnershipInformation' value={uform.OwnershipInformation} placeholder="Ownership Information" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="FinancialInformation">Financial Information</Form.Label>
                    <Form.Control type="text" id="FinancialInformation" name='FinancialInformation' value={uform.FinancialInformation} placeholder="Financial Information" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Certifications">Certifications</Form.Label>
                    <Form.Control type="text" id="Certifications" name='Certifications' value={uform.Certifications} placeholder="Certifications" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="References">References</Form.Label>
                    <Form.Control type="text" id="References" name='References' value={uform.References} placeholder="References" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="ContractualTerms">Contractual Terms</Form.Label>
                    <Form.Control type="text" id="ContractualTerms" name='ContractualTerms' value={uform.ContractualTerms} placeholder="Contractual Terms" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Product">Product</Form.Label>
                    <Form.Control type="text" id="Product" name='Product' value={uform.Product} placeholder="Product" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Delivery">Delivery</Form.Label>
                    <Form.Control type="text" id="Delivery" name='Delivery' value={uform.Delivery} placeholder="Delivery" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col xs="12">
                  {editMode? 
                  <div className='mt-1' style={{display:'flex' , justifyContent:'flex-end'}}>
                    <Button onClick={onUpdateHandler} type="submit">Update</Button>
                  </div>:
                  <div className='mt-1' style={{display:'flex', justifyContent:'flex-end'}}>
                    <Button onClick={onSubmitHandler} type="submit">Submit</Button>
                  </div>
                  }
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