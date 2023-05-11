import React, { useEffect } from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import { Grid } from "gridjs-react"
import mainservice from '../../services/mainservice';

function ProductManagement() {
  // to maintain dark and light mode
  const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
  const [skin, setSkin] = useState(currentSkin);
  const navigate = useNavigate()

  // get

  const [data, setData] = useState([])
  async function getInventorymanagementDetails() {
    const res = await mainservice.getInventorymanagementDetails();
    console.log('Inventory Details ' + JSON.stringify(res))
    setData(res.data)
  }
  useEffect(() => {
    getInventorymanagementDetails()
  }, []);


  return (
    <>
      <Header onSkin={setSkin} />
      <div className="main main-app p-3 p-lg-4">
        <div className="d-md-flex align-items-center justify-content-between mb-4">
          <div>
            <ol className="breadcrumb fs-sm mb-1">
              <li className="breadcrumb-item"><Link to="/dashboard/home">Dashboard</Link></li>
              <li className="breadcrumb-item"><Link to="/dashboard/inventory">Product</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Product Management</li>
            </ol>
            <h4 className="main-title mb-0">Product Management</h4>
          </div>
         
        </div>

        {/* analatics cards */}
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

export default ProductManagement