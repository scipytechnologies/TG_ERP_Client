import React from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import ReactApexChart from "react-apexcharts";


function Inventory() {
  // to maintain dark and light mode
  const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
  const [skin, setSkin] = useState(currentSkin);
  const navigate = useNavigate()


  // gaaph states
  const states = {
    hover: {
      filter: {
        type: 'none'
      }
    },
    active: {
      filter: {
        type: 'none'
      }
    }
  };
  // graph demo data
  const seriesOne = [{
    data: [[0, 1000], [1, 600], [2, 500], [3, 400], [4, 600], [5, 500], [6, 800], [7, 1000], [8, 900], [9, 1100], [10, 1500], [11, 1700], [12, 1400], [13, 1300], [14, 1500], [15, 1300], [16, 1200], [17, 1000], [18, 1100], [19, 800], [20, 500], [21, 300], [22, 500], [23, 600], [24, 500], [25, 600], [26, 800], [27, 1000], [28, 900], [29, 800], [30, 500]]
  }, {
    data: [[0, 30], [1, 30], [2, 30], [3, 30], [4, 30], [5, 30], [6, 30], [7, 30], [8, 30], [9, 30], [10, 30], [11, 30], [12, 30], [13, 30], [14, 30], [15, 30], [16, 30], [17, 30], [18, 30], [19, 30], [20, 30], [21, 30], [22, 30], [23, 30], [24, 30], [25, 30], [26, 30], [27, 30], [28, 30], [29, 30], [30, 30]]
  }, {
    data: [[0, 800], [1, 600], [2, 500], [3, 400], [4, 600], [5, 500], [6, 800], [7, 1000], [8, 900], [9, 1100], [10, 1500], [11, 1700], [12, 1400], [13, 1300], [14, 1500], [15, 1300], [16, 1200], [17, 1000], [18, 1100], [19, 800], [20, 500], [21, 300], [22, 500], [23, 600], [24, 500], [25, 600], [26, 800], [27, 1000], [28, 900], [29, 800], [30, 500]]
  }];

  const optionOne = {
    chart: {
      parentHeightOffset: 0,
      stacked: true,
      toolbar: { show: false }
    },
    dataLabels: { enabled: false },
    grid: {
      borderColor: 'rgba(72,94,144, 0.07)',
      padding: {
        top: -20,
        left: 5
      }
    },
    states: states,
    colors: ['#506fd9', '#fff', '#c8ccd4'],
    plotOptions: {
      bar: {
        columnWidth: '35%'
      },
    },
    stroke: {
      curve: 'straight',
      lineCap: 'square',
      width: 0
    },
    tooltip: { enabled: false },
    fill: { opacity: 1 },
    legend: { show: false },
    xaxis: {
      type: 'numeric',
      tickAmount: 11,
      decimalsInFloat: 0,
      labels: {
        style: {
          fontSize: '11px'
        }
      }
    },
    yaxis: {
      max: 4000,
      tickAmount: 8,
      labels: {
        style: {
          colors: ['#a2abb5'],
          fontSize: '11px'
        }
      }
    }
  };

  return (
    <>
      <Header onSkin={setSkin} />
      <div className="main main-app p-3 p-lg-4">
        <div className="d-md-flex align-items-center justify-content-between mb-4">
          <div>
            <ol className="breadcrumb fs-sm mb-1">
              <li className="breadcrumb-item"><Link to="/dashboard/home">Dashboard</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Product</li>
            </ol>
            <h4 className="main-title mb-0">Product Management</h4>
          </div>          
        </div>

        {/* analatics cards */}
        <Row className="g-3">
          <Col xl="5">
            <Row className="g-3">
              {[
                {
                  "icon": "ri-shopping-bag-fill",
                  "percent": {
                    "color": "success",
                    "amount": "+28.5%"
                  },
                  "value": "$14,803.80",
                  "label": "Total Sales",
                  "last": {
                    "color": "success",
                    "amount": "2.3%"
                  }
                }, {
                  "icon": "ri-wallet-3-fill",
                  "percent": {
                    "color": "danger",
                    "amount": "-3.8%"
                  },
                  "value": "$8,100.63",
                  "label": "Total Expenses",
                  "last": {
                    "color": "danger",
                    "amount": "0.5%"
                  }
                }, {
                  "icon": "ri-shopping-basket-fill",
                  "percent": {
                    "color": "danger",
                    "amount": "-8.4%"
                  },
                  "value": "23,480",
                  "label": "Total Products",
                  "last": {
                    "color": "danger",
                    "amount": "0.2%"
                  }
                }, {
                  "icon": "ri-shopping-basket-fill",
                  "percent": {
                    "color": "success",
                    "amount": "+20.9%"
                  },
                  "value": "18,060",
                  "label": "Products Sold",
                  "last": {
                    "color": "success",
                    "amount": "5.8%"
                  }
                }
              ].map((item, index) => (
                <Col xs="6" md="3" xl="6" key={index}>
                  <Card className="card-one card-product">
                    <Card.Body className="p-3">
                      <div className="d-flex align-items-center justify-content-between mb-5">
                        <div className="card-icon"><i className={item.icon}></i></div>
                        <h6 className={"fw-normal ff-numerals mb-0 text-" + item.percent.color}>{item.percent.amount}</h6>
                      </div>
                      <h2 className="card-value ls--1">{item.value}</h2>
                      <label className="card-label fw-medium text-dark">{item.label}</label>
                      <span className="d-flex gap-1 fs-xs">
                        <span className={"d-flex align-items-center text-" + item.last.color}>
                          <span className="ff-numerals">{item.last.amount}</span><i className={(item.last.color === 'success') ? "ri-arrow-up-line" : "ri-arrow-down-line"}></i>
                        </span>
                        <span className="text-secondary">than last week</span>
                      </span>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
          <Col xl="7">
            <Card className="card-one card-product-inventory">
              <Card.Header>
                <Card.Title as="h6">Product Inventory</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                  <Nav.Link href=""><i className="ri-more-2-fill"></i></Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body className="p-3">
                <ul className="legend mb-3 position-absolute">
                  <li>Remaining Quantity</li>
                  <li>Sold Quantity</li>
                </ul>
                <ReactApexChart series={seriesOne} options={optionOne} type="bar" height={310} className="apex-chart-twelve mt-4 pt-3" />
              </Card.Body>
            </Card>
          </Col>
        </Row>





        <Footer />
      </div>
    </>
  )
}

export default Inventory