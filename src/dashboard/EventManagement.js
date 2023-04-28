import React, { useEffect, useState } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { Button, Card, Col, Row, Table, Nav, ProgressBar } from "react-bootstrap";
import ReactApexChart from "react-apexcharts";
import { Bar, Doughnut } from 'react-chartjs-2';
import { Link } from "react-router-dom";

export default function EventManagement() {
  const d1 = [[0, 38], [1, 32], [2, 31], [3, 33], [4, 34], [5, 35], [6, 38], [7, 37], [8, 39], [9, 34], [10, 33], [11, 32], [12, 34], [13, 38], [14, 42], [15, 43], [16, 45], [17, 43], [18, 45], [19, 48], [20, 45], [21, 46], [22, 44], [23, 42], [24, 46], [25, 48], [26, 55], [27, 54], [28, 58], [29, 69]];
  const d2 = [[0, 12], [1, 11], [2, 9], [3, 10], [4, 15], [5, 9], [6, 11], [7, 12], [8, 7], [9, 16], [10, 18], [11, 24], [12, 16], [13, 10], [14, 9], [15, 16], [16, 15], [17, 28], [18, 20], [19, 15], [20, 20], [21, 12], [22, 15], [23, 12], [24, 10], [25, 12], [26, 14], [27, 18], [28, 20], [29, 21],];

  // Tickets Earnings
  const seriesOne = [{
    name: 'series1',
    data: d1
  }, {
    name: 'series2',
    data: d2
  }];

  const optionOne = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      stacked: true,
      sparkline: { enabled: true }
    },
    colors: ['#85b6fe', '#506fd9'],
    stroke: {
      curve: 'straight',
      width: 2
    },
    yaxis: {
      min: 0,
      max: 150,
      show: false
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.5,
        opacityTo: 0,
      }
    },
    tooltip: { enabled: false }
  };

  // Tickets Available
  const seriesTwo = [{
    data: [[0, 1], [1, 2], [2, 5], [3, 6], [4, 8], [5, 10], [6, 15], [7, 18], [8, 13], [9, 11], [10, 13], [11, 15], [12, 13], [13, 7], [14, 5], [15, 8], [16, 11], [17, 7], [18, 5], [19, 5], [20, 6], [21, 6], [22, 5], [23, 5], [24, 6], [25, 2], [26, 1]]
  }, {
    data: [[0, 2], [1, 3], [2, 4], [3, 8], [4, 4], [5, 12], [6, 4], [7, 6], [8, 5], [9, 10], [10, 4], [11, 5], [12, 10], [13, 2], [14, 6], [15, 16], [16, 5], [17, 17], [18, 14], [19, 6], [20, 5], [21, 2], [22, 12], [23, 4], [24, 7], [25, 1], [26, 2], [27, 1], [28, 2], [29, 2], [30, 1], [31, .2], [32, .2], [33, .2], [34, .2], [35, .2], [36, .2], [37, .2], [38, .2], [39, .2], [40, .2], [41, .2], [42, .2], [43, .2], [44, .2], [45, .2], [46, .2], [47, .2], [48, .2], [49, .2]]
  }];

  const optionTwo = {
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
        left: 0,
        right: 0
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
    fill: { opacity: 1 },
    tooltip: { enabled: false }
  };

  // Tickets Sold
  const seriesThree = [{
    name: 'series1',
    data: d1
  }];

  const optionThree = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      sparkline: { enabled: true }
    },
    colors: ['#506fd9'],
    stroke: {
      curve: 'straight',
      width: 2
    },
    xaxis: { max: 20 },
    yaxis: {
      min: 0,
      max: 160,
      show: false
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.5,
        opacityTo: 0,
      }
    },
    tooltip: { enabled: false }
  };

  // Tickets Unsold
  const optionFour = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      sparkline: { enabled: true }
    },
    colors: ['#85b6ff'],
    stroke: {
      curve: 'straight',
      width: 2
    },
    xaxis: {
      min: 3,
      max: 25
    },
    yaxis: {
      min: 0,
      max: 160,
      show: false
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.5,
        opacityTo: 0,
      }
    },
    tooltip: { enabled: false }
  };

  // Performance Reached
  const seriesFive = [{
    type: 'column',
    data: [[0, 0], [1, 40], [2, 55], [3, 40], [4, 30], [5, 20], [6, 34], [7, 45], [8, 35], [9, 20], [10, 40], [11, 20], [12, 35], [13, 30], [14, 35], [15, 50], [16, 30], [17, 25], [18, 15], [19, 20], [20, 32], [21, 40], [22, 55], [23, 40], [24, 30], [25, 20], [26, 34], [27, 45], [28, 35], [29, 20], [30, 40], [31, 20], [32, 35], [33, 30], [34, 35], [35, 50], [36, 30], [37, 25], [38, 15], [39, 20], [40, 32]]
  }, {
    type: 'area',
    data: [[0, 82], [1, 80], [2, 85], [3, 80], [4, 76], [5, 70], [6, 74], [7, 75], [8, 75], [9, 70], [10, 71], [11, 72], [12, 75], [13, 80], [14, 85], [15, 80], [16, 70], [17, 95], [18, 95], [19, 90], [20, 92], [21, 90], [22, 95], [23, 90], [24, 90], [25, 90], [26, 84], [27, 85], [28, 85], [29, 80], [30, 70], [31, 70], [32, 75], [33, 70], [34, 75], [35, 80], [36, 75], [37, 85], [38, 78], [39, 70], [40, 82]]
  }];

  const optionFive = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    states: {
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
    },
    colors: ['#3a59c4', '#e5e9f2'],
    plotOptions: {
      bar: { columnWidth: '45%' },
    },
    grid: {
      borderColor: 'rgba(33,43,48,0.07)',
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
      curve: 'straight',
      width: [0, 2]
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
    dataLabels: { enabled: false },
    legend: { show: false },
    tooltip: { enabled: false }
  };

  // Events Categories
  const dataBar = {
    labels: ['Performing Arts', 'Festivals', 'Conferences', 'Sports', 'Community', 'Concerts', 'Politics'],
    datasets: [{
      data: [20, 60, 50, 45, 50, 75, 40],
      backgroundColor: '#506fd9',
      barPercentage: 0.45
    }, {
      data: [10, 40, 30, 40, 60, 55, 50],
      backgroundColor: '#85b6ff',
      barPercentage: 0.45
    }]
  };

  const optionBar = {
    indexAxis: 'y',
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 80,
        grid: {
          borderColor: '#e2e5ec',
          color: '#f3f5f9'
        },
        ticks: {
          font: {
            size: 11
          }
        }
      },
      y: {
        grid: {
          borderWidth: 0,
          color: '#f3f5f9'
        },
        ticks: {
          color: '#212830',
          font: {
            size: 14
          }
        }
      }
    }
  };

  // Events By Category
  const dataPie = {
    labels: ['Festivals', 'Sports', 'Concerts', 'Performing Arts'],
    datasets: [{
      data: [40, 25, 20, 15],
      backgroundColor: ['#506fd9', '#85b6ff', '#50586d', '#b9bdc9']
    }]
  };

  const optionPie = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      }
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  };
  
  
  // Changing necessary options between dark and light skin
  const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
  const [skin, setSkin] = useState(currentSkin);

  if (skin === 'dark') {
    optionBar.scales['x'].grid.color = '#222b41';
    optionBar.scales['x'].ticks.color = 'rgba(255,255,255,.65)';
    optionBar.scales['x'].grid.borderColor = '#222b41';
    optionBar.scales['y'].grid.color = '#222b41';
    optionBar.scales['y'].ticks.color = 'rgba(255,255,255,.65)';
  } else {
    optionBar.scales['x'].grid.color = '#edeff6';
    optionBar.scales['x'].ticks.color = '#42484e';
    optionBar.scales['x'].grid.borderColor = '#edeff6';
    optionBar.scales['y'].grid.color = '#edeff6';
    optionBar.scales['y'].ticks.color = '#42484e';
  }

  const switchSkin = (skin) => {
    const textPrimary = document.getElementsByClassName('text-primary-dark');

    if (skin === 'dark') {
      const btnWhite = document.getElementsByClassName('btn-white');

      for (const btn of btnWhite) {
        btn.classList.add('btn-outline-primary');
        btn.classList.remove('btn-white');
      }

      for (const txt of textPrimary) {
        txt.classList.add('text-primary');
      }

    } else {
      const btnOutlinePrimary = document.getElementsByClassName('btn-outline-primary');

      for (const btn of btnOutlinePrimary) {
        btn.classList.remove('btn-outline-primary');
        btn.classList.add('btn-white');
      }

      for (const txt of textPrimary) {
        txt.classList.remove('text-primary');
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
        <div className="d-md-flex align-items-center justify-content-between mb-4">
          <div>
            <ol className="breadcrumb fs-sm mb-1">
              <li className="breadcrumb-item"><Link href="#">Dashboard</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Events Management</li>
            </ol>
            <h4 className="main-title mb-0">Welcome to Dashboard</h4>
          </div>
          <div className="d-flex align-items-center gap-2 mt-3 mt-md-0">
            <Button variant="white" className="btn-icon"><i className="ri-share-line fs-18 lh-1"></i></Button>
            <Button variant="white" className="btn-icon"><i className="ri-printer-line fs-18 lh-1"></i></Button>
            <Button variant="primary" className="btn-icon"><i className="ri-bar-chart-2-line fs-18 lh-1"></i></Button>
          </div>
        </div>

        <Row className="g-3">
          <Col xl="6">
            <Card className="card-one card-ticket-earnings">
              <Card.Body className="d-flex flex-column p-4">
                <h1 className="card-value mb-3 fs-40 ls--2"><span>$</span>14,869.95</h1>
                <label className="card-label fw-semibold text-dark mb-1">Ticket Earnings</label>
                <p className="w-75 fs-sm text-secondary mb-4">Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.</p>
                <p className="mb-5">
                  <Button as="a" variant="primary" className="fs-sm">View Statements</Button>
                </p>

                <div className="d-flex gap-4 fs-sm mt-auto text-primary-dark lh-1 opacity-75">
                  <span><strong className="fw-semibold ff-numerals">11,716</strong> Tickets Sold</span>
                  <span><strong className="fw-semibold ff-numerals">12,864</strong> Tickets Unsold</span>
                </div>
              </Card.Body>
              <ReactApexChart series={seriesOne} options={optionOne} type="area" height={390} className="apex-chart-two d-flex align-items-end" />
            </Card>
          </Col>
          <Col xl="6">
            <Row className="g-3">
              <Col xs="12">
                <Card className="card-one card-ticket-available">
                  <Card.Body className="p-4">
                    <div className="d-flex justify-content-end">
                      <div className="w-45">
                        <h1 className="card-value fs-32 mb-2 ls--1">24,580</h1>
                        <label className="card-label fw-semibold text-dark mb-1">Tickets Available</label>
                        <p className="text-secondary fs-sm mb-0">Cura bitur ullam corper ultri cies nisi nam eget dui etiam rhoncus.</p>
                      </div>
                    </div>
                  </Card.Body>
                  <ReactApexChart series={seriesTwo} options={optionTwo} type="bar" height={170} className="apex-chart" />
                </Card>
              </Col>
              <Col sm="6">
                <Card className="card-one card-ticket-sold">
                  <Card.Body className="p-4">
                    <div className="d-flex flex-column align-items-center">
                      <h1 className="card-value fs-32 mb-2 ls--1">11,716</h1>
                      <label className="card-label fw-semibold text-dark mb-1">Tickets Sold</label>
                      <p className="text-secondary text-center fs-sm mb-0">Ullam corper ultricies cura bitur nisi nam eget dui etia.</p>
                    </div>
                  </Card.Body>
                  <ReactApexChart series={seriesThree} options={optionThree} type="area" height={210} className="apex-chart" />
                </Card>
              </Col>
              <Col sm="6">
                <Card className="card-one card-ticket-sold">
                  <Card.Body className="p-4">
                    <div className="d-flex flex-column align-items-center">
                      <h1 className="card-value fs-32 mb-2 ls--1">12,864</h1>
                      <label className="card-label fw-semibold text-dark mb-1">Tickets Unsold</label>
                      <p className="text-secondary text-center fs-sm mb-0">Nam libero tempore, cum soluta nobis est eligendi.</p>
                    </div>
                  </Card.Body>
                  <ReactApexChart series={seriesThree} options={optionFour} type="area" height={210} className="apex-chart" />
                </Card>
              </Col>
            </Row>
          </Col>
          <Col xl="8">
            <Row className="g-3">
              <Col xs="6" sm>
                <Card className="card-one">
                  <Card.Body className="p-3">
                    <div className="d-block fs-40 lh-1 text-primary mb-1">
                      <i className="ri-calendar-todo-line"></i>
                    </div>
                    <h1 className="card-value mb-0 ls--1 fs-32">358</h1>
                    <label className="d-block mb-1 fw-medium text-dark">Scheduled Events</label>
                    <small>
                      <span className="d-inline-flex text-danger">0.7% <i className="ri-arrow-down-line"></i></span> than last week
                    </small>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="6" sm>
                <Card className="card-one">
                  <Card.Body className="p-3">
                    <div className="d-block fs-40 lh-1 text-ui-02 mb-1">
                      <i className="ri-calendar-check-line"></i>
                    </div>
                    <h1 className="card-value mb-0 fs-32 ls--1">260</h1>
                    <label className="d-block mb-1 fw-medium text-dark">Attended Events</label>
                    <small><span className="d-inline-flex text-success">1.2% <i className="ri-arrow-up-line"></i></span> than last week</small>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm>
                <Card className="card-one">
                  <Card.Body className="p-3">
                    <div className="d-block fs-40 lh-1 text-secondary mb-1">
                      <i className="ri-calendar-2-line"></i>
                    </div>
                    <h1 className="card-value mb-0 fs-32 ls--1">38</h1>
                    <label className="d-block mb-1 fw-medium text-dark">Cancelled Events</label>
                    <small><span className="d-inline-flex text-success">0.6% <i className="ri-arrow-up-line"></i></span> than last week</small>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="12">
                <Card className="card-one">
                  <Card.Header>
                    <Card.Title as="h6">Performance Reached</Card.Title>
                    <Nav className="nav-icon nav-icon-sm ms-auto">
                      <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                      <Nav.Link href=""><i className="ri-more-2-fill"></i></Nav.Link>
                    </Nav>
                  </Card.Header>
                  <Card.Body className="px-3 pt-2">
                    <ReactApexChart series={seriesFive} options={optionFive} type="area" height={200} className="apex-chart-three" />

                    <Table className="table-agent mb-0" responsive>
                      <thead>
                        <tr>
                          <th>PerID</th>
                          <th>Name of Performer</th>
                          <th>Status</th>
                          <th>Quota</th>
                          <th>Reached</th>
                          <th>Rating</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            "id": "00035",
                            "avatar": {
                              "initial": "A"
                            },
                            "name": "Allan R. Palban",
                            "email": "allan@themepixels.me",
                            "status": {
                              "variant": "primary",
                              "label": "Active"
                            },
                            "quota": "120",
                            "reached": "64",
                            "star": ["fill", "fill", "fill", "half-fill", "line"]
                          }, {
                            "id": "00028",
                            "avatar": {
                              "initial": "C"
                            },
                            "name": "Charlene S. Plateros",
                            "email": "charlene@themepixels.me",
                            "status": {
                              "variant": "ui-02",
                              "label": "Away"
                            },
                            "quota": "100",
                            "reached": "79",
                            "star": ["fill", "fill", "fill", "fill", "line"]
                          }, {
                            "id": "00025",
                            "avatar": {
                              "initial": "A",
                              "bg": "bg-gray-700"
                            },
                            "name": "Adrian M. Moniño",
                            "email": "adrian@themepixels.me",
                            "status": {
                              "variant": "primary",
                              "label": "Active"
                            },
                            "quota": "130",
                            "reached": "108",
                            "star": ["fill", "fill", "fill", "line", "line"]
                          }, {
                            "id": "00024",
                            "avatar": {
                              "initial": "M"
                            },
                            "name": "Marianne B. Audrey",
                            "email": "marianne@themepixels.me",
                            "status": {
                              "variant": "primary",
                              "label": "Active"
                            },
                            "quota": "110",
                            "reached": "45",
                            "star": ["fill", "fill", "fill", "fill", "line"]
                          }, {
                            "id": "00023",
                            "avatar": {
                              "initial": "C",
                              "bg": "bg-gray-700"
                            },
                            "name": "Carlyn Y. Salomon",
                            "email": "carlyn@themepixels.me",
                            "status": {
                              "variant": "secondary",
                              "label": "Inactive"
                            },
                            "quota": "120",
                            "reached": "32",
                            "star": ["fill", "fill", "fill", "half-fill", "line"]
                          }
                        ].map((item, index) => (
                          <tr key={index}>
                            <td><span className="ff-numerals">{item.id}</span></td>
                            <td>
                              <div className="d-flex align-items-center gap-2">
                                <div className="avatar"><span className={"avatar-initial" + (item.avatar.bg ? " " + item.avatar.bg : "")}>{item.avatar.initial}</span></div>
                                <div>
                                  <h6 className="mb-0">{item.name}</h6>
                                  <span className="fs-xs text-secondary">{item.email}</span>
                                </div>
                              </div>
                            </td>
                            <td><span className={"badge bg-" + item.status.variant}>{item.status.label}</span></td>
                            <td><span className="ff-numerals">{item.quota}</span></td>
                            <td><span className="ff-numerals">{item.reached}</span></td>
                            <td>
                              <div className="d-flex gap-1 text-primary fs-16">
                                {item.star.map((star, ind) => (
                                  <i key={ind} className={"ri-star-" + star}></i>
                                ))}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col xl="4">
            <Row className="g-3">
              <Col md="6" xl="12">
                <Card className="card-one">
                  <Card.Header>
                    <Card.Title as="h6">Performance Rating</Card.Title>
                    <Nav className="nav-icon nav-icon-sm ms-auto">
                      <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                      <Nav.Link href=""><i className="ri-more-2-fill"></i></Nav.Link>
                    </Nav>
                  </Card.Header>
                  <Card.Body>
                    <div className="d-flex align-items-baseline gap-2 mb-0">
                      <h1 className="card-value fs-32 mb-0">4.8</h1>
                      <div className="d-flex gap-1 text-primary fs-20">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-half-fill"></i>
                      </div>
                    </div>
                    <p className="fs-sm">Measures the quality or your event's performance.</p>

                    <Table className="table table-ratings mb-0">
                      <tbody>
                        {[
                          {
                            "rate": "5.0",
                            "star": ["fill", "fill", "fill", "fill", "fill"],
                            "count": "4,230",
                            "percent": "58%"
                          }, {
                            "rate": "4.0",
                            "star": ["fill", "fill", "fill", "fill", "line"],
                            "count": "1,416",
                            "percent": "24%"
                          }, {
                            "rate": "3.0",
                            "star": ["fill", "fill", "fill", "line", "line"],
                            "count": "980",
                            "percent": "16%"
                          }, {
                            "rate": "2.0",
                            "star": ["fill", "fill", "line", "line", "line"],
                            "count": "798",
                            "percent": "12%"
                          }, {
                            "rate": "1.0",
                            "star": ["fill", "line", "line", "line", "line"],
                            "count": "401",
                            "percent": "8%"
                          }
                        ].map((item, index) => (
                          <tr key={index}>
                            <td><strong>{item.rate}</strong></td>
                            <td>
                              <div className="d-flex gap-1 text-primary fs-16">
                                {item.star.map((star, i) => (
                                  <i key={i} className={"ri-star-" + star}></i>
                                ))}
                              </div>
                            </td>
                            <td>{item.count}</td>
                            <td>{item.percent}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </Col>
              <Col md="6" xl="12">
                <Card className="card-one">
                  <Card.Header>
                    <Card.Title as="h6">Events Categories</Card.Title>
                    <Nav className="nav-icon nav-icon-sm ms-auto">
                      <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                      <Nav.Link href=""><i className="ri-more-2-fill"></i></Nav.Link>
                    </Nav>
                  </Card.Header>
                  <Card.Body>
                    <div className="chartjs-three mt-1">
                      <Bar data={dataBar} options={optionBar} />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md="6" xl="4">
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Events By Category</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                  <Nav.Link href=""><i className="ri-more-2-fill"></i></Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body className="p-3">
                <div className="chart-donut-two mb-4">
                  <Doughnut data={dataPie} options={optionPie} />
                </div>

                <Row className="g-4 mb-2">
                  {[
                    {
                      "name": "Festivals",
                      "value": "6,000",
                      "percent": "40%",
                      "progress": 60
                    }, {
                      "name": "Sports",
                      "value": "3,750",
                      "percent": "25%",
                      "progress": 75,
                      "variant": "ui-02"
                    }, {
                      "name": "Concerts",
                      "value": "3,000",
                      "percent": "20%",
                      "progress": 80,
                      "variant": "gray-700"
                    }, {
                      "name": "Entertainment",
                      "value": "2,250",
                      "percent": "15%",
                      "progress": 85,
                      "variant": "gray-500"
                    }
                  ].map((item, index) => (
                    <Col xs="6" key={index}>
                      <label className="fs-sm fw-medium mb-1">{item.name}</label>
                      <h3 className="card-value mb-2">{item.value} <small>{item.percent}</small></h3>
                      <ProgressBar now={item.progress} className="ht-5 mb-0" variant={item.variant} />
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" xl="4">
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Overall Reviews</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                  <Nav.Link href=""><i className="ri-more-2-fill"></i></Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body className="p-3">
                <div className="d-flex align-items-baseline gap-2 mb-0">
                  <h1 className="card-value fs-32 mb-0">8.3</h1>
                  <div className="d-flex gap-1 text-primary fs-20">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-half-fill"></i>
                  </div>
                </div>

                <p className="fs-sm mb-3">Measures the overall reviews and ratings of your event's performance.</p>

                <ul className="events-reviews">
                  {[
                    {
                      "avatar": {
                        "bg": "primary",
                        "initial": "D"
                      },
                      "name": "Dyanne Rose Aceron",
                      "star": ["fill", "fill", "fill", "fill", "half-fill"],
                      "date": "2 hours ago",
                      "text": "Lorem ipsum dolor sit amet, consec tetur adip iscing elit, sed do eius mod"
                    }, {
                      "avatar": {
                        "bg": "secondary",
                        "initial": "R"
                      },
                      "name": "Raffy Godinez",
                      "star": ["fill", "fill", "fill", "half-fill", "line"],
                      "date": "5 hours ago",
                      "text": "Ut enim ad minim veniam, quis nostrud exerc nisi ut aliquip itation ullam co"
                    }, {
                      "avatar": {
                        "bg": "secondary",
                        "initial": "R"
                      },
                      "name": "Reynante Labares",
                      "star": ["fill", "fill", "fill", "half-fill", "line"],
                      "date": "8 hours ago",
                      "text": "Quis nostrud exerc nisi ut aliquip itation ut enim ad minim veniam ullam co"
                    }
                  ].map((item, index) => (
                    <li key={index}>
                      <div className="d-flex align-items-center mb-2">
                        <div className="avatar">
                          <span className={"avatar-initial bg-" + item.avatar.bg}>{item.avatar.initial}</span>
                        </div>
                        <div className="review-body">
                          <h6 className="text-dark">{item.name}</h6>
                          <div className="d-flex align-items-center gap-1 text-primary">
                            {item.star.map((star, i) => (
                              <i key={i} className={"ri-star-" + star}></i>
                            ))}
                            <small>{item.date}</small>
                          </div>
                        </div>
                      </div>
                      <p>{item.text}...<Link to="">Read more</Link></p>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Events This Month</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                  <Nav.Link href=""><i className="ri-more-2-fill"></i></Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body className="p-3">
                <ul className="events-list">
                  {[
                    {
                      "active": true,
                      "date": {
                        "day": "Sat",
                        "num": "03"
                      },
                      "events": [
                        {
                          "time": "08:00am - 10:30am",
                          "title": "Web Design Workshop",
                          "text": "Duis aute irure dolor in repre hen derit in volup tate velit esse cillum."
                        }
                      ]
                    }, {
                      "date": {
                        "day": "Wed",
                        "num": "07"
                      },
                      "events": [
                        {
                          "time": "08:00am - 11:30am",
                          "title": "5th Religious Conference",
                          "text": "Excep teur sint occae cat cupi datat non proident sunt in culpa qui."
                        }, {
                          "time": "1:30pm - 5:30pm",
                          "title": "Church Workshop Events",
                          "text": "Datat non proident sunt in culpa qui."
                        }
                      ]
                    }, {
                      "date": {
                        "day": "Thu",
                        "num": "08"
                      },
                      "events": [
                        {
                          "time": "08:30am - 03:30pm",
                          "title": "Front-End Devs Meetup",
                          "text": "Sed ut perspi ciatis unde omnis iste natus error sit volup tatem."
                        }
                      ]
                    }, {
                      "date": {
                        "day": "Mon",
                        "num": "23"
                      },
                      "events": [
                        {
                          "time": "09:00am - 05:30pm",
                          "title": "Golden Autumn Festival"
                        }
                      ]
                    }
                  ].map((item, index) => (
                    <li key={index} className={item.active ? "active" : ""}>
                      <div className="event-date">
                        <small>{item.date.day}</small>
                        <h5>{item.date.num}</h5>
                      </div>
                      <div className="events-body">
                        {item.events.map((event, ind) => (
                          <div key={ind} className="ev-item">
                            <small>{event.time}</small>
                            <h6>{event.title}</h6>
                            {event.text && <p>{event.text}</p>}
                          </div>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Footer />
      </div>
    </React.Fragment>
  );
}