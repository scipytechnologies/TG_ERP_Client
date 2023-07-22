import React from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Form } from "react-bootstrap";
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import mainservice from '../../services/mainservice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function AddProject() {
  // to maintain dark and light mode
  const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
  const [skin, setSkin] = useState(currentSkin);
  const navigate = useNavigate()
  const [form, setform] = useState("")
  const index = useSelector((state) => state.index)
  console.log(index.PurchaseID, "Purchase");
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

  const onSubmitHandler = (event) => {
    event.preventDefault();
    purchase(form);

  }

  const onUpdateHandler = (event) => {
    event.preventDefault();
    console.log(uform);
    updatePurchase(uform);
  };

  async function purchase(form) {
    const res = await mainservice.purchase(form, index.PurchaseID);
    if (res.data != null) {
      console.log("Purchase Added");
    }
    else {
      console.log(res.message);
    }
  }

  async function updatePurchase(uform){
    const res = await mainservice.updatePurchase(index.PurchaseID,id,uform);
    if(res.data!= null){
      console.log(res.data, "Purchase Details updated");
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
      const res = await mainservice.getPurchaseById(index.PurchaseID,id);
      setUform(res.data)
      console.log(res.data,"this");
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
                <li className="breadcrumb-item"><Link to="/dashboard/purchase">Purchase</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Add Purchase</li>
              </ol>
              <h4 className="main-title mb-0">Add New Purchase</h4>
            </div>
          </div>

          {/* responsive form in a card */}
          <Card>
            <Card.Body>
              <Row className="g-4">
                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="exampleFormControlInput1">Quote No</Form.Label>
                    <Form.Control type="number" name="QuoteNo" value={uform.QuoteNo} id="exampleFormControlInput1" placeholder="Quote No" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="exampleFormControlInput1">Quote Subject</Form.Label>
                    <Form.Control type="text" name="QuoteSubject" value={uform.QuoteSubject} id="exampleFormControlInput1" placeholder="Quote Subject" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="exampleFormControlInput1">Quote Stage</Form.Label>
                    <Form.Control type="text" name="QuoteStage" value={uform.QuoteStage} id="exampleFormControlInput1" placeholder="Quote Stage" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="exampleFormControlInput1">Valid Until</Form.Label>
                    <Form.Control type="date" name="ValidUntil" value={uform.ValidUntil} id="exampleFormControlInput1" placeholder="Valid Until" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="exampleFormControlInput1">Terms</Form.Label>
                    <Form.Control type="text" name="Terms" value={uform.Terms} id="exampleFormControlInput1" placeholder="Terms" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="exampleFormControlInput1">Tax Information</Form.Label>
                    <Form.Control type="text" name="TaxInformation" value={uform.TaxInformation} id="exampleFormControlInput1" placeholder="Tax Information" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="exampleFormControlInput1">Total Amount</Form.Label>
                    <Form.Control type="number" name="TotalAmount" value={uform.TotalAmount} id="exampleFormControlInput1" placeholder="Total Amount" onChange={onChangeHandler} />
                  </div>
                </Col>


                <Col md="12" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="exampleFormControlInput1">Billing Address</Form.Label>
                    <Form.Control as="textarea" rows="4" name="BillingAddress" value={uform.BillingAddress} id="exampleFormControlInput1" placeholder="Billing Address" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col md="12" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="exampleFormControlInput1">Notes</Form.Label>
                    <Form.Control as="textarea" rows="4" name="Notes" value={uform.Notes} id="exampleFormControlInput1" placeholder="Notes" onChange={onChangeHandler} />
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
        </div>
      </form>
    </>
  )
}

export default AddProject