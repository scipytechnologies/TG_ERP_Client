import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Form, Nav, Card, Button, Table } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";
import Avatar from "../components/Avatar";

import img8 from "../assets/img/img8.jpg";
import img9 from "../assets/img/img9.jpg";
import img10 from "../assets/img/img10.jpg";
import img11 from "../assets/img/img11.jpg";
import img14 from "../assets/img/img14.jpg";

export default function Settings() {
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main p-4 p-lg-5">
        <ol className="breadcrumb fs-sm mb-2">
          <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
          <li className="breadcrumb-item"><Link to="#">User Pages</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Settings</li>
        </ol>
        <h2 className="main-title">Settings</h2>

        <Nav className="nav-line mb-4">
          <Nav.Link href="" className="active">General</Nav.Link>
          <Nav.Link href="">Notifications</Nav.Link>
          <Nav.Link href="">Language &amp; Region</Nav.Link>
          <Nav.Link href="">Accessibility</Nav.Link>
          <Nav.Link href="">Advanced</Nav.Link>
        </Nav>

        <Card className="card-settings">
          <Card.Header>
            <Card.Title>Company Information</Card.Title>
            <Card.Text>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</Card.Text>
          </Card.Header>
          <Card.Body className="p-0">
            <div className="setting-item">
              <Row className="g-2 align-items-center">
                <Col md="5">
                  <h6>Company Name</h6>
                  <p>Neque porro quisquam est qui dolorem.</p>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="Enter company name" />
                </Col>
              </Row>
            </div>
            <div className="setting-item">
              <Row className="g-2">
                <Col md="5">
                  <h6>Tagline</h6>
                  <p>Temporibus autem quibusdam et aut officiis.</p>
                </Col>
                <Col md>
                  <Form.Control as="textarea" rows="3" placeholder="Enter tagline" />
                </Col>
              </Row>
            </div>
            <div className="setting-item">
              <Row className="g-2 align-items-center">
                <Col md="5">
                  <h6>Company Logo</h6>
                  <p>Temporibus autem quibusdam et aut officiis.</p>
                </Col>
                <Col md>
                  <Button variant="" className="btn-white">Upload logo</Button>
                </Col>
              </Row>
            </div>
            <div className="setting-item">
              <Row className="g-2 align-items-center">
                <Col md="5">
                  <h6>Company Email</h6>
                  <p>Neque porro quisquam est qui dolorem.</p>
                </Col>
                <Col md>
                  <Form.Control type="text" placeholder="Enter email address" />
                  <Form.Check type="checkbox" label="Blanditiis praesentium voluptatum deleniti atque." className="mt-3" />
                  <Form.Check type="checkbox" label="Similique sunt in culpa qui officia." className="mt-1" />
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>

        <Card className="card-settings mt-4">
          <Card.Header>
            <Card.Title>Member Access</Card.Title>
            <Card.Text>Debitis aut rerum necessitatibus saepe eveniet ut et voluptates.</Card.Text>
          </Card.Header>
          <Card.Body className="p-0">
            <div className="setting-item">
              <Row className="g-2">
                <Col md="5">
                  <h6>Superusers</h6>
                  <p>Neque porro quisquam est qui dolorem.</p>
                </Col>
                <Col md>
                  <Table className="mb-0" responsive>
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Last Active</th>
                        <th scope="col">&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          "img": img14,
                          "name": "Adrian Moniño",
                          "date": "May 20, 2023"
                        }, {
                          "img": img10,
                          "name": "Socrates Itumay",
                          "date": "Apr 10, 2023"
                        }, {
                          "img": img8,
                          "name": "Rhea Castañares",
                          "date": "Feb 16, 2023"
                        }, {
                          "img": img9,
                          "name": "Marianne Audrey",
                          "date": "Feb 10, 2023"
                        }, {
                          "img": img11,
                          "name": "Reynante Labares",
                          "date": "Dec 20, 2022"
                        }
                      ].map((user, index) => (
                        <tr key={index}>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <Avatar size="sm" img={user.img} />
                              <span>{user.name}</span>
                            </div>
                          </td>
                          <td>{user.date}</td>
                          <td>
                            <Nav as="nav">
                              <Link to=""><i className="ri-pencil-line"></i></Link>
                              <Link to=""><i className="ri-delete-bin-line"></i></Link>
                            </Nav>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>

        <Card className="card-settings mt-4">
          <Card.Header>
            <Card.Title>Connected Apps</Card.Title>
            <Card.Text>Quia voluptas sit aspernatur aut odit aut fugit nemo enim ipsam voluptatem.</Card.Text>
          </Card.Header>
          <Card.Body className="p-0">
            <div className="setting-item">
              <Row className="g-3">
                {[
                  {
                    "bg": "bg-disqus",
                    "icon": "ri-disqus-fill",
                    "name": "Disqus",
                    "text": "An American blog comment hosting service for web sites and online communities that use a networked platform."
                  }, {
                    "bg": "bg-dropbox",
                    "icon": "ri-dropbox-fill",
                    "name": "Dropbox",
                    "text": "A file hosting service company that offers cloud storage, file synchronization, personal cloud, and client software."
                  }, {
                    "bg": "bg-evernote",
                    "icon": "ri-evernote-fill",
                    "name": "Evernote",
                    "text": "An app that allows users to create notes, which can be text, drawings, photographs, audio, or saved web content."
                  }, {
                    "bg": "bg-messenger",
                    "icon": "ri-messenger-fill",
                    "name": "Messenger",
                    "text": "A proprietary instant messaging app developed by Meta Platforms. Originally developed as Facebook Chat in 2008."
                  }
                ].map((app, index) => (
                  <Col md="6" key={index}>
                    <Card className="card-app">
                      <Card.Body>
                        <div className={"card-logo " + app.bg}><i className={app.icon}></i></div>
                        <div className="app-body">
                          <h6>{app.name}</h6>
                          <p>{app.text}</p>
                        </div>
                      </Card.Body>
                      <Card.Footer>
                        <Link to="">Preferences</Link>
                        <Form.Check type="switch" checked onChange={()=>''} />
                      </Card.Footer>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Card.Body>
        </Card>

        <Footer />
      </div>
    </React.Fragment>
  );
}
