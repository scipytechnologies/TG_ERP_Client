import React, { useEffect } from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState, useRef } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Form, Dropdown, Offcanvas, ButtonGroup } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import mainservice from '../../services/mainservice';
import { Grid } from "gridjs-react";
import { _ } from "gridjs-react";
import { useSelector } from 'react-redux';


function VendorList() {
    // to maintain dark and light mode
    const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
    const [skin, setSkin] = useState(currentSkin);
    const navigate = useNavigate()

    // get

    const [user, setUser] = useState("")
    const [data, setData] = useState([])
    const index = useSelector((state)=>state.index)
    console.log(index);

    async function vendordetails() {
        const res = await mainservice.vendordetails(index.VendorID);
        // console.log('Vendor Details ' + JSON.stringify(res))
        console.log(res.data.vendors)
        setData(res.data.vendors)
    }
    useEffect(() => {
        vendordetails()
    }, []);

    async function deletevendor(id) {
        const res = await mainservice.deletevendor(index.VendorID, id);
        if (res.data != null) {
            console.log("deleted");
            vendordetails()
        }
        else {
            console.log(res.message);
        }
    }
    
    const onDeleteHandler = (item) => {
        console.log(item._id);
        deletevendor(item._id);
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
                            <li className="breadcrumb-item"><Link to="/dashboard/vendor">RFQ</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Vendor List</li>
                        </ol>
                        <h4 className="main-title mb-0">Vendor List</h4>
                    </div>
                </div>
                <Card>
                    <Card.Body>
                        <Grid
                            data={data !== undefined ? data.map((item) => [
                                item.VendorID,
                                item.VendorName,
                                item.VendorAddress,
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
                                                        <Dropdown.Item onClick={()=>navigate(`/dashboard/vendor/AddVendor/?id=${item._id}`)}>Edit</Dropdown.Item>
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
                            columns={['Vendor ID', 'Vendor Name', 'Vendor Address', 'Action']}
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
                            <Offcanvas.Title>Vendor Details</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Card>
                                <Card.Body>


                                    <div className="d-flex align-item-center justify-content-between me-2">
                                        <div>
                                            <p className='mb-0'>Vendor ID</p>
                                            <p className='mb-0'>Vendor Name</p>

                                        </div>

                                        <div>
                                            <p className='mb-0'>VD1</p>
                                            <p className='mb-0'>Name A</p>

                                        </div>
                                    </div>

                                    {/* Order Date */}
                                    <div className="divider"><span>Vendor Date</span></div>
                                    <div className="d-flex align-item-center justify-content-between me-2">
                                        <div>
                                            <p className='mb-0'>Day</p>
                                            <p className='mb-0'>Month</p>
                                            <p className='mb-0'>Year</p>

                                        </div>

                                        <div>
                                            <p className='mb-0'>10</p>
                                            <p className='mb-0'>June</p>
                                            <p className='mb-0'> 2023</p>

                                        </div>
                                    </div>

                                    {/* Sales Status and Amount */}
                                    <div className="divider"><span>Vendor ID and Name </span></div>
                                    <div className="d-flex align-item-center justify-content-between me-2">
                                        <div>
                                            <p className='mb-0'>Vendor ID</p>
                                            <p className='mb-0'>Name</p>


                                        </div>

                                        <div>
                                            <p className='mb-0'>VD1</p>
                                            <p className='mb-0'>Shipped</p>

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
export default VendorList