import React from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Form } from "react-bootstrap";
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
// import mainservice from '../../services/mainservice';
// import { useSelector } from 'react-redux';
// import { useEffect } from 'react';

function Admin() {
  // to maintain dark and light mode
  const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
  const [skin, setSkin] = useState(currentSkin);
  const navigate = useNavigate()
//   const index = useSelector((state)=>state.index)
//   console.log(index.OpportunityID,"opportunityID");

//   const [form, setform] = useState({});
//   const onChangeHandler = (event) => {
//     setform({
//       ...form,
//       [event.target.name]: event.target.value
//     });
//     console.log(form);
//     setUform({
//       ...uform,
//       [event.target.name]: event.target.value
//     });
//     console.log(uform);
//   };

//     async function PostOpportunity(form) {
//     console.log(form);
//     const res = await mainservice.createOpportunity(form,index.OpportunityID);
//     if (res.data != null) {
//       console.log("Opportunity Added");
//     }
//     else {
//       console.log(res.message);
//     }
//   }
  
//   const onSubmitHandler = (event) => {
//     event.preventDefault();
//     PostOpportunity(form);
//   }

//   const onUpdateHandler = (event) => {
//     event.preventDefault();
//     console.log(uform);
//     editOpportunity(uform);
//   };
//   async function editOpportunity(uform){
//     const res = await mainservice.editOpportunity(index.OpportunityID,id,uform);
//     if(res.data!= null){
//       console.log(res.data, "Opportunity Details updated");
//     }
//     else{
//       console.log(res);
//     }
//   }

//   let[searchParams,setSearchParams] = useSearchParams();
//   const [uform, setUform] = useState([]);
//   const [editMode, setEditMode] = useState(false);
//   const id = searchParams.get("id");
//   const CheckEdit = async() => {
//     if(id){
//       setEditMode(true)
//       const res = await mainservice.getOpportunity(index.OpportunityID,id);
//       setUform(res.data)
//       console.log(res.data,"this");
//     }
//   }
//   useEffect(() => {
//     CheckEdit() 
//   },[]);

  return (
    <>
      {/* <form onSubmit={onSubmitHandler}> */}
        <Header onSkin={setSkin} />
        <div className="main main-app p-3 p-lg-4">
          <div className="d-md-flex align-items-center justify-content-between mb-4">
            <div>
              <ol className="breadcrumb fs-sm mb-1">
                <li className="breadcrumb-item"><Link to="/dashboard/home">Dashboard</Link></li>
                <li className="breadcrumb-item"><Link to="/dashboard/admin">Admin</Link></li>
                {/* <li className="breadcrumb-item active" aria-current="page">Add Opportunity</li> */}
              </ol>
              <h4 className="main-title mb-0">Admin page</h4>
            </div>
          </div>


          {/* <Card>
            <Card.Body>
              <Row className="g-4">
                <Col md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="CustomerName">Customer Name</Form.Label>
                    <Form.Control type="text" id="CustomerName" name="CustomerName" value={uform.CustomerName} placeholder="Customer Name" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="CustomerId">Customer Id</Form.Label>
                    <Form.Control type="text" id="CustomerId" name="CustomerId" value={uform.CustomerId} placeholder="Customer Id" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="OpportunityName">Opportunity Name</Form.Label>
                    <Form.Control type="text" id="OpportunityName" name="OpportunityName" value={uform.OpportunityName} placeholder="Opportunity Name" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="AssignedTo">Assigned To</Form.Label>
                    <Form.Control type="text" id="AssignedTo" name="AssignedTo" value={uform.AssignedTo} placeholder="Assigned To" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="LeadSource">Lead Source</Form.Label>
                    <Form.Control type="text" id="LeadSource" name="LeadSource" value={uform.LeadSource} placeholder="Lead Source" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col md="12" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Description">Description</Form.Label>
                    <Form.Control as="textarea" id="Description" name="Description" rows="4" value={uform.Description} placeholder="Description" onChange={onChangeHandler} />
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
          </Card> */}
          <Footer />
        </div>
      {/* </form> */}
    </>
  )
}

export default Admin