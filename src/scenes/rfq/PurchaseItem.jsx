import React from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Form } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import mainservice from '../../services/mainservice';
import { useSelector } from 'react-redux';


function PurchaseItem() {
  // to maintain dark and light mode
  const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
  const [skin, setSkin] = useState(currentSkin);
  const navigate = useNavigate()

  const [form, setform] = useState("");
  const index = useSelector((state)=>state.index)
  console.log(index.PurchaseitemID,"Purchaseitem");
  const onChangeHandler = (event) => {
    setform({
      ...form,
      [event.target.name]: event.target.value
    });
    console.log(form);
  };

  async function PostPurchaseItem(form) {
    console.log(form);
    const res = await mainservice.purchaseitem(form,index.PurchaseitemID);
    if (res.data != null) {
      console.log("PurchaseItem Added");
    }
    else {
      console.log(res);
    }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    PostPurchaseItem(form);
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
                <li className="breadcrumb-item"><Link to="/dashboard/rfq">RFQ</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Purchase Item</li>
              </ol>
              <h4 className="main-title mb-0">Create New Purchase</h4>
            </div>
          </div>

          {/* responsive form in a card */}
          <Card>
            <Card.Body>
              <Row className="g-4">
                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Type">Type</Form.Label>
                    <Form.Control type="text" id="Type" name="Type" placeholder="Type" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="ItemCategory">Item Category</Form.Label>
                    <Form.Control type="text" id="ItemCategory" name='ItemCategory' placeholder="Item Category" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Item">Item</Form.Label>
                    <Form.Control type="text" id="Item" name='Item' placeholder="Item" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Quantity">Quantity</Form.Label>
                    <Form.Control type="Number" id="Quantity" name='Quantity' placeholder="Quantity" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Unit">Unit</Form.Label>
                    <Form.Control type="Number" id="Unit" name='Unit' placeholder="Unit" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="UnitPrize">Unit Prize</Form.Label>
                    <Form.Control type="Number" id="UnitPrize" name='UnitPrize' placeholder="Unit Prize" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Total">Total</Form.Label>
                    <Form.Control type="Number" id="Total" name='Total' placeholder="Total" onChange={onChangeHandler} />
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

export default PurchaseItem