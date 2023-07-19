import React, { useEffect } from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState, useRef } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Form, Dropdown, Offcanvas, ButtonGroup } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import mainservice from '../../services/mainservice';
import { Grid } from "gridjs-react"
import { _ } from "gridjs-react";
import { useSelector } from 'react-redux';


function InvoiceList() {
    // to maintain dark and light mode
    const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
    const [skin, setSkin] = useState(currentSkin);
    const navigate = useNavigate()

    const [user, setUser] = useState("")
    const [data, setData] = useState([])
    const index = useSelector((state) => state.index)
    console.log(index);

    async function invoicedetails() {
        const res = await mainservice.invoicedetails(index.InvoiceID);
        // console.log('Invoice Details ' + JSON.stringify(res))
        console.log(res.data.invoices)
        setData(res.data.invoices)
    }
    useEffect(() => {
        invoicedetails()
    }, []);


    async function deleteInvoice(id) {
        const res = await mainservice.deleteInvoice(index.InvoiceID, id);
        if (res.data != null) {
            console.log("deleted");
            invoicedetails()
        }
        else {
            console.log(res.message);
        }
    }

    const onDeleteHandler = (item) => {
        console.log(item._id);
        deleteInvoice(item._id);
    }

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
                            <li className="breadcrumb-item active" aria-current="page">Invoice List</li>
                        </ol>
                        <h4 className="main-title mb-0">Invoice List</h4>
                    </div>
                </div>

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
                                                        <Dropdown.Item onClick={()=>navigate(`/dashboard/invoice/addinvoice/?id=${item._id}`)}>Edit</Dropdown.Item>
                                                        <Dropdown.Item  style={{color:'red'}} onClick={()=>onDeleteHandler(item)}>Delete</Dropdown.Item>
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
                            <Offcanvas.Title>Invoice Details</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Card>
                                <Card.Body>


                                    <div className="d-flex align-item-center justify-content-between me-2">
                                        <div>
                                            <p className='mb-0'>Invoice Number</p>
                                            <p className='mb-0'>Invoice Subject</p>
                                            <p className='mb-0'>Notes</p>
                                            <p className='mb-0'>Terms</p>
                                        </div>

                                        <div>
                                            <p className='mb-0'>INV-2023-001</p>
                                            <p className='mb-0'>Consulting Services</p>
                                            <p className='mb-0'> Please submit payment within 30 days.</p>
                                            <p className='mb-0'>Net 30</p>
                                        </div>
                                    </div>

                                    {/* dates and amount */}
                                    <div className="divider"><span>Dates and Amount</span></div>
                                    <div className="d-flex align-item-center justify-content-between me-2">
                                        <div>
                                            <p className='mb-0'>Invoice Date</p>
                                            <p className='mb-0'>Due Date</p>
                                            <p className='mb-0'>Amount Due</p>

                                        </div>

                                        <div>
                                            <p className='mb-0'>2023-05-29</p>
                                            <p className='mb-0'>2023-06-28</p>
                                            <p className='mb-0'>$5,000.00</p>

                                        </div>
                                    </div>

                                    {/* Related Reference: */}
                                    <div className="divider"><span>Related Reference</span></div>
                                    <div className="d-flex align-item-center justify-content-between me-2">
                                        <div>
                                            <p className='mb-0'>Quote No</p>
                                            <p className='mb-0'>Order No</p>
                                            <p className='mb-0'>Purchase Order No</p>

                                        </div>

                                        <div>
                                            <p className='mb-0'>QUO-2023-001</p>
                                            <p className='mb-0'>ORD-2023-001</p>
                                            <p className='mb-0'>PO-2023-001</p>

                                        </div>
                                    </div>

                                    {/* Billing and Tax Details: */}
                                    <div className="divider"><span>Billing and Tax Details</span></div>
                                    <div className="d-flex align-item-center justify-content-between me-2">
                                        <div>
                                            <p className='mb-0'>Billing Address</p>
                                            <p></p>
                                            <p className='mb-0'>Tax Information</p>


                                        </div>

                                        <div>
                                            <p className='mb-0'>123 Main Street,</p>
                                            <p className='mb-0'> City, State, Zipcode</p>
                                            <p >Tax ID - 123456789</p>


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

export default InvoiceList