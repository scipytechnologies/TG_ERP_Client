import React, { useEffect } from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState, useRef } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Dropdown, Offcanvas, ButtonGroup, Image } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import { Grid } from "gridjs-react"
import mainservice from '../../services/mainservice';
import { _ } from "gridjs-react";

function ProductManagement() {
  // to maintain dark and light mode
  const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
  const [skin, setSkin] = useState(currentSkin);
  const navigate = useNavigate()

  // get

  const [data, setData] = useState([])
  async function getInventorymanagementDetails() {
    const res = await mainservice.getInventorymanagementDetails();
    console.log('Inventory Details ' + JSON.stringify(res))
    console.log(res)
    setData(res.data)
  }
  useEffect(() => {
    getInventorymanagementDetails()
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
              <li className="breadcrumb-item"><Link to="/dashboard/inventory">Product</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Product Management</li>
            </ol>
            <h4 className="main-title mb-0">Product List</h4>
          </div>

        </div>

        {/* analatics cards */}
        <Card>
          <Card.Body>
            <Grid
              data={data !== undefined ? data.map((item) => [
                item.SKUNo,
                item.ItemName,
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
              columns={['SKU No', 'Item Name', 'Action']}
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
              <Offcanvas.Title>Product Details</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="w-100">
                <Card>
                  <Image src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60' />
                  <Card.Body>
                    <div className="d-flex mb-0 align-item-center justify-content-between w-100">
                      <div className="d-flex mb-0">
                        <div className=''>
                          <p className="mb-0 fs-5">Headset</p>
                          <p className="fw-bold fw-normal mb-0"> $10.99</p>
                          <p className="fw-normal ">7%</p>
                        </div>
                      </div>

                      <Link><i className='ri-pencil-line'></i></Link>
                    </div>

                    <div className="divider"><span>More Info</span></div>
                    <div className="d-flex align-item-center justify-content-between me-2 mb-3">
                      <div>
                        <p className='mb-0'>SKU No</p>
                        <p className='mb-0'>Item Name</p>
                        <p className='mb-0'>Unit of Measurement</p>
                        <p className='mb-0'>Item Category</p>
                        <p className='mb-0'>Current Stock</p>
                      </div>

                      <div>
                        <p className='mb-0'>SKU001</p>
                        <p className='mb-0'>Headset</p>
                        <p className='mb-0'>Pieces</p>
                        <p className='mb-0'>Electronics</p>
                        <p className='mb-0'>50</p>
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

export default ProductManagement