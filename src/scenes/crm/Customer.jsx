import React, { useEffect } from 'react';
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Form } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import { Grid } from "gridjs-react";
import { h } from "gridjs";
import mainservice from '../../services/mainservice';

function Customer() {
    // to maintain dark and light mode
    const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
    const [skin, setSkin] = useState(currentSkin);
    const navigate = useNavigate()

    const [data, setData] = useState([])

    async function customerDetails() {
        const res = await mainservice.customerDetails();
        console.log('Customer Details ' + JSON.stringify(res))
        console.log(res)
        setData(res.data)
    }
    useEffect(() => {
        customerDetails()
    }, []);

    const handleButtonClick = (row) => {
        console.log(row);
    };
    return (
        <>
            <Header onSkin={setSkin} />
            <div className="main main-app p-3 p-lg-4">
                <div className="d-md-flex align-items-center justify-content-between mb-4">
                    <div>
                        <ol className="breadcrumb fs-sm mb-1">
                            <li className="breadcrumb-item"><Link to="/dashboard/home">Dashboard</Link></li>
                            <li className="breadcrumb-item"><Link to="/dashboard/crm">CRM</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Customer List</li>
                        </ol>
                        <h4 className="main-title mb-0">Customer List</h4>
                    </div>
                </div>

                <Card>
                    <Card.Body>
                        <Grid
                            data={data.map((item) => [
                                item.FirstName,
                                item.LastName,
                                h('div', {}, [
                                    h(
                                        'Button',
                                        {
                                            onClick: () => handleButtonClick(item),
                                            className: 'btn btn-outline-success ri-pencil-fill me-1 btn-sm',
                                        },

                                    ),
                                    h(
                                        'Button',
                                        {
                                            onClick: () => handleButtonClick(item),
                                            className: 'btn btn-outline-danger ri-delete-bin-6-line me-1 btn-sm',
                                        },

                                    ),
                                    h(
                                        'Button',
                                        {
                                            onClick: () => handleButtonClick(item),
                                            className: 'btn btn-outline-primary ri-more-fill me-1 btn-sm',
                                        },

                                    ),
                                ]),
                            ])}
                            columns={['First Name', 'Last Name', 'Action']}
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
        </>
    )
}

export default Customer