import React, { useEffect } from 'react';
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState, useRef } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Dropdown, Offcanvas, ButtonGroup } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import { Grid } from "gridjs-react";
import mainservice from '../../services/mainservice';
import { _ } from "gridjs-react";
import Avatar from "../../components/Avatar";

function Customer() {
    // to maintain dark and light mode
    const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
    const [skin, setSkin] = useState(currentSkin);
    const navigate = useNavigate()

    // axios get interceptor for table data
    const [data, setData] = useState([])
    async function customerDetails() {
        const res = await mainservice.customerDetails();
        console.log('Customer Details ' + JSON.stringify(res))
        setData(res.data)
    }
    useEffect(() => {
        customerDetails()
    }, []);

    // Grid js each row clicking funciton
    const [offCanvas, setOffCanvas] = useState(false)
    const [canvasData, setCanvasData] = useState([])
    const handleCanvas = (item) => {
        console.log(item);
        setOffCanvas(true)
        setCanvasData(item)
    };
    const handleCloseCanvas = () => {
        setOffCanvas(false)
        setCanvasData('')
    }
    return (
        <>
            <Header onSkin={setSkin} />
            <div className="main main-app p-3 p-lg-4">
                <div className="d-md-flex align-items-center justify-content-between mb-4">
                    <div>
                        <ol className="breadcrumb fs-sm mb-1">
                            <li className="breadcrumb-item"><Link to="/dashboard/home">Dashboard</Link></li>
                            <li className="breadcrumb-item"><Link to="/dashboard/crm">CRM</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Customer List</li>
                        </ol>
                        <h4 className="main-title mb-0">Customer List</h4>
                    </div>
                </div>

                <Card>
                    <Card.Body>
                        <Grid
                            data={data !== undefined ? data.map((item) => [
                                item.FirstName,
                                item.LastName,
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
                            columns={['First Name', 'Last Name', 'Action']}
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
                            <Offcanvas.Title>
                                <p>Customer Details</p>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>

                            {/* canvas body */}
                            <div className="w-100">
                                <Card className='border-bottom-0'>
                                    <Card.Body>
                                        <div className="d-flex mb-0">
                                            <div className="me-3 ">
                                                <Avatar img="data:image/jpeg;base64,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" size="xl" status="online" />
                                            </div>
                                            <div className=''>
                                                <p className="mb-0 fs-5">John Doe</p>
                                                <p className="fw-bold fw-normal mb-0">Sales Head</p>
                                                <p className="fw-normal ">8139031990</p>
                                            </div>
                                        </div>

                                        <div className='d-flex align-item-center justify-content-between'>
                                            <p className="fw-normal  mb-0">email@gmail.com</p>
                                            <p className="fw-normal">www.enterprise.com</p>
                                        </div>
                                        <Button className="btn btn-sm w-100 ">Message</Button>

                                    </Card.Body>
                                </Card>

                                <div className="divider"><span>Personal Details</span></div>
                                <div className="d-flex align-item-center justify-content-between me-2 mb-3">
                                    <div>
                                        <p className='mb-0'>Phone Home</p>
                                        <p className='mb-0'>Phone Other</p>
                                        <p className='mb-0'>Website</p>
                                        <p className='mb-0'>Primary City</p>
                                        <p className='mb-0'>Primary State</p>
                                        <p className='mb-0'>Primary Country</p>
                                        <p className='mb-0'>Primary Postal</p>
                                        <p className='mb-0'>Secondary City</p>
                                        <p className='mb-0'>Secondary State</p>
                                        <p className='mb-0'>Secondary Country</p>
                                        <p className='mb-0'>Secondary Postal</p>
                                    </div>

                                    <div>
                                        <p className='mb-0'>813903929</p>
                                        <p className='mb-0'>721828293</p>
                                        <p className='mb-0'>www.example.com</p>
                                        <p className='mb-0'>Kochi</p>
                                        <p className='mb-0'>Kerala</p>
                                        <p className='mb-0'>India</p>
                                        <p className='mb-0'>737238</p>
                                        <p className='mb-0'>Ernakaulam</p>
                                        <p className='mb-0'>Kochi</p>
                                        <p className='mb-0'>India</p>
                                        <p className='mb-0'>695532</p>
                                    </div>
                                </div>


                                {/* professional details */}
                                <div className="divider"><span>Professional Details</span></div>
                                <div className="d-flex align-item-center justify-content-between me-2">
                                    <div>
                                        <p className='mb-0'>Title</p>
                                        <p className='mb-0'>Phone Work</p>
                                        <p className='mb-0'>Assigned</p>
                                        <p className='mb-0'>Teams</p>
                                        <p className='mb-0'>Partner</p>
                                        <p className='mb-0'>Category</p>
                                        <p className='mb-0'>Department</p>
                                        <p className='mb-0'>Business Role</p>
                                        <p className='mb-0'>Reports</p>
                                        <p className='mb-0'>Assistant Ph</p>
                                    </div>

                                    <div>
                                        <p className='mb-0'>Senior Manager</p>
                                        <p className='mb-0'>+91 555-789-1234</p>
                                        <p className='mb-0'>Team A</p>
                                        <p className='mb-0'>Sales, Marketing</p>
                                        <p className='mb-0'> XYZ Company</p>
                                        <p className='mb-0'>Business Development</p>
                                        <p className='mb-0'>Sales</p>
                                        <p className='mb-0'>Business Role</p>
                                        <p className='mb-0'>Account Manager</p>
                                        <p className='mb-0'>+91 555-321-9876</p>
                                    </div>
                                </div>
                            </div>

                        </Offcanvas.Body>
                    </Offcanvas>
                </Card>
                <Footer />
            </div >
        </>
    )
}

export default Customer