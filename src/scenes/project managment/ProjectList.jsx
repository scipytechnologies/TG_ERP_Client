import React, { useEffect } from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState, useRef } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Form, Dropdown, Offcanvas, ButtonGroup } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import mainservice from '../../services/mainservice';
import { _ } from "gridjs-react";
import { Grid } from "gridjs-react"

function ProjectList() {
    // to maintain dark and light mode
    const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
    const [skin, setSkin] = useState(currentSkin);
    const navigate = useNavigate()
    const [user, setUser] = useState("")
    const [data, setData] = useState([])



    async function getPrjmanagerDetails() {
        const res = await mainservice.getPrjmanagerDetails();
        console.log('Project Management Details ' + JSON.stringify(res))
        console.log(res)
        setData(res.data)
    }
    useEffect(() => {
        getPrjmanagerDetails()
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
                            <li className="breadcrumb-item"><Link to="/dashboard/project">Project</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Project List</li>
                        </ol>
                        <h4 className="main-title mb-0">Project List</h4>
                    </div>
                </div>

                <Card>
                    <Card.Body>
                        <Grid
                            data={data !== undefined ? data.map((item) => [
                                item.PrjName,
                                item.Type,
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
                            columns={['Project Name', 'Type', 'Action']}
                            search={true}
                            pagination={true}
                            sort={true}
                            resizable={true}
                            className={{
                                table: 'table table-bordered mb-0',
                            }}
                        />
                    </Card.Body>
                    {/* sidebar offcanvars */}
                    <Offcanvas show={offCanvas} onHide={handleCloseCanvas} placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Project Details</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Card>
                                <Card.Body>


                                    <div className="d-flex align-item-center justify-content-between me-2">
                                        <div>
                                            <p className='mb-0'>Project Name</p>
                                            <p className='mb-0'>Type</p>
                                            <p className='mb-0'>Account</p>
                                            <p className='mb-0'>Assigned To</p>
                                            <p className='mb-0'>Teams</p>
                                        </div>

                                        <div>
                                            <p className='mb-0'> New Website Development</p>
                                            <p className='mb-0'>Web Development</p>
                                            <p className='mb-0'>ABC Corporation</p>
                                            <p className='mb-0'>John Smith</p>
                                            <p className='mb-0'>Development Team, Design Team</p>
                                        </div>
                                    </div>

                                    {/* Status and Duration: */}
                                    <div className="divider"><span>Status and Duration</span></div>
                                    <div className="d-flex align-item-center justify-content-between me-2">
                                        <div>
                                            <p className='mb-0'>Status</p>
                                            <p className='mb-0'>Start Date</p>
                                            <p className='mb-0'>End Date</p>

                                        </div>

                                        <div>
                                            <p className='mb-0'>In Progress</p>
                                            <p className='mb-0'>2023-05-15</p>
                                            <p className='mb-0'> 2023-09-30</p>

                                        </div>
                                    </div>

                                    {/* Related Reference: */}
                                    <div className="divider"><span>Related Details</span></div>
                                    <div className="d-flex align-item-center justify-content-between me-2">
                                        <div>
                                            <p className='mb-0'>Use Timesheet</p>
                                            <p className='mb-0'>Amount</p>
                                            <p className='mb-0'>Lead Source</p>
                                            <p className='mb-0'>Progress</p>

                                        </div>

                                        <div>
                                            <p className='mb-0'>Yes</p>
                                            <p className='mb-0'> $10,000</p>
                                            <p className='mb-0'>Referral</p>
                                            <p className='mb-0'> 50%</p>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="divider"><span>Description</span></div>
                                    <div className="d-flex align-item-center justify-content-between me-2">
                                        <div>
                                           <p> This project involves developing a responsive website for ABC Corporation, showcasing their products and services. The website will have e-commerce functionality and integrate with their existing systems.</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Card>
                <Footer />
            </div >
        </>
    )
}

export default ProjectList 