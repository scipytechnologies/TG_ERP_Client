import React, { useEffect } from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Form } from "react-bootstrap";
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import mainservice from '../../services/mainservice';
import { useSelector } from 'react-redux';
import { event } from 'jquery';

function AddProduct() {
  // to maintain dark and light mode
  const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
  const [skin, setSkin] = useState(currentSkin);
  const navigate = useNavigate()
  const [form, setform] = useState("")
  const index = useSelector((state)=>state.index)
  console.log(index.InventoryID,"Inventory");
  const onChangeHandler = (event) => {
    setUform({
      ...uform,
      [event.target.name]: event.target.value
    });
    console.log(uform);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addInventorymanagement(form);
  }

  const onUpdateHandler = (event) => {
    event.preventDefault();
    console.log(uform);
    editInventorymanagementDetails(uform);
  };


  async function editInventorymanagementDetails(uform){
    const res = await mainservice.editInventorymanagementDetails(index.InventoryID,id,uform);
    if(res.data!= null){
      console.log(res.data, "Inventory Details updated");
    }
    else{
      console.log(res);
    }
  }

  let [searchParams, setSearchParams] = useSearchParams();
  const[uform, setUform] = useState([]);
  const[editMode, setEditMode] = useState(false);
  const id = searchParams.get("id");
  const CheckEdit = async() => {
    if(id){
      setEditMode(true)
      const res = await mainservice.getidInventorymanagementDetails(index.InventoryID,id);
      setUform(res.data)
      console.log(res.data,"this");
    }
  }
  useEffect(() => {
    CheckEdit()
  },[]);

  async function addInventorymanagement(form) {
    console.log(form);
    const res = await mainservice.addInventorymanagementDetails(form,index.InventoryID);
    if (res.data != null) {
      console.log("Product Added");
    }
    else {
      console.log(res.message);
    }
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
                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="exampleFormControlInput1">SKU No</Form.Label>
                    <Form.Control type="number" name="SKUNo" id="exampleFormControlInput1" value={uform.SKUNo} placeholder="SKU No" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="exampleFormControlInput1">Item Name</Form.Label>
                    <Form.Control type="text" name="ItemName" id="exampleFormControlInput1" value={uform.ItemName} placeholder="Item Name" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="exampleFormControlInput1">Unit Of Measurement</Form.Label>
                    <Form.Control type="text" name="UnitOFMeasurement" id="exampleFormControlInput1" value={uform.UnitOFMeasurement} placeholder="Unit Of Measurement" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="exampleFormControlInput1">Item Category</Form.Label>
                    <Form.Control type="text" name="ItemCategory" id="exampleFormControlInput1" value={uform.ItemCategory} placeholder="Item Category" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="exampleFormControlInput1">Current Stock</Form.Label>
                    <Form.Control type="text" name="CurrentStock" id="exampleFormControlInput1" value={uform.CurrentStock} placeholder="Current Stock" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="exampleFormControlInput1">Price</Form.Label>
                    <Form.Control type="number" name="Price" id="exampleFormControlInput1" value={uform.Price} placeholder="Price" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="3" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="exampleFormControlInput1">Tax</Form.Label>
                    <Form.Control type="number" name="Tax" id="exampleFormControlInput1" value={uform.Tax} placeholder="Tax" onChange={onChangeHandler} />
                  </div>
                </Col>

               <Col xs="12">
                {editMode?
                <div className="mt-1" style={{display:'flex',justifyContent:'flex-end'}}>
                  <Button onClick={onUpdateHandler} type='submit'>Update</Button>
                </div>:
                <div className="mt-1" style={{display:'flex',justifyContent:'flex-end'}}>
                  <Button onClick={onSubmitHandler} type='submit'>Submit</Button>
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

export default AddProduct