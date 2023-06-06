import React, { useEffect } from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState, useRef } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Dropdown, Offcanvas, ButtonGroup } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import mainservice from '../../services/mainservice';
import { Grid } from "gridjs-react";
import { _ } from "gridjs-react";
import { useSelector } from 'react-redux';


function RfqPurchaseList() {
  // to maintain dark and light mode
  const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
  const [skin, setSkin] = useState(currentSkin);
  const navigate = useNavigate()

  // get

  const [user, setUser] = useState("")
  const [data, setData] = useState([])
  const index = useSelector((state)=>state.index)
  console.log(index);

  async function purchaseitemdetails() {
    const res = await mainservice.purchaseitemdetails(index.PurchaseitemID);
    // console.log('RFQ Purchase Item Details ' + JSON.stringify(res))
    console.log(res.data.purchaseitems)
    setData(res.data.purchaseitems)
  }
  useEffect(() => {
    purchaseitemdetails()
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
              <li className="breadcrumb-item active" aria-current="page">RFQ Purchase List</li>
            </ol>
            <h4 className="main-title mb-0">RFQ Purchase List</h4>
          </div>
        </div>


        <Card>
          <Card.Body>
            <Grid
              data={data !== undefined ? data.map((item) => [
                item.Type,
                item.ItemCategory,
                item.Item,

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
              columns={['Type', 'ItemCategory', 'Item', 'Action']}
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
              <Offcanvas.Title>Purchase Item Details</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="w-100">
                <Card>
                  <Card.Body>

                    {/*Company Details */}
                    <div className="d-flex align-item-center justify-content-between me-2">
                      <div>
                        <p className='mb-0'>Type</p>
                        <p className='mb-0'>Item Category</p>
                        <p className='mb-0'>Item</p>
                        <p className='mb-0'>Quantity</p>
                        <p className='mb-0'>Unit</p>
                        <p className='mb-0'>Unit Price</p>
                        <p className='mb-0'>Total</p>
                      </div>

                      <div>
                        <p className='mb-0'> Purchase Order</p>
                        <p className='mb-0'>Electronics</p>
                        <p className='mb-0'>Laptop</p>
                        <p className='mb-0'>10</p>
                        <p className='mb-0'>Pieces</p>
                        <p className='mb-0'>$1000</p>
                        <p className='mb-0'>$1000</p>
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

export default RfqPurchaseList