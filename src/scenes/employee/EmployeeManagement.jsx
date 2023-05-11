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
    const [data, setData] = useState([])

    async function employeeDetails() {
        const res = await mainservice.employeeDetails();
        // console.log('employee Details ' + JSON.stringify(res))
        console.log(res)
        setData(res.data)
    }
    useEffect(() => {
        employeeDetails()
    }, []);

    // const data = [
    //     { id: 1, name: 'John', age: 30 },
    //     { id: 2, name: 'Jane', age: 25 },
    //     { id: 3, name: 'Bob', age: 40 },
    //   ];

    //   const columns = [
    //     // { 
    //     //   name: 'Full Name', 
    //     //   formatter: (cell) => {
    //     //     return <button>{cell}</button>;
    //     //   },
    //     //   key: 'EmpCode'
    //     // },
    //     { 
    //       name: 'Age', 
    //       key: 'EmpCode' 
    //     }
    //   ];

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
                            // data={data}
                            // fields={{
                            //     // id: (row) => <Link to={`/details/${row.id}`}>{row.id}</Link>,
                            //     // name: (row) => <span style={{ fontWeight: 'bold' }}>{row.name}</span>,
                            //     // email: (row) => <a href={`mailto:${row.email}`}>{row.email}</a>,
                            //     // // status: (row) => <Badge variant={row.status === 'active' ? 'success' : 'danger'}>{row.status}</Badge>,
                            //     // // add more columns here...
                            //     EmployeeCode: (row) => row.EmpCode
                            // }}
                            // fields={{
                            //   id: (row) => <Link to={`/details/${row.id}`}>{row.id}</Link>,
                            //   name: (row) => <span style={{ fontWeight: 'bold' }}>{row.name}</span>,
                            //   email: (row) => <a href={`mailto:${row.email}`}>{row.email}</a>,
                            // //   status: (row) => <Badge variant={row.status === 'active' ? 'success' : 'danger'}>{row.status}</Badge>,
                            //   // add more columns here...
                            // }}
                            data={data}
                            // columns={['_id', "Name", "Address", "BankAccName"]}
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