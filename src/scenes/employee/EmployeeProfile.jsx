import React, { useState } from 'react'
import Header from "../../layouts/Header";
import { Button, Card, Col, Nav, Row } from "react-bootstrap";
import Avatar from "../../components/Avatar";
import { Link, useNavigate } from 'react-router-dom'
import img1 from "../../assets/img/img1.jpg";
import Attendence from '../../components/attendence/Attendence';

function EmployeeProfile() {

    const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
    const [skin, setSkin] = useState(currentSkin);
    const [activeTab, setActiveTab] = useState('1')
    const handleTabs = (no) => {
        setActiveTab(no)
    }
    return (
        <div>
            <Header onSkin={setSkin} />
            <div className="main main-app p-3 p-lg-4">
                <div className="d-md-flex align-items-center justify-content-between mb-0">
                    <div>
                        <ol className="breadcrumb fs-sm mb-1">
                            <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                            <li className="breadcrumb-item"><Link to="/dashboard/employee">Employee</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Employee Profile</li>
                        </ol>
                        <h4 className="main-title mt-2 mb-0">Profile</h4>
                        <p className="w-100 fs-sm text-secondary" >Employee details</p>
                    </div>

                    {/* <Button variant="primary" className="d-flex align-items-center gap-2" onClick={() => navigate('/dashboard/Employee/addEmployee')}>
                        <i className="ri-bar-chart-2-line fs-18 lh-1"></i>Add Employee<span className="d-none d-sm-inline"></span>
                    </Button> */}
                </div>


                <Card className='p-2 mt-0'>
                    <Card.Body>
                        <div className="media-profile mb-5">
                            <div className="media-img mb-3 mb-sm-0">
                                <img src={img1} className="img-fluid" alt="..." />
                            </div>
                            <div className="media-body">
                                <h5 className="media-name">Shaira Diaz</h5>
                                <p className="d-flex gap-2 mb-4"><i className="ri-map-pin-line"></i> San Francisco, California</p>
                                <p className="mb-0">Redhead, Innovator, Saviour of Mankind, Hopeless Romantic, Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quibusdam! Hopeless Romantic, Attractive 20-something Yogurt Enthusiast and adjust it as needed... <Link to="">Read more</Link></p>
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
                            <Nav.Link className={activeTab === '1' ? "active" : ''} onClick={() => handleTabs('1')}>Personal Information</Nav.Link>
                            <Nav.Link className={activeTab === '2' ? "active" : ''} onClick={() => handleTabs('2')}>Attendance</Nav.Link>
                            <Nav.Link className={activeTab === '3' ? "active" : ''} onClick={() => handleTabs('3')}>Connections</Nav.Link>
                            <Nav.Link className={activeTab === '4' ? "active" : ''} onClick={() => handleTabs('4')}>Profile Settings</Nav.Link>
                        </Nav>

                        {
                            activeTab === '2' && <Attendence />
                        }
                    </Card.Body>
                </Card>

                {/* profile header */}

            </div>
        </div>
    )
}

export default EmployeeProfile