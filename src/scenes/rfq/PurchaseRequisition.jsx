import React, { useEffect } from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Form } from "react-bootstrap";
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import mainservice from '../../services/mainservice';
import { useSelector } from 'react-redux';


function AddPurchaseRequisition() {
  // to maintain dark and light mode
  const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
  const [skin, setSkin] = useState(currentSkin);
  const navigate = useNavigate()
  const [form, setform] = useState("");
  const index = useSelector((state) => state.index)
  console.log(index.PurchaseRequisitionID, "PurchaseRequisition");
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

  async function PostPurchaseRequisition(form) {
    console.log(form);
    const res = await mainservice.purchaseRequisition(form, index.PurchaseRequisitionID);
    if (res.data != null) {
      console.log("PurchaseRequisition Added");
    }
    else {
      console.log(res);
    }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    PostPurchaseRequisition(form);
  }

  const onUpdateHandler = (event) => {
    event.preventDefault();
    console.log(uform);
    updatepurchaseRequisition(uform);
  }

  async function updatepurchaseRequisition(uform) {
    const res = await mainservice.updatepurchaseRequisition(index.PurchaseRequisitionID,id,uform);
    if (res.data != null) {
      console.log(res.data, "PurchaseRequisition details updated")
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
      const res = await mainservice.getpurchaseRequisitionById(index.PurchaseRequisitionID, id);
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
                <li className="breadcrumb-item"><Link to="/dashboard/rfq">PurchaseRequisition</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Add PurchaseRequisition</li>
              </ol>
              <h4 className="main-title mb-0">Create New Purchase Requisition</h4>
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
                    <Form.Control type="text" id="ItemCategory" name="ItemCategory" value={uform.ItemCategory} placeholder="Item Category" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="ItemCatalogAndDescription">Item Catalog And Description</Form.Label>
                    <Form.Control type="text" id="ItemCategory" name="ItemCategory" value={uform.ItemCategory} placeholder="Item Category" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Quantity">Quantity</Form.Label>
                    <Form.Control type="text" id="Quantity" name="Quantity" value={uform.Quantity} placeholder="Quantity" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Unit">Unit</Form.Label>
                    <Form.Control type="text" id="Unit" name="Unit" value={uform.Unit} placeholder="Unit" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="UnitPrice">Unit Price</Form.Label>
                    <Form.Control type="Number" id="UnitPrice" name="UnitPrice" value={uform.UnitPrice} placeholder="Unit Price" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="ItemTotal">Item Total</Form.Label>
                    <Form.Control type="Number" id="ItemTotal" name="ItemTotal" value={uform.ItemTotal} placeholder="Item Total" onChange={onChangeHandler} />
                  </div>
                </Col>


              <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="RequisitionNo">Requisition Number</Form.Label>
                    <Form.Control type="Number" id="RequisitionNo" name="RequisitionNo" value={uform.RequisitionNo} placeholder="Requisition Number" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="RequisitionDate">Requisition Date</Form.Label>
                    <Form.Control type="Date" id="RequisitionDate" name="RequisitionDate" value={uform.RequisitionDate} placeholder="Requisition Date" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Supplier">Supplier</Form.Label>
                    <Form.Control type="text" id="Supplier" name="Supplier" value={uform.Supplier} placeholder="Supplier" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="City">City</Form.Label>
                    <Form.Control type="text" id="City" name="City" value={uform.City} placeholder="City" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="State">State</Form.Label>
                    <Form.Control type="text" id="State" name="State" value={uform.State} placeholder="State" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="PinCode">PinCode</Form.Label>
                    <Form.Control type="Number" id="PinCode" name="PinCode" value={uform.PinCode} placeholder="PinCode" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="FedId">FedId</Form.Label>
                    <Form.Control type="text" id="FedId" name="FedId" value={uform.FedId} placeholder="FedId" onChange={onChangeHandler} />
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
                    <Form.Label htmlFor="Fax">Fax</Form.Label>
                    <Form.Control type="text" id="Fax" name="Fax" value={uform.Fax} placeholder="Fax" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="OrganizationName">Organization Name</Form.Label>
                    <Form.Control type="text" id="OrganizationName" name="OrganizationName" value={uform.OrganizationName} placeholder="Organization Name" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Building">Building</Form.Label>
                    <Form.Control type="text" id="Building" name="Building" value={uform.Building} placeholder="Building" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="RoomNumber">Room Number</Form.Label>
                    <Form.Control type="Number" id="RoomNumber" name="RoomNumber" value={uform.RoomNumber} placeholder="Room Number" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="AttentionDate">Attention Date</Form.Label>
                    <Form.Control type="Date" id="AttentionDate" name="AttentionDate" value={uform.AttentionDate} placeholder="Attention Date" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="PaymentTerms">Payment Terms</Form.Label>
                    <Form.Control type="text" id="PaymentTerms" name="PaymentTerms" value={uform.PaymentTerms} placeholder="Payment Terms" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="FreightDue">Freight Due</Form.Label>
                    <Form.Control type="text" id="FreightDue" name="FreightDue" value={uform.FreightDue} placeholder="Freight Due" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="FreightPaid">Freight Paid</Form.Label>
                    <Form.Control type="text" id="FreightPaid" name="FreightPaid" value={uform.FreightPaid} placeholder="Freight Paid" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Carrier">Carrier</Form.Label>
                    <Form.Control type="text" id="Carrier" name="Carrier" value={uform.Carrier} placeholder="Carrier" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="FOB">FOB</Form.Label>
                    <Form.Control type="text" id="FOB" name="FOB" value={uform.FOB} placeholder="FOB" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Destination">Destination</Form.Label>
                    <Form.Control type="text" id="Destination" name="Destination" value={uform.Destination} placeholder="Destination" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="FCA">FCA</Form.Label>
                    <Form.Control type="text" id="FCA" name="FCA" value={uform.FCA} placeholder="FCA" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Origin">Origin</Form.Label>
                    <Form.Control type="text" id="Origin" name="Origin" value={uform.Origin} placeholder="Origin" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="SupplierNotes">Supplier Notes</Form.Label>
                    <Form.Control type="text" id="SupplierNotes" name="SupplierNotes" value={uform.SupplierNotes} placeholder="Supplier Notes" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Confirming">Confirming</Form.Label>
                    <Form.Control type="text" id="Confirming" name="Confirming" value={uform.Confirming} placeholder="Confirming" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Project">Project</Form.Label>
                    <Form.Control type="text" id="Project" name="Project" value={uform.Project} placeholder="Project" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Task">Task</Form.Label>
                    <Form.Control type="text" id="Task" name="Task" value={uform.Task} placeholder="Task" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Award">Award</Form.Label>
                    <Form.Control type="text" id="Award" name="Award" value={uform.Award} placeholder="Award" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="ExpenditureType">Expenditure Type</Form.Label>
                    <Form.Control type="text" id="ExpenditureType" name="ExpenditureType" value={uform.ExpenditureType} placeholder="Expenditure Type" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="OrganizationName">Organization Name</Form.Label>
                    <Form.Control type="text" id="OrganizationName" name="OrganizationName" value={uform.OrganizationName} placeholder="Organization Name" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Requisitioner">Requisitioner</Form.Label>
                    <Form.Control type="text" id="Requisitioner" name="Requisitioner" value={uform.Requisitioner} placeholder="Requisitioner" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Telephone">Telephone</Form.Label>
                    <Form.Control type="Number" id="Telephone" name="Telephone" value={uform.Telephone} placeholder="Telephone" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Address">Address</Form.Label>
                    <Form.Control as="textarea" id="Address" name="Address" value={uform.Address} rows="4" placeholder="Address" onChange={onChangeHandler} />
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

export default AddPurchaseRequisition