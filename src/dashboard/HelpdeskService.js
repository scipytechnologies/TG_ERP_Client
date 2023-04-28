import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row, Nav, Table, ProgressBar, Form } from "react-bootstrap";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";
import { Bar } from 'react-chartjs-2';
import ReactApexChart from "react-apexcharts";
import { dp3 } from "../data/DashboardData";

import img6 from "../assets/img/img6.jpg";
import img7 from "../assets/img/img7.jpg";
import img8 from "../assets/img/img8.jpg";
import img9 from "../assets/img/img9.jpg";
import img10 from "../assets/img/img10.jpg";
import img11 from "../assets/img/img11.jpg";
import img12 from "../assets/img/img12.jpg";
import img15 from "../assets/img/img15.jpg";
import img16 from "../assets/img/img16.jpg";
import img17 from "../assets/img/img17.jpg";
import img18 from "../assets/img/img18.jpg";

export default function HelpdeskService() {

  //Current Ticket Status
  const dataBar1 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
      backgroundColor: '#506fd9',
      barPercentage: 0.5
    }, {
      data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
      backgroundColor: '#85b6ff',
      barPercentage: 0.5
    }, {
      data: [8, 30, 40, 35, 40, 45, 35, 30, 25, 10, 20, 15],
      backgroundColor: '#e2e5ec',
      barPercentage: 0.5
    }]
  };

  const optionBar1 = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 80,
        ticks: {
          color: '#a1aab3',
          font: {
            size: 10
          }
        },
        grid: {
          borderColor: '#e2e5ec',
          borderWidth: 1.5,
          color: 'rgba(65,80,95,.08)'
        }
      },
      x: {
        ticks: {
          color: '#313c47'
        },
        grid: {
          color: 'rgba(65,80,95,.08)'
        }
      }
    }
  };

  const dataBar2 = {
    labels: ['Modification', 'Code Request', 'Feature Request', 'Bug Fix', 'Integration', 'Production'],
    datasets: [{
      data: [20, 60, 50, 45, 50, 75],
      backgroundColor: ['#506fd9', '#85b6ff', '#33d685', '#ffc107', '#0dcaf0', '#ea4c89'],
      barPercentage: 0.5
    }, {
      data: [10, 40, 30, 40, 60, 55],
      backgroundColor: '#e2e5ec',
      barPercentage: 0.5
    }]
  };

  const optionBar2 = {
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
        max: 100,
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
          color: '#465463',
          font: {
            size: 13
          }
        }
      }
    }
  };

  // Complaints Received
  const seriesOne = [{
    data: dp3
  }];

  const optionOne = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      stacked: true,
      sparkline: { enabled: true }
    },
    colors: ['#506fd9'],
    stroke: {
      curve: 'straight',
      width: 2
    },
    xaxis: { max: 40 },
    yaxis: {
      min: 0,
      max: 80
    },
    fill: {
      type: 'solid',
      opacity: 0.2
    },
    tooltip: { enabled: false }
  }

  // Time to Resolved Complain
  const optionDonut1 = {
    chart: { parentHeightOffset: 0 },
    colors: ['#506fd9', '#e5e9f2'],
    dataLabels: { enabled: false },
    legend: { show: false }
  };

  const optionDonut2 = {
    chart: { parentHeightOffset: 0 },
    colors: ['#4c5366', '#e5e9f2'],
    dataLabels: { enabled: false },
    legend: { show: false }
  }

  // Agent Performance Score
  const optionTwo = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      stacked: true
    },
    colors: ['#4f6fd9'],
    grid: {
      borderColor: 'rgba(72,94,144, 0.08)',
      padding: {
        top: -20,
        left: 0,
        right: -8
      },
      yaxis: {
        lines: { show: false }
      }
    },
    dataLabels: { enabled: false },
    stroke: {
      curve: 'straight',
      width: 1.5
    },
    xaxis: {
      overwriteCategories: ['', 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', ''],
      tickAmount: 13,
      axisBorder: { show: false },
      labels: {
        style: {
          colors: '#6e7985',
          fontSize: '10px'
        }
      },
    },
    yaxis: {
      min: 0,
      max: 50,
      show: false
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.5,
        opacityTo: 0,
      }
    },
    legend: { show: false },
    tooltip: { enabled: false }
  }

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
        <div className="d-md-flex align-items-center justify-content-between mb-4">
          <div>
            <ol className="breadcrumb fs-sm mb-1">
              <li className="breadcrumb-item"><Link href="#">Dashboard</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Helpdesk Service</li>
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
          {[
            {
              "bg": "primary",
              "icon": "ri-bell-line",
              "value": "387",
              "percent": "+3.82%",
              "success": true,
              "label": "Support Requests",
              "avatar": [img10, img11, img9, img8],
              "agents": 8
            }, {
              "bg": "ui-02",
              "icon": "ri-blaze-fill",
              "value": "296",
              "percent": "-0.08%",
              "success": false,
              "label": "Complaints Received",
              "avatar": [img15, img16, img17, img18],
              "agents": 5
            }, {
              "bg": "ui-03",
              "icon": "ri-star-smile-line",
              "value": "198",
              "percent": "-0.03%",
              "success": false,
              "label": "Complaints Resolved",
              "avatar": [img7, img8, img9, img10],
              "agents": 9
            }
          ].map((item, index) => (
            <Col sm="4" key={index}>
              <Card className="card-one">
                <Card.Body className="p-3">
                  <div className="d-flex d-sm-block d-xl-flex align-items-center">
                    <div className={"helpdesk-icon text-white bg-" + item.bg}><i className={item.icon}></i></div>
                    <div className="ms-3 ms-sm-0 ms-xl-3 mt-sm-3 mt-xl-0">
                      <h2 className="card-value d-flex align-items-baseline mb-0">{item.value} <small className={"text-" + (item.success ? "success" : "")}>{item.percent}</small></h2>
                      <label className="card-label fs-sm fw-medium mb-1">{item.label}</label>
                      <div className="mutual-badge">
                        <ul>
                          {item.avatar.map((avatar, ind) => (
                            <li key={ind}><Avatar img={avatar} /></li>
                          ))}
                        </ul>
                        <label>{item.agents} support agents</label>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
          <Col md="7" xl="8">
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Current Ticket Status</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                  <Nav.Link href=""><i className="ri-more-2-fill"></i></Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body>
                <div className="chartjs-one">
                  <Bar data={dataBar1} options={optionBar1} />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="5" xl="4">
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Complaints Received</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                  <Nav.Link href=""><i className="ri-more-2-fill"></i></Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body className="p-0">
                <div className="position-absolute p-4">
                  <h1 className="card-value d-flex align-items-baseline mb-0">268</h1>
                  <p className="fs-xs mb-2"><span className="text-success fs-numerals">0.3%</span> higher than last month</p>
                  <p className="fs-sm">The total number of complaints that have been received.</p>
                </div>
                <ReactApexChart series={seriesOne} options={optionOne} type="area" height={280} />
              </Card.Body>
            </Card>
          </Col>
          <Col md="6">
            <Card className="card-one">
              <Card.Body className="p-3">
                <Row className="g-3 row-cols-auto align-items-center">
                  <Col>
                    <div className="apex-donut-one">
                      <ReactApexChart series={[86, 14]} options={optionDonut1} width={160} height={160} type="donut" />
                      <div>
                        <h4 className="ff-numerals text-dark mb-0">86%</h4>
                        <span className="fs-xs text-secondary">Reached</span>
                      </div>
                    </div>
                  </Col>
                  <Col xs="6" xl="7">
                    <h2 className="card-value mb-3">7m:32s</h2>
                    <h6 className="card-label text-dark fw-semibold mb-1">Time to Resolved Complaint</h6>
                    <p className="fs-sm text-secondary mb-0">The average time taken to resolve complaints.</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6">
            <Card className="card-one">
              <Card.Body className="p-3">
                <Row className="g-3 row-cols-auto align-items-center">
                  <Col>
                    <div className="apex-donut-one">
                      <ReactApexChart series={[68, 32]} options={optionDonut2} width={160} height={160} type="donut" />
                      <div>
                        <h4 className="ff-numerals text-dark mb-0">68%</h4>
                        <span className="fs-xs text-secondary">Reached</span>
                      </div>
                    </div>
                  </Col>
                  <Col xs="6" xl="7">
                    <h2 className="card-value mb-3">0m:20s</h2>
                    <h6 className="card-label text-dark fw-semibold mb-1">Average Speed of Answer</h6>
                    <p className="fs-sm text-secondary mb-0">The average time taken to resolve complaints.</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col xl="5">
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Tickets By Request Type</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                  <Nav.Link href=""><i className="ri-more-2-fill"></i></Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body>
                <div className="chartjs-two">
                  <Bar data={dataBar2} options={optionBar2} height={278} />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="6" xl>
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Overall Rating</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                  <Nav.Link href=""><i className="ri-more-2-fill"></i></Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body>
                <div className="d-flex align-items-baseline gap-2 mb-0">
                  <h1 className="card-value mb-0">4.8</h1>
                  <div className="d-flex gap-1 text-warning fs-20">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-half-fill"></i>
                  </div>
                </div>
                <p className="fs-sm">Measures the quality or your support team's efforts.</p>

                <Table className="table-ratings mb-0">
                  <tbody>
                    {[
                      {
                        "rating": "5.0",
                        "star": ["fill", "fill", "fill", "fill", "fill"],
                        "count": "4,230",
                        "percent": "58%"
                      }, {
                        "rating": "4.0",
                        "star": ["fill", "fill", "fill", "fill", "line"],
                        "count": "1,416",
                        "percent": "26%"
                      }, {
                        "rating": "3.0",
                        "star": ["fill", "fill", "fill", "line", "line"],
                        "count": "980",
                        "percent": "16%"
                      }, {
                        "rating": "2.0",
                        "star": ["fill", "fill", "line", "line", "line"],
                        "count": "798",
                        "percent": "12%"
                      }, {
                        "rating": "1.0",
                        "star": ["fill", "line", "line", "line", "line"],
                        "count": "401",
                        "percent": "8%"
                      }
                    ].map((item, index) => (
                      <tr key={index}>
                        <td><strong>{item.rating}</strong></td>
                        <td>
                          <div className="d-flex gap-1 text-warning fs-16">
                            {item.star.map((star, ind) => (
                              <i key={ind} className={"ri-star-" + star}></i>
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
          <Col sm="6" xl>
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Performance Score</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                  <Nav.Link href=""><i className="ri-more-2-fill"></i></Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body>
                <div className="d-flex align-items-baseline gap-2 mb-0">
                  <h1 className="card-value mb-0">9.6</h1>
                  <ProgressBar className="flex-fill ht-5">
                    <ProgressBar now={20} />
                    <ProgressBar now={15} variant="success" />
                    <ProgressBar now={15} variant="warning" />
                    <ProgressBar now={20} variant="info" />
                    <ProgressBar now={10} variant="danger" />
                  </ProgressBar>
                </div>
                <p className="fs-sm">The percentage value assigned to the operating metric.</p>
                <Table className="table-ratings mb-0">
                  <tbody>
                    {[
                      {
                        "dot": "primary",
                        "label": "Excellent",
                        "count": "3,007",
                        "percent": "50%"
                      }, {
                        "dot": "success",
                        "label": "Very Good",
                        "count": "1,674",
                        "percent": "25%"
                      }, {
                        "dot": "warning",
                        "label": "Good",
                        "count": "125",
                        "percent": "6%"
                      }, {
                        "dot": "info",
                        "label": "Fair",
                        "count": "98",
                        "percent": "5%"
                      }, {
                        "dot": "danger",
                        "label": "Poor",
                        "count": "512",
                        "percent": "10%"
                      }
                    ].map((item, index) => (
                      <tr key={index}>
                        <td><span className={"badge-dot bg-" + item.dot}></span></td>
                        <td><strong>{item.label}</strong></td>
                        <td>{item.count}</td>
                        <td>{item.percent}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="12">
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Agent Performance Score</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                  <Nav.Link href=""><i className="ri-more-2-fill"></i></Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body>
                <ReactApexChart series={seriesOne} options={optionTwo} type="area" height={200} className="apex-chart-four mb-5" />

                <Table className="table-agent mb-0" responsive>
                  <thead>
                    <tr>
                      <th>
                        <Form.Check type="checkbox" />
                      </th>
                      <th>Agent ID</th>
                      <th>Agent Name</th>
                      <th>Status</th>
                      <th>Quota</th>
                      <th>Reached</th>
                      <th>Progress</th>
                      <th>Rating</th>
                      <th>&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        "id": "00035",
                        "avatar": img6,
                        "name": "Allan R. Palban",
                        "email": "allan@themepixels.me",
                        "status": {
                          "badge": "success",
                          "label": "Active"
                        },
                        "quota": 120,
                        "reached": 64,
                        "progress": 50,
                        "star": ["fill","fill","fill","half-fill","line"]
                      }, {
                        "id": "00028",
                        "avatar": img8,
                        "name": "Charlene S. Plateros",
                        "email": "charlene@themepixels.me",
                        "status": {
                          "badge": "info",
                          "label": "Away"
                        },
                        "quota": 100,
                        "reached": 79,
                        "progress": 70,
                        "star": ["fill","fill","fill","fill","line"]
                      }, {
                        "id": "00025",
                        "avatar": img10,
                        "name": "Adrian M. Moniño",
                        "email": "adrian@themepixels.me",
                        "status": {
                          "badge": "success",
                          "label": "Active"
                        },
                        "quota": 130,
                        "reached": 108,
                        "progress": 75,
                        "star": ["fill","fill","fill","line","line"]
                      }, {
                        "id": "00024",
                        "avatar": img11,
                        "name": "Marianne B. Audrey",
                        "email": "marianne@themepixels.me",
                        "status": {
                          "badge": "warning",
                          "label": "Pending"
                        },
                        "quota": 110,
                        "reached": 45,
                        "progress": 50,
                        "star": ["fill","fill","fill","fill","line"]
                      }, {
                        "id": "00023",
                        "avatar": img12,
                        "name": "Carlyn Y. Salomon",
                        "email": "carlyn@themepixels.me",
                        "status": {
                          "badge": "secondary",
                          "label": "Inactive"
                        },
                        "quota": 125,
                        "reached": 32,
                        "progress": 25,
                        "star": ["fill","fill","fill","half-fill","line"]
                      }
                    ].map((item, index) => (
                      <tr key={index}>
                        <td>
                          <Form.Check type="checkbox" />
                        </td>
                        <td><span className="ff-numerals">{item.id}</span></td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <Avatar img={item.avatar} />
                            <div>
                              <h6 className="mb-0">{item.name}</h6>
                              <span className="fs-xs text-secondary">{item.email}</span>
                            </div>
                          </div>
                        </td>
                        <td><span className={"badge bg-" + item.status.badge}>{item.status.label}</span></td>
                        <td><span className="ff-numerals">{item.quota}</span></td>
                        <td><span className="ff-numerals">{item.reached}</span></td>
                        <td>
                          <ProgressBar now={item.progress} className="ht-5 mb-0" />
                        </td>
                        <td>
                          <div className="d-flex gap-1 text-warning">
                            {item.star.map((star, ind) => (
                              <i key={ind} className={"ri-star-" + star}></i>
                            ))}
                          </div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-end">
                            <Link to="" className="link-more"><i className="ri-more-2-fill"></i></Link>
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

        <Footer />
      </div>
    </React.Fragment>
  )
}