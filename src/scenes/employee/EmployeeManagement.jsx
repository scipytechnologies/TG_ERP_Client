import React, { useEffect } from 'react';
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState, useRef } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Form, Dropdown, Offcanvas, ButtonGroup } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import { Grid } from "gridjs-react";
import { _ } from "gridjs-react";
import mainservice from '../../services/mainservice';
import Avatar from '../../components/Avatar';
import { useSelector } from 'react-redux';


function EmployeeManagement() {
    // to maintain dark and light mode
    const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
    const [skin, setSkin] = useState(currentSkin);
    const navigate = useNavigate()
    const [user, setUser] = useState("")
    const [data, setData] = useState([])
    const index = useSelector((state) => state.index)
    console.log(index);


    async function employeeDetails() {
        const res = await mainservice.employeeDetails(index.EmployeeID);
        // console.log('employee Details ' + JSON.stringify(res))
        console.log(res.data.employees)
        setData(res.data.employees)
    }
    useEffect(() => {
        employeeDetails()
    }, []);

    // Grid js each row clicking funciton
    const [offCanvas, setOffCanvas] = useState(false)
    const handleCanvas = (row) => {
        console.log(row);
        setOffCanvas(true)
    };
    const handleCloseCanvas = () => {
        setOffCanvas(false)
    }

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

                    <Button variant="primary" className="d-flex align-items-center gap-2" onClick={() => navigate('/dashboard/Employee/addEmployee')}>
                        <i className="ri-bar-chart-2-line fs-18 lh-1"></i>Add Employee<span className="d-none d-sm-inline"></span>
                    </Button>
                </div>

                <Card>
                    <Card.Body>
                        <Grid
                            data={data !== undefined ? data.map((item) => [
                                item.EmpCode,
                                item.Name,
                                _(
                                    <>
                                        <ButtonGroup>
                                            <Button size="sm" variant='white' onClick={() => handleCanvas()}><i className='ri-eye-line'></i></Button>
                                            <Button className='p-0' variant="white">


                                                <Dropdown drop="end">
                                                    <Dropdown.Toggle variant='white' size="sm" className='btn-no-outline'>
                                                        <i className='ri-more-2-fill' color="primary"></i>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </Button>
                                        </ButtonGroup>

                                    </>

                                )
                            ])
                                : []
                            }
                            columns={['Employee Code', 'Name', 'Action']}
                            search={true}
                            pagination={true}
                            sort={true}
                            resizable={true}
                            className={{
                                table: 'table table-bordered mb-0',
                            }}
                        />
                    </Card.Body>
                    {/* sidebar offcanvars */}
                    <Offcanvas show={offCanvas} onHide={handleCloseCanvas} placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Offcanvas Right</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            {/* canvas body */}
                            <div className="w-100">
                                <Card className='border-bottom-0'>
                                    <Card.Body>
                                        <div className="d-flex mb-0 align-item-center justify-content-between w-100">
                                            <div className="d-flex mb-0">
                                                <div className="me-3">
                                                    <Avatar img="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAI8AXwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQMGBwIBAAj/xAA3EAACAQMCAwYDBgUFAAAAAAABAgMABBEFIQYSMRMiQVFhgTJxoRQjcpGxwUJiktHwB1JTguL/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIEA//EAB0RAQEBAQADAQEBAAAAAAAAAAABAhESITFBcQP/2gAMAwEAAhEDEQA/ALGiUQiV8i1MoqkvAu1dBKkUV0BQEXJXLJRHLXJWgBGSoXT0o1lqJloBfJH6UJJFTR1oaRPSmCiaL0oGaHfpTuWP0oKWKglpQVMorlRUqikp6BXWK9FV7jLiRNAsAYyhupe7EreH8x9BRbwDdb13TtEjU30xEjjuRIOZ29vL1pFBxRe3cb3EdtDHD0TnJPL+M+FVWZE1W3Mome5vyAxeQ94nOcD+1dXGrsFD8zWN6qlXWaIhJR6kfrXLWrfjpMyfVzHEE9vH2mqWRiGcMY25gPIjzFHWOq2Gpcws7hJGUZK9CPasml4xvez+zzpFJGNiOquvkf8ABSRrwR3ZutPnmgYHmQZyU9M/5mnnWv0tSfjfHWh3Wq1wHxBe6vbmPUCjuo7sgGCcedWpxXRAGRaFkjphItDyLTI8WpVqJalWg3YFYdx5q011xTdNzt2UDdlGmMjA67H1JrcRWJ6Pp7azx1LFer8M8ruvqGNRv4rH1Jo1nqF/IklpYSRjGAwkIBHljGKuS8H6lqNqYr64xH5EZNaFYWFraQJHhAqjAFM1a15eUMlZ/daPUY2/+mFqvPmRjgjG351W9d4HlsbWSeE83KTgelb5efZcHMij3qpcVNEmmSOmCAMbGl3UquSz4yrgnWDpl9BGQSsjBCpPTPiPetecbVgFoSNdgCkgG5XH9Yr9AMNq1ZZL9DuKHcUU4oeQVSTValU1CpqRaDTA7VlFiLmz411GXTgrtNdSxu8kZIjBDSDG43JVx/1rVQarMOntb8VXkrYWOfs5ImXqrAnO3v7gkVz3fTp/nO1XNYn1e+Bxp17Lg4MhuDGF9eUY2ovhubip+e3s9ON0VjLlZrrsuzxsNyDnP7Gr9dR2hHbSR2xcfxNb/wDqieH4eS2mu2wZJxseXlHLvygDy3J38Sa4/wBd/G/YxLUb7VNWLTPY3LsBkhZW7mOoGMZNDtqN9b2jr98qqhZo5s7+mcmtJtraNbu8sriKM8shZRJEdwdyQQdxkn9PCgtc0myjs5WIhjU7vyg5b0yaOweNn6zLQrZH4rsDI43kEzpg9wjJ5foK2uCUSxgisWtpVXiCW5GwWU4PtitN4e1ATpy58K0ZZdT2dvUD1O5qB+lUkxQ1IpqBTUqmg0y1XeLZJLMwX8TABfumHzOx/P8AWn6mkPGidto0yeOAR8wcip1OxWdXN6R2+uzXGsrDfT9nbR47uPibG3tS/XOPNb0fV76GGRJ7JpMwZHwDHT5elMuD5LbV7U299bxT4XlIdRmguK9DsrRAIdNuDzEAEM7AH86zT1fbX3s+leh8W3ElpeS6pKDcNIGifl+HrkfL0r3VeIZruxR5hhWzt5kV1pmnW9iHu7myJWIEjth0PoKq+ram17ISfhHdRQNlGc05Jdekb1cznQ3bgFQm+N2bzNW7hO+KyjLbVSVFWTQMpykVpkZdXrVopA8YNeOaX6XcdpCB40axpkOQ1KpoZGqVWNBiAaS8VAtpkoHlTUGl+ro01s6KOY46CkGaRajdaFqa3NuuVdQXU9DtVqb/AFCjuIVEkOO6eopfq+lrJGvdGVGKq1xpc8Ybsj1OazetNPNZ+DOI+Jp9SjaCFBHGepHUjxpBcQ9nZBmHfZwT9aMtrB+fmmOQtGyaf9otmVv4uh8qqWZT43XVcTrVn0Qd1flS2Lh3Unflt4hMQMgKcE/nTXS45LeTspkZJF2ZWGCDXeWVw1LPq26XKV2zTgSZAquWr8pGKbwzErTTDaN6mVqh062nvX5YEJA6segq36VosFrh5cSSDxI2HyFJRfp2iz3QEkv3UZ8xuR8qM1jTYrfTS1snw/EfE0/BqKYbEFeZWGCp8am+5xUvL1k95ECSCKr95AoyBWj6zw8zlpLI869eTO6+lUzUtMulYgxMCPMYrPyxqmpqKz2I8BTC0tO0TAFG2mizOe+DnPSrdpXD2EBkHZp1LNS5aLqQBw1pmZu2K92Nevqaf3GjWV+p+026Of8Adjce9MEgigiEUK8qD82qWMV3xnxnGbd8r1T7/g2SMF9Ok5h/xv19jSV4rizfs7mJ438mHWtRXpUN1awXCck8SSL5MM1fUcEWcENrCsUChEUdBRayClgn32I5cZB866S5L/CaRmnaVw0xxg70MjkjevWO1AcysrHPQ+lCT87dWVh/Muamc5rht6AFw69DGv4Y67QknfJPgTXTCvF2NAdla9U4rzNcs1ASCUCuZJwFBJ60LK+AaFupjzQoPHNARWtzlJLbO8TYH4TuP3HtTO1YY3qj2Goq97p9xuBdRhGx54/uPrVns5mwc+dAPlkFfM1ApNtmvTcdxpD8KgnHnQBLMBQ8txINorZ3PmWCj67/AEoPS75r22M7jGWIAHgKIaTbNF9FL2dgWa71NT3dNiZfS7wfqtexaiS/Lc2k9tt8T4Kf1An64qn6tx1JFqE9vZxxLFGrKJZQTlh4kDw67eNIzx7rCysUMEkedhJFjI9jU9U1ntBjrUTygVQeF+M45pZLa8jaIMS6cpLKgAyQPHHpVummIpy9hO7q4KoxWgmuV+0QO7ADDdfag9Ru+RCfQ1VuILyW60y1ihYqZnKkg4OBv+wph//Z" size="xl" status="online" />
                                                </div>
                                                <div className=''>
                                                    <p className="mb-0 fs-5">John Smith</p>
                                                    <p className="fw-bold fw-normal mb-0">Senior Manager</p>
                                                    <p className="fw-normal ">EMP001</p>
                                                </div>

                                            </div>

                                            <Link><i className='ri-pencil-line'></i></Link>
                                        </div>

                                        <div className='d-flex align-item-center justify-content-between'>
                                            <p className="fw-normal  mb-0">email@gmail.com</p>
                                            <p className="fw-normal">www.enterprise.com</p>
                                        </div>
                                        <Button className="btn btn-sm w-100 ">Message</Button>



                                        <div className="divider"><span>Employee Details</span></div>
                                        <div className="d-flex align-item-center justify-content-between me-2 mb-3">
                                            <div>
                                                <p className='mb-0'>Employee Code</p>
                                                <p className='mb-0'>DOB</p>
                                                <p className='mb-0'>Phone</p>
                                                <p className='mb-0'>Email</p>
                                                <p className='mb-0'>Role</p>
                                                <p className='mb-0'>Address</p>
                                            </div>

                                            <div>
                                                <p className='mb-0'>EMP001</p>
                                                <p className='mb-0'>1990-05-15</p>
                                                <p className='mb-0'>123-456-7890</p>
                                                <p className='mb-0'>john.smith@example.com</p>
                                                <p className='mb-0'> Senior Manager</p>
                                                <p className='mb-0'>123 Main Street, City</p>
                                                <p className='mb-0'>State, Country</p>
                                            </div>
                                        </div>


                                        {/*Employment Details*/}
                                        <div className="divider"><span>Employment Details</span></div>
                                        <div className="d-flex align-item-center justify-content-between me-2">
                                            <div>
                                                <p className='mb-0'>Department</p>
                                                <p className='mb-0'>Designation</p>
                                                <p className='mb-0'>From</p>
                                                <p className='mb-0'>To</p>

                                            </div>

                                            <div>
                                                <p className='mb-0'>Sales</p>
                                                <p className='mb-0'>Sales Manager</p>
                                                <p className='mb-0'>2022-01-01</p>
                                                <p className='mb-0'> (if applicable)</p>

                                            </div>
                                        </div>

                                        {/*Bank Details */}
                                        <div className="divider"><span>Bank Details</span></div>
                                        <div className="d-flex align-item-center justify-content-between me-2">
                                            <div>
                                                <p className='mb-0'> Account No</p>
                                                <p className='mb-0'> Account Name</p>
                                                <p className='mb-0'> Branch</p>
                                                <p className='mb-0'> IFSC Code</p>

                                            </div>

                                            <div>
                                                <p className='mb-0'>1234567890</p>
                                                <p className='mb-0'> John Smith</p>
                                                <p className='mb-0'>City Branch</p>
                                                <p className='mb-0'> ABCD1234</p>

                                            </div>
                                        </div>

                                        {/*Government-Related Details */}
                                        <div className="divider"><span>Government-Related Details</span></div>
                                        <div className="d-flex align-item-center justify-content-between me-2">
                                            <div>
                                                <p className='mb-0'>PF No</p>
                                                <p className='mb-0'>ESI</p>
                                                <p className='mb-0'>UAN</p>
                                            </div>

                                            <div>
                                                <p className='mb-0'>PF12345678</p>
                                                <p className='mb-0'>Yes</p>
                                                <p className='mb-0'>9876543210</p>

                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Card>
                <Footer />
            </div>
        </>
    )
}

export default EmployeeManagement