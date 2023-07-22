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
                  <Form.Label htmlFor="exampleFormControlInput1">REQ No</Form.Label>
                  <Form.Control type="number" name="REQNo" value={uform.REQNo} id="exampleFormControlInput1" placeholder="REQ No" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Requisition Date</Form.Label>
                  <Form.Control type="date" name="RequisitionDate" value={uform.RequisitionDate} id="exampleFormControlInput1" placeholder="Requisition Date" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Supplier</Form.Label>
                  <Form.Control type="text" name="Supplier" value={uform.Supplier} id="exampleFormControlInput1" placeholder="Supplier" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Fed ID</Form.Label>
                  <Form.Control type="text" name="FedID" value={uform.FedID} id="exampleFormControlInput1" placeholder="Fed ID" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Phone</Form.Label>
                  <Form.Control type="number" name="Phone" value={uform.Phone} id="exampleFormControlInput1" placeholder="Phone Number" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Email</Form.Label>
                  <Form.Control type="email" name="Email" value={uform.Email} id="exampleFormControlInput1" placeholder="name@example.com" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Organization Name</Form.Label>
                  <Form.Control type="text" name="OrganizationName" value={uform.OrganizationName} id="exampleFormControlInput1" placeholder="OrganizationName" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Building</Form.Label>
                  <Form.Control type="text" name="Building" value={uform.Building} id="exampleFormControlInput1" placeholder="Building" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Room Number</Form.Label>
                  <Form.Control type="number" name="RoomNumber" value={uform.RoomNumber} id="exampleFormControlInput1" placeholder="Room Number" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Need by Date</Form.Label>
                  <Form.Control type="date" name="NeedbyDate" value={uform.NeedbyDate} id="exampleFormControlInput1" placeholder="Need by Date" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Due</Form.Label>
                  <Form.Control type="number" name="Due" value={uform.Due} id="exampleFormControlInput1" placeholder="Due Amount" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Paid</Form.Label>
                  <Form.Control type="number" name="Paid" value={uform.Paid} id="exampleFormControlInput1" placeholder="Paid Amount" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Carrier</Form.Label>
                  <Form.Control type="text" name="Carrier" value={uform.Carrier} id="exampleFormControlInput1" placeholder="Carrier" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">FOB</Form.Label>
                  <Form.Control type="text" name="FOB" value={uform.FOB} id="exampleFormControlInput1" placeholder="FOB" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Destination</Form.Label>
                  <Form.Control type="text" name="Destination" value={uform.Destination} id="exampleFormControlInput1" placeholder="Destination" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">FCA</Form.Label>
                  <Form.Control type="text" name="FCA" value={uform.FCA} id="exampleFormControlInput1" placeholder="FCA" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Orgin</Form.Label>
                  <Form.Control type="text" name="Orgin" value={uform.Orgin} id="exampleFormControlInput1" placeholder="Orgin" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Confirmation</Form.Label>
                  <Form.Control type="text" name="Confirmation" value={uform.Confirmation} id="exampleFormControlInput1" placeholder="Confirmation" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Task</Form.Label>
                  <Form.Control type="text" name="Task" value={uform.Task} id="exampleFormControlInput1" placeholder="Task" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Award</Form.Label>
                  <Form.Control type="text" name="Award" value={uform.Award} id="exampleFormControlInput1" placeholder="Award" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Expendure Type</Form.Label>
                  <Form.Control type="text" name="ExpendureType" value={uform.ExpendureType} id="exampleFormControlInput1" placeholder="Expendure Type" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Organization Name</Form.Label>
                  <Form.Control type="text" name="OrganizationName" value={uform.OrganizationName} id="exampleFormControlInput1" placeholder="Organization Name" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Requistioner</Form.Label>
                  <Form.Control type="text" name="Requistioner" value={uform.Requistioner} id="exampleFormControlInput1" placeholder="Requistioner" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Phone</Form.Label>
                  <Form.Control type="number" name="Phone" value={uform.Phone} id="exampleFormControlInput1" placeholder="Phone" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Date</Form.Label>
                  <Form.Control type="date" name="Date" value={uform.Date} id="exampleFormControlInput1" placeholder="Date" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">City</Form.Label>
                  <Form.Control type="text" name="City" value={uform.City} id="exampleFormControlInput1" placeholder="City" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">State</Form.Label>
                  <Form.Control type="text" name="State" value={uform.State} id="exampleFormControlInput1" placeholder="State" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col lg="4" md="6" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Zipcode</Form.Label>
                  <Form.Control type="text" name="Zipcode" value={uform.Zipcode} id="exampleFormControlInput1" placeholder="Zipcode" onChange={onChangeHandler} />
                </div>
              </Col>


              <Col md="12" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Address</Form.Label>
                  <Form.Control as="textarea" rows= "4" name="Address" value={uform.Address} id="exampleFormControlInput1" placeholder="Address" onChange={onChangeHandler} />
                </div>
              </Col>

              <Col md="12" xs="12">
                <div className="mt-3">
                  <Form.Label htmlFor="exampleFormControlInput1">Supplier Note</Form.Label>
                  <Form.Control as="textarea" rows= "4" name="SupplierNote" value={uform.SupplierNote} id="exampleFormControlInput1" placeholder="Supplier Note" onChange={onChangeHandler} />
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