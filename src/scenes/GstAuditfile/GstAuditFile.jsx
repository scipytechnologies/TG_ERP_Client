import { React } from "react"
import { useState, useEffect } from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer"
import { Button, Card, Col, Nav, ProgressBar, Row, Form } from "react-bootstrap"
import mainservice from "../../services/mainservice";
import { Link } from "react-router-dom"

function GstAuditfiles() {
    const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
    const [skin, setSkin] = useState(currentSkin);
    const [form, setform] = useState({});
    const onChangeHandler = (event) => {
        setform({
            ...form,
            [event.traget.name]: [event.target.value]
        });
    }

    async function GstAuditfiles(form) {
        console.log(form);
        const res = mainservice.GstAuditfile(form)
        if (res.data != null) {
            console.log("Gst Audit files added");
        }
        else {
            console.log(res.message);
        }

    }
    return (
        <>
            <form>
                <Header onSkin={setSkin} />
                <div className="main main-app p-3 p-lg-4">
                    <div className="d-md-flex- align-items-center justify-content-between mb-4">
                        <div>
                            <ol className="breadcrumb fs-sm mb-1">
                                <li className="breadcrumb-item"><Link to="/dashboard/home">Dashboard</Link></li>
                                <li className="breadcrumb-item"><Link to="/dashboard/Gst">Gst</Link></li>
                                <li className="breadcrumb-item"><Link to="/dashboard/GstAudit">GstAuditFiles</Link></li>
                            </ol>
                            <h4 className="main-title mb-0">Create New Gst Audit Files</h4>
                        </div>
                    </div>
                    <Card>
                        <Card.Body>
                            <Row className="g-4">
                                <Col md="6" xs="12">
                                    <div className="mt-3">
                                        <Form.Label html For="Financialyear">Financial year From</Form.Label>
                                        <Form.Control type="text" name="financialyear" id="financialyear"></Form.Control>
                                    </div>
                                </Col>
                                <Col md="6" xs="12">
                                    <div className="mt-3">
                                        <Form.Label html For="Financialyear">To</Form.Label>
                                        <Form.Control type="text" name="financialyear" id="financialyear"></Form.Control>
                                    </div>
                                </Col>
                                <Col md="6" xs="12">
                                    <div className="mt-3">
                                        <Form.Label htmlFor="Financialyear">Financial Year</Form.Label>
                                        <Form.Control as="select" name="financialyear" id="financialyear">
                                            <option value="">Select a year</option>
                                            {Array.from({ length: 10 }, (v, i) => {
                                                const year = new Date().getFullYear() - i;
                                                return <option key={i} value={year}>{year}</option>;
                                            })}
                                        </Form.Control>
                                    </div>
                                </Col>
                                <Col xs="12">
                                    <div className="mt-1" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <Button type="submit">Submit</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Footer />
                </div>
            </form>
        </>
    )

}
export default GstAuditfiles