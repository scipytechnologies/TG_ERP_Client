import React, { useEffect } from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Form, ButtonGroup } from "react-bootstrap";
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import mainservice from '../../services/mainservice';
import { useSelector } from 'react-redux';

function AddCrm() {
  // to maintain dark and light mode
  const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
  const [skin, setSkin] = useState(currentSkin);
  const navigate = useNavigate()
  const [form, setform] = useState("");
  const index = useSelector((state)=>state.index)
  console.log(index.InvoiceID,"Invoice");
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


    async function PostInvoice(form) {
    console.log(form);
    const res = await mainservice.invoice(form,index.InvoiceID);
    if (res.data != null) {
      console.log("Invoice Added");
    }
    else {
      console.log(res);
    }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    PostInvoice(form);
  }

  const onUpdateHandler = (event) => {
    event.preventDefault();
    console.log(uform);
    updateInvoice(uform);
  };

  async function updateInvoice(uform){
    const res = await mainservice.updateInvoice(index.InvoiceID,id,uform);
    if(res.data!= null){
      console.log(res.data, "Invoice Details updated");
    }
    else{
      console.log(res);
    }
  }
  let [searchParams, setSearchParams] = useSearchParams();
  const [uform, setUform] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const id = searchParams.get("id");
  const CheckEdit = async() => {
    if(id){
      setEditMode(true)
      const res = await mainservice.getInvoiceById(index.InvoiceID,id);
      setUform(res.data)
      console.log(res.data,"this");
    }
  }
  useEffect(() => {
    CheckEdit()
  },[]);


  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <Header onSkin={setSkin} />
        <div className="main main-app p-3 p-lg-4">
          <div className="d-md-flex align-items-center justify-content-between mb-4">
            <div>
              <ol className="breadcrumb fs-sm mb-1">
                <li className="breadcrumb-item"><Link to="/dashboard/home">Dashboard</Link></li>
                <li className="breadcrumb-item"><Link to="/dashboard/crm">Invoice</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Add Invoice</li>
              </ol>
              <h4 className="main-title mb-0">Create New Invoice</h4>
            </div>
          </div>

          {/* responsive form in a card */}
          <Card>
            <Card.Body>
              <Row className="g-4">
                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="InvoiceNumber">Invoice Number</Form.Label>
                    <Form.Control type="Number" id="InvoiceNumber" name="InvoiceNumber" placeholder="Invoice Number" value={uform.InvoiceNumber} onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="InvoiceSubject">Invoice Subject</Form.Label>
                    <Form.Control type="text" id="InvoiceSubject" name='InvoiceSubject' value={uform.InvoiceSubject} placeholder="Invoice Subject" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Notes">Notes</Form.Label>
                    <Form.Control type="text" id="Notes" name='Notes' value={uform.Notes} placeholder="Notes" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Terms">Terms</Form.Label>
                    <Form.Control type="text" id="Terms" name='Terms' value={uform.Terms} placeholder="Terms" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="InvoiceDate">Invoice Date</Form.Label>
                    <Form.Control type="Date" id="InvoiceDate" name='InvoiceDate' value={uform.InvoiceDate} placeholder="Invoice Date" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="DueDate">Due Date</Form.Label>
                    <Form.Control type="Date" id="DueDate" name='DueDate' value={uform.DueDate} placeholder="Due Date" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="AmountDue">Amount Due</Form.Label>
                    <Form.Control type="Number" id="AmountDue" name='AmountDue' value={uform.AmountDue} placeholder="Amount Due" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="QuoteNo">Quote No</Form.Label>
                    <Form.Control type="Number" id="QuoteNo" name='QuoteNo' value={uform.QuoteNo} placeholder="Quote No" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="OrderNo">Order No</Form.Label>
                    <Form.Control type="Number" id="OrderNo" name='OrderNo' value={uform.OrderNo} placeholder="Order No" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="PurchaseOrderNo">Purchase Order No</Form.Label>
                    <Form.Control type="Number" id="PurchaseOrderNo" name='PurchaseOrderNo' value={uform.PurchaseOrderNo} placeholder="Purchase Order No" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="BillingAddress">Billing Address</Form.Label>
                    <Form.Control type="text" id="BillingAddress" name='BillingAddress' value={uform.BillingAddress} placeholder="Billing Address" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="TaxInformation">Tax Information</Form.Label>
                    <Form.Control type="text" id="TaxInformation" name='TaxInformation' value={uform.TaxInformation} placeholder="Tax Information" onChange={onChangeHandler} />
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

        </div >
      </form>

    </>
  )
}

export default AddCrm