import { React, useEffect, useState } from 'react'
import Header from "../../layouts/Header"
import Footer from "../../layouts/Footer"
import { Button, Card, Col, Nav, ProgressBar, Row, Form } from 'react-bootstrap'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import mainservice from '../../services/mainservice'
import { useSelector } from 'react-redux'
import { event } from 'jquery'

function Gstform() {
    // maintain dark and light mode
    const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
    const [skin, setSkin] = useState(currentSkin);
    const navigate = useNavigate()
    const index = useSelector((state) => state.index)

    const [form, setform] = useState({});
    const onChangeHandler = (event) => {
        setform({
            ...form,
            [event.target.name]: event.target.value
        });
        console.log(form);
    };

    async function PostGST(form) {
        console.log(form);
        const res = await mainservice.createGstform(form, index.CustomerID)
        if (res.data != null) {
            console.log("Gst added");
        }
        else {
            console.log(res.message);
        }
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        PostGST(form);
    }

    // const onUpdateHandler = (event) => {
    //     event.preventDefault();
    //     console.log(uform);
    //     editGST(uform)
    // };

    // async function editGST(uform) {
    //     const res = await mainservice.editGST(index.CustomerID)
    //     if (res.data != null) {
    //         console.log(res.data, "GST updated");
    //     }
    //     else {
    //         console.log(res);
    //     }
    // }

    // let [searchParams, setSearchParams] = useSearchParams();
    // const [uform, setUform] = useState([]);
    // const [editMode, setEditMode] = useState(false);
    // const id = searchParams.get("id");
    // const CheckEdit = async () => {
    //     if (id) {
    //         setEditMode(true)
    //         const res = await mainservice.getGSTbyID(index.CustomerID, id);
    //         setUform(res.data)
    //         console.log(res.data, "this");
    //     }
    // }
    // useEffect(() => {
    //     CheckEdit()
    // }, []);

    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <Header onSkin={setSkin} />
                <div className="main main-app p-3 p-lg-4">
                    <div className="d-md-flex align-items-center justify-content-between mb-4">
                        <div>
                            <ol className="breadcrumb fs-sm mb-1">
                                <li className="breadcrumb-item"><Link to="/dashboard/home">Dashboard</Link></li>
                                <li className="breadcrumb-item"><Link to="/dashboard/admin">Admin</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Add GST Auditor</li>
                            </ol>
                            <h4 className="main-title mb-0">Create New GST Auditor</h4>
                        </div>
                    </div>
                    <Card>
                        <Card.Body>
                            <Row className="g-4">
                                <Col md="6" xs="12">
                                    <div className="mt-3">
                                        <Form.Label htmlFor="Detail 1">Deatil 1</Form.Label>
                                        <Form.Control type="text" name="Detail 1" id="Detail 1" placeholder="Detail 1" onChange={onChangeHandler} />
                                    </div>
                                </Col>
                                <Col md="6" xs="12">
                                    <div className="mt-3">
                                        <Form.Label htmlFor="Detail 1">Deatil 1</Form.Label>
                                        <Form.Control type="text" name="Detail 1" id="Detail 1" placeholder="Detail 1" onChange={onChangeHandler} />
                                    </div>
                                </Col>
                                <Col md="6" xs="12">
                                    <div className="mt-3">
                                        <Form.Label htmlFor="Detail 1">Deatil 1</Form.Label>
                                        <Form.Control type="text" name="Detail 1" id="Detail 1" placeholder="Detail 1" onChange={onChangeHandler} />
                                    </div>
                                </Col>
                                <Col md="6" xs="12">
                                    <div className="mt-3">
                                        <Form.Label htmlFor="Detail 1">Deatil 1</Form.Label>
                                        <Form.Control type="text" name="Detail 1" id="Detail 1" placeholder="Detail 1" onChange={onChangeHandler} />
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </div>
            </form>
        </>
    )
}

export default Gstform