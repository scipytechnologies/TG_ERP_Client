import React, { useEffect } from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Form } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import { Grid } from "gridjs-react";
import mainservice from '../../services/mainservice';

function Opportunity() {
    // to maintain dark and light mode
    const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
    const [skin, setSkin] = useState(currentSkin);
    const navigate = useNavigate()
    const [user, setUser] = useState("") //
    const [data, setData] = useState([]) //

    async function opportunityDetails() {
        const res = await mainservice.opportunityDetails();
        console.log('Opportunity Details ' + JSON.stringify(res))
        console.log(res)//
        setData(res.data)//
    }
    useEffect(() => {
      opportunityDetails()
    }, []);

    return (
        <div>
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



                <Card className="card">
                    <Card.Body>
                        <Grid
                            data={data}
                            search={true}
                            pagination={true}
                            sort={true}
                            resizable={true}
                            className={{
                                table: 'table table-bordered mb-0'
                            }}

                        />
                    </Card.Body>

                </Card>
                <Footer />
            </div >
        </>
        </div>
    )
}

export default Opportunity;