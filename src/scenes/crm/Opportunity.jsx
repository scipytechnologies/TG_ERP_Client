import React, { useEffect } from 'react'
import './timeline.css'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ListGroup, Row, Form, Dropdown, Modal, ButtonGroup, Badge } from "react-bootstrap";
import Select from 'react-select';
import { Link, useNavigate } from 'react-router-dom'
import { Grid, _ } from "gridjs-react";
import mainservice from '../../services/mainservice';
import { useSelector } from 'react-redux';
import { Timeline } from 'rsuite';
import Moment from 'react-moment';


import Avatar from "../../components/Avatar";

import img1 from "../../assets/img/img1.jpg";
import img5 from "../../assets/img/img5.jpg";
import img6 from "../../assets/img/img6.jpg";
import img7 from "../../assets/img//img7.jpg";
import img8 from "../../assets/img/img8.jpg";
import img9 from "../../assets/img/img9.jpg";
import img10 from "../../assets/img/img10.jpg";
import img11 from "../../assets/img/img11.jpg";
import img12 from "../../assets/img/img12.jpg";


function Opportunity() {
    // to maintain dark and light mode
    const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
    const [skin, setSkin] = useState(currentSkin);
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const index = useSelector((state) => state.index)
    const user = useSelector((state) => state.loginedUser)

    async function opportunityDetails() {
        const res = await mainservice.opportunityDetails(index.OpportunityID);
        // console.log('Opportunity Details ' + JSON.stringify(res))
        console.log(res.data.opportunitys)
        setData(res.data.opportunitys)
    }
    useEffect(() => {
        opportunityDetails()
    }, []);

    // Grid js each row clicking funciton
    const [offCanvasData, setOffCanvasData] = useState({})
    const [offCanvas, setOffCanvas] = useState(false)
    const [timeline, setTimeline] = useState([{Status:"none"}])
    

    
    const handleCanvas = (row) => {
        console.log(row,"rowwwwwwwwwwwww");
        GetProfile(row.CustomerId);
        setOffCanvasData(row)
        setTimeline(row.FollowUp.reverse())
        setOffCanvas(true)
    };
    const handleClose = () => {
        setOffCanvas(false)
    }
    async function deleteopportunity(id) {
        const res = await mainservice.deleteopportunity(index.OpportunityID, id);
        if (res.data != null) {
            console.log("deleted");
            opportunityDetails()
        }
        else {
            console.log(res.message);
        }
    }

    const onDeleteHandler = (item) => {
        console.log(item._id);
        deleteopportunity(item._id);
    }

    const [profile, setProfile] = useState({})
    const GetProfile = async (id) => {
        const res = await mainservice.customerById(index.CrmID, id);
        setProfile(res.data)
        console.log(profile);
    }
    const [followUp, setFollowUp] = useState({})
    const CreateFollowUp = async (data) => {
        const res = await mainservice.followup(index.OpportunityID, offCanvasData._id, data)
        setOffCanvasData(res.data)
        setTimeline(res.data.FollowUp.reverse())
    }
    const onfollowUpChangeHandler = (event, field) => {
        if (field === 'Status') {
            setFollowUp((prevFollowUp) => ({
                ...prevFollowUp,
                [field]: event.value,
            }));
        } else {
            setFollowUp({
                ...followUp,
                [event.target.name]: event.target.value
            });
        }
    };

    const onfollowUpSubmitHandler = (event) => {
        event.preventDefault();
        const addon = { CreatedBy:`${user.firstName} ${user.lastName}`}
        const data = { ...followUp, ...addon }
        console.log(data);
        CreateFollowUp(data);
    };

    const selectStatus = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    const selectAssigned = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    //  const timeline = offCanvasData.FollowUp
    

    

    return (
        <div>
            <>
                <Header onSkin={setSkin} />
                <div className="main main-app p-3 p-lg-4">
                    <div className="d-md-flex align-items-center justify-content-between mb-4">
                        <div>
                            <ol className="breadcrumb fs-sm mb-1">
                                <li className="breadcrumb-item"><Link to="/dashboard/home">Dashboard</Link></li>
                                <li className="breadcrumb-item"><Link to="/dashboard/crm">CRM</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Opportunity List</li>
                            </ol>
                            <h4 className="main-title mb-0">Opportunity List</h4>
                        </div>

                        <Button variant="primary" className="d-flex align-items-center gap-2" onClick={() => navigate('/dashboard/crm/addOpportunity')}>
                            <i className="ri-bar-chart-2-line fs-18 lh-1"></i>Add Opportunity<span className="d-none d-sm-inline"></span>
                        </Button>
                    </div>



                    <Card>
                        <Card.Body style={{ minHeight: '70vh' }}>
                            <Grid
                                data={data !== undefined ? data.map((item) => [
                                    _(<td>{item.CustomerName}</td>),
                                    item.OpportunityName,
                                    item.Amount,
                                    _(
                                        <Dropdown>
                                            <Dropdown.Toggle style={{ color: 'white' }} variant={
                                                item.SalesStage === 'Initialized' ? 'info' :
                                                    item.SalesStage === '2' ? 'secondary' :
                                                        item.SalesStage === '3' ? 'success' :
                                                            'default'
                                            }>
                                                {item.SalesStage}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Form className="p-3">
                                                    <div className="mb-3">
                                                        <Form.Label for="exampleDropdownFormEmail1">Email address</Form.Label>
                                                        <Form.Select aria-label="Default select example">
                                                            <option>{item.saleStage}</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </Form.Select>
                                                    </div>
                                                    <div className="mb-3">

                                                        <Form.Label htmlFor="exampleFormControlTextarea1">Message</Form.Label>
                                                        <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="3" placeholder="Enter message here..."></Form.Control>

                                                    </div>
                                                    <Button variant="primary" type="submit">Save</Button>
                                                </Form>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    ),
                                    item.Reason,
                                    _(
                                        <>
                                            <ButtonGroup>
                                                <Button size="sm" variant='white' onClick={() => handleCanvas(item)}><i className='ri-eye-line'></i></Button>
                                                <Button className='p-0' variant="white">


                                                    <Dropdown drop="end">
                                                        <Dropdown.Toggle variant='white' size="sm" className='btn-no-outline'>
                                                            <i className='ri-more-2-fill' color="primary"></i>
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                            <Dropdown.Item style={{ color: 'red' }} onClick={() => onDeleteHandler(item)}>Delete</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </Button>
                                            </ButtonGroup>

                                        </>

                                    )
                                ])
                                    : []
                                }
                                columns={['Customer', 'Opportunity Name', 'Amount', 'Stage', 'Note', 'Action']}
                                search={true}
                                pagination={true}
                                sort={true}
                                resizable={true}
                                className={{
                                    table: 'table table-bordered mb-0',
                                }}
                            />
                        </Card.Body>
                        <Modal show={offCanvas} onHide={handleClose} fullscreen={true}>
                            <Modal.Header closeButton>
                                <Modal.Title>Lead Manager</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className=" p-4 p-lg-5 " >
                                    <Row className="g-5">
                                        <Col xl="4" xxl="3" className="d-none d-xl-block" >
                                            <Card >
                                                <Card.Body >
                                                    <div className=" mb-5"  >
                                                        <div style={{
                                                            position: 'relative',
                                                            backgroundColor: '#506fd9',
                                                            backgroundSize: 'cover',
                                                            height: '130px',
                                                            borderRadius: '5px 5px 0 0'
                                                        }}>
                                                            <img style={{
                                                                position: 'absolute',
                                                                bottom: '-50px',
                                                                left: '50%',
                                                                transform: 'translateX(-50%)',
                                                                background: 'white',
                                                                padding: '5px'
                                                            }} src={img1} fluid={true} alt="..." className="rounded-circle mx-auto d-block w-40" />
                                                        </div>
                                                        <div className="mt-5">
                                                            <h5 className=" text-center pt-2 mb-0">{profile.FirstName + " " + profile.LastName}</h5>
                                                            <h6 className=" text-center pt-0 mt-0"> {profile.BusinessRole}</h6>
                                                        </div>


                                                        <Card className='mb-2'>
                                                            <Card.Body>
                                                                <div className='d-flex gap-2 justify-content-center'>
                                                                    <Button variant="primary" className="btn-icon"><i class="ri-phone-fill"></i></Button>
                                                                    <Button variant="primary" className="btn-icon"><i class="ri-message-fill"></i></Button>
                                                                    <Button variant="primary" className="btn-icon"><i class="ri-edit-fill"></i></Button>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                        <ListGroup>
                                                            <ListGroup.Item>
                                                                <div className='d-flex'>
                                                                    <div className='w-50'>
                                                                        Phone
                                                                    </div>
                                                                    <div className='w-50'>
                                                                        : {profile.PhoneMobile}
                                                                    </div>
                                                                </div>
                                                            </ListGroup.Item>
                                                            <ListGroup.Item>
                                                                <div className='d-flex'>
                                                                    <div className='w-50'>
                                                                        Email
                                                                    </div>
                                                                    <div className='w-50'>
                                                                        : {profile.Email}
                                                                    </div>
                                                                </div>
                                                            </ListGroup.Item>
                                                            <ListGroup.Item>
                                                                <div className='d-flex'>
                                                                    <div className='w-50'>
                                                                        Address
                                                                    </div>
                                                                    <div className='w-50'>
                                                                        : {profile.Address}
                                                                    </div>
                                                                </div>
                                                            </ListGroup.Item>
                                                            <ListGroup.Item>
                                                                <div className='d-flex'>
                                                                    <div className='w-50'>
                                                                        Place
                                                                    </div>
                                                                    <div className='w-50'>
                                                                        : {profile.Place}
                                                                    </div>
                                                                </div>
                                                            </ListGroup.Item>

                                                            <ListGroup.Item>
                                                                <div className='d-flex'>
                                                                    <div className='w-50'>
                                                                        City
                                                                    </div>
                                                                    <div className='w-50'>
                                                                        : {profile.PrimaryCity}
                                                                    </div>
                                                                </div>
                                                            </ListGroup.Item>
                                                            <ListGroup.Item>
                                                                <div className='d-flex'>
                                                                    <div className='w-50'>
                                                                        pinCode
                                                                    </div>
                                                                    <div className='w-50'>
                                                                        : {profile.PrimaryPostal}

                                                                    </div>
                                                                </div>
                                                            </ListGroup.Item>

                                                        </ListGroup>


                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xl>
                                            <div className="media-profile mb-5">
                                                <div className="media-body">
                                                    <h5 className="media-name">{offCanvasData.OpportunityName}</h5>
                                                    <p className="d-flex gap-2 mb-4">Created Date :  <Moment format="DD-MM-YYYY">
                                                    {offCanvasData.createdAt}
                                                    </Moment></p>
                                                    <p className="mb-0">{offCanvasData.Description}</p>
                                                </div>
                                            </div>
                                         { offCanvasData ?
                                            <Row className="row-cols-sm-auto g-4 g-md-5 g-xl-4 g-xxl-5">
                                                {[
                                                    {
                                                        "icon": "ri-bar-chart-box-fill",
                                                        "text": timeline[0].Status,
                                                        "label": "Status"
                                                    }, {
                                                        "icon": "ri-suitcase-fill",
                                                        "text": offCanvasData.LeadSource,
                                                        "label": "Lead Source"
                                                    }, {
                                                        "icon": "ri-user-3-fill",
                                                        "text": offCanvasData.CreatedBy,
                                                        "label": "Created By"
                                                    }, {
                                                        "icon": "ri-team-fill",
                                                        "text": offCanvasData.AssignedTo,
                                                        "label": "Assigned to"
                                                    }
                                                ].map((profileItem, index) => (
                                                    <Col key={index}>
                                                        <div className="profile-item">
                                                            <i className={profileItem.icon}></i>
                                                            <div className="profile-item-body">
                                                                <span>{profileItem.label}</span> <p>{profileItem.text}</p>

                                                            </div>
                                                        </div>
                                                    </Col>
                                                ))}
                                            </Row> : [] }

                                            <div className='d-flex gap-2 justify-content-end mt-5'>
                                                {/* <div>
                                                    <Button variant="secondary" onClick={handleClose}>
                                                        Close
                                                    </Button>
                                                </div> */}
                                                <div>
                                                    <Button variant="primary" onClick={handleClose}>
                                                        Create Appointment
                                                    </Button>
                                                </div>
                                                <div>

                                                    <Button variant="primary" onClick={handleClose}>
                                                        Create Invoice
                                                    </Button>  </div>
                                            </div>

                                            <Card className='mt-3 '>
                                                <Card.Header>
                                                    <Card.Title>
                                                        Add Follow Up
                                                    </Card.Title>
                                                </Card.Header>

                                                <Card.Body className='d-flex-wrap gap-2 d-flex align-items-end'>
                                                    <div className="mt-1 w-25">
                                                        <Form.Label htmlFor="followuptitle">Follow up titile</Form.Label>
                                                        <Form.Control type="text" name="Title" id="followuptitle" onChange={onfollowUpChangeHandler} placeholder="eg: Scheduled a Meeting" />
                                                    </div>
                                                    <div className="mt-1 w-50">
                                                        <Form.Label htmlFor="followupmessage">Message</Form.Label>
                                                        <Form.Control type="text" name="Message" id="followupmessage" onChange={onfollowUpChangeHandler} placeholder="eg: Client meeting scheduled at DD/MM/YYYY at HH:MM " />
                                                    </div>
                                                    <div className="mt-1 w-20">
                                                        <Form.Label htmlFor="followupmessage">Status</Form.Label>
                                                        <Select name='Status' options={selectStatus} isSearchable={false} onChange={(selectStatus) => onfollowUpChangeHandler(selectStatus, 'Status')} />
                                                    </div>
                                                    {/* <div className="mt-1 w-20">
                                                        <Form.Label htmlFor="followupmessage">Assigned to</Form.Label>
                                                        <Select name='AssignedTo' options={selectAssigned} isSearchable={false} onChange={(selectAssigned) => onfollowUpChangeHandler(selectAssigned, 'AssignedTo')} />
                                                    </div> */}
                                                    <div>

                                                        <Button variant="primary" onClick={onfollowUpSubmitHandler}>
                                                            Submit
                                                        </Button>  </div>
                                                </Card.Body>
                                            </Card>









                                            <Card className="card-post mt-1">

                                                <Card.Body>
                                                    <Nav className="nav-line mt-1">
                                                        <Nav.Link href="" className="active">Recent Activity</Nav.Link>
                                                        {/* <Nav.Link href="">Personal Information</Nav.Link>
                                                <Nav.Link href="">Connections</Nav.Link>
                                                <Nav.Link href="">Profile Settings</Nav.Link> */}
                                                    </Nav>
                                                    <Row className="justify-content-center mt-4 mb-1 ">
                                                        <Col md={11} >

                                                            {timeline !== undefined ? timeline.map((item, index) => (
                                                                <div className="news-item" key={index}>
                                                                    <div className="news-img w-2">
                                                                        {/* <img src={item.img} className="img-fluid" alt="" /> */}
                                                                        {/* <div> {moment(item.createdAt).fromNow()} {item.createdAt}</div> */}
                                                                        <Moment toNow>{item.createdAt}</Moment> ago
                                                                    </div>
                                                                    <div className="news-body border border-primary border-top-0 border-end-0 border-bottom-0 border-5" style={{ paddingLeft: '10px', }} >
                                                                       { item.CreatedBy? <label className="d-block mb-1 fs-sm text-primary">CreatedBy : {item.CreatedBy}</label> :[]} 
                                                                        <h6 className="news-title fw-semibold">
                                                                            <Link to="" className="text-dark">{item.Title} </Link>
                                                                            <Badge bg="primary">{item.Status}</Badge>
                                                                        </h6>
                                                                        <p className="news-text mb-0">{item.Message}</p>
                                                                    </div>
                                                                </div>
                                                            )) : []}



                                                        </Col>
                                                    </Row>

                                                </Card.Body>

                                            </Card>


                                        </Col>

                                    </Row>
                                    <Footer />
                                </div>
                            </Modal.Body>

                            <Modal.Footer>

                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Card>
                    <Footer />

                </div >
            </>
        </div >
    )
}

export default Opportunity;