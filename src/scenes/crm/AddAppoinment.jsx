import React from 'react'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Form } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import mainservice from '../../services/mainservice';
import { useSelector } from 'react-redux';

function AddAppointment() {
  // to maintain dark and light mode
  const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
  const [skin, setSkin] = useState(currentSkin);
  const navigate = useNavigate()
  const index = useSelector((state)=>state.index)
  console.log(index.AppointmentID,"appointmentID");

  const [form, setform] = useState({});
  const onChangeHandler = (event) => {
    setform({
      ...form,
      [event.target.name]: event.target.value
    });
    console.log(form);
  };

  async function PostAppointment(form) {
    console.log(form);
    const res = await mainservice.createAppointment(form,index.AppointmentID);
    if (res.data != null) {
      console.log("Appointment Added");
    }
    else {
      console.log(res.message);
    }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    PostAppointment(form);
  }

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <Header onSkin={setSkin} />
        <div className="main main-app p-3 p-lg-4">
          <div className="d-md-flex align-items-center justify-content-between mb-4">
            <div>
              <ol className="breadcrumb fs-sm mb-1">
                <li className="breadcrumb-item"><Link to="/dashboard/home">Dashboard</Link></li>
                <li className="breadcrumb-item"><Link to="/dashboard/crm">CRM</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Add Appointment</li>
              </ol>
              <h4 className="main-title mb-0">Create New Appointment</h4>
            </div>
          </div>

          {/* responsive form in a card */}
          <Card>
            <Card.Body>
              <Row className="g-4">
                <Col md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="ScheduleCall">Schedule Call</Form.Label>
                    <Form.Control type="text" name='ScheduleCall' id="ScheduleCall" placeholder="Schedule Call" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="ScheduleMeeting">Schedule Meeting</Form.Label>
                    <Form.Control type="text" id="ScheduleMeeting" name='ScheduleMeeting' placeholder="Schedule Meeting" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Subject">Subject</Form.Label>
                    <Form.Control type="text" id="Subject" name='Subject' placeholder="Subject" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="StartDate">Start Date</Form.Label>
                    <Form.Control type="Date" id="StartDate" name='StartDate' placeholder="Start Date" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col md="12" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Description">Description</Form.Label>
                    <Form.Control as="textarea" id="Description" name='Description' rows="4" placeholder="Description" onChange={onChangeHandler} />
                  </div>
                </Col>

                <Col xs="12">
                  <Button onClick={onSubmitHandler} type='submit'>Submit</Button>
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

export default AddAppointment