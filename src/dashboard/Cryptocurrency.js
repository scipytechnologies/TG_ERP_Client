import React, { useEffect, useState } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";
import { Button, Card, Row, Col, Nav, ListGroup, Table } from "react-bootstrap";
import ReactApexChart from "react-apexcharts";
import { dp1, dp2, dp3 } from "../data/DashboardData";
import { Doughnut } from 'react-chartjs-2';

import crypto1 from "../assets/img/crypto1.jpg";
import crypto2 from "../assets/img/crypto2.jpg";
import crypto3 from "../assets/img/crypto3.jpg";

import "cryptofont/css/cryptofont.css";

export default function Cryptocurrency() {

  var chart = {
    parentHeightOffset: 0,
    toolbar: { show: false },
    stacked: true
  };

  var grid = {
    borderColor: 'rgba(72,94,144, 0.07)',
    padding: {
      top: -20,
      left: -20,
      right: -20,
      bottom: 0
    },
    yaxis: {
      lines: { show: false }
    }
  };

  var stroke = {
    curve: 'straight',
    width: 1.5
  };

  var fill = {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0,
    }
  };

  var yaxis = {
    min: 0,
    max: 80,
    show: false
  }

  function setOption(color, min, max) {
    return {
      chart: chart,
      colors: [color],
      grid: grid,
      stroke: stroke,
      xaxis: {
        type: 'numeric',
        tickAmount: 6,
        min: min,
        max: max,
        decimalsInFloat: 0,
        axisBorder: { show: false },
        labels: {
          style: {
            colors: '#6e7985',
            fontSize: '9px'
          }
        },
      },
      yaxis: yaxis,
      fill: fill,
      dataLabels: { enabled: false },
      legend: { show: false },
      tooltip: { enabled: false }
    };
  };

  const seriesOne = [{
    name: 'series1',
    data: dp3
  }, {
    name: 'series2',
    data: dp3
  }, {
    name: 'series3',
    data: dp3
  }];

  const optionOne = {
    chart: {
      parentHeightOffset: 0,
      stacked: true,
      toolbar: { show: false }
    },
    colors: ['#0dcaf0', '#85b6fe', '#506fd9'],
    grid: {
      borderColor: 'rgba(72, 94, 144, .1)',
      padding: {
        top: -20
      }
    },
    dataLabels: { enabled: false },
    stroke: {
      curve: 'straight',
      width: 1.5
    },
    xaxis: {
      type: 'numeric',
      tickAmount: 6,
      axisBorder: { show: false },
      labels: {
        style: {
          colors: '#6e7985',
          fontSize: '11px'
        }
      }
    },
    yaxis: {
      min: 0,
      max: 140,
      tickAmount: 6,
      labels: {
        style: {
          colors: '#6e7985',
          fontSize: '11px'
        }
      }
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

  // Volume By Currency
  var dataPie = {
    labels: ['USD', 'EUR', 'CNY', 'GBP', 'JPY', 'KRW', 'SGD'],
    datasets: [{
      data: [25, 15, 10, 12, 9, 13, 16],
      backgroundColor: ['#506fd9', '#85b6ff', '#33d685', '#0dcaf0', '#1c96e9', '#6e7985', '#ccd2da']
    }]
  };

  var optionPie = {
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

  // Portfolio
  const seriesTwo = [{
    name: 'series1',
    data: dp2
  }, {
    name: 'series2',
    data: dp1
  }];

  const optionTwo = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      sparkline: { enabled: true }
    },
    colors: ['#85b6ff', '#506fd9'],
    grid: {
      borderColor: 'rgba(72, 94, 144, .1)',
      padding: {
        top: -20,
        left: 0
      },
      yaxis: { lines: { show: false } }
    },
    dataLabels: { enabled: false },
    stroke: {
      curve: 'straight',
      width: 1.5
    },
    xaxis: {
      type: 'numeric',
      min: 5,
      max: 90,
      tickAmount: 6,
      axisBorder: { show: false },
      labels: {
        style: {
          colors: '#6e7985',
          fontSize: '11px'
        }
      }
    },
    yaxis: { max: 180 },
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
              <li className="breadcrumb-item"><Link to="#">Dashboard</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Cryptocurrency</li>
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
          <Col sm="6" xl="3">
            <Card className="card-one">
              <Card.Body className="overflow-hidden px-0">
                <div className="crypto-item">
                  <div className="avatar bg-orange"><i className="cf cf-btc"></i></div>
                  <div className="crypto-body">
                    <label className="card-label">Bitcoin <span>(BTC)</span></label>
                    <h6 className="card-value">$3,972.87</h6>
                  </div>
                </div>
                <ReactApexChart
                  series={[{
                    data: dp3
                  }]}
                  options={setOption('#fd7e14', 5, 55)}
                  type="area"
                  height={100}
                  className="apex-chart-ten"
                />
              </Card.Body>
              <Card.Footer className="card-footer-crypto pt-0">
                <div><strong>12</strong> USD Markets</div>
                <div><strong>80</strong> BTC Markets</div>
              </Card.Footer>
            </Card>
          </Col>
          <Col sm="6" xl="3">
            <Card className="card-one">
              <Card.Body className="overflow-hidden px-0">
                <div className="crypto-item">
                  <div className="avatar bg-twitter"><i className="cf cf-etc"></i></div>
                  <div className="crypto-body">
                    <label className="card-label">Ethereum <span>(ETC)</span></label>
                    <h6 className="card-value">$136.99</h6>
                  </div>
                </div>
                <ReactApexChart
                  series={[{
                    data: dp3
                  }]}
                  options={setOption('#1c96e9', 45, 95)}
                  type="area"
                  height={100}
                  className="apex-chart-ten"
                />
              </Card.Body>
              <Card.Footer className="card-footer-crypto pt-0">
                <div><strong>10</strong> USD Markets</div>
                <div><strong>65</strong> ETH Markets</div>
              </Card.Footer>
            </Card>
          </Col>
          <Col sm="6" xl="3">
            <Card className="card-one">
              <Card.Body className="overflow-hidden px-0">
                <div className="crypto-item">
                  <div className="avatar bg-success"><i className="cf cf-btc"></i></div>
                  <div className="crypto-body">
                    <label className="card-label">Bitcoin Cash <span>(BCH)</span></label>
                    <h6 className="card-value">$160.43</h6>
                  </div>
                </div>
                <ReactApexChart
                  series={[{
                    data: dp3
                  }]}
                  options={setOption('#0cb785', 15, 75)}
                  type="area"
                  height={100}
                  className="apex-chart-ten"
                />
              </Card.Body>
              <Card.Footer className="card-footer-crypto pt-0">
                <div><strong>12</strong> USD Markets</div>
                <div><strong>74</strong> BCH Markets</div>
              </Card.Footer>
            </Card>
          </Col>
          <Col sm="6" xl="3">
            <Card className="card-one">
              <Card.Body className="overflow-hidden px-0">
                <div className="crypto-item">
                  <div className="avatar bg-primary"><i className="cf cf-dash"></i></div>
                  <div className="crypto-body">
                    <label className="card-label">Dash <span>(DASH)</span></label>
                    <h6 className="card-value">$90.58</h6>
                  </div>
                </div>
                <ReactApexChart
                  series={[{
                    data: dp3
                  }]}
                  options={setOption('#506fd9', 35, 85)}
                  type="area"
                  height={100}
                  className="apex-chart-ten"
                />
              </Card.Body>
              <Card.Footer className="card-footer-crypto pt-0">
                <div><strong>16</strong> USD Markets</div>
                <div><strong>31</strong> DASH Markets</div>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl="8">
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Cryptocurrency Watchlist</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                  <Nav.Link href=""><i className="ri-more-2-fill"></i></Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body>
                <ReactApexChart series={seriesOne} options={optionOne} type="area" height={290} className="apex-chart-nine mb-4" />

                <Row className="row-cols-auto gy-3 gx-5">
                  {[
                    {
                      "label": "Market Cap",
                      "value": "$14.5B"
                    }, {
                      "label": "Volume (24h)",
                      "value": "$6.8B"
                    }, {
                      "label": "Change",
                      "value": "$7.98"
                    }, {
                      "label": "Circulating Supply",
                      "value": "$18.59M"
                    }, {
                      "label": "All Time High",
                      "value": "$16.4K"
                    }
                  ].map((item, index) => (
                    <Col key={index}>
                      <label className="fs-xs mb-1 text-secondary">{item.label}</label>
                      <h4 className="ff-numerals text-dark mb-0">{item.value}</h4>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="6" xl="4">
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Bitcoin Wallet</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                  <Nav.Link href=""><i className="ri-more-2-fill"></i></Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body>
                <Card.Title as="label" className="fw-medium fs-sm mb-1">Available Balance</Card.Title>
                <h3 className="card-value mb-1">26.00453100 <span className="text-secondary">BTC</span></h3>
                <div className="d-flex gap-2 ff-numerals fs-sm">
                  <div><span className="text-primary">USD</span> $103,342.50</div>
                  <div><span className="text-success">EUR</span> $91,105.00</div>
                </div>

                <div className="d-flex gap-2 mt-4 mb-4">
                  <Button variant="white" as="a" href="" className="flex-fill">Send</Button>
                  <Button variant="primary" as="a" href="" className="flex-fill">Receive</Button>
                </div>

                <div className="d-flex align-items-center justify-content-between fs-xs mb-1">
                  <label className="mg-b-0 fw-medium text-secondary">Recent Transactions</label>
                  <Link href="">Show All</Link>
                </div>

                <ListGroup variant="flush">
                  {[
                    {
                      "label": "Received Bitcoin",
                      "value": "+0.00003998 BTC"
                    }, {
                      "label": "Sent Bitcoin",
                      "value": "-0.01570525 BTC"
                    }, {
                      "label": "Ethereum Conversion",
                      "value": "+2.0157 ETH"
                    }, {
                      "label": "Bought Bitcoin",
                      "value": "+0.000033420 BTC"
                    }, {
                      "label": "Sent Bitcoin",
                      "value": "-0.01570525 BTC"
                    }
                  ].map((item, index) => (
                    <ListGroup.Item key={index} className="px-0 d-flex justify-content-between">
                      <span className="fw-medium">{item.label}</span>
                      <span className="ff-numerals">{item.value}</span>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="6" xl="4">
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Volume By Currency</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                  <Nav.Link href=""><i className="ri-more-2-fill"></i></Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body>
                <div className="chart-donut-one mb-3">
                  <Doughnut data={dataPie} options={optionPie} />
                </div>

                <Table className="table-five">
                  <tbody>
                    {[
                      {
                        "dot": "primary",
                        "currency": "USD",
                        "amount": "4,024.52",
                        "percent": "0.96%",
                        "success": true
                      }, {
                        "dot": "ui-02",
                        "currency": "EUR",
                        "amount": "3,539.23",
                        "percent": "0.75%",
                        "success": true
                      }, {
                        "dot": "teal",
                        "currency": "CNY",
                        "amount": "27,499.40",
                        "percent": "-0.58%",
                        "success": false
                      }, {
                        "dot": "info",
                        "currency": "GBP",
                        "amount": "3,022.90",
                        "percent": "-0.69%",
                        "success": false
                      }, {
                        "dot": "twitter",
                        "currency": "NZD",
                        "amount": "444,814.70",
                        "percent": "0.82%",
                        "success": true
                      }, {
                        "dot": "secondary",
                        "currency": "KRW",
                        "amount": "4,491,099.60",
                        "percent": "-1.11%",
                        "success": false
                      }, {
                        "dot": "gray-400",
                        "currency": "SGD",
                        "amount": "5,393.00",
                        "percent": "0.66%",
                        "success": true
                      }
                    ].map((item, index) => (
                      <tr key={index}>
                        <td>
                          <div><span className={"badge-dot bg-" + item.dot}></span> <span className="fw-medium">{item.currency}</span></div>
                        </td>
                        <td>{item.amount}</td>
                        <td>
                          <div className={"justify-content-end text-" + (item.success ? "success" : "danger")}>{item.percent} <i className={"ri-arrow-" + (item.success ? "up" : "down") + "-line"}></i></div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="6" xl="4">
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Portfolio</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                  <Nav.Link href=""><i className="ri-more-2-fill"></i></Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body>
                <div className="position-absolute p-1">
                  <label className="fw-medium fs-sm mb-1">Total Balance</label>
                  <h3 className="card-value"><span className="text-secondary">$</span>7,428.68</h3>
                </div>

                <ReactApexChart series={seriesTwo} options={optionTwo} type="area" height={195} className="apex-chart-ten mb-4" />

                <ListGroup as="ul" className="list-group-one">
                  {[
                    {
                      "icon": "btc",
                      "name": "Bitcoin",
                      "value": "0.7200",
                      "dollar": "2,907.71"
                    }, {
                      "icon": "eth",
                      "name": "Ethereum",
                      "value": "15.0030",
                      "dollar": "2,083.62"
                    }, {
                      "icon": "ltc",
                      "name": "Litecoin",
                      "value": "12.5021",
                      "dollar": "748.88"
                    }, {
                      "icon": "dash",
                      "name": "Dash",
                      "value": "16.5019",
                      "dollar": "1,521.97"
                    }, {
                      "icon": "btc",
                      "name": "Bitcoin Cash",
                      "value": "5.8120",
                      "dollar": "916.67"
                    }
                  ].map((item, index) => (
                    <ListGroup.Item key={index} as="li" className="px-0 d-flex align-items-center gap-2">
                      <div className="avatar bg-gray-300 text-secondary"><i className={"cf cf-" + item.icon}></i></div>
                      <div>
                        <h6 className="mb-0">{item.name}</h6>
                        <small>{item.icon.toUpperCase()}/USD</small>
                      </div>
                      <div className="ms-auto text-end">
                        <h6 className="ff-numerals mb-0">{item.value} {item.icon.toUpperCase()}</h6>
                        <small className="text-secondary">${item.dollar} USD</small>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="6" xl="4">
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Price Indexes</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                  <Nav.Link href=""><i className="ri-more-2-fill"></i></Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body>
                <ListGroup as="ul" className="list-group-one">
                  {[
                    {
                      "icon": "btc",
                      "bg": "orange",
                      "name": "Bitcoin",
                      "value": "$4,000.19",
                      "percent": "0.27%",
                      "success": true
                    }, {
                      "icon": "eth",
                      "bg": "twitter",
                      "name": "Ethereum",
                      "value": "$138.90",
                      "percent": "0.35%",
                      "success": true
                    }, {
                      "icon": "ltc",
                      "bg": "litecoin",
                      "name": "Litecoin",
                      "value": "$59.95",
                      "percent": "0.05%",
                      "success": true
                    }, {
                      "icon": "btc",
                      "bg": "success",
                      "name": "Bitcoin Cash",
                      "value": "$160.28",
                      "percent": "-0.19%",
                      "success": false
                    }, {
                      "icon": "dash",
                      "bg": "primary",
                      "name": "Dash",
                      "value": "$92.20",
                      "percent": "-0.21%",
                      "success": false
                    }, {
                      "icon": "bsd",
                      "bg": "ui-02",
                      "name": "Bitsend",
                      "value": "$56.53",
                      "percent": "2.86%",
                      "success": true
                    }, {
                      "icon": "bcn",
                      "bg": "pink",
                      "name": "Bytecoin",
                      "value": "$0.76",
                      "percent": "-1.32%",
                      "success": false
                    }, {
                      "icon": "dmd",
                      "bg": "info",
                      "name": "Diamond",
                      "value": "$280.80",
                      "percent": "2.01%",
                      "success": true
                    }, {
                      "icon": "emc",
                      "bg": "danger",
                      "name": "Emercoin",
                      "value": "$48.25",
                      "percent": "1.22%",
                      "success": true
                    }
                  ].map((item, index) => (
                    <ListGroup.Item key={index} as="li" className="px-0 d-flex align-items-center gap-2">
                      <div className={"avatar text-white bg-" + item.bg}>
                        <i className={"cf cf-" + item.icon}></i>
                      </div>
                      <div>
                        <h6 className="mb-0">{item.name}</h6>
                        <small>{item.icon.toUpperCase()}/USD</small>
                      </div>
                      <div className="ms-auto text-end">
                        <h6 className="ff-numerals mb-0">{item.value}</h6>
                        <small className={"text-" + (item.success ? "success" : "danger")}>{item.percent}</small>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col xl="7">
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Cryptocurrency News</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                  <Nav.Link href=""><i className="ri-more-2-fill"></i></Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body>
                {[
                  {
                    "img": crypto1,
                    "author": "Crypto Ninja",
                    "title": "Dow Futures, Bitcoin Teeter as Markets Wait for FOMC Bounce",
                    "text": "As the unwelcome bearish momentum returns to all top cryptocurrency markets, most of this"
                  }, {
                    "img": crypto2,
                    "author": "Cable News Network",
                    "title": "XRP Price Remains Bearish as XRP/BTC Drops Below 7,800 Satoshi",
                    "text": "Liquidity has shifted away from the top gaining crypto assets, with only six of the week’s 30 top performing"
                  }, {
                    "img": crypto3,
                    "author": "Bitcoin.com",
                    "title": "Bitcoin Price to $4500 soon? BTC Price Analysis",
                    "text": "Published on CoinnounceTechnical Indicators: Support Level: $3900 Resistance Levels: $4100, $4200 Bitcoin"
                  }
                ].map((item, index) => (
                  <div className="news-item" key={index}>
                    <div className="news-img">
                      <img src={item.img} className="img-fluid" alt="" /></div>
                    <div className="news-body">
                      <label className="d-block mb-1 fs-sm text-primary">{item.author}</label>
                      <h6 className="news-title fw-semibold">
                        <Link to="" className="text-dark">{item.title}</Link>
                      </h6>
                      <p className="news-text mb-0">{item.text}...</p>
                    </div>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" xl="5">
            <Card className="card-one">
              <Card.Header>
                <Card.Title as="h6">Transactions</Card.Title>
                <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                  <Nav.Link href=""><i className="ri-more-2-fill"></i></Nav.Link>
                </Nav>
              </Card.Header>
              <Card.Body>
                {[
                  {
                    "date": "Today, October 20",
                    "transactions": [
                      {
                        "color": "success",
                        "icon": "ri-coin-line",
                        "title": "Received Bitcoin",
                        "text": "Received via PayPal",
                        "value": "+0.01084 BTC",
                        "usd": "+25.60 USD",
                        "success": true
                      }, {
                        "color": "primary",
                        "icon": "ri-arrow-right-up-line",
                        "title": "Sent Bitcoin",
                        "text": "To Bitcoin Address",
                        "value": "-0.00029 BTC",
                        "usd": "-11.48 USD",
                        "success": false
                      }, {
                        "color": "info",
                        "icon": "ri-shopping-basket-line",
                        "title": "Purchased Ethereum",
                        "text": "Purchased using PayPal",
                        "value": "+0.02115 ETH",
                        "usd": "+21.50 USD",
                        "success": true
                      }, {
                        "color": "info",
                        "icon": "ri-shopping-basket-line",
                        "title": "Purchased Bitcoin",
                        "text": "Purchased using Debit Card",
                        "value": "+0.0005 BTC",
                        "usd": "+18.30 USD",
                        "success": true
                      }, {
                        "color": "primary",
                        "icon": "ri-arrow-right-up-line",
                        "title": "Sent Bitcoin",
                        "text": "To Bitcoin Address",
                        "value": "-0.00040 BTC",
                        "usd": "-18.50 USD",
                        "success": false
                      }
                    ]
                  }, {
                    "date": "Yesterday, October 19",
                    "transactions": [
                      {
                        "color": "success",
                        "icon": "ri-coin-line",
                        "title": "Received Bitcoin",
                        "text": "Received via PayPal",
                        "value": "+0.01084 BTC",
                        "usd": "+25.60 USD",
                        "success": true
                      }
                    ]
                  }
                ].map((item, index) => (
                  <React.Fragment key={index}>
                    <div className={"divider divider-start fw-medium" + ((index === 0) ? " mt-0" : "")}>
                      <span>{item.date}</span>
                    </div>
                    <ListGroup as="ul" className="list-group-one">
                      {item.transactions.map((trans, ind) => (
                        <ListGroup.Item key={ind} as="li" className="px-0 d-flex align-items-center gap-2">
                          <div className={`avatar border border-2 border-${trans.color} text-${trans.color}`}><i className={trans.icon}></i></div>
                          <div>
                            <h6 className="mb-0">{trans.title}</h6>
                            <small>{trans.text}</small>
                          </div>
                          <div className="ms-auto text-end">
                            <h6 className="ff-numerals mb-0">{trans.value}</h6>
                            <small className={"text-" + (trans.success ? "success" : "danger")}>{trans.usd}</small>
                          </div>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </React.Fragment>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Footer />
      </div>
    </React.Fragment>
  )
}