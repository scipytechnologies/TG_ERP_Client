import React, { useEffect, useState } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { Button, Card, Col, Nav, ProgressBar, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactApexChart from "react-apexcharts";

import prod1 from "../assets/img/prod1.jpg";
import prod2 from "../assets/img/prod2.jpg";
import prod3 from "../assets/img/prod3.jpg";
import prod4 from "../assets/img/prod4.jpg";
import prod5 from "../assets/img/prod5.jpg";

export default function ProductManagement() {

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

  const seriesTwo = [{
    data: [[9, 20], [10, 15]]
  }, {
    data: [[0, 10], [1, 6], [2, 5], [3, 4], [4, 6], [5, 5], [6, 8], [7, 10], [8, 9], [9, 0], [10, 0], [11, 17], [12, 11], [13, 15], [14, 10], [15, 13], [16, 12], [17, 10], [18, 11], [19, 8]]
  }];

  const optionTwo = {
    chart: {
      parentHeightOffset: 0,
      stacked: true,
      toolbar: { show: false }
    },
    grid: {
      borderColor: 'rgba(72,94,144, 0.07)',
      padding: {
        top: -20,
        left: 0,
        right: 0,
        bottom: -2
      },
      yaxis: {
        lines: { show: false }
      }
    },
    colors: ['#506fd9', '#d9dde7'],
    plotOptions: {
      bar: { columnWidth: '45%' }
    },
    stroke: {
      curve: 'straight',
      lineCap: 'square',
      width: 0
    },
    xaxis: {
      min: 0,
      type: 'numeric',
      tickAmount: 9,
      decimalsInFloat: 0,
      labels: {
        style: {
          fontSize: '10px',
          fontClor: '#ccc'
        }
      }
    },
    yaxis: {
      show: false,
      max: 38
    },
    states: states,
    dataLabels: { enabled: false },
    tooltip: { enabled: false },
    fill: { opacity: 1 },
    legend: { show: false }
  };

  const seriesThree = [{
    data: [[9, 21]]
  }, {
    data: [[0, 5], [1, 7], [2, 10], [3, 9], [4, 11], [5, 14], [6, 12], [7, 15], [8, 16], [9, 0], [10, 15], [11, 17], [12, 11], [13, 15], [14, 10], [15, 13], [16, 12], [17, 10], [18, 11], [19, 8]]
  }];

  const optionThree = {
    chart: {
      parentHeightOffset: 0,
      stacked: true,
      toolbar: { show: false }
    },
    grid: {
      borderColor: 'rgba(72,94,144, 0.07)',
      padding: {
        top: -20,
        left: 0,
        right: 0,
        bottom: -2
      },
      yaxis: {
        lines: { show: false }
      }
    },
    colors: ['#4c5366', '#d9dde7'],
    plotOptions: {
      bar: { columnWidth: '45%' }
    },
    stroke: {
      curve: 'straight',
      lineCap: 'square',
      width: 0
    },
    xaxis: {
      min: 0,
      type: 'numeric',
      tickAmount: 9,
      decimalsInFloat: 0,
      labels: {
        style: {
          fontSize: '10px',
          fontClor: '#ccc'
        }
      }
    },
    yaxis: {
      show: false,
      max: 38
    },
    states: states,
    dataLabels: { enabled: false },
    tooltip: { enabled: false },
    fill: { opacity: 1 },
    legend: { show: false }
  };

  const seriesFour = [{
    data: [[9, 20], [10, 10]]
  }, {
    data: [[0, 3], [1, 2], [2, 3], [3, 4], [4, 6], [5, 5], [6, 8], [7, 15], [8, 17], [9, 0], [10, 0], [11, 15], [12, 11], [13, 10], [14, 7], [15, 8], [16, 6], [17, 5], [18, 3], [19, 4]]
  }];

  const optionFour = {
    chart: {
      parentHeightOffset: 0,
      stacked: true,
      toolbar: { show: false }
    },
    grid: {
      borderColor: 'rgba(72,94,144, 0.07)',
      padding: {
        top: -20,
        left: 0,
        right: 0,
        bottom: -2
      },
      yaxis: {
        lines: { show: false }
      }
    },
    colors: ['#85b6ff', '#d9dde7'],
    plotOptions: {
      bar: { columnWidth: '45%' }
    },
    stroke: {
      curve: 'straight',
      lineCap: 'square',
      width: 0
    },
    xaxis: {
      min: 0,
      type: 'numeric',
      tickAmount: 9,
      decimalsInFloat: 0,
      labels: {
        style: {
          fontSize: '10px',
          fontClor: '#ccc'
        }
      }
    },
    yaxis: {
      show: false,
      max: 38
    },
    states: states,
    dataLabels: { enabled: false },
    tooltip: { enabled: false },
    fill: { opacity: 1 },
    legend: { show: false }
  };

  const seriesFive = [{
    name: 'Growth',
    data: [
      [0, 20], [1, 25], [2, 20], [3, 24], [4, 15], [5, 16], [6, 20], [7, 30], [8, 40], [9, 40],
      [10, 40], [11, 50], [12, 45], [13, 35], [14, 45], [15, 45], [16, 50], [17, 55], [18, 65], [19, 45],
      [20, 50], [21, 65], [22, 65], [23, 60], [24, 70], [25, 85], [26, 90], [27, 100], [28, 60], [29, 45],
      [30, 10], [31, 10], [32, 15], [33, 25], [34, 30], [35, 45], [36, 55], [37, 50], [38, 60], [39, 65],
      [40, 80], [41, 85], [42, 80], [43, 90], [44, 85], [45, 80], [46, 100]
    ]
  }, {
    name: 'Actual',
    data: [
      [0, 60], [1, 55], [2, 62], [3, 54], [4, 65], [5, 66], [6, 60], [7, 70], [8, 60], [9, 70],
      [10, 65], [11, 75], [12, 70], [13, 65], [14, 85], [15, 95], [16, 95], [17, 105], [18, 115], [19, 110],
      [20, 130], [21, 140], [22, 165], [23, 155], [24, 120], [25, 110], [26, 140], [27, 150], [28, 170], [29, 155],
      [30, 165], [31, 160], [32, 110], [33, 140], [34, 140], [35, 115], [36, 105], [37, 110], [38, 100], [39, 110],
      [40, 140], [41, 130], [42, 140], [43, 150], [44, 180], [45, 190], [46, 220]
    ]
  }];

  const optionFive = {
    chart: {
      parentHeightOffset: 0,
      stacked: true,
      toolbar: { show: false }
    },
    colors: ['#4c5366', '#506fd9'],
    dataLabels: { enabled: false },
    grid: {
      borderColor: 'rgba(72,94,144, 0.07)',
      padding: {
        top: -20,
        bottom: 0,
        left: 20
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    stroke: {
      curve: 'smooth',
      width: 1.5
    },
    fill: {
      colors: ['#fff', '#81adee'],
      type: ['solid', 'gradient'],
      opacity: 1,
      gradient: {
        opacityFrom: 0.35,
        opacityTo: 0.65,
      }
    },
    legend: { show: false },
    tooltip: { enabled: false },
    yaxis: {
      max: 480,
      tickAmount: 6,
      show: false
    },
    xaxis: {
      type: 'numeric',
      tickAmount: 11,
      labels: {
        style: {
          colors: '#6e7985',
          fontSize: '11px'
        }
      },
      axisBorder: { show: false }
    }
  };

  ///// Skin Switch /////
  const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
  const [skin, setSkin] = useState(currentSkin);

  const switchSkin = (skin) => {
    if (skin === 'dark') {
      const btnWhite = document.getElementsByClassName('btn-white');

      for (const btn of btnWhite) {
        btn.classList.add('btn-outline-primary');
        btn.classList.remove('btn-white');
      }
    } else {
      const btnOutlinePrimary = document.getElementsByClassName('btn-outline-primary');

      for (const btn of btnOutlinePrimary) {
        btn.classList.remove('btn-outline-primary');
        btn.classList.add('btn-white');
      }
    }
  }

  switchSkin(skin);

  useEffect(() => {
    switchSkin(skin);
  }, [skin]);

  return (
    <React.Fragment>
      <Header onSkin={setSkin} />
      <div className="main main-app p-3 p-lg-4">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <div>
            <ol className="breadcrumb fs-sm mb-1">
              <li className="breadcrumb-item"><Link to="#">Dashboard</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Product Management</li>
            </ol>
            <h4 className="main-title mb-0">Welcome to Dashboard</h4>
          </div>

          <div className="d-flex align-items-center gap-2 mt-3 mt-md-0">
            <Button variant="white" className="btn-icon"><i className="ri-share-line fs-18 lh-1"></i></Button>
            <Button variant="white" className="btn-icon"><i className="ri-printer-line fs-18 lh-1"></i></Button>
            <Button variant="primary" className="d-flex align-items-center gap-2">
              <i className="ri-bar-chart-2-line fs-18 lh-1"></i>Generate<span className="d-none d-sm-inline"> Report</span>
            </Button>
          </div>
        </div>

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
          <Col xl="8">
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Popular Products</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                  <Nav.Link href=""><i className="ri-more-2-fill"></i></Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body className="p-3">
                {[
                  {
                    "image": prod1,
                    "name": "iPhone 14 Pro Max Leather Case",
                    "text": "Leather Case with MagSafe",
                    "price": "$35.50",
                    "available": "560",
                    "sold": "40",
                    "sales": "$1,420.00"
                  }, {
                    "image": prod2,
                    "name": "Apple Watch Series 7 GPS",
                    "text": "Midnight Aluminum Sport Band",
                    "price": "$395.99",
                    "available": "350",
                    "sold": "150",
                    "sales": "$59,398.50"
                  }, {
                    "image": prod3,
                    "name": "Apple Wireless Black Airpods",
                    "text": "(3rd Generation) Wireless Earbuds",
                    "price": "$210.95",
                    "available": "250",
                    "sold": "100",
                    "sales": "$21,095.00"
                  }, {
                    "image": prod4,
                    "name": "Macbook Air M2 Chip",
                    "text": "16GB Ram 512GB SSD Storage",
                    "price": "$1,910.00",
                    "available": "100",
                    "sold": "50",
                    "sales": "$95,500.00"
                  }
                ].map((item, index) => (
                  <div className="product-wrapper" key={index}>
                    <Table>
                      <tbody>
                        <tr>
                          <td>
                            <div className="product-thumb">
                              <img src={item.image} alt="" />
                            </div>
                          </td>
                          <td>
                            <h6 className="mb-1">
                              <Link to="">{item.name}</Link>
                            </h6>
                            <span className="fs-sm text-secondary">{item.text}</span>
                          </td>
                          <td>
                            <label className="d-block text-secondary fs-sm mb-1">Price</label>
                            <span className="d-block fw-medium text-dark ff-numerals">{item.price}</span>
                          </td>
                          <td>
                            <label className="d-block text-secondary fs-sm mb-1">Available</label>
                            <span className="d-block fw-medium text-dark ff-numerals">{item.available}</span>
                          </td>
                          <td>
                            <label className="d-block text-secondary fs-sm mb-1">Sold</label>
                            <span className="d-block fw-medium text-dark ff-numerals">{item.sold}</span>
                          </td>
                          <td>
                            <label className="d-block text-secondary fs-sm mb-1">Sales</label>
                            <span className="d-block fw-medium text-dark ff-numerals">{item.sales}</span>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Revenue By Departments</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                  <Nav.Link href=""><i className="ri-more-2-fill"></i></Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body className="p-3">
                {[
                  {
                    "name": "Automotive",
                    "amount": "$12,550.50",
                    "color": "success",
                    "percent": "55.6%",
                    "progress": 50
                  }, {
                    "name": "Home & Kitchen",
                    "amount": "$9,805.00",
                    "color": "danger",
                    "percent": "6.8%",
                    "progress": 40
                  }, {
                    "name": "Health & Fashion",
                    "amount": "$15,004.90",
                    "color": "success",
                    "percent": "69.2%",
                    "progress": 70
                  }, {
                    "name": "Movies & Television",
                    "amount": "$5,338.00",
                    "color": "danger",
                    "percent": "28.5%",
                    "progress": 25
                  }, {
                    "name": "Toys & Games",
                    "amount": "$4,965.40",
                    "color": "danger",
                    "percent": "18.2%",
                    "progress": 20
                  }
                ].map((item, index) => (
                  <div className="revenue-item" key={index}>
                    <div className="revenue-item-body">
                      <span>{item.name}</span>
                      <span>{item.amount}</span>
                      <span className={"text-" + item.color}>{item.percent}</span>
                    </div>
                    <ProgressBar now={item.progress} />
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Purchases</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                  <Nav.Link href=""><i className="ri-more-2-fill"></i></Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body className="p-3">
                <div className="position-absolute">
                  <h2 className="card-value mb-1 ls--1"><span>$</span>8,358</h2>
                  <small><span className="d-inline-flex text-danger">0.7% <i className="ri-arrow-down-line"></i></span> than last week</small>
                </div>
                <ReactApexChart series={seriesTwo} options={optionTwo} type="bar" height={180} />
              </Card.Body>
            </Card>
          </Col>
          <Col sm="6" md="4">
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Product Views</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                  <Nav.Link href=""><i className="ri-more-2-fill"></i></Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body className="p-3">
                <div className="position-absolute">
                  <h2 className="card-value mb-1 ls--1">53,570</h2>
                  <small><span className="d-inline-flex text-success">1.4% <i className="ri-arrow-up-line"></i></span> than last week</small>
                </div>
                <ReactApexChart series={seriesThree} options={optionThree} type="bar" height={180} />
              </Card.Body>
            </Card>
          </Col>
          <Col sm="6" md="4">
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Added to Cart</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                  <Nav.Link href=""><i className="ri-more-2-fill"></i></Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body className="p-3">
                <div className="position-absolute">
                  <h2 className="card-value mb-1 ls--1">16,803</h2>
                  <small><span className="d-inline-flex text-success">0.8% <i className="ri-arrow-up-line"></i></span> than last week</small>
                </div>
                <ReactApexChart series={seriesFour} options={optionFour} type="bar" height={180} />
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" xl="7">
            <Card className="card-one overflow-hidden">
              <Card.Body className="px-0 pb-3">
                <div className="total-sales-body">
                  <h2 className="card-value mb-2 ls--1"><span>$</span>285,650.10</h2>
                  <label className="d-block mb-0"><span className="fw-semibold text-dark">Total Sales</span> <span className="ff-numerals">(01/01/2023 - 12/31/2023)</span></label>
                  <small><span className="d-inline-flex text-success">0.8% <i className="ri-arrow-up-line"></i></span> than last week</small>
                  <p className="w-50 fs-xs text-secondary mt-2 mb-0 d-none d-lg-block">Note: Sed ut perspi ciatis unde omnis iste natus error sit volup tatem accu santium dolor emque laudan...</p>
                </div>
                <ReactApexChart series={seriesFive} options={optionFive} type="area" height={328} />
              </Card.Body>
            </Card>
          </Col>
          <Col sm="6" md>
            <Card className="card-one">
              <Card.Body className="p-3">
                <div className="text-center p-3 bg-white rounded mb-3">
                  <img src={prod3} className="img-fluid" alt="" />
                </div>
                <h6 className="fw-semibold text-dark lh-4">Apple Wireless Black Airpods</h6>
                <p className="mb-3 fs-sm text-secondary">Nam libero tempore cum soluta nobis eligendi...</p>
                <div className="d-grid">
                  <Button as="a" variant="primary" className="btn-sm">Check Availability</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="6" md>
            <Card className="card-one">
              <Card.Body className="p-3">
                <div className="text-center p-3 bg-white rounded mb-3">
                  <img src={prod2} className="img-fluid" alt="" />
                </div>
                <h6 className="fw-semibold text-dark lh-4">Apple Watch Series 7 GPS</h6>
                <p className="mb-3 fs-sm text-secondary">Et harum quidem rerum facilis est et expedita...</p>
                <div className="d-grid">
                  <Button as="a" variant="secondary" className="btn-sm">Sold Out</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xl="6">
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Featured Product</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                  <Nav.Link href=""><i className="ri-more-2-fill"></i></Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body className="p-3">
                <Row className="g-3">
                  <Col sm="5" md="4" xl="5" xxl="4">
                    <div className="h-100 border rounded px-2 bg-white">
                      <img src={prod5} className="img-fluid" alt="" />
                    </div>
                  </Col>
                  <Col sm="7" md="8" xl="7" xxl className="d-flex flex-column">
                    <h6 className="fs-15 fw-semibold text-dark mb-1">Nike Sneakers</h6>
                    <p className="text-secondary mb-3">Court Vision Low Next Nature Shoes</p>
                    <ul className="list-unstyled">
                      <li>- Best for lifestyle</li>
                      <li>- Polyurethane upper</li>
                      <li>- Vulcanized construction</li>
                      <li>- Textile inner</li>
                      <li>- <Link to="">See more</Link></li>
                    </ul>
                    <div className="d-flex align-items-center justify-content-between mt-auto">
                      <h6 className="card-value fw-semibold fs-15 mb-0"><span>$</span>120.50</h6>
                      <div className="d-flex gap-1 text-primary fs-14">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-line"></i>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col xl="6">
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Featured Reviews</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                  <Nav.Link href=""><i className="ri-more-2-fill"></i></Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body className="p-3">
                <Row className="g-3">
                  <Col sm="4" md="3" xl="4">
                    <div className="avatar avatar-xl mb-2">
                      <span className="avatar-initial bg-gray-700">s</span>
                    </div>
                    <h6 className="fw-semibold text-dark mb-1">Reyna R. Labares</h6>
                    <p className="fs-xs text-secondary mb-1">Dec 20, 2023 8:45am</p>
                    <div className="d-flex gap-1 text-primary fs-16">
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                    </div>
                  </Col>
                  <Col sm="8" md="9" xl="8" className="d-flex flex-column">
                    <h6 className="fw-semibold text-dark lh-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h6>
                    <p className="text-secondary">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum <span class="d-xl-none d-xxl-inline">dolore eu fugiat nulla pariatur</span>...</p>
                    <div className="product-review-footer mt-auto">
                      <Link to=""><i className="ri-thumb-up-line"></i></Link>
                      <Link to=""><i className="ri-thumb-down-line"></i></Link>
                      <Link to="">Report Review</Link>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Footer />
      </div>
    </React.Fragment>
  )
}