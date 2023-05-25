import React, { useEffect } from 'react'
import './css/table.css'
import { useState, useRef } from 'react';
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { Button, Card, Col, Nav, ProgressBar, Row, Form } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import mainservice from '../../services/mainservice';
import { h } from "gridjs";
import { Grid } from "gridjs-react"
import { _ } from "gridjs-react";
import SplitButton from 'react-bootstrap/SplitButton';

function Appoinment() {
    // to maintain dark and light mode
    const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
    const [skin, setSkin] = useState(currentSkin);
    const navigate = useNavigate()
    
    // state for drop down of view more button
    const [showDropdown, setShowDropdown] = useState(false);
    const [dropdownItem, setDropdownItem] = useState(null);
    const handleCloseDropdown = () => {
        setShowDropdown(false);
    };

    // axios get interceptor for table data
    const [data, setData] = useState([])
    async function appointmentDetails() {
        const res = await mainservice.appointmentDetails();
        console.log('Appointment Details ' + JSON.stringify(res))
        console.log(res)
        setData(res.data)
    }
    useEffect(() => {
        appointmentDetails()
    }, []);

    const handleButtonClick = (row) => {
        console.log(row);
    };

    const buttonRef = useRef();
    const handleViewMore = (row) => {
        // console.log(row);
        setDropdownItem(row);
        setShowDropdown((prev) => !prev ? true : false);
        const position = buttonRef?.current.getBoundingClientRect();
        // alert(position)
        console.log(position);
    };
    const dStyle = {
        position: 'absolute',
        zIndex: '50',
        // top: '50%',
        // right: '12%',
        top: buttonRef?.current?.getBoundingClientRect().top + buttonRef?.current?.clientHeight,
        right: 175,
        top: 200,
        height: '7rem',
        width: '7rem',
        borderRadius: '0.3rem',
        padding: '0.5rem',
        backgroundColor: 'white',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    }

    return (
        <>
            <Header onSkin={setSkin} />
            <div className="main main-app p-3 p-lg-4">
                <div className="d-md-flex align-items-center justify-content-between mb-4">
                    <div>
                        <ol className="breadcrumb fs-sm mb-1">
                            <li className="breadcrumb-item"><Link to="/dashboard/home">Dashboard</Link></li>
                            <li className="breadcrumb-item"><Link to="/dashboard/crm">CRM</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Appoinment List</li>
                        </ol>
                        <h4 className="main-title mb-0">Appoinment List</h4>
                    </div>
                </div>



                <Card>
                    <Card.Body>
                        <Grid
                            data={data !== undefined ? data.map((item) => [
                                item.ScheduleCall,
                                item.ScheduleMeeting,
                               
                                    // h(
                                    //     'Button',
                                    //     {
                                    //         onClick: () => handleButtonClick(item),
                                    //         className: 'btn btn-outline-success ri-pencil-fill me-1 btn-sm',
                                    //     },

                                    // ),
                                    // h(
                                    //     'Button',
                                    //     {
                                    //         onClick: () => handleButtonClick(item),
                                    //         className: 'btn btn-outline-danger ri-delete-bin-6-line me-1 btn-sm',
                                    //     },

                                    // ),
                                    // h(
                                    //     'Button',
                                    //     {
                                    //         ref: buttonRef,
                                    //         onClick: () => handleViewMore(item),
                                    //         className: 'btn btn-outline-primary ri-more-fill me-1 btn-sm',
                                    //     },

                                    // ),
                                    _(<><div class="dropdown">
                                            <button class="btn btn-outline-primary ri-more-fill me-1 btn-sm"></button>
                                            <div class="dropdown-content">
                                                <a href="#">Link 1</a>
                                                <a href="#">Link 2</a>
                                                <a href="#">Link 3</a>
                                            </div>
                                        </div><div class="dropdown">
                                                <button class="btn btn-outline-primary ri-more-fill me-1 btn-sm"></button>
                                                <div class="dropdown-content">
                                                    <a href="#">Link 1</a>
                                                    <a href="#">Link 2</a>
                                                    <a href="#">Link 3</a>
                                                </div>
                                            </div>
                                            <div class="dropdown">
                                    <button class="btn btn-outline-primary ri-more-fill me-1 btn-sm"></button>
                                    <div class="dropdown-content">
                                      <a href="#">Link 1</a>
                                      <a href="#">Link 2</a>
                                      <a href="#">Link 3</a>
                                    </div>
                                  </div></>)
                                     
                             
                            ])
                            : []
                        }
                            columns={['Schedule Call', 'Schedule Meeting', 'Action',]}
                            search={true}
                            pagination={true}
                            sort={true}
                            resizable={true}
                            className={{
                                table: 'table table-bordered mb-0',
                            }}
                        />
                    </Card.Body>
                </Card>
                <Footer />
            </div >

            {
                showDropdown ?
                    <div style={dStyle} onClick={handleCloseDropdown}>
                        hello
                    </div>
                    : ''
            }
        </>
    )
}

export default Appoinment;