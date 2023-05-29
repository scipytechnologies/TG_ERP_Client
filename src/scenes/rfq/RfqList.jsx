import React, { useEffect } from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState, useRef } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Dropdown, Offcanvas, ButtonGroup } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import mainservice from '../../services/mainservice';
import { Grid } from "gridjs-react";
import { _ } from "gridjs-react";


function RfqList() {
  // to maintain dark and light mode
  const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
  const [skin, setSkin] = useState(currentSkin);
  const navigate = useNavigate()

  // get

  const [user, setUser] = useState("")
  const [data, setData] = useState([])

  async function rfqdetails() {
    const res = await mainservice.rfqdetails();
    console.log('RFQ Details ' + JSON.stringify(res))
    console.log(res)
    setData(res.data)
  }
  useEffect(() => {
    rfqdetails()
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
              <li className="breadcrumb-item active" aria-current="page">RFQ List</li>
            </ol>
            <h4 className="main-title mb-0">RFQ  List</h4>
          </div>
        </div>

        <Card>
          <Card.Body>
            <Grid
              data={data !== undefined ? data.map((item) => [
                item.RequisitionDate,
                item.PurchaseRequisition,
                item.TypeofRequisition,
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
              columns={['Requisition Date', 'Purchase Requisition', 'Type of Requisition', 'Action']}
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
              <Offcanvas.Title>Quotation Details</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="w-100">
                <Card>
                  <Card.Body>


                    {/*Requisition Details */}
                    <div className="divider"><span>Requisition Details</span></div>
                    <div className="d-flex align-item-center justify-content-between me-2">
                      <div>
                        <p className='mb-0'>Requisition Date</p>
                        <p className='mb-0'>Purchase Requisition</p>
                        <p className='mb-0'>Type of Requisition</p>
                        <p className='mb-0'>JDE Requisition</p>
                      </div>

                      <div>
                        <p className='mb-0'>2023-05-29</p>
                        <p className='mb-0'>PR001</p>
                        <p className='mb-0'>Material</p>
                        <p className='mb-0'>JDE001</p>
                      </div>
                    </div>

                    {/*Company Details */}
                    <div className="divider"><span>Company Details</span></div>
                    <div className="d-flex align-item-center justify-content-between me-2">
                      <div>
                        <p className='mb-0'>Company</p>
                        <p className='mb-0'>Company Code</p>

                      </div>

                      <div>
                        <p className='mb-0'>ABC Corporation</p>
                        <p className='mb-0'>ABC123</p>

                      </div>
                    </div>

                    {/*Requestor Details */}
                    <div className="divider"><span>Requestor Details </span></div>
                    <div className="d-flex align-item-center justify-content-between me-2">
                      <div>
                        <p className='mb-0'>Requisitor's Name</p>
                        <p className='mb-0'>Phone</p>
                        <p className='mb-0'>Department</p>

                      </div>

                      <div>
                        <p className='mb-0'>John Doe</p>
                        <p className='mb-0'>123-456-7890</p>
                        <p className='mb-0'>Procurement</p>
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
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </Card>
        <Footer />
      </div>
    </>
  )
}

export default RfqList