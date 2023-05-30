import React, { useEffect } from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Form, Dropdown, Offcanvas, ButtonGroup } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import { Grid, _ } from "gridjs-react";
import mainservice from '../../services/mainservice';

function Opportunity() {
    // to maintain dark and light mode
    const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
    const [skin, setSkin] = useState(currentSkin);
    const navigate = useNavigate()
    const [data, setData] = useState([])

    async function opportunityDetails() {
        const res = await mainservice.opportunityDetails();
        console.log('Opportunity Details ' + JSON.stringify(res))
        console.log(res)
        setData(res.data)
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
    const handleCloseCanvas = () => {
        setOffCanvas(false)
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
                    </div>



                    <Card>
                        <Card.Body>
                            <Grid
                                data={data !== undefined ? data.map((item) => [
                                    item.OpportunityName,
                                    item.SalesStage,
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
                                columns={['Opportunity Name', 'Sales Stage', 'Action']}
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
                                <Offcanvas.Title>Opportunity Details</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>

                                <div className="w-100">
                                    <Card>
                                        <Card.Body>
                                            <div className="d-flex align-item-center justify-content-between me-2 mb-3">
                                                <div>
                                                    <p className='mb-0'>Opportunity Name</p>
                                                    <p className='mb-0'>Sales Stage</p>
                                                    <p className='mb-0'>Close Date</p>
                                                    <p className='mb-0'>Amount</p>

                                                </div>

                                                <div>
                                                    <p className='mb-0'>New Client Acquisition</p>
                                                    <p className='mb-0'>Proposal Submitted</p>
                                                    <p className='mb-0'>2023-07-31</p>
                                                    <p className='mb-0'>$100,000</p>

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
        </div>
    )
}

export default Opportunity;