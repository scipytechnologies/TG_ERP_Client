import React, { useEffect } from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Form } from "react-bootstrap";
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import mainservice from '../../services/mainservice';
import { useSelector } from 'react-redux';


function PurchaseItem() {
  // to maintain dark and light mode
  const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
  const [skin, setSkin] = useState(currentSkin);
  const navigate = useNavigate()

  const [form, setform] = useState("");
  const index = useSelector((state) => state.index)
  console.log(index.PurchaseitemID, "Purchaseitem");
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

  async function PostPurchaseItem(form) {
    console.log(form);
    const res = await mainservice.purchaseitem(form, index.PurchaseitemID);
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

  const onUpdateHandler = (event) => {
    event.preventDefault();
    console.log(uform);
    updatePurchaseitem(uform);
  }

  async function updatePurchaseitem(uform) {
    const res = await mainservice.updatePurchaseitem(index.PurchaseitemID, id, uform);
    if (res.data!= null) {
      console.log(res.data, "Purchaseitem Details updated");
    }
    else {
      console.log(res);
    }
  }

  let[searchParams, setSearchParams] = useSearchParams();
  const [uform, setUform] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const id = searchParams.get("id");
  const CheckEdit = async() => {
    console.log('chek id' + id)
    if(id) {
      setEditMode(true)
      const res = await mainservice.getPurchaseitemById(index.PurchaseitemID,id);
      setUform(res.data)
      console.log(res.data, "this");
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
                    <Form.Control type="text" id="Type" name="Type" value={uform.Type} placeholder="Type" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="ItemCategory">Item Category</Form.Label>
                    <Form.Control type="text" id="ItemCategory" name='ItemCategory' value={uform.ItemCategory} placeholder="Item Category" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Item">Item</Form.Label>
                    <Form.Control type="text" id="Item" name='Item' value={uform.Item} placeholder="Item" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Quantity">Quantity</Form.Label>
                    <Form.Control type="Number" id="Quantity" name='Quantity' value={uform.Quantity} placeholder="Quantity" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Unit">Unit</Form.Label>
                    <Form.Control type="Number" id="Unit" name='Unit' value={uform.Unit} placeholder="Unit" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="UnitPrize">Unit Prize</Form.Label>
                    <Form.Control type="Number" id="UnitPrize" name='UnitPrize' value={uform.UnitPrize} placeholder="Unit Prize" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Total">Total</Form.Label>
                    <Form.Control type="Number" id="Total" name='Total' value={uform.Total} placeholder="Total" onChange={onChangeHandler} />
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

export default PurchaseItem