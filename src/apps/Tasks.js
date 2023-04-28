import React, { useEffect, useState } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { Badge, Card, Col, Nav, ProgressBar, Row } from "react-bootstrap";
import ReactDatePicker from "react-datepicker";
import Avatar from "../components/Avatar";
import { Link } from "react-router-dom";

import img8 from "../assets/img/img8.jpg";
import img9 from "../assets/img/img9.jpg";
import img10 from "../assets/img/img10.jpg";
import img11 from "../assets/img/img11.jpg";
import img12 from "../assets/img/img12.jpg";
import img13 from "../assets/img/img13.jpg";
import img15 from "../assets/img/img15.jpg";
import img18 from "../assets/img/img18.jpg";
import img19 from "../assets/img/img19.jpg";


export default function Tasks() {
  useEffect(() => {
    document.body.classList.add('app-task')
    return () => {
      document.body.classList.remove('app-task')
    }
  }, []);

  const [startDate, setStartDate] = useState(new Date());

  return (
    <React.Fragment>
      <Header />
      <div className="main main-app p-3 p-lg-4 p-xxl-5">
        <Row className="row-cols-auto g-4 g-xxl-5">
          <Col xl>
            <h2 className="main-title fs-4 mb-1">Welcome back!</h2>
            <p className="text-secondary mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <Nav className="nav-line mb-4">
              <Nav.Link href="" className="active">Tasks</Nav.Link>
              <Nav.Link href="">Create Task</Nav.Link>
              <Nav.Link href="">Notes</Nav.Link>
              <Nav.Link href="">Settings</Nav.Link>
            </Nav>

            <Row className="g-3 g-lg-4">
              <Col md>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <label className="task-label">In Progress</label>
                  <div className="dropdown dropdown-task">
                    <Link to="" className="dropdown-link">Date Added <i className="ri-arrow-down-s-line"></i></Link>
                  </div>
                </div>

                {[
                  {
                    "badge": [{
                      "bg": "success",
                      "label": "Design"
                    }],
                    "date": "Today",
                    "title": "Create illustrations",
                    "assignee": "Dyanne Rose",
                    "text": "Lorem ipsum dolor sit amet, consec tetur adi piscing elit folor itamet...",
                    "progress": 54,
                    "hour": "3 hours left",
                    "mutual": [img15, img12, img18, img19],
                    "views": 11,
                    "comments": 2
                  }, {
                    "badge": [{
                      "bg": "info",
                      "label": "Promotions"
                    }],
                    "date": "Tomorrow",
                    "title": "Build promotion strategy",
                    "assignee": "Reynante Labares",
                    "progress": 74,
                    "hour": "1 day left",
                    "mutual": [img18, img19],
                    "views": 40,
                    "comments": 5
                  }, {
                    "badge": [{
                      "bg": "pink",
                      "label": "Marketing"
                    }],
                    "date": "Aug 08",
                    "title": "Run market research",
                    "assignee": "Leah Chua",
                    "progress": 20,
                    "hour": "3 days left",
                    "mutual": [img18, img19, img10],
                    "views": 1,
                    "comments": 0
                  }, {
                    "badge": [
                      {
                        "bg": "success",
                        "label": "Design"
                      }, {
                        "bg": "primary",
                        "label": "Updates"
                      }
                    ],
                    "date": "Aug 10",
                    "title": "Architecto beatae vitae dicta",
                    "assignee": "Rolando Paloso",
                    "text": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit...",
                    "progress": 54,
                    "hour": "5 days left",
                    "mutual": [img15, img12, img18, img19, img11, img10],
                    "views": 20,
                    "comments": 5
                  }
                ].map((task, index) => (
                  <Card className="card-task" key={index}>
                    <Card.Body className="p-3 pb-1">
                      <div className="d-flex gap-1">
                        {task.badge.map((badge, ind) => (
                          <Badge key={ind} bg={badge.bg}>{badge.label}</Badge>
                        ))}
                      </div>
                      <div className="d-flex flex-row-reverse align-items-center justify-content-between mt-2 mb-1">
                        <span className="card-date">{task.date}</span>
                        <Card.Title as="h6">{task.title}</Card.Title>
                      </div>
                      <p className="fs-xs">Assigned by: <Link to="">{task.assignee}</Link></p>
                      {task.text && <p className="fs-sm">{task.text}</p>}

                      <div className="d-flex align-items-center justify-content-between fs-xs text-secondary mb-1">
                        <span><strong className="fw-medium">{task.progress}%</strong> complete</span>
                        <span>{task.hour}</span>
                      </div>
                      <ProgressBar now={task.progress} className="mb-2" />

                    </Card.Body>
                    <Card.Footer className="p-3 pt-0">
                      <div className="mutual-badge">
                        <ul>
                          {task.mutual.map((mutual, ind) => (
                            <li key={ind}><Avatar img={mutual} /></li>
                          ))}
                        </ul>
                      </div>
                      <Nav as="nav">
                        <Nav.Link href=""><i className="ri-eye-2-line"></i> {task.views}</Nav.Link>
                        <Nav.Link href=""><i className="ri-chat-1-line"></i> {task.comments}</Nav.Link>
                      </Nav>
                    </Card.Footer>
                  </Card>
                ))}

              </Col>
              <Col md className="mt-5 mt-md-3 mt-lg-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <label className="task-label">Upcoming</label>
                  <div className="dropdown dropdown-task">
                    <Link to="" className="dropdown-link">Date Added <i className="ri-arrow-down-s-line"></i></Link>
                  </div>
                </div>

                {[
                  {
                    "badge": [{
                      "bg": "info",
                      "label": "Promotions"
                    }, {
                      "bg": "indigo",
                      "label": "Updates"
                    }],
                    "date": "Sep 20",
                    "title": "Create promotion strategy",
                    "assignee": "Roel Recamadas",
                    "progress": 0,
                    "hour": "2 weeks",
                    "mutual": [img18],
                    "views": 2,
                    "comments": 0
                  }, {
                    "badge": [{
                      "bg": "success",
                      "label": "Design"
                    }, {
                      "bg": "pink",
                      "label": "Marketing"
                    }],
                    "date": "Sep 25",
                    "title": "Create new landing page",
                    "assignee": "Charles Castil",
                    "text": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form...",
                    "progress": 0,
                    "hour": "3 weeks",
                    "mutual": [img18, img10, img11],
                    "views": 0,
                    "comments": 0
                  }, {
                    "badge": [{
                      "bg": "primary",
                      "label": "Updates"
                    }],
                    "date": "Sep 30",
                    "title": "Ullamco laboris nisi ut aliquip",
                    "assignee": "Mienard Lumaad",
                    "progress": 0,
                    "hour": "3 weeks",
                    "mutual": [img12, img13],
                    "views": 2,
                    "comments": 1
                  }, {
                    "badge": [{
                      "bg": "info",
                      "label": "Promotions"
                    }],
                    "date": "Oct 05",
                    "title": "Natus error sit accusantium",
                    "assignee": "Mienard Lumaad",
                    "text": "Quis autem vel eum iure reprehenderit",
                    "progress": 0,
                    "hour": "4 weeks",
                    "mutual": [img12, img13, img8, img9],
                    "views": 0,
                    "comments": 0
                  }
                ].map((task, index) => (
                  <Card className="card-task" key={index}>
                    <Card.Body className="p-3 pb-1">
                      <div className="d-flex gap-1">
                        {task.badge.map((badge, ind) => (
                          <Badge key={ind} bg={badge.bg}>{badge.label}</Badge>
                        ))}
                      </div>
                      <div className="d-flex flex-row-reverse align-items-center justify-content-between mt-2 mb-1">
                        <span className="card-date">{task.date}</span>
                        <Card.Title as="h6">{task.title}</Card.Title>
                      </div>
                      <p className="fs-xs">Assigned by: <Link to="">{task.assignee}</Link></p>
                      {task.text && <p className="fs-sm">{task.text}</p>}

                      <div className="d-flex align-items-center justify-content-between fs-xs text-secondary mb-1">
                        <span><strong className="fw-medium">{task.progress}%</strong> complete</span>
                        <span>{task.hour}</span>
                      </div>
                      <ProgressBar now={task.progress} className="mb-2" />

                    </Card.Body>
                    <Card.Footer className="p-3 pt-0">
                      <div className="mutual-badge">
                        <ul>
                          {task.mutual.map((mutual, ind) => (
                            <li key={ind}><Avatar img={mutual} /></li>
                          ))}
                        </ul>
                      </div>
                      <Nav as="nav">
                        <Nav.Link href=""><i className="ri-eye-2-line"></i> {task.views}</Nav.Link>
                        <Nav.Link href=""><i className="ri-chat-1-line"></i> {task.comments}</Nav.Link>
                      </Nav>
                    </Card.Footer>
                  </Card>
                ))}

              </Col>
            </Row>

          </Col>
          <Col className="d-none d-xl-block">
            <div className="sidebar-right">
              <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)} inline />

              <div className="mb-4 mb-xxl-5"></div>

              <Row className="g-2">
                {[
                  {
                    "bg": "success",
                    "percent": 58,
                    "title": "Design",
                    "task": 2
                  }, {
                    "bg": "info",
                    "percent": 36,
                    "title": "Promotions",
                    "task": 3
                  }, {
                    "bg": "primary",
                    "percent": 72,
                    "title": "Updates",
                    "task": 1
                  }, {
                    "bg": "pink",
                    "percent": 20,
                    "title": "Marketing",
                    "task": 3
                  }
                ].map((category, index) => (
                  <Col xl="6" key={index}>
                    <div className={"task-category p-3 bg-" + category.bg}>
                      <h2 className="category-percent mb-4">{category.percent}<span>%</span></h2>
                      <h6 className="category-title mb-1">{category.title}</h6>
                      <span>{category.task} tasks</span>
                    </div>
                  </Col>
                ))}
              </Row>

              <div className="mb-4 mb-xxl-5"></div>

              <h5 className="section-title mb-3">Team Members</h5>

              <div className="profile-mutual">
                <ul className="mutual-group mb-3">
                  {[img12, img11, img10, img9, img8].map((img, index) => (
                    <li key={index}><Avatar img={img} /></li>
                  ))}
                </ul>
                <h6>You have 5 team members</h6>
                <p>You, Archie, Socrates, and 3 others</p>
              </div>
            </div>
          </Col>
        </Row>

        <Footer />
      </div>
    </React.Fragment>
  );
}