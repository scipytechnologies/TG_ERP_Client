import React, { useEffect } from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Form, Dropdown, Modal, ButtonGroup } from "react-bootstrap";
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
                                <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className=" p-4 p-lg-5">
                                    <Row className="g-5">
                                        <Col xl="4" xxl="3" className="d-none d-xl-block">
                                            <Card>
                                                <Card.Body>
                                                    <div className=" mb-5" >
                                                        <div >
                                                            <img src={img1} fluid={true} alt="..." className="rounded-circle mx-auto d-block w-40" />
                                                        </div>
                                                        <div className="">
                                                            <h5 className=" text-center pt-2 mb-0">Shaira Diaz</h5>
                                                            <h6 className=" text-center pt-2 mb-0"> manager</h6>
                                                        </div>
                                                        <Card>
                                                            <Card.Body></Card.Body>
                                                        </Card>


                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xl>
                                            <div className="media-profile mb-5">
                                                <div className="media-img mb-3 mb-sm-0">
                                                    <img src={img1} className="img-fluid" alt="..." />
                                                </div>
                                                <div className="media-body">
                                                    <h5 className="media-name">Shaira Diaz</h5>
                                                    <p className="d-flex gap-2 mb-4"><i className="ri-map-pin-line"></i> San Francisco, California</p>
                                                    <p className="mb-0">Redhead, Innovator, Saviour of Mankind, Hopeless Romantic, Attractive 20-something Yogurt Enthusiast. You can replace this with any content and adjust it as needed... <Link to="">Read more</Link></p>
                                                </div>
                                            </div>

                                            <Row className="row-cols-sm-auto g-4 g-md-5 g-xl-4 g-xxl-5">
                                                {[
                                                    {
                                                        "icon": "ri-medal-2-line",
                                                        "text": "5 Certificates",
                                                        "label": "Achievements"
                                                    }, {
                                                        "icon": "ri-suitcase-line",
                                                        "text": "10+ Years",
                                                        "label": "Experience"
                                                    }, {
                                                        "icon": "ri-team-line",
                                                        "text": "356",
                                                        "label": "Following"
                                                    }, {
                                                        "icon": "ri-team-line",
                                                        "text": "1,056",
                                                        "label": "Followers"
                                                    }
                                                ].map((profileItem, index) => (
                                                    <Col key={index}>
                                                        <div className="profile-item">
                                                            <i className={profileItem.icon}></i>
                                                            <div className="profile-item-body">
                                                                <p>{profileItem.text}</p>
                                                                <span>{profileItem.label}</span>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                ))}
                                            </Row>

                                            <Nav className="nav-line mt-5">
                                                <Nav.Link href="" className="active">Post &amp; Activity</Nav.Link>
                                                <Nav.Link href="">Personal Information</Nav.Link>
                                                <Nav.Link href="">Connections</Nav.Link>
                                                <Nav.Link href="">Profile Settings</Nav.Link>
                                            </Nav>

                                            <div className="post-bar mt-4">
                                                <div className="post-bar-item gap-2">
                                                    <i className="ri-edit-2-line"></i>
                                                    <Link to="">Share an update</Link>
                                                </div>
                                                <div className="post-bar-item">
                                                    <Link to=""><i className="ri-image-line"></i></Link>
                                                </div>
                                                <div className="post-bar-item">
                                                    <Link to=""><i className="ri-vidicon-line"></i></Link>
                                                </div>
                                                <div className="post-bar-item">
                                                    <Link to=""><i className="ri-article-line"></i></Link>
                                                </div>
                                            </div>

                                            <Card className="card-post mt-4">
                                                <Card.Header>
                                                    <Card.Title>Recent Activity</Card.Title>
                                                    <Link to="" className="link-more"><i className="ri-more-2-fill"></i></Link>
                                                </Card.Header>
                                                <Card.Body>
                                                    <div className="post-header mb-3">
                                                        <Link to=""><Avatar initial="s" status="online" /></Link>
                                                        <div className="post-content">
                                                            <h6>Bethany Hartsfield</h6>
                                                            <span>Cigarette Butt Collector</span>
                                                        </div>
                                                        <span className="post-date">3 days ago</span>
                                                    </div>
                                                    <p className="post-text">Our team is expanding again. We are looking for a Product Manager and Software Engineer to drive our new aspects of our capital projects. If you're interested, please drop a comment here or simply message me. <Link to="">#softwareengineer</Link> <Link to="">#engineering</Link></p>

                                                    <div className="post-preview">
                                                        <Row className="g-3">
                                                            <Col sm="4">
                                                                <img src={img5} className="img-fluid" alt="" />
                                                            </Col>
                                                            <Col sm>
                                                                <h5>We're hiring of Product Manager</h5>
                                                                <p>Full-time, $60,000 - $80,000 annual</p>
                                                                <span>Bay Area, San Francisco, California</span>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Card.Body>
                                                <Card.Footer>
                                                    <Nav>
                                                        <Nav.Link href=""><i className="ri-thumb-up-line"></i> Like</Nav.Link>
                                                        <Nav.Link href=""><i className="ri-chat-1-line"></i> Comment</Nav.Link>
                                                        <Nav.Link href=""><i className="ri-share-forward-line"></i> Share</Nav.Link>
                                                    </Nav>
                                                </Card.Footer>
                                            </Card>

                                            <Card className="card-post mt-4">
                                                <Card.Header>
                                                    <Card.Title>Work Experience</Card.Title>
                                                    <Link to="" className="link-more"><i className="ri-more-2-fill"></i></Link>
                                                </Card.Header>
                                                <Card.Body>
                                                    <div className="experience-item">
                                                        <div className="experience-icon"><i className="ri-suitcase-line"></i></div>
                                                        <div className="experience-body">
                                                            <h5>Front-End Developer</h5>
                                                            <p>Themepixels, Inc.</p>
                                                            <p>December 2020 - Present</p>
                                                            <ul className="mt-3">
                                                                <li>Leading on the architecture and approach on the ongoing and new Angular applications in the company;</li>
                                                                <li>Setting up expectations for the developers</li>
                                                                <li>Review other Angular developers' code in terms of following the standards, best practices, and expectations.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                                <Card.Footer>
                                                    <Nav>
                                                        <Nav.Link href="">Show more experiences (4) <i className="ri-arrow-down-s-line"></i></Nav.Link>
                                                    </Nav>
                                                </Card.Footer>
                                            </Card>

                                            <Card className="card-post mt-4">
                                                <Card.Header>
                                                    <Card.Title>Interests</Card.Title>
                                                    <Link to="" className="link-more"><i className="ri-more-2-fill"></i></Link>
                                                </Card.Header>
                                                <Card.Body>
                                                    <div className="interest-item">
                                                        <div className="interest-icon bg-dark"><i className="ri-github-fill"></i></div>
                                                        <div className="interest-body">
                                                            <h6>Github, Inc.</h6>
                                                            <p>A provider of Internet hosting for software development and version control using Git. <Link to="">Learn more</Link></p>
                                                        </div>
                                                    </div>
                                                    <div className="interest-item">
                                                        <div className="interest-icon bg-twitter"><i className="ri-twitter-fill"></i></div>
                                                        <div className="interest-body">
                                                            <h6>Twitter, Inc.</h6>
                                                            <p>An American communications company that operates the microblogging and social networking service. <Link to="">Learn more</Link></p>
                                                        </div>
                                                    </div>
                                                    <div className="interest-item">
                                                        <div className="interest-icon bg-amazon"><i className="ri-amazon-fill"></i></div>
                                                        <div className="interest-body">
                                                            <h6>Amazon.com, Inc.</h6>
                                                            <p>An American multinational technology company which focuses on e-commerce, artificial intelligence and more. <Link to="">Learn more</Link></p>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                                <Card.Footer>
                                                    <Nav>
                                                        <Nav.Link href="">Show more interests (1) <i className="ri-arrow-down-s-line"></i></Nav.Link>
                                                    </Nav>
                                                </Card.Footer>
                                            </Card>
                                        </Col>

                                    </Row>
                                    <Footer />
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Card>
                    <Footer />
                </div >
            </>
        </div>
    )
}

export default Opportunity;