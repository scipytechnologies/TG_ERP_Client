import React, { useEffect } from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState, useRef } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Dropdown, Offcanvas, ButtonGroup } from "react-bootstrap";
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
            <h4 className="main-title mb-0">Product Management</h4>
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
              <Offcanvas.Title>Offcanvas Right</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              Some text as placeholder. In real life you can have the elements you
              have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
          </Offcanvas>
        </Card>
        <Footer />
      </div>
    </>
  )
}

export default ProductManagement