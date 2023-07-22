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


function PurchaseList() {
    // to maintain dark and light mode
    const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
    const [skin, setSkin] = useState(currentSkin);
    const navigate = useNavigate()

    // get

    const [user, setUser] = useState("")
    const [data, setData] = useState([])
    const index = useSelector((state)=>state.index)
    console.log(index);


    async function purchasedetails() {
        const res = await mainservice.purchasedetails(index.PurchaseID);
        // console.log('Purchase Details ' + JSON.stringify(res))
        console.log(res.data.purchases)
        setData(res.data.purchases)
    }
    useEffect(() => {
        purchasedetails()
    }, []);


    async function deletePurchase(id) {
        const res = await mainservice.deletePurchase(index.PurchaseID, id);
        if (res.data != null) {
            console.log("deleted");
            purchasedetails()
        }
        else {
            console.log(res.message);
        }
    }

    const onDeleteHandler = (item) => {
        console.log(item._id);
        deletePurchase(item._id);
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
                            <li className="breadcrumb-item"><Link to="/dashboard/crm">Purchase</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">PurchaseList</li>
                        </ol>
                        <h4 className="main-title mb-0">Purchase List</h4>
                    </div>
                </div>
                <Card>
                    <Card.Body>
                        <Grid
                            data={data !== undefined ? data.map((item) => [
                                item.QuoteNo,
                                item.QuoteSubject,
                                item.QuoteStage,

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
                                                        <Dropdown.Item onClick={()=>navigate(`/dashboard/purchase/AddPurchase/?id=${item._id}`)}>Edit</Dropdown.Item>
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
                            columns={['Quote No', 'Quote Subject', 'Quote Stage', 'Action']}
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
                            <Offcanvas.Title>Purchase Details</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Card>
                                <Card.Body>


                                    {/*Requisition Details */}

                                    <div className="d-flex align-item-center justify-content-between me-2">
                                        <div>
                                            <p className='mb-0'>Quote No</p>
                                            <p className='mb-0'>Quote Subject</p>
                                            <p className='mb-0'>Quote Stage</p>
                                            <p className='mb-0'>Valid Until</p>
                                        </div>

                                        <div>
                                            <p className='mb-0'>Q-2023-001</p>
                                            <p className='mb-0'>Office Furniture</p>
                                            <p className='mb-0'>Proposal</p>
                                            <p className='mb-0'>2023-06-30</p>
                                        </div>
                                    </div>

                                    {/*Terms and Tax Information: */}
                                    <div className="divider"><span>Terms and Tax Information</span></div>
                                    <div className="d-flex align-item-center justify-content-between me-2">
                                        <div>
                                            <p className='mb-0'>Terms</p>
                                            <p className='mb-0'>Tax Information</p>

                                        </div>

                                        <div>
                                            <p className='mb-0'>Net 30</p>
                                            <p className='mb-0'>Tax ID - 123456789</p>

                                        </div>
                                    </div>

                                    {/*Billing and Additional Information */}
                                    <div className="divider"><span>Billing and Additional Information</span></div>
                                    <div className="d-flex align-item-center justify-content-between me-2">
                                        <div>
                                            <p className='mb-0'>Total Amount</p>
                                            <p className='mb-0'>Billing Address</p>
                                            <p className='mb-0'>Notes</p>


                                        </div>

                                        <div>
                                            <p className='mb-0'>$5,000.00</p>
                                            <p className='mb-0'>123 Main Street, City, State, Zipcode</p>
                                            <p className='mb-0'>Please include assembly instructions</p>
                                        </div>
                                    </div>

                                    {/*Project Details: */}
                                    <div className="divider"><span>Project Details:</span></div>
                                    <div className="d-flex align-item-center justify-content-between me-2">
                                        <div>
                                            <p className='mb-0'>Project Name</p>
                                            <p className='mb-0'>Project Code</p>
                                            <p className='mb-0'>Delivery Date</p>
                                            <p className='mb-0'>Point of Delivery</p>
                                            <p className='mb-0'>Received by</p>
                                            <p className='mb-0'>Contact Details</p>
                                        </div>

                                        <div>
                                            <p className='mb-0'>Project Alpha</p>
                                            <p className='mb-0'>PA001</p>
                                            <p className='mb-0'>2023-06-15</p>
                                            <p className='mb-0'>High</p>
                                            <p className='mb-0'>Warehouse A
                                            </p>
                                            <p className='mb-0'> Jane Smith</p>
                                            <p className='mb-0'>  janesmith@example.com</p>
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

export default PurchaseList