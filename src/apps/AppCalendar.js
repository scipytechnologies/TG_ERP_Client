import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Button, Col, Form, Modal, Nav, Row } from "react-bootstrap";
import ReactDatePicker from "react-datepicker";
import Avatar from "../components/Avatar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid'

import {
  calendarEvents,
  birthdayEvents,
  holidayEvents,
  discoveredEvents,
  meetupEvents,
  otherEvents
} from "../data/CalendarEvents";

import img6 from "../assets/img/img6.jpg";
import img8 from "../assets/img/img8.jpg";
import img10 from "../assets/img/img10.jpg";
import img12 from "../assets/img/img12.jpg";
import img14 from "../assets/img/img14.jpg";
import img15 from "../assets/img/img15.jpg";

export default function AppCalendar() {

  useEffect(() => {
    document.body.classList.add('app-calendar');
    return () => {
      document.body.classList.remove('app-calendar');
    }
  }, []);

  const [startDate, setStartDate] = useState(new Date());

  // toggle sidebar calendar
  const [isSidebarShow, setSidebarShow] = useState(false);

  // Modal
  const [modalShow, setModalShow] = useState(false);
  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);

  return (
    <React.Fragment>
      <Header />
      <div className={"main main-calendar" + (isSidebarShow ? " show" : "")}>
        <div className="calendar-sidebar">
          <PerfectScrollbar className="sidebar-body">
            <div className="d-grid mb-3">
              <Button variant="primary" onClick={handleModalShow}>Create New Event</Button>
            </div>

            <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)} inline />

            <div className="mb-5"></div>

            <h5 className="section-title section-title-sm mb-4">Upcoming Events</h5>

            <ul className="event-group mb-5">
              {[
                {
                  "title": "Project Concept Meeting",
                  "schedule": "08:30am - 11:30am",
                  "mutual": {
                    "avatar": [img15, img14],
                    "user": "Lea",
                    "count": 4
                  }
                }, {
                  "title": "Company Standup Meeting",
                  "schedule": "04:30PM - 05:00PM",
                  "mutual": {
                    "avatar": [img10, img8, img6],
                    "user": "Socrates",
                    "count": 8
                  }
                }, {
                  "title": "Product Presentation",
                  "schedule": "Tomorrow, 09:30AM - 10:30AM",
                  "mutual": {
                    "avatar": [img15, img14, img12],
                    "user": "Marie",
                    "count": 5
                  }
                }
              ].map((event, index) => (
                <li className="event-item" key={index}>
                  <div className="event-body">
                    <h6><Link to="">{event.title}</Link></h6>
                    <p>{event.schedule}</p>
                    <div className="mutual-badge">
                      <ul>
                        {event.mutual.avatar.map((avatar, ind) => (
                          <li key={ind}><Avatar img={avatar} /></li>
                        ))}
                      </ul>
                      <label>{event.mutual.user} and {event.mutual.count} others are going</label>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <h5 className="section-title section-title-sm mb-4">My Calendar</h5>
            <Nav className="nav-calendar mb-4">
              <Nav.Link href="" className="calendar"><span></span> Calendar Events</Nav.Link>
              <Nav.Link href="" className="birthday"><span></span> Birthday Events</Nav.Link>
              <Nav.Link href="" className="holiday"><span></span> Holiday Calendar</Nav.Link>
              <Nav.Link href="" className="discover"><span></span> Discovered Events</Nav.Link>
              <Nav.Link href="" className="meetup"><span></span> Meetup Events</Nav.Link>
              <Nav.Link href="" className="other"><span></span> Other Events</Nav.Link>
            </Nav>

          </PerfectScrollbar>
        </div>
        <div className="calendar-body">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              "left": "custom1 prev,next today",
              "center": "title",
              "right": "dayGridMonth,timeGridWeek,timeGridDay"
            }}
            eventSources={[
              calendarEvents,
              birthdayEvents,
              holidayEvents,
              discoveredEvents,
              meetupEvents,
              otherEvents
            ]}
            customButtons={
              {
                custom1: {
                  icon: "chevron-left",
                  click: function () {
                    setSidebarShow(!isSidebarShow);
                  }
                }
              }
            }
          />

          <Modal className="modal-event" show={modalShow} onHide={handleModalClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Create New Event</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="mb-3">
                <Form.Label>Event Title:</Form.Label>
                <Form.Control type="text" placeholder="Enter title of event" />
              </div>
              <div className="mb-3">
                <Form.Check type="radio" name="etype" inline label="Event" checked />
                <Form.Check type="radio" name="etype" inline label="Reminder" />
              </div>
              <Row className="g-3 mb-3">
                <Col xs="7" md="8">
                  <Form.Label>Start Date:</Form.Label>
                  <Form.Control type="text" placeholder="Choose date" />
                </Col>
                <Col>
                  <Form.Label>Start Time:</Form.Label>
                  <Form.Select>
                    <option value="">Choose time</option>
                    <option value="12:00AM">12:00AM</option>
                    <option value="12:15AM">12:15AM</option>
                    <option value="12:30AM">12:30AM</option>
                    <option value="12:45AM">12:45AM</option>
                  </Form.Select>
                </Col>
              </Row>

              <Row className="g-3 mb-3">
                <Col xs="7" md="8">
                  <Form.Label>End Date:</Form.Label>
                  <Form.Control type="text" placeholder="Choose date" />
                </Col>
                <Col>
                  <Form.Label>End Time:</Form.Label>
                  <Form.Select>
                    <option value="">Choose time</option>
                    <option value="12:00AM">12:00AM</option>
                    <option value="12:15AM">12:15AM</option>
                    <option value="12:30AM">12:30AM</option>
                    <option value="12:45AM">12:45AM</option>
                  </Form.Select>
                </Col>
              </Row>
              <div>
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows="3" placeholder="Write some description (optional)" />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="" className="btn-white" onClick={handleModalClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleModalClose}>
                Add Event
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </React.Fragment>
  );
}
