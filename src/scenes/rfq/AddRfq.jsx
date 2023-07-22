import React, { useEffect } from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Form } from "react-bootstrap";
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import mainservice from '../../services/mainservice';
import { useSelector } from 'react-redux';


function AddRFQ() {
  // to maintain dark and light mode
  const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
  const [skin, setSkin] = useState(currentSkin);
  const navigate = useNavigate()
  const [form, setform] = useState("");
  const index = useSelector((state) => state.index)
  console.log(index.RFQID, "RFQ");
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

  async function PostRFQ(form) {
    console.log(form);
    const res = await mainservice.rfq(form, index.RFQID);
    if (res.data != null) {
      console.log("RFQ Added");
    }
    else {
      console.log(res);
    }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    PostRFQ(form);
  }

  const onUpdateHandler = (event) => {
    event.preventDefault();
    console.log(uform);
    updaterfq(uform);
  }

  async function updaterfq(uform) {
    const res = await mainservice.updaterfq(index.RFQID,id,uform);
    if (res.data != null) {
      console.log(res.data, "RFQ details updated")
    }
    else {
      console.log(res)
    }
  }

  let [searchParams, setSearchParams] = useSearchParams();
  const [uform, setUform] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const id = searchParams.get("id");
  const CheckEdit = async () => {
    if (id) {
      setEditMode(true)
      const res = await mainservice.getRFQ(index.RFQID, id);
      setUform(res.data)
      console.log(res.data, "this");
    }
  }
  useEffect(() => {
    CheckEdit()
  }, []);

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <Header onSkin={setSkin} />
        <div className="main main-app p-3 p-lg-4">
          <div className="d-md-flex align-items-center justify-content-between mb-4">
            <div>
              <ol className="breadcrumb fs-sm mb-1">
                <li className="breadcrumb-item"><Link to="/dashboard/home">Dashboard</Link></li>
                <li className="breadcrumb-item"><Link to="/dashboard/RFQ">RFQ</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Add RFQ</li>
              </ol>
              <h4 className="main-title mb-0">Create New RFQ</h4>
            </div>
          </div>

          {/* responsive form in a card */}
          <Card>
            <Card.Body>
              <Row className="g-4">
                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="RequisitionDate">Requisition Date</Form.Label>
                    <Form.Control type="Date" id="RequisitionDate" name="RequisitionDate" value={uform.RequisitionDate} placeholder="Requisition Date" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="PurchaseRequisition">Purchase Requisition</Form.Label>
                    <Form.Control type="text" id="PurchaseRequisition" name="PurchaseRequisition" value={uform.PurchaseRequisition} placeholder="Purchase Requisition" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="TypeofRequisition">Type of Requisition</Form.Label>
                    <Form.Control type="text" id="TypeofRequisition" name="TypeofRequisition" value={uform.TypeofRequisition} placeholder="Type of Requisition" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="JDERequisition">JDE Requisition</Form.Label>
                    <Form.Control type="text" id="JDERequisition" name="JDERequisition" value={uform.JDERequisition} placeholder="JDE Requisition" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Company">Company</Form.Label>
                    <Form.Control type="text" id="Company" name="Company" value={uform.Company} placeholder="Company" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="CompanyCode">Company Code</Form.Label>
                    <Form.Control type="text" id="CompanyCode" name="CompanyCode" value={uform.CompanyCode} placeholder="Company Code" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="RequisitorsName">Requisitors Name</Form.Label>
                    <Form.Control type="text" id="RequisitorsName" name="RequisitorsName" value={uform.RequisitorsName} placeholder="Requisitors Name" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="ProjectName">Project Name</Form.Label>
                    <Form.Control type="text" id="ProjectName" name="ProjectName" value={uform.ProjectName} placeholder="Project Name" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="ProjectCode">Project Code</Form.Label>
                    <Form.Control type="text" id="ProjectCode" name="ProjectCode" value={uform.ProjectCode} placeholder="Project Code" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Phone">Phone</Form.Label>
                    <Form.Control type="Number" id="Phone" name="Phone" value={uform.Phone} placeholder="Phone" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Department">Department</Form.Label>
                    <Form.Control type="text" id="Department" name="Department" value={uform.Department} placeholder="Department" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="DeliveryDate">Delivery Date</Form.Label>
                    <Form.Control type="Date" id="DeliveryDate" name="DeliveryDate" value={uform.DeliveryDate} placeholder="Delivery Date" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Priority">Priority</Form.Label>
                    <Form.Control type="text" id="Priority" name="Priority" value={uform.Priority} placeholder="Priority" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="PointofDelivery">Point of Delivery</Form.Label>
                    <Form.Control type="Date" id="PointofDelivery" name="PointofDelivery" value={uform.PointofDelivery} placeholder="Point of Delivery" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Receivedby">Received by</Form.Label>
                    <Form.Control type="text" id="Receivedby" name="Receivedby" value={uform.Receivedby} placeholder="Received by" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Contactdetails">Contact details</Form.Label>
                    <Form.Control type="text" id="Contactdetails" name="Contactdetails" value={uform.Contactdetails} placeholder="Contact details" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Product">Product</Form.Label>
                    <Form.Control type="text" id="Product" name="Product" value={uform.Product} placeholder="Product" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Specialinstruction">Special instruction</Form.Label>
                    <Form.Control type="text" id="Specialinstruction" name="Specialinstruction" value={uform.Specialinstruction} placeholder="Special instruction" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col xs="12">
                  {editMode ?
                    <div className='mt-1' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Button onClick={onUpdateHandler} type="submit">Update</Button>
                    </div> :
                    <div className='mt-1' style={{ display: 'flex', justifyContent: 'flex-end' }}>
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

export default AddRFQ