import React, { useEffect } from 'react'
import './timeline.css'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ListGroup, Row, Form, Dropdown, Modal, ButtonGroup, Badge } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import { Grid, _ } from "gridjs-react";
import mainservice from '../../services/mainservice';
import { useSelector } from 'react-redux';

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
    const [offCanvas, setOffCanvas] = useState(false)
    const handleCanvas = (row) => {
        console.log(row);
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
                                                <Button size="sm" variant='white' onClick={() => handleCanvas()}><i className='ri-eye-line'></i></Button>
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
                                <div className=" p-4 p-lg-5">
                                    <Row className="g-5">
                                        <Col xl="4" xxl="3" className="d-none d-xl-block">
                                            <Card>
                                                <Card.Body>
                                                    <div className=" mb-5" >
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
                                                            <h5 className=" text-center pt-2 mb-0">Shaira Diaz</h5>
                                                            <h6 className=" text-center pt-0 mt-0"> manager</h6>
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
                                                                        : +91 8855885588
                                                                    </div>
                                                                </div>
                                                            </ListGroup.Item>
                                                            <ListGroup.Item>
                                                                <div className='d-flex'>
                                                                    <div className='w-50'>
                                                                        Email
                                                                    </div>
                                                                    <div className='w-50'>
                                                                        : email@gmail.com
                                                                    </div>
                                                                </div>
                                                            </ListGroup.Item>
                                                            <ListGroup.Item>
                                                                <div className='d-flex'>
                                                                    <div className='w-50'>
                                                                        Address
                                                                    </div>
                                                                    <div className='w-50'>
                                                                        : Tc 68/3344 House Number,Place
                                                                    </div>
                                                                </div>
                                                            </ListGroup.Item>
                                                            <ListGroup.Item>
                                                                <div className='d-flex'>
                                                                    <div className='w-50'>
                                                                        Place
                                                                    </div>
                                                                    <div className='w-50'>
                                                                        : Palayam
                                                                    </div>
                                                                </div>
                                                            </ListGroup.Item>

                                                            <ListGroup.Item>
                                                                <div className='d-flex'>
                                                                    <div className='w-50'>
                                                                        City
                                                                    </div>
                                                                    <div className='w-50'>
                                                                        : Thiruvananthapuram
                                                                    </div>
                                                                </div>
                                                            </ListGroup.Item>
                                                            <ListGroup.Item>
                                                                <div className='d-flex'>
                                                                    <div className='w-50'>
                                                                        pinCode
                                                                    </div>
                                                                    <div className='w-50'>
                                                                        : 692157
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
                                                    <h5 className="media-name">Lead Name</h5>
                                                    <p className="d-flex gap-2 mb-4">Created Date : 8-july-2023 05:00 pm</p>
                                                    <p className="mb-0">Redhead, Innovator, Saviour of Mankind, Hopeless Romantic, Attractive 20-something Yogurt Enthusiast. You can replace this with any content and adjust it as needed... <Link to="">Read more</Link></p>
                                                </div>
                                            </div>

                                            <Row className="row-cols-sm-auto g-4 g-md-5 g-xl-4 g-xxl-5">
                                                {[
                                                    {
                                                        "icon": "ri-bar-chart-box-fill",
                                                        "text": "Initialized",
                                                        "label": "Status"
                                                    }, {
                                                        "icon": "ri-suitcase-fill",
                                                        "text": "Marketing Campagin",
                                                        "label": "Lead Source"
                                                    }, {
                                                        "icon": "ri-user-3-fill",
                                                        "text": "Sooraj",
                                                        "label": "Created By"
                                                    }, {
                                                        "icon": "ri-team-fill",
                                                        "text": "Manu ML",
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
                                            </Row>

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

                                            <Card className='mt-3'>
                                                <Card.Header>
                                                    <Card.Title>
                                                      Add Follow Up
                                                    </Card.Title>
                                                </Card.Header>

                                                <Card.Body className='d-flex-wrap gap-2 d-flex align-items-end'>
                                                    <div className="mt-1 w-25">
                                                        <Form.Label htmlFor="followuptitle">Follow up titile</Form.Label>
                                                        <Form.Control type="text" name="LastName" id="followuptitle" placeholder="eg: Scheduled a Meeting" />
                                                    </div>
                                                    <div className="mt-1 w-50">
                                                        <Form.Label htmlFor="followupmessage">Message</Form.Label>
                                                        <Form.Control type="textarea" name="LastName" id="followupmessage" placeholder="eg: Client meeting scheduled at DD/MM/YYYY at HH:MM " />
                                                    </div>
                                                    <Dropdown>

                                                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                                                            Status
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                    <Dropdown>

                                                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                                                            Assigned to
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                    <div>

                                                        <Button variant="primary" onClick={handleClose}>
                                                            Close
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
                                                    <Row className="justify-content-center mt-1 mb-1">
                                                        <Col md={11}>
                                                            <Card className="mb-1 mt-2 card border-0">
                                                                <Card.Body>
                                                                    <div className="vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                                                                        <div className="vertical-timeline-item vertical-timeline-element">
                                                                            <div>
                                                                                <span className="vertical-timeline-element-icon bounce-in">
                                                                                    <Badge bg="warning">&nbsp;</Badge>
                                                                                </span>
                                                                                <div className="vertical-timeline-element-content bounce-in">
                                                                                    <h4 className="timeline-title">Meeting with client</h4>
                                                                                    <p>
                                                                                        Meeting with USA Client, today at{' '}
                                                                                        <a href="javascript:void(0);" data-abc="true">
                                                                                            12:00 PM
                                                                                        </a>
                                                                                    </p>
                                                                                    <p>Assigned to : Manu ML</p>
                                                                                    <span className="vertical-timeline-element-date">20-jun-23</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="vertical-timeline-item vertical-timeline-element">
                                                                            <div>
                                                                                <span className="vertical-timeline-element-icon bounce-in">
                                                                                    <Badge bg="info">&nbsp;</Badge>
                                                                                </span>
                                                                                <div className="vertical-timeline-element-content bounce-in">
                                                                                    <h4 className="timeline-title">Lead Generated by Sooraj</h4>
                                                                                    <p>
                                                                                        Meeting with USA Client, today at{' '}
                                                                                        <a href="javascript:void(0);" data-abc="true">
                                                                                            12:00 PM
                                                                                        </a>
                                                                                    </p>
                                                                                    <p>Assigned to : Manu ML</p>
                                                                                    <span className="vertical-timeline-element-date">9:30 AM</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </Card.Body>
                                                            </Card>
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