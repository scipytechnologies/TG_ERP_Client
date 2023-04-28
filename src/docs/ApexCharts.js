import React, { useEffect } from "react";
import Prism from "prismjs";
import { Card, Container, Nav } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";
import ReactApexChart from "react-apexcharts";

export default function ApexCharts() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  // Bar Chart
  const seriesBar = [{
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
  }];

  const optionBar = {
    chart: {
      toolbar: {
        show: false
      }
    },
    colors: ["#506fd9"],
    plotOptions: {
      bar: {
        borderRadius: 2,
        horizontal: true
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ["South Korea", "Canada", "United Kingdom", "Netherlands", "Italy", "France", "Japan",
      "United States", "China", "Germany"
      ],
    }
  };

  // Column Chart
  const seriesColumn = [{
    name: "Net Profit",
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: "Revenue",
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: "Free Cash Flow",
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }];

  const optionColumn = {
    chart: {
      toolbar: {
        show: false
      }
    },
    colors: ["#506fd9", "#85b6ff", "#a8b5c3"],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded"
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"]
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }
  };

  // Column Chart
  const seriesStacked = [{
    name: "PRODUCT A",
    data: [44, 55, 41, 67, 22, 43]
  }, {
    name: "PRODUCT B",
    data: [13, 23, 20, 8, 13, 27]
  }, {
    name: "PRODUCT C",
    data: [11, 17, 15, 15, 21, 14]
  }, {
    name: "PRODUCT D",
    data: [21, 7, 25, 13, 22, 8]
  }];

  const optionStacked = {
    chart: {
      stacked: true,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: true
      }
    },
    colors: ["#506fd9", "#85b6ff", "#a8b5c3", "#e5e9f2"],
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          total: {
            enabled: true,
            style: {
              fontSize: "13px",
              fontWeight: 900
            }
          }
        }
      },
    },
    xaxis: {
      type: "datetime",
      categories: ["01/01/2011 GMT", "01/02/2011 GMT", "01/03/2011 GMT", "01/04/2011 GMT",
      "01/05/2011 GMT", "01/06/2011 GMT"
      ],
    },
    legend: {
      show: "false"
    },
    fill: {
      opacity: 1
    }
  }

  // Line Chart
  const seriesLine = [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }];

  const optionLine = {
    chart: {
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "straight",
      width: 2
    },
    title: {
      text: "Product Trends by Month",
      align: "left"
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    }
  };

  // Area Chart
  const seriesArea = [{
    name: "STOCK ABC",
    data: [
      8107.85,
      8128.0,
      8122.9,
      8165.5,
      8340.7,
      8423.7,
      8423.5,
      8514.3,
      8481.85,
      8487.7,
      8506.9,
      8626.2,
      8668.95,
      8602.3,
      8607.55,
      8512.9,
      8496.25,
      8600.65,
      8881.1,
      9340.85
    ]
  }];

  const optionArea = {
    chart: {
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "straight",
      width: 2
    },
    labels: [
      "13 Nov 2017",
      "14 Nov 2017",
      "15 Nov 2017",
      "16 Nov 2017",
      "17 Nov 2017",
      "20 Nov 2017",
      "21 Nov 2017",
      "22 Nov 2017",
      "23 Nov 2017",
      "24 Nov 2017",
      "27 Nov 2017",
      "28 Nov 2017",
      "29 Nov 2017",
      "30 Nov 2017",
      "01 Dec 2017",
      "04 Dec 2017",
      "05 Dec 2017",
      "06 Dec 2017",
      "07 Dec 2017",
      "08 Dec 2017"
    ],
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      opposite: true
    },
    legend: {
      horizontalAlign: "left"
    }
  };

  // Radius Chart
  const seriesRadius = [{
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }];

  const optionRadius = {
    chart: {
      toolbar: {
        show: false
      }
    },
    colors: ["#506fd9"],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
        endingShape: "rounded",
        borderRadius: 12
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"]
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }
  };

  const seriesGradient = [{
    name: "STOCK ABC",
    data: [
      8107.85,
      8128.0,
      8122.9,
      8165.5,
      8340.7,
      8423.7,
      8423.5,
      8514.3,
      8481.85,
      8487.7,
      8506.9,
      8626.2,
      8668.95,
      8602.3,
      8607.55,
      8512.9,
      8496.25,
      8600.65,
      8881.1,
      9340.85
    ]
  }];

  const optionGradient = {
    chart: {
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0,
        opacityTo: 0.35,
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "straight",
      width: 2
    },
    labels: [
      "13 Nov 2017",
      "14 Nov 2017",
      "15 Nov 2017",
      "16 Nov 2017",
      "17 Nov 2017",
      "20 Nov 2017",
      "21 Nov 2017",
      "22 Nov 2017",
      "23 Nov 2017",
      "24 Nov 2017",
      "27 Nov 2017",
      "28 Nov 2017",
      "29 Nov 2017",
      "30 Nov 2017",
      "01 Dec 2017",
      "04 Dec 2017",
      "05 Dec 2017",
      "06 Dec 2017",
      "07 Dec 2017",
      "08 Dec 2017"
    ],
    xaxis: {
      type: "datetime"
    },
    yaxis: {
      show: false
    }
  };

  // Pie and Donut Chart
  const seriesPie = [44, 55, 13, 43, 22];
  const optionPie = {
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: "bottom"
        }
      }
    }]
  };

  const seriesDonut = [44, 55, 41, 17, 15];
  const optionDonut = {
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: "bottom"
        }
      }
    }]
  }

  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Charts And Graphs</label>
          <h2 className="main-title">Apexcharts</h2>
          <p className="main-title-text">ApexCharts is a modern charting library that helps developers to create beautiful and interactive visualizations for web pages.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Bar Chart</h5>
          <p>Below is a basic bar chart implementation that you can use.</p>

          <Card className="card-example">
            <Card.Body>
              <ReactApexChart series={seriesBar} options={optionBar} type="bar" height={350} />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<ReactApexChart series={seriesBar} options={optionBar} type="bar" height={350} />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Column Chart</h5>
          <p>Below is the column bar chart example.</p>

          <Card className="card-example">
            <Card.Body>
              <ReactApexChart series={seriesColumn} options={optionColumn} type="bar" height={350} />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<ReactApexChart series={seriesColumn} options={optionColumn} type="bar" height={350} />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Stacked Chart</h5>
          <p>Below is the stacked bar chart example.</p>

          <Card className="card-example">
            <Card.Body>
              <ReactApexChart series={seriesStacked} options={optionStacked} type="bar" height={350} />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<ReactApexChart series={seriesStacked} options={optionStacked} type="bar" height={350} />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section4" className="main-subtitle">Line Chart</h5>
          <p>Below is the line chart example.</p>

          <Card className="card-example">
            <Card.Body>
              <ReactApexChart series={seriesLine} options={optionLine} type="line" height={350} />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<ReactApexChart series={seriesLine} options={optionLine} type="line" height={350} />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section5" className="main-subtitle">Area Chart</h5>
          <p>Below is the area chart example.</p>

          <h5 id="section4" className="main-subtitle">Line Chart</h5>
          <p>Below is the line chart example.</p>

          <Card className="card-example">
            <Card.Body>
              <ReactApexChart series={seriesArea} options={optionArea} type="area" height={350} />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<ReactApexChart series={seriesArea} options={optionArea} type="area" height={350} />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section6" className="main-subtitle">With Border Radius</h5>
          <p>Below is the bar chart example with border radius.</p>

          <Card className="card-example">
            <Card.Body>
              <ReactApexChart series={seriesRadius} options={optionRadius} type="bar" height={350} />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<ReactApexChart series={seriesRadius} options={optionRadius} type="bar" height={350} />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section7" className="main-subtitle">With Gradient</h5>
          <p>Below is the bar chart example with gradient effect of the chart.</p>

          <Card className="card-example">
            <Card.Body>
              <ReactApexChart series={seriesGradient} options={optionGradient} type="area" height={350} />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<ReactApexChart series={seriesGradient} options={optionGradient} type="area" height={350} />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section8" className="main-subtitle">Pie &amp; Donut Chart</h5>
          <p>Below are an example of data in a pie and donut chart.</p>

          <Card className="card-example">
            <Card.Body>
              <ReactApexChart series={seriesPie} options={optionPie} type="pie" width="100%" height={300} />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{'<ReactApexChart series={seriesPie} options={optionPie} type="pie" width={380} />'}</code></pre>
            </Card.Footer>
          </Card>

          <Card className="card-example">
            <Card.Body>
              <ReactApexChart series={seriesDonut} options={optionDonut} type="donut" width="100%" height={300} />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{'<ReactApexChart series={seriesDonut} options={optionDonut} type="donut" width={380} />'}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Bar Chart</Nav.Link>
          <Nav.Link href="#section2">Horizontal Chart</Nav.Link>
          <Nav.Link href="#section3">Stacked Chart</Nav.Link>
          <Nav.Link href="#section4">Line Chart</Nav.Link>
          <Nav.Link href="#section5">Area Chart</Nav.Link>
          <Nav.Link href="#section6">Transparency</Nav.Link>
          <Nav.Link href="#section7">Gradient</Nav.Link>
          <Nav.Link href="#section8">Pie &amp; Donut Chart</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}