import React from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import { Grid } from "gridjs-react";

function CRM() {
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
              <li className="breadcrumb-item active" aria-current="page">CRM</li>
            </ol>
            <h4 className="main-title mb-0">Customer Managment</h4>
          </div>
          <div className="d-flex gap-2 mt-3 mt-md-6">
            <Button variant="primary" className="d-flex align-items-center gap-2" onClick={() => navigate('/dashboard/crm/addCrm')}>
              <i className="ri-bar-chart-2-line fs-18 lh-1"></i>Add Customer<span className="d-none d-sm-inline"></span>
            </Button>
            <Button variant="primary" className="d-flex align-items-center gap-2" onClick={() => navigate('/dashboard/crm/addOpportunity')}>
              <i className="ri-bar-chart-2-line fs-18 lh-1"></i>Add Opportunity<span className="d-none d-sm-inline"></span>
            </Button>
            <Button variant="primary" className="d-flex align-items-center gap-2" onClick={() => navigate('/dashboard/crm/addAppoinment')}>
              <i className="ri-bar-chart-2-line fs-18 lh-1"></i>Add Appoinment<span className="d-none d-sm-inline"></span>
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


        <h5 id="section13" className="main-subtitle mt-5">Customers</h5>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, sequi?</p>

        <Card className="card-example">
          <Card.Body>
            <Grid
              data={[
                ['Adrian Monino', 'Front-End Engineer', 'Computer Science', '$120,000'],
                ['Socrates Itumay', 'Software Engineer', 'Computer Engineering', '$150,000'],
                ['Reynante Labares', 'Product Manager', 'Business Management', '$250,000'],
                ['Adrian Monino', 'Front-End Engineer', 'Computer Science', '$120,000'],
                ['Socrates Itumay', 'Software Engineer', 'Computer Engineering', '$150,000'],
                ['Reynante Labares', 'Product Manager', 'Business Management', '$250,000'],
                ['Adrian Monino', 'Front-End Engineer', 'Computer Science', '$120,000'],
                ['Socrates Itumay', 'Software Engineer', 'Computer Engineering', '$150,000'],
                ['Reynante Labares', 'Product Manager', 'Business Management', '$250,000'],

                ['sdfdsf Monino', 'Front-End Engineer', 'Computer Science', '$120,000'],
                ['sdfd Itumay', 'Software Engineer', 'Computer Engineering', '$150,000'],
                ['Reysdfdsfnsdfdsante Labares', 'Product Manager', 'Business Management', '$250,000'],
                ['Adriasdfsdfdsfn Monino', 'Front-End Engineer', 'Computer Science', '$120,000'],
                ['Socrates Itumay', 'Software Engineer', 'Computer Engineering', '$150,000'],
                ['Reydsfsdfnante Labares', 'Product Manager', 'Business Management', '$250,000'],
                ['Adrsdfdsfian Monino', 'Front-End Engineer', 'Computer Science', '$120,000'],
                ['sdfdsfsf Itumay', 'Software Engineer', 'Computer Engineering', '$150,000'],
              ]}
              columns={['Name', 'Job Title', 'Degree', 'Salary']}
              search={true}
              pagination={true}
              sort={true}
              resizable={true}
              className={{
                table: 'table table-bordered mb-0'
              }}
            />
          </Card.Body>
          {/* <Card.Footer>
            
          </Card.Footer> */}
        </Card>

        <Footer />
      </div>
    </>
  )
}

export default CRM