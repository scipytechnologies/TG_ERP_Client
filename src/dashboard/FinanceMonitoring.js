import React, { useEffect, useState } from "react";
import { Button, Card, Col, Nav, ProgressBar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import { dp3 } from "../data/DashboardData";
import ReactApexChart from "react-apexcharts";
import mainservice from '../services/mainservice'

export default function FinanceMonitoring() {



  const seriesOne = [{
    name: 'series1',
    data: dp3
  }, {
    name: 'series2',
    data: dp3
  }];

  const optionOne = {
    chart: {
      parentHeightOffset: 0,
      type: 'area',
      toolbar: { show: false },
      stacked: true
    },
    colors: ['#4f6fd9', '#506fd9'],
    grid: {
      borderColor: 'rgba(72,94,144, 0.08)',
      padding: { top: -20 },
      yaxis: {
        lines: { show: false }
      }
    },
    stroke: {
      curve: 'straight',
      width: [2, 0]
    },
    xaxis: {
      type: 'numeric',
      tickAmount: 13,
      axisBorder: { show: false },
      labels: {
        style: {
          colors: '#6e7985',
          fontSize: '11px'
        }
      },
    },
    yaxis: {
      min: 0,
      max: 100,
      show: false
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.5,
        opacityTo: 0,
      }
    },
    dataLabels: { enabled: false },
    legend: { show: false },
    tooltip: { enabled: false }
  };

  const seriesTwo = [{
    type: 'column',
    data: [[0, 10], [1, 20], [2, 35], [3, 30], [4, 35], [5, 50], [6, 30], [7, 25], [8, 15], [9, 20], [10, 32], [11, 40], [12, 55], [13, 40], [14, 30], [15, 20], [16, 34], [17, 45], [18, 35], [19, 20], [20, 40], [21, 20], [22, 35], [23, 30], [24, 35], [25, 50], [26, 30], [27, 25], [28, 15], [29, 20], [30, 32], [31, 40], [32, 55], [33, 40], [34, 30], [35, 20], [36, 34], [37, 45], [38, 35], [39, 20], [40, 40]]
  }, {
    type: 'area',
    data: [[0, 70], [1, 71], [2, 70], [3, 70], [4, 78], [5, 79], [6, 75], [7, 70], [8, 75], [9, 72], [10, 74], [11, 76], [12, 80], [13, 81], [14, 80], [15, 78], [16, 80], [17, 82], [18, 87], [19, 80], [20, 81], [21, 80], [22, 70], [23, 70], [24, 71], [25, 75], [26, 74], [27, 76], [28, 80], [29, 80], [30, 80], [31, 76], [32, 75], [33, 80], [34, 81], [35, 80], [36, 79], [37, 78], [38, 80], [39, 81], [40, 80]]
  }];

  const optionTwo = {
    chart: {
      parentHeightOffset: 0,
      type: 'line',
      toolbar: { show: false }
    },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    colors: ['#c1ccf1', '#506fd9'],
    grid: {
      borderColor: 'rgba(72,94,144, 0.07)',
      padding: {
        top: -20,
        bottom: -5
      },
      yaxis: {
        lines: { show: false }
      }
    },
    fill: {
      type: ['solid', 'gradient'],
      gradient: {
        type: 'vertical',
        opacityFrom: 0.35,
        opacityTo: 0.2,
        gradientToColors: ['#f3f5fc']
      }
    },
    stroke: {
      width: [0, 1.5]
    },
    xaxis: {
      type: 'numeric',
      tickAmount: 8,
      decimalsInFloat: 0,
      labels: {
        style: {
          colors: '#6e7985',
          fontSize: '9px'
        }
      },
      axisBorder: { show: false }
    },
    yaxis: {
      show: false,
      min: 0,
      max: 100
    },
    legend: { show: false },
    tooltip: { enabled: false }
  };

  const seriesThree = [{
    type: 'column',
    data: [[0, 32], [1, 40], [2, 55], [3, 40], [4, 30], [5, 20], [6, 34], [7, 45], [8, 35], [9, 20], [10, 40], [11, 20], [12, 35], [13, 30], [14, 35], [15, 50], [16, 30], [17, 25], [18, 15], [19, 20], [20, 32], [21, 40], [22, 55], [23, 40], [24, 30], [25, 20], [26, 34], [27, 45], [28, 35], [29, 20], [30, 40], [31, 20], [32, 35], [33, 30], [34, 35], [35, 50], [36, 30], [37, 25], [38, 15], [39, 20], [40, 32]]
  }, {
    type: 'area',
    data: [[0, 82], [1, 80], [2, 85], [3, 80], [4, 76], [5, 70], [6, 74], [7, 75], [8, 75], [9, 70], [10, 71], [11, 72], [12, 75], [13, 80], [14, 85], [15, 80], [16, 70], [17, 95], [18, 95], [19, 90], [20, 92], [21, 90], [22, 95], [23, 90], [24, 90], [25, 90], [26, 84], [27, 85], [28, 85], [29, 80], [30, 70], [31, 70], [32, 75], [33, 70], [34, 75], [35, 80], [36, 75], [37, 85], [38, 78], [39, 70], [40, 82]]
  }];

  const optionThree = {
    chart: {
      parentHeightOffset: 0,
      type: 'line',
      toolbar: { show: false }
    },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    colors: ['#cde1ff', '#85b6ff'],
    grid: {
      borderColor: 'rgba(72,94,144, 0.07)',
      padding: {
        top: -20,
        bottom: -5
      },
      yaxis: {
        lines: { show: false }
      }
    },
    fill: {
      type: ['solid', 'gradient'],
      gradient: {
        type: 'vertical',
        opacityFrom: 0.35,
        opacityTo: 0.2,
        gradientToColors: ['#f3f5fc']
      }
    },
    stroke: {
      width: [0, 1.5]
    },
    xaxis: {
      type: 'numeric',
      tickAmount: 8,
      decimalsInFloat: 0,
      labels: {
        style: {
          colors: '#6e7985',
          fontSize: '9px'
        }
      },
      axisBorder: { show: false }
    },
    yaxis: {
      show: false,
      min: 0,
      max: 100
    },
    legend: { show: false },
    tooltip: { enabled: false }
  }

  const seriesFour = [{
    type: 'column',
    data: [[0, 0], [1, 0], [2, 5], [3, 6], [4, 8], [5, 10], [6, 15], [7, 18], [8, 13], [9, 11], [10, 13], [11, 15], [12, 13], [13, 7], [14, 5], [15, 8], [16, 11], [17, 7], [18, 5], [19, 5], [20, 6], [21, 6], [22, 5], [23, 5], [24, 6]]
  }, {
    type: 'column',
    data: [[0, 9], [1, 7], [2, 4], [3, 8], [4, 4], [5, 12], [6, 4], [7, 6], [8, 5], [9, 10], [10, 4], [11, 5], [12, 10], [13, 2], [14, 6], [15, 16], [16, 5], [17, 17], [18, 14], [19, 6], [20, 5], [21, 2], [22, 12], [23, 4], [24, 7]]
  }];

  const optionFour = {
    chart: {
      stacked: true,
      sparkline: { enabled: true }
    },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    colors: ['#506fd9', '#e5e9f2'],
    grid: {
      padding: {
        bottom: 10,
        left: -6,
        right: -5
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '40%',
        endingShape: 'rounded'
      },
    },
    stroke: {
      curve: 'straight',
      lineCap: 'square'
    },
    yaxis: {
      min: 0,
      max: 30
    },
    tooltip: { enabled: false }
  };

  const seriesFive = [{
    type: 'column',
    data: [[0, 2], [1, 3], [2, 5], [3, 7], [4, 12], [5, 17], [6, 10], [7, 14], [8, 15], [9, 12], [10, 8], [11, 6], [12, 9], [13, 12], [14, 5], [15, 10], [16, 12], [17, 16], [18, 13], [19, 7], [20, 4], [21, 2], [22, 2], [23, 2], [24, 5]]
  }, {
    type: 'column',
    data: [[0, 12], [1, 7], [2, 4], [3, 5], [4, 8], [5, 10], [6, 4], [7, 7], [8, 11], [9, 9], [10, 5], [11, 3], [12, 4], [13, 6], [14, 6], [15, 10], [16, 5], [17, 7], [18, 4], [19, 16], [20, 15], [21, 11], [22, 12], [23, 4], [24, 7]]
  }];

  const optionFive = {
    chart: {
      stacked: true,
      sparkline: { enabled: true }
    },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    colors: ['#85b6ff', '#e5e9f2'],
    grid: {
      padding: {
        bottom: 10,
        left: -6,
        right: -5
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '40%',
        endingShape: 'rounded'
      },
    },
    stroke: {
      curve: 'straight',
      lineCap: 'square'
    },
    yaxis: {
      min: 0,
      max: 30
    },
    tooltip: { enabled: false }
  };

  const seriesSix = [{
    name: 'series1',
    data: dp3
  }, {
    name: 'series2',
    data: dp3
  }];

  const optionSix = {
    chart: {
      parentHeightOffset: 0,
      toolbar: {
        show: false
      },
      stacked: true,
      sparkline: {
        enabled: true
      }
    },
    colors: ['#506fd9', '#85b6ff'],
    stroke: {
      curve: 'straight',
      width: [0, 0]
    },
    yaxis: {
      min: 0,
      max: 60,
      show: false
    },
    xaxis: {
      min: 20,
      max: 30
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.75,
        opacityTo: 0.25,
      }
    },
    legend: { show: false },
    tooltip: { enabled: false }
  };

  const seriesSeven = [{
    data: [10, 12, 18, 25, 15, 30, 40, 10, 20, 12, 16, 60, 20, 15, 10, 60, 50, 40, 80, 100, 30, 40, 10, 20, 12, 16, 60, 20, 15, 60, 20, 15, 10, 60, 50, 40, 30, 40, 10, 20, 16, 60, 20, 15, 60, 20, 15, 10, 60, 50, 40, 30, 40, 10, 20]
  }, {
    data: [-10, -12, -18, -25, -15, -30, -40, -10, -20, -12, -16, -60, -20, -15, -10, -60, -50, -40, -80, -40, -30, -40, -10, -20, -12, -16, -60, -20, -15, -60, -20, -15, -10, -60, -50, -40, -30, -40, -10, -20, -40, -10, -20, -12, -16, -60, -20, -15, -60, -20, -15, -10, -60, -50, -40]
  }];

  const optionSeven = {
    chart: {
      parentHeightOffset: 0,
      stacked: true,
      toolbar: { show: false }
    },
    colors: ['#506fd9', '#85b6ff'],
    grid: {
      borderColor: 'rgba(72,94,144, 0.07)',
      padding: {
        top: -20,
        left: 0,
        bottom: -5
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '60%',
        endingShape: 'rounded'
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    yaxis: {
      max: 130,
      tickAmount: 5,
      labels: {
        style: {
          colors: '#6e7985',
          fontSize: '10px'
        }
      }
    },
    xaxis: {
      type: 'numeric',
      tickAmount: 10,
      decimalsInFloat: 0,
      labels: {
        style: {
          colors: '#6e7985',
          fontSize: '10px',
          fontWeight: 'bold'
        }
      },
      axisBorder: { show: false }
    },
    dataLabels: { enabled: false },
    fill: { opacity: 1 },
    legend: { show: false },
    tooltip: { enabled: false }
  }

  const seriesEight = [{
    type: 'column',
    data: [[0, 2], [1, 3], [2, 5], [3, 7], [4, 12], [5, 17], [6, 10], [7, 14], [8, 15], [9, 12], [10, 8]]
  }, {
    type: 'column',
    data: [[0, 12], [1, 7], [2, 4], [3, 5], [4, 8], [5, 10], [6, 4], [7, 7], [8, 11], [9, 9], [10, 5]]
  }];

  const optionEight = {
    chart: {
      parentHeightOffset: 0,
      stacked: true,
      type: 'line',
      toolbar: { show: false }
    },
    grid: {
      borderColor: 'rgba(72,94,144, 0.07)',
      padding: {
        top: -20,
        left: 5,
        bottom: -15
      }
    },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    colors: ['#506fd9', '#e5e9f2'],
    plotOptions: {
      bar: {
        columnWidth: '40%',
        endingShape: 'rounded'
      },
    },
    stroke: {
      curve: 'straight',
      lineCap: 'square',
      width: 0
    },
    yaxis: {
      min: 0,
      max: 30,
      tickAmount: 5
    },
    xaxis: {
      labels: {
        style: {
          colors: '#6e7985',
          fontSize: '10px',
          fontWeight: '500'
        }
      },
    },
    tooltip: { enabled: false },
    legend: { show: false }
  };

  const optionDonut = {
    chart: {
      parentHeightOffset: 0
    },
    colors: ['#506fd9', '#85b6ff', '#51596d', '#eff1f5'],
    dataLabels: { enabled: false },
    grid: {
      padding: {
        top: 0,
        bottom: 0
      }
    },
    legend: { show: false }
  };

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
  };

  switchSkin(skin);
  useEffect(() => {
    switchSkin(skin);
  }, [skin]);

  return (
    <React.Fragment>
      <Header onSkin={setSkin} />
      <div className="main main-app p-3 p-lg-4">
        <div className="d-md-flex align-items-center justify-content-between mb-4">
          <div>
            <ol className="breadcrumb fs-sm mb-1">
              <li className="breadcrumb-item"><Link to="#">Dashboard</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Finance Monitoring</li>
            </ol>
            <h4 className="main-title mb-0">Welcome to Dashboard</h4>
          </div>
          <div className="d-flex gap-2 mt-3 mt-md-0">
            <Button variant="" className="btn-white d-flex align-items-center gap-2">
              <i className="ri-share-line fs-18 lh-1"></i>Share
            </Button>
            <Button variant="" className="btn-white d-flex align-items-center gap-2">
              <i className="ri-printer-line fs-18 lh-1"></i>Print
            </Button>
            <Button variant="primary" className="d-flex align-items-center gap-2">
              <i className="ri-bar-chart-2-line fs-18 lh-1"></i>Generate<span className="d-none d-sm-inline"> Report</span>
            </Button>
          </div>
        </div>

        <Row className="g-3">
          <Col xl="9">
            <Card className="card-one">
              <Card.Body className="overflow-hidden px-0 pb-3">
                <div className="finance-info p-3 p-xl-4">
                  <label className="fs-sm fw-medium mb-2 mb-xl-1">Profit This Year</label>
                  <h1 className="finance-value"><span>$</span>867,036.50 <span>USD</span></h1>

                  <h4 className="finance-subvalue mb-3 mb-md-2">
                    <i className="ri-arrow-up-line text-primary"></i>
                    <span className="text-primary">38.63%</span>
                    <small>vs last year</small>
                  </h4>

                  <p className="w-50 fs-sm mb-2 mb-xl-4 d-none d-sm-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...</p>

                  <Row className="row-cols-auto g-3 g-xl-4 pt-2">
                    {[
                      {
                        "amount": "30,342.15",
                        "quarter": "First",
                        "percent": "2.3",
                        "status": "success"
                      }, {
                        "amount": "48,036.90",
                        "quarter": "Second",
                        "percent": "6.8",
                        "status": "success"
                      }, {
                        "amount": "68,156.00",
                        "quarter": "Third",
                        "percent": "10.5",
                        "status": "success"
                      }, {
                        "amount": "64,896.65",
                        "quarter": "Fourth",
                        "percent": "0.8",
                        "status": "danger"
                      }
                    ].map((item, index) => (
                      <Col key={index}>
                        <h6 className="card-value fs-15 mb-1">${item.amount} USD</h6>
                        <span className="fs-sm fw-medium text-secondary d-block mb-1">{item.quarter} Quarter</span>
                        <span className={"fs-xs d-flex align-items-center ff-numerals text-" + item.status}>{item.percent}% <i className={((item.status === "success") ? "ri-arrow-up-line" : "ri-arrow-down-line") + " fs-15 lh-3"}></i></span>
                      </Col>
                    ))}
                  </Row>

                </div>

                <Nav as="nav" className="nav-finance-one p-3 p-xl-4">
                  <Link href="" className="active">2023</Link>
                  <Link href="">2022</Link>
                  <Link href="">2021</Link>
                </Nav>

                <ReactApexChart series={seriesOne} options={optionOne} type="area" height={430} className="apex-chart-two" />
              </Card.Body>
            </Card>

          </Col>
          <Col xl="3">
            <Row className="g-3">
              <Col sm="6" xl="12">
                <Card className="card-one">
                  <Card.Body className="overflow-hidden">
                    <h2 className="card-value mb-1">75<span>%</span></h2>
                    <h6 className="text-dark fw-semibold mb-1">Gross Profit Margin</h6>
                    <p className="fs-xs text-secondary mb-0 lh-4">The gross profit you make on each dollar of sales.</p>

                    <ReactApexChart series={seriesTwo} options={optionTwo} height={100} className="apex-chart-three" />
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="6" xl="12">
                <Card className="card-one">
                  <Card.Body>
                    <h2 className="card-value mb-1">68<span>%</span></h2>
                    <h6 className="text-dark fw-semibold mb-1">Net Profit Margin</h6>
                    <p className="fs-xs text-secondary mb-0 lh-4">Measures your business at generating profit sales.</p>

                    <ReactApexChart series={seriesThree} options={optionThree} height={100} className="apex-chart-three" />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col sm="6" xl>
            <Card className="card-one">
              <Card.Body>
                <ReactApexChart series={seriesFour} options={optionFour} height={120} type="line" className="mb-1" />
                <h3 className="card-value">0.9:8</h3>
                <ProgressBar now={50} className="ht-5 mb-2" />
                <label className="fw-semibold text-dark mb-1">Quick Ratio Goal: 1.0 or higher</label>
                <p className="fs-sm text-secondary mb-0">Measures your Accounts Receivable / Current Liabilities</p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="6" xl>
            <Card className="card-one">
              <Card.Body>
                <ReactApexChart series={seriesFive} options={optionFive} height={120} type="line" className="mb-1" />
                <h3 className="card-value">2.8:0</h3>
                <ProgressBar now={75} variant="ui-02" className="ht-5 mb-2" />
                <label className="fw-semibold text-dark mb-1">Quick Ratio Goal: 2.0 or higher</label>
                <p className="fs-sm text-secondary mb-0">Measures your Current Assets / Current Liabilities</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md="7" xl="5">
            <Card className="card-one card-wallet">
              <Card.Body>
                <div className="finance-icon">
                  <i className="ri-mastercard-fill"></i>
                  <i className="ri-visa-line"></i>
                </div>
                <label className="card-title mb-1">Available Balance</label>
                <h2 className="card-value mb-auto"><span>$</span>130,058.50</h2>

                <label className="card-title mb-1">Account Number</label>
                <div className="d-flex align-items-center gap-4 mb-3">
                  <div className="d-flex gap-1">
                    <span className="badge-dot"></span>
                    <span className="badge-dot"></span>
                    <span className="badge-dot"></span>
                    <span className="badge-dot"></span>
                  </div>
                  <div className="d-flex gap-1">
                    <span className="badge-dot"></span>
                    <span className="badge-dot"></span>
                    <span className="badge-dot"></span>
                    <span className="badge-dot"></span>
                  </div>
                  <div className="d-flex gap-1">
                    <span className="badge-dot"></span>
                    <span className="badge-dot"></span>
                    <span className="badge-dot"></span>
                    <span className="badge-dot"></span>
                  </div>
                  <h5 className="ff-numerals mb-0">5314</h5>
                </div>

                <label className="card-title mb-1">Account Name</label>
                <h5 className="mb-0">Richard M. Christensen</h5>
              </Card.Body>
              <ReactApexChart series={seriesSix} options={optionSix} height={268} type="area" className="apex-chart-two" />
            </Card>
          </Col>
          <Col md="5" xl="6">
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Income &amp; Expenses</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                  <Nav.Link href=""><i className="ri-more-2-fill"></i></Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body className="pb-4">
                <ReactApexChart series={seriesSeven} options={optionSeven} height={200} type="bar" />
              </Card.Body>
            </Card>
          </Col>
          <Col xl="6">
            <Card className="card-one">
              <Card.Header className="border-0 pb-2">
                <Card.Title as="h6">Profit Margin (%)</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                  <Nav.Link href=""><i className="ri-more-2-fill"></i></Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body className="pt-0">
                <p className="fs-sm text-secondary mb-4">Profit margin is a measure of profitability. It is calculated by finding the profit as a percentage of the revenue.</p>

                <ProgressBar className="progress-finance mb-4">
                  <ProgressBar now={29.7} label="29.7%" />
                  <ProgressBar now={52.8} label="52.8%" />
                  <ProgressBar now={18.3} label="18.3%" />
                </ProgressBar>

                <Row className="g-3">
                  <Col>
                    <label className="card-label fs-sm fw-medium mb-1">Gross Profit</label>
                    <h2 className="card-value mb-0">29.7%</h2>
                  </Col>
                  <Col xs="5" sm>
                    <label className="card-label fs-sm fw-medium mb-1">Operating Profit</label>
                    <h2 className="card-value mb-0">52.8%</h2>
                  </Col>
                  <Col>
                    <label className="card-label fs-sm fw-medium mb-1">Net Profit</label>
                    <h2 className="card-value mb-0">18.3%</h2>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col xl="8">
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Expense Analytics</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                  <Nav.Link href=""><i className="ri-more-2-fill"></i></Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body className="p-4">
                <Row className="g-4">
                  <Col md="6">
                    <ReactApexChart series={seriesEight} options={optionEight} height={210} className="apex-chart-three" />
                  </Col>
                  <Col md="6">
                    <div className="d-flex">
                      <i className="ri-hotel-line fs-48 lh-1 me-3"></i>
                      <div>
                        <h6 className="fw-semibold text-dark mb-1">Fixed Expenses</h6>
                        <p className="fs-sm text-secondary mb-0">Fixed expenses are generally fixed in both amount and interval.</p>
                      </div>
                    </div>
                    <div className="d-flex mt-3">
                      <i className="ri-wallet-3-line fs-48 lh-1 me-3"></i>
                      <div>
                        <h6 className="fw-semibold text-dark mb-1">Periodic Expenses</h6>
                        <p className="fs-sm text-secondary mb-0">Periodic expenses are usually less frequent and the amount can vary.</p>
                      </div>
                    </div>
                    <div className="d-flex mt-3">
                      <i className="ri-shopping-bag-3-line fs-48 lh-1 me-3"></i>
                      <div>
                        <h6 className="fw-semibold text-dark mb-1">Variable Expenses</h6>
                        <p className="fs-sm text-secondary mb-0">Change as the quantity of good or service that produces changes.</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Billed Opportunities</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                  <Nav.Link href=""><i className="ri-more-2-fill"></i></Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body className="position-relative d-flex justify-content-center">
                <ReactApexChart series={[35, 20, 20, 15]} options={optionDonut} height="auto" type="donut" className="apex-donut-two" />

                <div className="finance-donut-value">
                  <h1>1.8B</h1>
                  <p>86.24%</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card-one">
              <Card.Body className="p-3 p-xl-4">
                <Row className="justify-content-center g-3 mb-2 mb-xl-4">
                  <Col xs="6" sm="4" md>
                    <div className="finance-item">
                      <div className="finance-item-circle">
                        <h1>4.7B</h1>
                        <label>Total Income</label>
                      </div>
                    </div>
                  </Col>
                  <Col xs="6" sm="4" md>
                    <div className="finance-item">
                      <div className="finance-item-circle">
                        <h1>60M</h1>
                        <label>Total Expenses</label>
                      </div>
                    </div>
                  </Col>
                  <Col xs="6" sm="4" md>
                    <div className="finance-item">
                      <div className="finance-item-circle bg-gray-400">
                        <h1>2.1B</h1>
                        <label>Net Profit</label>
                      </div>
                    </div>
                  </Col>
                  <Col xs="6" sm="4" md>
                    <div className="finance-item">
                      <div className="finance-item-circle">
                        <h1>18.2%</h1>
                        <label>Quick Ratio</label>
                      </div>
                    </div>
                  </Col>
                  <Col xs="6" sm="4" md>
                    <div className="finance-item">
                      <div className="finance-item-circle">
                        <h1>6.8%</h1>
                        <label>Current Ratio</label>
                      </div>
                    </div>
                  </Col>
                </Row>

                <Row className="g-4 g-lg-5 pt-3">
                  <Col sm="6" xl="3">
                    <div className="d-flex">
                      <i className="ri-wallet-2-line fs-32 lh-1 me-3"></i>
                      <div>
                        <h6 className="fw-semibold text-dark mb-2">Accounts Receivable</h6>
                        <p className="fs-sm text-secondary mb-0">The proceeds or payment which the company will receive from its customers.</p>
                      </div>
                    </div>
                  </Col>
                  <Col sm="6" xl="3">
                    <div className="d-flex">
                      <i className="ri-refund-2-line fs-32 lh-1 me-3"></i>
                      <div>
                        <h6 className="fw-semibold text-dark mb-2">Accounts Payable</h6>
                        <p className="fs-sm text-secondary mb-0">Money owed by a business to its suppliers shown as a liability.</p>
                      </div>
                    </div>
                  </Col>
                  <Col sm="6" xl="3">
                    <div className="d-flex">
                      <i className="ri-exchange-line fs-32 lh-1 me-3"></i>
                      <div>
                        <h6 className="fw-semibold text-dark mb-2">Quick Ratio</h6>
                        <p className="fs-sm text-secondary mb-0">Measures the ability of a company to use its near cash or quick assets.</p>
                      </div>
                    </div>
                  </Col>
                  <Col sm="6" xl="3">
                    <div className="d-flex">
                      <i className="ri-exchange-dollar-line fs-32 lh-1 me-3"></i>
                      <div>
                        <h6 className="fw-semibold text-dark mb-2">Current Ratio</h6>
                        <p className="fs-sm text-secondary mb-0">Measures whether a firm has enough resources to meet its short-term obligations.</p>
                      </div>
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
  );
}
