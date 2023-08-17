import React, { useEffect, useState } from 'react';
import Header from "../../layouts/Header";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import ConfirmModal from '../../components/confirm modal/ConfirmModal';
import InputBox from '../../components/inputBox/InputBox';   // import this here

const CustomForm = () => {
    const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
    const [skin, setSkin] = useState(currentSkin);
    const [show, setShow] = useState(false);

    // dynamic form using code start here  (make sure import neccesary items at top)
    const [btnVisible, setBtnVisible] = useState(true);
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        username: "",
        date: "",
        password: "",
        confirmPassword: ""
    });

    // define dynamic input fields here and must provide patterns (patterns should match the required field and also non empty)
    const inputs = [
        {
            id: 1,
            name: "email",
            type: "text",
            placeholder: "eg:- johndoe@gmail.com",
            label: "Email",
            err_msg: "Provide a valid email",
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            required: true
        },
        {
            id: 2,
            name: "date",
            type: "date",
            placeholder: "",
            label: "Date",
            err_msg: "Invalid Date",
            pattern: /^(?!$|\d{2}-\d{2}-\d{4}$).+$/,
            required: true
        },
        {
            id: 3,
            name: "password",
            type: "text",
            placeholder: "password",
            label: "Password",
            err_msg: "Not a valid password (0-8) alpha numerals",
            pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            required: true
        },
        {
            id: 4,
            name: "confirmPassword",
            type: "text",
            placeholder: "re-type your password here",
            label: "Confirm Password",
            err_msg: "Password not matching",
            pattern: new RegExp(`^${values.password}$`),
            required: true
        }
    ];

    //  copy paste below two lines
    const isSubmitEnabled = Object.values(errors).every(error => !error);

    useEffect(() => {
        !isSubmitEnabled ? setBtnVisible(true) : setBtnVisible(false)
    }, [isSubmitEnabled])

    return (
        <>
            <Header onSkin={setSkin} />
            <div className="main main-app p-3 p-lg-4">
                <div className="d-md-flex align-items-center justify-content-between mb-4">
                    <div>
                        <ol className="breadcrumb fs-sm mb-1">
                            <li className="breadcrumb-item"><Link to="/dashboard/home">Dashboard</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">CRM</li>
                        </ol>
                        <h4 className="main-title mb-0">Custom Forms</h4>
                    </div>
                </div>

                <Row className='g-3'>
                    <Card className="card-one mt-3 pb-3" >
                        <Card.Header>
                            <Card.Title as="h6">Personal Information</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row className="g-4">

                                {/* map inputs field here and pass props  */}
                                {inputs.map((item) => (
                                    <Col lg="4" md="6" xs="12" key={item.id}>
                                        <InputBox
                                            {...item}
                                            value={values[item.name]}
                                            inputs={inputs}
                                            values={values}
                                            errors={errors}
                                            setErrors={setErrors}
                                            setValues={setValues}
                                        />
                                    </Col>
                                ))}

                                <Col xs="12">
                                    <div className='mt-0'>
                                        <Button className='me-1 btn-danger' onClick={() => setShow(true)}>Delete</Button>
                                        <Button disabled={btnVisible}>Save</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Row>

                {/* confirm modal */}
                <ConfirmModal setShow={setShow} show={show} type="delete" />
            </div>
        </>
    );
};

export default CustomForm;
