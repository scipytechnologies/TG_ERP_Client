import React from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'

import {Grid} from "gridjs-react";

function RFQ() {
  // to maintain dark and light mode
  const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
  const [skin, setSkin] = useState(currentSkin);
  const navigate = useNavigate()


  return (
    <>
      <Header onSkin={setSkin} />
      <div className="main main-app p-3 p-lg-4">
        <div className="d-md-flex align-items-center justify-content-between mb-4">
          <div>
            <ol className="breadcrumb fs-sm mb-1">
              <li className="breadcrumb-item"><Link to="/dashboard/home">Dashboard</Link></li>
              <li className="breadcrumb-item active" aria-current="page">RFQ</li>
            </ol>
            <h4 className="main-title mb-0">RFQ Managment</h4>
          </div>
          <div className="d-flex gap-2 mt-3 mt-md-6">
            <Button variant="primary" className="d-flex align-items-center gap-2" onClick={() => navigate('/dashboard/RFQ/addRFQ')}>
              <i className="ri-bar-chart-2-line fs-18 lh-1"></i>Add RFQ<span className="d-none d-sm-inline"></span>
            </Button>


            <Button variant="primary" className="d-flex align-items-center gap-2" onClick={() => navigate('/dashboard/rfq/purchaseOrder')}>
              <i className="ri-bar-chart-2-line fs-18 lh-1"></i>Add Purchase Order<span className="d-none d-sm-inline"></span>
            </Button>



            <Button variant="primary" className="d-flex align-items-center gap-2" onClick={() => navigate('/dashboard/rfq/purchaseItem')}>
              <i className="ri-bar-chart-2-line fs-18 lh-1"></i>Add Purchase Item<span className="d-none d-sm-inline"></span>
            </Button>


            <Button variant="primary" className="d-flex align-items-center gap-2" onClick={() => navigate('/dashboard/vendor/AddVendor')}>
              <i className="ri-bar-chart-2-line fs-18 lh-1"></i>Add Vendor<span className="d-none d-sm-inline"></span>
            </Button>

            <Button variant="primary" className="d-flex align-items-center gap-2" onClick={() => navigate('/dashboard/rfq/PurchaseRequisition')}>
              <i className="ri-bar-chart-2-line fs-18 lh-1"></i>Add Purchase Requisition<span className="d-none d-sm-inline"></span>
            </Button>
          </div>
        </div>

        {/* analatics cards */}
        <Row className="g-3">
          <Col xl="4">
            <Card className="card-one">
              <Card.Body className="overflow-hidden">
                <h2 className="card-value mb-1">75<span>%</span></h2>
                <h6 className="text-dark fw-semibold mb-1">Gross Profit Margin</h6>
                <p className="fs-xs text-secondary mb-0 lh-4">The gross profit you make on each dollar of sales.</p>

                {/* <ReactApexChart series={seriesTwo} options={optionTwo} height={100} className="apex-chart-three" /> */}
              </Card.Body>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="card-one">
              <Card.Body className="overflow-hidden">
                <h2 className="card-value mb-1">75<span>%</span></h2>
                <h6 className="text-dark fw-semibold mb-1">Gross Profit Margin</h6>
                <p className="fs-xs text-secondary mb-0 lh-4">The gross profit you make on each dollar of sales.</p>

                {/* <ReactApexChart series={seriesTwo} options={optionTwo} height={100} className="apex-chart-three" /> */}
              </Card.Body>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="card-one">
              <Card.Body className="overflow-hidden">
                <h2 className="card-value mb-1">75<span>%</span></h2>
                <h6 className="text-dark fw-semibold mb-1">Gross Profit Margin</h6>
                <p className="fs-xs text-secondary mb-0 lh-4">The gross profit you make on each dollar of sales.</p>

                {/* <ReactApexChart series={seriesTwo} options={optionTwo} height={100} className="apex-chart-three" /> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Footer />
      </div>
    </>
  )
}

export default RFQ