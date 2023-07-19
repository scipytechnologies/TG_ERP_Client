import React from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Form } from "react-bootstrap";
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import mainservice from '../../services/mainservice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function PostProject() {
  // to maintain dark and light mode
  const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
  const [skin, setSkin] = useState(currentSkin);
  const navigate = useNavigate()
  const [form, setform] = useState("")
  const index = useSelector((state)=>state.index)
  console.log(index.PRJID,"Project");
  const onChangeHandler = (event) => {
    setUform({
      ...uform,
      [event.target.name]: event.target.value
    })
    console.log(uform);
  }
  async function addPrjmanagerDetails(form) {
    console.log(form);
    const res = await mainservice.addPrjmanagerDetails(form,index.PRJID);
    if (res.data != null) {
      console.log("Project Added");
    }
    else {
      console.log(res);
    }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addPrjmanagerDetails(form);
  }

  const onUpdateHandler = (event) => {
    event.preventDefault();
    console.log(uform)
    editPrjmanagerDetails(uform);
  }

  async function editPrjmanagerDetails(uform){
    const res = await mainservice.editPrjmanagerDetails(index.PRJID,id,uform);
    if(res.data!= null){
      console.log(res.data,"Project Details updated");
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
      const res = await mainservice.getPrjmanagerDetailsById(index.PRJID,id)
      setUform(res.data)
      console.log(res.data,"this")
    }
  }
  useEffect(() =>{
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
                <li className="breadcrumb-item"><Link to="/dashboard/projectManagement">Project</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Add Project</li>
              </ol>
              <h4 className="main-title mb-0">Create New Project</h4>
            </div>
          </div>

          {/* responsive form in a card */}
          <Card>
            <Card.Body>
              <Row className="g-4">
                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="PrjName">Project Name</Form.Label>
                    <Form.Control type="text" id="PrjName" name="PrjName" value={uform.PrjName} placeholder="Project Name" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Type">Type</Form.Label>
                    <Form.Control type="text" id="Type" name="Type" value={uform.Type} placeholder="Type" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Account">Account</Form.Label>
                    <Form.Control type="text" id="Account" name="Account" value={uform.Account} placeholder="Account" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="AssignedTo">Assigned To</Form.Label>
                    <Form.Control type="text" id="AssignedTo" name="AssignedTo" value={uform.AssignedTo} placeholder="Assigned To" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Teams">Teams</Form.Label>
                    <Form.Control type="text" id="Teams" name="Teams" value={uform.Teams} placeholder="Teams" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Status">Status</Form.Label>
                    <Form.Control type="text" id="Status" name="Status" value={uform.Status} placeholder="Status" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="StartDate">Start Date</Form.Label>
                    <Form.Control type="Date" id="StartDate" name="StartDate" value={uform.StartDate} placeholder="Start Date" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="EndDate">End Date</Form.Label>
                    <Form.Control type="Date" id="EndDate" name="EndDate" value={uform.EndDate} placeholder="End Date" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="UseTimesheet">Use Time sheet</Form.Label>
                    <Form.Control type="text" id="UseTimesheet" name="UseTimesheet" value={uform.UseTimesheet} placeholder="Use Time sheet" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Amount">Amount</Form.Label>
                    <Form.Control type="Number" id="Amount" name="Amount" value={uform.Amount} placeholder="Amount" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="LeadSource">Lead Source</Form.Label>
                    <Form.Control type="text" id="LeadSource" name="LeadSource" value={uform.LeadSource} placeholder="Lead Source" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Progress">Progress</Form.Label>
                    <Form.Control type="text" id="Progress" name="Progress" value={uform.Progress} placeholder="Progress" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Description">Description</Form.Label>
                    <Form.Control as="textarea" id="Description" name="Description" value={uform.Description} rows="4" placeholder="Description" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col md="12">
                  {editMode?
                  <div className='mt-1' style={{display:'flex', justifyContent:'flex-end'}}>
                    <Button onClick={onUpdateHandler} type="submit">Update</Button>
                  </div>:
                  <div className='mt-1' style={{display:'flex', justifyContent:'flex-end'}}>
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

export default PostProject