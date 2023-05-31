import React, { useEffect } from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState, useRef } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Dropdown, Offcanvas, ButtonGroup } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import { Grid } from "gridjs-react";
import { _ } from "gridjs-react";
import mainservice from '../../services/mainservice';

function RfqPurchaseOrder() {
  // to maintain dark and light mode
  const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
  const [skin, setSkin] = useState(currentSkin);
  const navigate = useNavigate()

  // get

  const [user, setUser] = useState("")
  const [data, setData] = useState([])

  async function purchaseorderdetails() {
    const res = await mainservice.purchaseorderdetails();
    console.log('RFQ Purchase Order Details ' + JSON.stringify(res))
    console.log(res)
    setData(res.data)
  }
  useEffect(() => {
    purchaseorderdetails()
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
              <li className="breadcrumb-item"><Link to="/dashboard/rfq">RFQ</Link></li>
              <li className="breadcrumb-item active" aria-current="page">RFQ Purchase Order</li>
            </ol>
            <h4 className="main-title mb-0">RFQ Purchase Order</h4>
          </div>
        </div>

        <Card>
          <Card.Body>
            <Grid
              data={data !== undefined ? data.map((item) => [
                item.REQNo,
                item.RequisitionDate,
                item.Supplier,

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
              columns={['REQNo', 'RequisitionDate', 'Supplier', 'Action']}
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
              <Offcanvas.Title>Purchase Order Details</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="w-100">
                <Card>
                  <Card.Body>


                    {/*Purchase Order Details */}
                  
                    <div className="d-flex align-item-center justify-content-between me-2">
                      <div>
                        <p className='mb-0'>REQ No</p>
                        <p className='mb-0'>Requisition Date</p>
                        <p className='mb-0'>Supplier</p>
                        <p className='mb-0'>Fed ID</p>
                        <p className='mb-0'>Phone</p>
                        <p className='mb-0'>Email</p>
                      </div>

                      <div>
                        <p className='mb-0'>PO12345</p>
                        <p className='mb-0'> 2023-05-29</p>
                        <p className='mb-0'>XYZ Corporation</p>
                        <p className='mb-0'>123456789</p>
                        <p className='mb-0'> 123-456-7890</p>
                        <p className='mb-0'>supplier@example.com
                        </p>
                      </div>
                    </div>

                    {/*Organization Details*/}
                    <div className="divider"><span>Organization Details</span></div>
                    <div className="d-flex align-item-center justify-content-between me-2">
                      <div>
                        <p className='mb-0'>Organization Name</p>
                        <p className='mb-0'>Building</p>
                        <p className='mb-0'>Room Number</p>


                      </div>

                      <div>
                        <p className='mb-0'> ABC Company</p>
                        <p className='mb-0'>Main Building</p>
                        <p className='mb-0'>101</p>
                      </div>
                    </div>

                    {/*Delivery Details  */}
                    <div className="divider"><span>Delivery Details </span></div>
                    <div className="d-flex align-item-center justify-content-between me-2">
                      <div>
                        <p className='mb-0'>Need by Date</p>
                        <p className='mb-0'>Due</p>
                        <p className='mb-0'>Paid</p>
                      </div>

                      <div>
                        <p className='mb-0'>2023-06-15</p>
                        <p className='mb-0'>2023-06-30</p>
                        <p className='mb-0'>No</p>
                      </div>
                    </div>

                    {/*Shipping Details */}
                    <div className="divider"><span>Shipping Details</span></div>
                    <div className="d-flex align-item-center justify-content-between me-2">
                      <div>
                        <p className='mb-0'>Carrier</p>
                        <p className='mb-0'>FOB</p>
                        <p className='mb-0'>Destination</p>
                        <p className='mb-0'>FCA</p>
                        <p className='mb-0'>Origin</p>
                      </div>

                      <div>
                        <p className='mb-0'>ABC Shipping</p>
                        <p className='mb-0'>Free On Board</p>
                        <p className='mb-0'>New York</p>
                        <p className='mb-0'> Free Carrier</p>
                        <p className='mb-0'>Supplier Location</p>

                      </div>
                    </div>


                    {/*Confirmation and Task Details */}
                    <div className="divider"><span>Confirmation and Task Details</span></div>
                    <div className="d-flex align-item-center justify-content-between me-2">
                      <div>
                        <p className='mb-0'>Confirmation</p>
                        <p className='mb-0'>Task</p>
                      </div>

                      <div>
                        <p className='mb-0'>Yes</p>
                        <p className='mb-0'>Purchase Order Approval</p>
                      </div>
                    </div>

                    
                    {/*Financial Details */}
                    <div className="divider"><span>Financial Details</span></div>
                    <div className="d-flex align-item-center justify-content-between me-2">
                      <div>
                        <p className='mb-0'>Award</p>
                        <p className='mb-0'>Expenditure Type</p>
                      </div>

                      <div>
                        <p className='mb-0'> $10,000</p>
                        <p className='mb-0'>Operating Expenses</p>
                      </div>
                    </div>


                    {/*Shipping Details */}
                    <div className="divider"><span>Requester Details</span></div>
                    <div className="d-flex align-item-center justify-content-between me-2">
                      <div>
                        <p className='mb-0'>Requisitioner</p>
                        <p className='mb-0'>Phone</p>
                        <p className='mb-0'>Date</p>
                        <p className='mb-0'>City</p>
                        <p className='mb-0'>State</p>
                        <p className='mb-0'>Zipcode</p>
                        <p className='mb-0'>Address</p>
                      </div>

                      <div>
                        <p className='mb-0'>John Doe</p>
                        <p className='mb-0'> 987-654-3210</p>
                        <p className='mb-0'>2023-05-29</p>
                        <p className='mb-0'> Cityville</p>
                        <p className='mb-0'>Stateland</p>
                        <p className='mb-0'>12345</p>
                        <p className='mb-0'>123 Main Street</p>

                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </Card>
        <Footer />
      </div>
    </>
  )
}

export default RfqPurchaseOrder