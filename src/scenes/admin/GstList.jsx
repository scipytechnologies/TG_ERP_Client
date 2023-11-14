import React, { useEffect } from 'react'
import { useState, useRef } from 'react';
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { Button, Card, Col, Nav, ProgressBar, Row, Form, ButtonGroup, Dropdown, Offcanvas } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import mainservice from '../../services/mainservice';
import { h } from "gridjs";
import { Grid } from "gridjs-react"
import { _ } from "gridjs-react";
import { useSelector } from 'react-redux';

function GstList() {
    // to maintain dark and light mode
    const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
    const [skin, setSkin] = useState(currentSkin);
    const navigate = useNavigate()
    const [user, setUser] = useState("")
    const [data, setData] = useState([])
    const index = useSelector((state) => state.index)
    
    // state for drop down of view more button
    const [showDropdown, setShowDropdown] = useState(false);
    const [dropdownItem, setDropdownItem] = useState(null);
    const handleCloseDropdown = () => {
        setShowDropdown(false);
    };

    // axios get interceptor for table data
    async function GstDetails() {
        const res = await mainservice.GstDetails(index);
        // console.log('Appointment Details ' + JSON.stringify(res))
        console.log(res.data.appointments)
        setData(res.data.appointments)
    }
    useEffect(() => {
        GstDetails()
    }, []);



    // Grid js each row clicking funciton
    const [offCanvas, setOffCanvas] = useState(false)
    const handleCanvas = (row) => {
        console.log(row);
        setOffCanvas(true)
    };
    const handleCloseCanvas = () => {
        setOffCanvas(false)
    }

    return (
        <>
            <Header onSkin={setSkin} />
            <div className="main main-app p-3 p-lg-4">
                <div className="d-md-flex align-items-center justify-content-between mb-4">
                    <div>
                        <ol className="breadcrumb fs-sm mb-1">
                            <li className="breadcrumb-item"><Link to="/dashboard/home">Dashboard</Link></li>
                            <li className="breadcrumb-item"><Link to="/dashboard/admin">Admin</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Gst Auditor List</li>
                        </ol>
                        <h4 className="main-title mb-0">GST Auditor List</h4>
                    </div>

                    <Button variant="primary" className="d-flex align-items-center gap-2" onClick={() => navigate('/dashboard/admin/Gstform')}>
                        <i className="ri-bar-chart-2-line fs-18 lh-1"></i>Add GST Auditor<span className="d-none d-sm-inline"></span>
                    </Button>

                </div>

                <Card>
                    <Card.Body>
                        <Grid
                            data={data !== undefined ? data.map((item) => [
                                item.Detail1,
                                item.Detail1,
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
                                                        <Dropdown.Item onClick={() => navigate(`/dashboard/admin/Gstform/?id=${item._id}`)}>Edit</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </Button>
                                        </ButtonGroup>

                                    </>

                                )
                            ])
                                : []
                            }
                            columns={['Detail1', 'Detail1', 'Action',]}
                            search={true}
                            pagination={true}
                            sort={true}
                            resizable={true}
                            className={{
                                table: 'table table-bordered mb-0',
                            }}
                        />
                    </Card.Body>
                    <Offcanvas show={offCanvas} onHide={handleCloseCanvas} placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>GST Details</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            {/* canvas body */}
                            <div className="w-100">
                                <Card>
                                    <Card.Body>

                                        <div className="d-flex align-item-center justify-content-between me-2 mb-3">
                                            <div>
                                                <p className='mb-0'>Schedule Call</p>
                                                <p className='mb-0'>Schedule Meeting</p>
                                                <p className='mb-0'>Subject</p>
                                                <p className='mb-0'>Start Date</p>

                                            </div>

                                            <div>
                                                <p className='mb-0'>10:00 AM - 11:00 AM</p>
                                                <p className='mb-0'>2:00 PM - 3:00 PM</p>
                                                <p className='mb-0'> Project Kickoff</p>
                                                <p className='mb-0'>2023-06-15</p>

                                            </div>
                                        </div>
                                        <div className="divider"><span>Description</span></div>
                                        <p>This meeting is to discuss the project goals, timeline, and deliverables.</p>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Card>
                <Footer />
            </div >
        </>
    )
}

export default GstList;