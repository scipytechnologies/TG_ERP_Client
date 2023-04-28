import React, { useEffect } from "react";
import Prism from "prismjs";
import { Card, Container, Nav, Row, Col } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

export default function ChartJs() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const ctxLabel = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const ctxData1 = [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30];
  const ctxData2 = [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20];
  const ctxColor1 = '#506fd9';
  const ctxColor2 = '#DBDFFD';

  const dataBar = {
    labels: ctxLabel,
    datasets: [{
      data: ctxData1,
      backgroundColor: ctxColor1,
      barPercentage: 0.5
    }, {
      data: ctxData2,
      backgroundColor: ctxColor2,
      barPercentage: 0.5
    }]
  };

  const optionBar = {
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
        max: 80
      }
    }
  };

  const dataBar2 = {
    labels: ctxLabel,
    datasets: [{
      data: ctxData1,
      backgroundColor: ctxColor1,
      barPercentage: 0.75
    }, {
      data: ctxData2,
      backgroundColor: ctxColor2,
      barPercentage: 0.75
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
        max: 80
      }
    }
  };

  const dataBar3 = {
    labels: ctxLabel,
    datasets: [{
      data: ctxData1,
      backgroundColor: ctxColor1,
      barPercentage: 0.5
    }, {
      data: ctxData2,
      backgroundColor: ctxColor2,
      barPercentage: 0.5
    }]
  };

  const optionBar3 = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero:true,
        stacked: true
      },
      x: {
        stacked: true
      }
    }
  };

  const dataBar4 = {
    labels: ctxLabel,
    datasets: [{
      data: ctxData1,
      backgroundColor: 'rgba(80,111,217, .5)',
      barPercentage: 0.5
    }, {
      data: ctxData2,
      backgroundColor: 'rgba(219,223,253, .5)',
      barPercentage: 0.5
    }]
  };

  const optionBar4 = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero:true,
        max: 80
      }
    }
  };

  const dataLine = {
    labels: ctxLabel,
    datasets: [{
      data: ctxData1,
      borderColor: ctxColor1,
      backgroundColor: ctxColor1,
      borderWidth: 1
    }, {
      data: ctxData2,
      borderColor: ctxColor2,
      backgroundColor: ctxColor2,
      borderWidth: 1
    }]
  };

  const optionLine = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero:true,
        max: 80
      }
    }
  }

  const dataLine2 = {
    labels: ctxLabel,
    datasets: [{
      data: [5, 40, 25, 10, 25, 35, 45, 25, 10, 10, 20, 15],
      borderColor: ctxColor1,
      backgroundColor: ctxColor1,
      borderWidth: 1,
      fill: true
    }, {
      data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
      borderColor: ctxColor2,
      backgroundColor: ctxColor2,
      borderWidth: 1,
      fill: true
    }]
  };

  const optionLine2 = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero:true,
        max: 80
      }
    }
  }

  const dataPie = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      data: [20,20,30,5,25],
      backgroundColor: ['#ab85e8', '#80bdff','#80e6e6','#e5eff1','#baee80']
    }]
  };

  const optionPie = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  };

  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Charts And Graphs</label>
          <h2 className="main-title">Chart JS</h2>
          <p className="main-title-text">Simple yet flexible JavaScript charting for designers & developers.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Bar Chart</h5>
          <p>Below is a basic bar chart implementation that you can use.</p>

          <Card className="card-example">
            <Card.Body>
              <Bar data={dataBar} options={optionBar} className="ht-300" />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Bar data={dataBar} options={optionBar} className="ht-300" />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Horizontal Chart</h5>
          <p>Below is the horizontal bar chart example.</p>

          <Card className="card-example">
            <Card.Body>
              <Bar data={dataBar2} options={optionBar2} className="ht-350" />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Bar data={dataBar2} options={optionBar2} className="ht-350" />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Stacked Chart</h5>
          <p>Below is the stacked bar chart example.</p>

          <Card className="card-example">
            <Card.Body>
              <Bar data={dataBar3} options={optionBar3} className="ht-300" />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Bar data={dataBar3} options={optionBar3} className="ht-300" />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section4" className="main-subtitle">Line Chart</h5>
          <p>Below is the line chart example.</p>

          <Card className="card-example">
            <Card.Body>
              <Line data={dataLine} options={optionLine} className="ht-300" />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Line data={dataLine} options={optionLine} className="ht-300" />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section5" className="main-subtitle">Area Chart</h5>
          <p>Below is the area chart example.</p>

          <Card className="card-example">
            <Card.Body>
              <Line data={dataLine2} options={optionLine2} className="ht-300" />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Line data={dataLine2} options={optionLine2} className="ht-300" />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section6" className="main-subtitle">With Transparency</h5>
          <p>Below is the bar chart example with transparency bar color.</p>

          <Card className="card-example">
            <Card.Body>
              <Bar data={dataBar4} options={optionBar4} className="ht-300" />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Bar data={dataBar4} options={optionBar4} className="ht-300" />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section8" className="main-subtitle">Pie &amp; Donut Chart</h5>
          <p>Below are an example of data in a pie and donut chart.</p>

          <Card className="card-example">
            <Card.Body>
              <Row className="gap-2 flex-nowrap">
                <Col sm="6">
                  <Pie data={dataPie} options={optionPie} className="ht-200" />
                </Col>
                <Col sm="6">
                  <Doughnut data={dataPie} options={optionPie} className="ht-200" />
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Pie data={dataPie} options={optionPie} className="ht-200" />
<Doughnut data={dataPie} options={optionPie} className="ht-200" />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />
        </Container>

        <Nav id="navDocs" className="nav nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Bar Chart</Nav.Link>
          <Nav.Link href="#section2">Horizontal Chart</Nav.Link>
          <Nav.Link href="#section3">Stacked Chart</Nav.Link>
          <Nav.Link href="#section4">Line Chart</Nav.Link>
          <Nav.Link href="#section5">Area Chart</Nav.Link>
          <Nav.Link href="#section6">Transparency</Nav.Link>
          <Nav.Link href="#section7">Pie &amp; Donut Chart</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}