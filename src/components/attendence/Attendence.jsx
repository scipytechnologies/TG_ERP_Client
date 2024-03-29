import React from 'react'
import Header from "../../layouts/Header";
import { useState } from 'react';
import { Card, Col, Nav, ProgressBar, Row, Table } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import Calender from './calender/Calender';
import Avatar from "../../components/Avatar"



function Attendence() {


    // attendence demo   data for june
    const data = [
        { status: "present", date: "2023-06-01" },
        { status: "present", date: "2023-06-02" },
        { status: "wfh", date: "2023-06-03" },
        // { status: "present", date: "2023-06-04" },
        { status: "halfDay", date: "2023-06-05" },
        { status: "absent", date: "2023-06-06" },
        { status: "absent", date: "2023-06-07" },
        { status: "wfh", date: "2023-06-08" },
        { status: "present", date: "2023-06-09" },
        { status: "present", date: "2023-06-10" },
        // { status: "absent", date: "2023-06-11" },
        { status: "halfDay", date: "2023-06-12" },
        { status: "wfh", date: "2023-06-13" },
        { status: "present", date: "2023-06-14" },
        { status: "present", date: "2023-06-15" },
        { status: "absent", date: "2023-06-16" },
        { status: "present", date: "2023-06-17" },
        // { status: "wfh", date: "2023-06-18" },
        { status: "present", date: "2023-06-19" },
        { status: "present", date: "2023-06-20" },
        { status: "present", date: "2023-06-21" },
        { status: "present", date: "2023-06-22" },
        { status: "wfh", date: "2023-06-23" },
        { status: "present", date: "2023-06-24" },
        // { status: "halfDay", date: "2023-06-25" },
        { status: "absent", date: "2023-06-26" },
        { status: "present", date: "2023-06-27" },
        { status: "wfh", date: "2023-06-28" },
        { status: "present", date: "2023-06-29" },
        { status: "present", date: "2023-06-30" },
    ];
    return (
        <>
            <Row className='g-3 mt-2'>
                <Col xs="12">
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col xs={6}>
                                    <div className="w-100 d-flex align-items-center jusify-content-between">
                                        <Avatar size="xl" img="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" />
                                        <div className='ms-3'>
                                            <p className='mb-0'>Shaira Diaz</p>
                                            <p className='mb-0'>Business Manager</p>
                                            <strong><p className='mb-0'>EMP-0112</p></strong>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={6}>
                                    <div className='w-50 d-flex g-2 w-100 justify-content-end'>
                                        <div className='me-2'><i className='ri-time-line'></i></div>
                                        <p className='me-2 d-none d-md-block'>Working time</p>
                                        <p className='me-2 text-primary'>9am - 6pm (8hrs)</p>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs="12" md="8" >
                    <Card>
                        <Card.Body>
                            {/* calender stucture */}
                            <Calender data={data} />
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs="12" md="4" >
                    <Card>
                        <Card.Body className="p-3">

                            <label className="card-title fs-sm fw-medium">Attendance Perfomance</label>
                            <ProgressBar className="progress-one ht-8 mt-2 mb-4">
                                <ProgressBar now={70} variant="success" />
                                <ProgressBar now={5} variant="orange" />
                                <ProgressBar now={15} variant="danger" />
                                <ProgressBar now={15} variant="primary" />
                            </ProgressBar>

                            <Table className="table-three">
                                <tbody>
                                    {[
                                        {
                                            "dot": "success",
                                            "label": "Present",
                                            "count": "19",
                                            "percent": "50"
                                        }, {
                                            "dot": "orange",
                                            "label": "Half Day",
                                            "count": "2",
                                            "percent": "25"
                                        }, {
                                            "dot": "danger",
                                            "label": "Leave",
                                            "count": "2",
                                            "percent": "6"
                                        }, {
                                            "dot": "primary",
                                            "label": "WFH",
                                            "count": "5",
                                            "percent": "5"
                                        },
                                    ].map((item, index) => (
                                        <tr key={index}>
                                            <td><div className={"badge-dot bg-" + item.dot}></div></td>
                                            <td>{item.label}</td>
                                            <td>{item.count}</td>
                                            <td>{item.percent}%</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </>
    )
}

export default Attendence