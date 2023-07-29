import React, { useEffect } from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Form } from "react-bootstrap";
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import mainservice from '../../services/mainservice';
import { useSelector } from 'react-redux';
import { event } from 'jquery';

function PurchaseOrder() {
  // to maintain dark and light mode
  const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
  const [skin, setSkin] = useState(currentSkin);
  const navigate = useNavigate()

  const [form, setform] = useState("");
  const index = useSelector((state)=>state.index)
  console.log(index.PurchaseorderID,"Purchaseorder");
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

  async function PostPurchaseOrder(form) {
    console.log(form);
    const res = await mainservice.purchaseorder(form,index.PurchaseorderID);
    if (res.data != null) {
      console.log("PurchaseOrder Added");
    }
    else {
      console.log(res);
    }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    PostPurchaseOrder(form);
  }

  const onUpdateHandler = (event) => {
    event.preventDefault();
    console.log(uform);
    updatePurchaseorder(uform);
  }

  async function updatePurchaseorder(uform){
    const res = await mainservice.updatePurchaseorder(index.PurchaseorderID,id,uform);
    if(res.data!= null){
      console.log(res.data,"Purchaseorder Details updated");
    }
    else{
      console.log(res)
    }
  }

  let [searchParams,setSearchParams] = useSearchParams();
  const [uform,setUform] = useState([]);
  const [editMode,setEditMode] = useState(false)
  const id = searchParams.get("id");
  const CheckEdit = async() => {
    if(id){
    setEditMode(true)
    const res = await mainservice.getPurchaseorderid(index.PurchaseorderID,id);
    setUform(res.data)
    console.log(res.data,"this")
    }
  }
  useEffect(() => {
    CheckEdit()
  },[]);


  return (
    <>
    <form onSubmit={onSubmitHandler} >
      <Header onSkin={setSkin} />
      <div className="main main-app p-3 p-lg-4">
        <div className="d-md-flex align-items-center justify-content-between mb-4">
          <div>
            <ol className="breadcrumb fs-sm mb-1">
              <li className="breadcrumb-item"><Link to="/dashboard/home">Dashboard</Link></li>
              <li className="breadcrumb-item"><Link to="/dashboard/rfq">RFQ</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Purchase Order</li>
            </ol>
            <h4 className="main-title mb-0">Add New Purchase Order</h4>
          </div>
        </div>

        {/* responsive form in a card */}
        <Card>
          <Card.Body>
            <Row className="g-4">
            <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="OrderCode">Order Code</Form.Label>
                  <Form.Control type="text" name="OrderCode" value={uform.OrderCode} id="OrderCode" placeholder="Order Code" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="Item">Item</Form.Label>
                  <Form.Control type="text" name="Item" value={uform.Item} id="Item" placeholder="Item" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="Qty">Quantity</Form.Label>
                  <Form.Control type="text" name="Qty" value={uform.Qty} id="Qty" placeholder="Qty" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="Units">Units</Form.Label>
                  <Form.Control type="text" name="Units" value={uform.Units} id="Units" placeholder="Units" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="UnitPrice">Unit Price</Form.Label>
                  <Form.Control type="text" name="UnitPrice" value={uform.UnitPrice} id="UnitPrice" placeholder="Unit Price" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="TotalPrice">Total Price</Form.Label>
                  <Form.Control type="text" name="TotalPrice" value={uform.TotalPrice} id="TotalPrice" placeholder="Total Price" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="VendorName">Vendor Name</Form.Label>
                  <Form.Control type="text" name="VendorName" value={uform.VendorName} id="VendorName" placeholder="Vendor Name" onChange={onChangeHandler} />
                </div>
              </Col>  

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="VendorCity">Vendor City</Form.Label>
                  <Form.Control type="text" name="VendorCity" value={uform.VendorCity} id="VendorCity" placeholder="Vendor City" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="VendorState">Vendor State</Form.Label>
                  <Form.Control type="text" name="VendorState" value={uform.VendorState} id="VendorState" placeholder="Vendor State" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="VendorPinCode">Vendor PinCode</Form.Label>
                  <Form.Control type="Number" name="VendorPinCode" value={uform.VendorPinCode} id="VendorPinCode" placeholder="Vendor PinCode" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="VendorCountry">Vendor Country</Form.Label>
                  <Form.Control type="text" name="VendorCountry" value={uform.VendorCountry} id="VendorCountry" placeholder="Vendor Country" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="VendorContact">Vendor Contact</Form.Label>
                  <Form.Control type="Number" name="VendorContact" value={uform.VendorContact} id="VendorContact" placeholder="Vendor Contact" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="DeliverToName">Deliver To Name</Form.Label>
                  <Form.Control type="text" name="DeliverToName" value={uform.DeliverToName} id="DeliverToName" placeholder="Deliver To Name" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="DeliverCity">Deliver City</Form.Label>
                  <Form.Control type="text" name="DeliverCity" value={uform.DeliverCity} id="DeliverCity" placeholder="Deliver City" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="DeliverState">Deliver State</Form.Label>
                  <Form.Control type="text" name="DeliverState" value={uform.DeliverState} id="DeliverState" placeholder="Deliver State" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="DeliverPinCode">Deliver PinCode</Form.Label>
                  <Form.Control type="Number" name="DeliverPinCode" value={uform.DeliverPinCode} id="DeliverPinCode" placeholder="Deliver PinCode" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="DeliverCountry">Deliver Country</Form.Label>
                  <Form.Control type="text" name="DeliverCountry" value={uform.DeliverCountry} id="DeliverCountry" placeholder="DeliverCountry" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="DeliverContact">Deliver Contact</Form.Label>
                  <Form.Control type="Number" name="DeliverContact" value={uform.DeliverContact} id="DeliverContact" placeholder="Deliver Contact" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="PurchaseOrder">Purchase Order</Form.Label>
                  <Form.Control type="text" name="PurchaseOrder" value={uform.PurchaseOrder} id="PurchaseOrder" placeholder="Purchase Order" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="Date">Date</Form.Label>
                  <Form.Control type="Date" name="Date" value={uform.Date} id="Date" placeholder="Date" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="CreditTerms">Credit Terms</Form.Label>
                  <Form.Control type="text" name="CreditTerms" value={uform.CreditTerms} id="CreditTerms" placeholder="Credit Terms" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="Comments">Comments</Form.Label>
                  <Form.Control type="text" name="Comments" value={uform.Comments} id="Comments" placeholder="Comments" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="TermsAndConditions">Terms And Conditions</Form.Label>
                  <Form.Control type="text" name="TermsAndConditions" value={uform.TermsAndConditions} id="TermsAndConditions" placeholder="Terms And Conditions" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="SubTotal">Sub Total</Form.Label>
                  <Form.Control type="text" name="SubTotal" value={uform.SubTotal} id="SubTotal" placeholder="Sub Total" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="Tax">Tax</Form.Label>
                  <Form.Control type="text" name="Tax" value={uform.Tax} id="Tax" placeholder="Tax" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="Freight">Freight</Form.Label>
                  <Form.Control type="text" name="Freight" value={uform.Freight} id="Freight" placeholder="Freight" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="Paid">Paid</Form.Label>
                  <Form.Control type="text" name="Paid" value={uform.Paid} id="Paid" placeholder="Paid" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="Balance">Balance </Form.Label>
                  <Form.Control type="text" name="Balance" value={uform.Balance} id="Balance" placeholder="Balance" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="VendorStreetAdress">Vendor Street Adress</Form.Label>
                  <Form.Control as="textarea" name="VendorStreetAdress" value={uform.VendorStreetAdress} id="VendorStreetAdress" rows="4" placeholder="Vendor Street Adress" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="DeliverStreetAdress">Deliver Street Adress</Form.Label>
                  <Form.Control as="textarea" name="DeliverStreetAdress" value={uform.DeliverStreetAdress} id="DeliverStreetAdress" rows="4" placeholder="Deliver Street Adress" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col xs="12">
               {editMode?
               <div className='mt-1' style={{display:'flex', justifyContent:'flex-end'}}>
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
      </div>
    </form>
    </>
  )
}

export default PurchaseOrder