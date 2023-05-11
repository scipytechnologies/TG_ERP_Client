import React, { useEffect } from 'react';
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Form } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import { Grid } from "gridjs-react";
import mainservice from '../../services/mainservice';


function EmployeeManagement() {
    // to maintain dark and light mode
    const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
    const [skin, setSkin] = useState(currentSkin);
    const navigate = useNavigate()
    const [user, setUser] = useState("")
    async function employeeDetails() {
        const res = await mainservice.employeeDetails();
        console.log('Opportunity Details ' + JSON.stringify(res))
    }
    useEffect(() => {
        employeeDetails()
    }, []);

    return (
        <>
            <Header onSkin={setSkin} />
            <div className="main main-app p-3 p-lg-4">
                <div className="d-md-flex align-items-center justify-content-between mb-4">
                    <div>
                        <ol className="breadcrumb fs-sm mb-1">
                            <li className="breadcrumb-item"><Link to="/dashboard">Dashboard</Link></li>
                            <li className="breadcrumb-item"><Link to="/dashboard/employee">Employee</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Employee Management</li>
                        </ol>
                        <h4 className="main-title mt-2 mb-0">Employees</h4>
                    </div>
                </div>

                <Card className="card">
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

export default EmployeeManagement