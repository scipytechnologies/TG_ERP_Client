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


function SalesList() {
    // to maintain dark and light mode
    const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
    const [skin, setSkin] = useState(currentSkin);
    const navigate = useNavigate()

    // get

    const [user, setUser] = useState("")
    const [data, setData] = useState([])
    const index = useSelector((state)=>state.index)
    console.log(index);

    async function salesdetails() {
        const res = await mainservice.salesdetails(index.SalesID);
        // console.log('Sales Details ' + JSON.stringify(res))
        console.log(res.data.saless)
        setData(res.data.saless)
    }
    useEffect(() => {
        salesdetails()
    }, []);


    async function deleteSales(id) {
        const res = await mainservice.deleteSales(index.SalesID, id);
        if (res.data != null) {
            console.log("deleted");
            salesdetails()
        }
        else {
            console.log(res.message);
        }
    }
    
    const onDeleteHandler = (item) => {
        console.log(item._id);
        deleteSales(item._id);
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
                            <li className="breadcrumb-item"><Link to="/dashboard/sales">Purchase</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Sales List</li>
                        </ol>
                        <h4 className="main-title mb-0">Sales List</h4>
                    </div>
                </div>
                <Card>
                    <Card.Body>
                        <Grid
                            data={data !== undefined ? data.map((item) => [
                                item.OrderNumber,
                                item.Product,
                                item.Day,

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
                            columns={['Order Number', 'Product', 'Day', 'Action']}
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
                            <Offcanvas.Title>Sales Details</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Card>
                                <Card.Body>


                                    <div className="d-flex align-item-center justify-content-between me-2">
                                        <div>
                                            <p className='mb-0'>Order Number</p>
                                            <p className='mb-0'>Product</p>

                                        </div>

                                        <div>
                                            <p className='mb-0'>1001</p>
                                            <p className='mb-0'>Widget X</p>

                                        </div>
                                    </div>

                                    {/* Order Date */}
                                    <div className="divider"><span>Order Date</span></div>
                                    <div className="d-flex align-item-center justify-content-between me-2">
                                        <div>
                                            <p className='mb-0'>Day</p>
                                            <p className='mb-0'>Month</p>
                                            <p className='mb-0'>Year</p>

                                        </div>

                                        <div>
                                            <p className='mb-0'>15</p>
                                            <p className='mb-0'>May</p>
                                            <p className='mb-0'> 2023</p>

                                        </div>
                                    </div>

                                    {/* Sales Status and Amount */}
                                    <div className="divider"><span>Sales Status and Amount</span></div>
                                    <div className="d-flex align-item-center justify-content-between me-2">
                                        <div>
                                            <p className='mb-0'>Status</p>
                                            <p className='mb-0'>Total Amount</p>


                                        </div>

                                        <div>
                                            <p className='mb-0'>Shipped</p>
                                            <p className='mb-0'>$500.00</p>

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

export default SalesList