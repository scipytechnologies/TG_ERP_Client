import React from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Form } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'

function AddProduct() {
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

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(form);
}


  return (
    <>
    <form onSubmit={onSubmitHandler} >
      <Header onSkin={setSkin} />
      <div className="main main-app p-3 p-lg-4">
        <div className="d-md-flex align-items-center justify-content-between mb-4">
          <div>
            <ol className="breadcrumb fs-sm mb-1">
              <li className="breadcrumb-item"><Link to="/dashboard/home">Dashboard</Link></li>
              <li className="breadcrumb-item"><Link to="/dashboard/product">Product</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Add Product</li>
            </ol>
            <h4 className="main-title mb-0">Add New Product</h4>
          </div>
        </div>

        {/* responsive form in a card */}
        <Card>
          <Card.Body>
            <Row className="g-4">
              <Col xl="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">SKU No</Form.Label>
                  <Form.Control type="number" name="SKU No" id="exampleFormControlInput1" placeholder="SKU No" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Item Name</Form.Label>
                  <Form.Control type="text" name="Item Name" id="exampleFormControlInput1" placeholder="Item Name" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Unit OF Measurement</Form.Label>
                  <Form.Control type="text" name="Unit OF Measurement" id="exampleFormControlInput1" placeholder="Unit OF Measurement" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Item Category</Form.Label>
                  <Form.Control type="text" name="Item Category" id="exampleFormControlInput1" placeholder="Item Category" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Current Stock</Form.Label>
                  <Form.Control type="text" name="Current Stock" id="exampleFormControlInput1" placeholder="Current Stock" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Price</Form.Label>
                  <Form.Control type="number" name="Price" id="exampleFormControlInput1" placeholder="Price" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="3" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Tax</Form.Label>
                  <Form.Control type="number" name="Tax" id="exampleFormControlInput1" placeholder="Tax" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col xs="12">
                <div className="mt-3">
                  <Button type="submit">Submit</Button>
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

export default AddProduct