import React, { useEffect } from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import mainservice from '../../services/mainservice';
import { Grid } from "gridjs-react";
import { h } from "gridjs";


function RfqPurchaseList() {
  // to maintain dark and light mode
  const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
  const [skin, setSkin] = useState(currentSkin);
  const navigate = useNavigate()

  // get

  const [user, setUser] = useState("")
  const [data, setData] = useState([])

  async function purchaseitemdetails() {
    const res = await mainservice.purchaseitemdetails();
    console.log('RFQ Purchase Item Details ' + JSON.stringify(res))
    console.log(res)
    setData(res.data)
  }
  useEffect(() => {
    purchaseitemdetails()
  }, []);

  /////////////////////////////////////////////////////////////////////////

  const handleButtonClick = (row) => {
    console.log(row);
  };


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

                h('div', {}, [
                  h(
                    'Button',
                    {
                      onClick: () => handleButtonClick(item),
                      className: 'btn btn-outline-success ri-pencil-fill me-1 btn-sm',
                    },

                  ),
                  h(
                    'Button',
                    {
                      onClick: () => handleButtonClick(item),
                      className: 'btn btn-outline-danger ri-delete-bin-6-line me-1 btn-sm',
                    },

                  ),
                  h(
                    'Button',
                    {
                      onClick: () => handleButtonClick(item),
                      className: 'btn btn-outline-primary ri-more-fill me-1 btn-sm',
                    },

                  ),
                ]),
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
        </Card>
        <Footer />
      </div>
    </>
  )
}

export default RfqPurchaseList