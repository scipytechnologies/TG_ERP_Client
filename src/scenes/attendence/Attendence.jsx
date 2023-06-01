import React from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid'
import PerfectScrollbar from "react-perfect-scrollbar";
import { Calendar } from '@fullcalendar/core';
import Calender from './calender/Calender';

function Attendence() {
    // to maintain dark and light mode
    const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
    const [skin, setSkin] = useState(currentSkin);
    const navigate = useNavigate()


    // additional
    const [isSidebarShow, setSidebarShow] = useState(false);

    return (
        <>
            <Header onSkin={setSkin} />

            <div className="main main-app p-3 p-lg-4">
                <Row>
                    <Col xs="12" lg="12">
                        <div className="d-md-flex align-items-center justify-content-between mb-4">
                            <div>
                                <ol className="breadcrumb fs-sm mb-1">
                                    <li className="breadcrumb-item"><Link to="/dashboard/home">Dashboard</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Attendence</li>
                                </ol>
                                <h4 className="main-title mb-0">Attendence</h4>
                            </div>
                            {/* <div className="d-flex gap-2 mt-3 mt-md-6">
                        <Button variant="primary" className="d-flex align-items-center gap-2" onClick={() => navigate('/dashboard/HRM/addHRM')}>
                            <i className="ri-bar-chart-2-line fs-18 lh-1"></i>Add HRM<span className="d-none d-sm-inline"></span>
                        </Button>
                    </div> */}
                        </div>

                    </Col>
                    <Col xs="12" md="8" >
                        {/* <FullCalendar
                            plugins={[dayGridPlugin, timeGridPlugin]}
                            initialView="dayGridMonth"
                            events={[
                                // event data...
                                {
                                    title: 'Absent',
                                    start: '2023-05-01',

                                    backgroundColor: 'red',
                                    resourceEditable: false // resource not editable for this event
                                },
                                {
                                    title: 'Present',
                                    start: '2023-05-02',

                                    backgroundColor: 'green',
                                    resourceEditable: false // resource not editable for this event
                                },
                                {
                                    title: 'HalfDay',
                                    start: '2023-05-03',

                                    backgroundColor: 'orange',
                                    resourceEditable: false // resource not editable for this event
                                }
                            ]}
                            eventRender={(event, element) => {
                                element.style.backgroundColor = "red";
                            }}
                        /> */}

                        {/* calender stucture */}
                        <Calender />
                    </Col>

                    <Col xs="12" md="4" >
                        <div>
                            <p>Calender Items</p>
                        </div>
                    </Col>


                </Row>
            </div >
        </>
    )
}

export default Attendence