import React, { useEffect } from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState, useRef } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Form, Dropdown, Offcanvas, ButtonGroup } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import mainservice from '../../services/mainservice';
import { Grid } from "gridjs-react"
import { _ } from "gridjs-react";


function InvoiceList() {
    // to maintain dark and light mode
    const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
    const [skin, setSkin] = useState(currentSkin);
    const navigate = useNavigate()

    const [user, setUser] = useState("")
    const [data, setData] = useState([])

    async function invoicedetails() {
        const res = await mainservice.invoicedetails();
        console.log('Invoice Details ' + JSON.stringify(res))
        console.log(res)
        setData(res.data)
    }
    useEffect(() => {
        invoicedetails()
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
                            <li className="breadcrumb-item"><Link to="/dashboard/invoice">Invoice</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Add Invoice</li>
                        </ol>
                        <h4 className="main-title mb-0">Create New Invoice</h4>
                    </div>
                </div>

                <h5 id="section13" className="main-subtitle mt-5">Invoice List</h5>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, sequi?</p>

                <Card>
                    <Card.Body>
                        <Grid
                            data={data !== undefined ? data.map((item) => [
                                item.InvoiceNumber,
                                item.InvoiceSubject,
                                item.Notes,
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
                            columns={['Invoice Number', 'Invoice Subject', 'Notes', 'Action']}
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
                            <Offcanvas.Title>Offcanvas Right</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            Some text as placeholder. In real life you can have the elements you
                            have chosen. Like, text, images, lists, etc.
                        </Offcanvas.Body>
                    </Offcanvas>
                </Card>
                <Footer />
            </div >
        </>
    )
}

export default InvoiceList