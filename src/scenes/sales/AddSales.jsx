import React from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Form } from "react-bootstrap";
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import mainservice from '../../services/mainservice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function AddSales() {
  // to maintain dark and light mode
  const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
  const [skin, setSkin] = useState(currentSkin);
  const navigate = useNavigate()
  const [form, setform] = useState("");
  const index = useSelector((state)=>state.index)
  console.log(index.SalesID,"Sales");
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
  }

  async function PostSales(form) {
    console.log(form);
    const res = await mainservice.sales(form,index.SalesID);
    if (res.data != null) {
      console.log("Sales Added");
    }
    else {
      console.log(res);
    }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    PostSales(form);
  }

  const onUpdateHandler = (event) => {
    event.preventDefault();
    console.log(uform);
    updateSales(uform);
  };
  async function updateSales(uform){
    const res = await mainservice.updateSales(index.SalesID,id,uform);
    if(res.data!= null){
      console.log(res.data, "Sales Details updated");
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
      const res = await mainservice.getSalesById(index.SalesID,id);
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
                <li className="breadcrumb-item"><Link to="/dashboard/sales">Sales</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Add Sales</li>
              </ol>
              <h4 className="main-title mb-0">Create New Sales</h4>
            </div>
          </div>

          {/* responsive form in a card */}
          <Card>
            <Card.Body>
              <Row className="g-4">
                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="CustomerName">CustomerName</Form.Label>
                    <Form.Control type="text" id="CustomerName" name="CustomerName" value={uform.CustomerName} placeholder="Customer Name" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="CustomerId">Customer Id</Form.Label>
                    <Form.Control type="text" id="CustomerId" name='CustomerId' value={uform.CustomerId} placeholder="Customer Id" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="SalesPerson">Sales Person</Form.Label>
                    <Form.Control type="text" id="SalesPerson" name='SalesPerson' value={uform.SalesPerson} placeholder="Sales Person" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="EmpId">Employee Id</Form.Label>
                    <Form.Control type="text" id="EmpId" name='EmpId' value={uform.EmpId} placeholder="Employee Id" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="SalesDate">Sales Date</Form.Label>
                    <Form.Control type="Date" id="SalesDate" name='SalesDate' value={uform.SalesDate} placeholder="Sales Date" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="OrderNumber">Order Number</Form.Label>
                    <Form.Control type="Number" id="OrderNumber" name='OrderNumber' value={uform.OrderNumber} placeholder="Order Number" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col xs="12">
                {editMode?
                  <div className="mt-1" style={{display:'flex',justifyContent:'flex-end'}}>
                    <Button onClick={onUpdateHandler} type="submit">Update</Button>
                  </div>:
                  <div className="mt-1" style={{display:'flex',justifyContent:'flex-end'}}>
                    <Button onClick={onSubmitHandler} type="submit">Submit</Button>
                  </div>}
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

export default AddSales