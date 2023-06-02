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
import Calender from './calender/Calender';

// https://programmingwithmosh.com/react/build-a-react-calendar-component-from-scratch/

function Attendence() {
    // to maintain dark and light mode
    const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
    const [skin, setSkin] = useState(currentSkin);
    const navigate = useNavigate()

    // data
    const data = [
        { status: "absent", date: "2023-06-01" },
        { status: "halfDay", date: "2023-06-02" },
        { status: "wfh", date: "2023-06-03" },
        // { status: "present", date: "2023-06-04" },
        { status: "halfDay", date: "2023-06-05" },
        { status: "absent", date: "2023-06-06" },
        { status: "absent", date: "2023-06-07" },
        { status: "wfh", date: "2023-06-08" },
        { status: "present", date: "2023-06-09" },
        { status: "halfDay", date: "2023-06-10" },
        // { status: "absent", date: "2023-06-11" },
        { status: "halfDay", date: "2023-06-12" },
        { status: "wfh", date: "2023-06-13" },
        { status: "present", date: "2023-06-14" },
        { status: "halfDay", date: "2023-06-15" },
        { status: "absent", date: "2023-06-16" },
        { status: "absent", date: "2023-06-17" },
        // { status: "wfh", date: "2023-06-18" },
        { status: "present", date: "2023-06-19" },
        { status: "halfDay", date: "2023-06-20" },
        { status: "absent", date: "2023-06-21" },
        { status: "halfDay", date: "2023-06-22" },
        { status: "wfh", date: "2023-06-23" },
        { status: "present", date: "2023-06-24" },
        // { status: "halfDay", date: "2023-06-25" },
        { status: "absent", date: "2023-06-26" },
        { status: "absent", date: "2023-06-27" },
        { status: "wfh", date: "2023-06-28" },
        { status: "present", date: "2023-06-29" },
        { status: "halfDay", date: "2023-06-30" },
    ];

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

                        </div>

                    </Col>
                    <Col xs="12" md="8" >


                        {/* calender stucture */}
                        <Calender data={data} />
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