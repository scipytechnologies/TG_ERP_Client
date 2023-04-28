import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Nav, Row, Form, Button } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";
import Avatar from "../components/Avatar";

import img1 from "../assets/img/img1.jpg";
import img6 from "../assets/img/img6.jpg";
import img7 from "../assets/img/img7.jpg";
import img8 from "../assets/img/img8.jpg";
import img9 from "../assets/img/img9.jpg";
import img10 from "../assets/img/img10.jpg";
import img11 from "../assets/img/img11.jpg";
import img12 from "../assets/img/img12.jpg";
import img13 from "../assets/img/img13.jpg";
import img14 from "../assets/img/img14.jpg";
import img15 from "../assets/img/img15.jpg";
import img16 from "../assets/img/img16.jpg";
import img19 from "../assets/img/img19.jpg";

export default function People() {
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main p-4 p-lg-5">
        <Row className="g-5">
          <Col xl>
            <ol className="breadcrumb fs-sm mb-2">
              <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
              <li className="breadcrumb-item"><Link to="#">User Pages</Link></li>
              <li className="breadcrumb-item active" aria-current="page">People &amp; Groups</li>
            </ol>
            <h2 className="main-title">People &amp; Groups</h2>

            <Nav className="nav-line mb-4">
              <Nav.Link href="" className="active">All Connections</Nav.Link>
              <Nav.Link href="">Following</Nav.Link>
              <Nav.Link href="">Followers</Nav.Link>
              <Nav.Link href="">Suggestions</Nav.Link>
              <Nav.Link href="">Groups</Nav.Link>
            </Nav>

            <div className="main-label-group mb-3">
              <label>Recently Active</label>
              <Link to="">See All</Link>
            </div>

            <Row className="g-2 g-xxl-3 mb-5">
              {[
                {
                  "img": img6,
                  "name": "Allan Rey Palban",
                  "position": "Senior Business Analyst",
                  "count": 5,
                  "mutual": [img1, img12]
                }, {
                  "img": img7,
                  "name": "Adrian Moniño",
                  "position": "UI Developer",
                  "count": 9,
                  "mutual": [img10, img11]
                }, {
                  "img": img8,
                  "name": "Rhea Castañares",
                  "position": "Software Engineer",
                  "count": 18,
                  "mutual": [img6, img9]
                }, {
                  "img": img9,
                  "name": "Lorlaine Relayosa",
                  "position": "Software Engineer",
                  "count": 4,
                  "mutual": [img6, img7]
                }, {
                  "img": img10,
                  "name": "Raffy Godinez",
                  "position": "UI Designer",
                  "count": 2,
                  "mutual": [img11, img1]
                }, {
                  "img": img11,
                  "name": "Maricel Villalon",
                  "position": "Engineering Manager",
                  "count": 13,
                  "mutual": [img1, img12]
                }
              ].map((connection, index) => (
                <Col sm="6" md="4" key={index}>
                  <Card className="card-people">
                    <Card.Body>
                      <Link to=""><Avatar img={connection.img} size="xl" status="online" /></Link>
                      <h6 className="mt-3"><Link to="">{connection.name}</Link></h6>
                      <p>{connection.position}</p>
                      <div className="mutual-badge mb-3">
                        <ul>
                          {connection.mutual.map((item, ind) => (
                            <li key={ind}><Avatar img={item} /></li>
                          ))}
                        </ul>
                        <label>{connection.count} mutual connections</label>
                      </div>
                      <div className="d-grid"><Button variant="outline-primary">Following</Button></div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            <div className="main-label-group mb-3">
              <label>People From Your Current City</label>
              <Link to="">See All</Link>
            </div>

            <Row className="g-2 g-xxl-3 mb-5">
              {[
                {
                  "img": img12,
                  "name": "Geraldine Cantones",
                  "position": "Senior Business Analyst",
                  "count": 5,
                  "mutual": [img10, img8]
                }, {
                  "img": img6,
                  "name": "Dexter Cruz",
                  "position": "UI Developer",
                  "count": 9,
                  "mutual": [img11, img7]
                }, {
                  "img": img8,
                  "name": "Rhea Castañares",
                  "position": "Software Engineer",
                  "count": 18,
                  "mutual": [img7, img9]
                }
              ].map((connection, index) => (
                <Col sm="6" md="4" key={index}>
                  <Card className="card-people">
                    <Card.Body>
                      <Link to=""><Avatar img={connection.img} size="xl" status="online" /></Link>
                      <h6 className="mt-3"><Link to="">{connection.name}</Link></h6>
                      <p>{connection.position}</p>
                      <div className="mutual-badge mb-3">
                        <ul>
                          {connection.mutual.map((item, ind) => (
                            <li key={ind}><Avatar img={item} /></li>
                          ))}
                        </ul>
                        <label>{connection.count} mutual connections</label>
                      </div>
                      <div className="d-grid"><Button variant="outline-primary">Following</Button></div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            <div className="main-label-group mb-3">
              <label>People From Your Hometown</label>
              <Link to="">See All</Link>
            </div>

            <Row className="g-2 g-xxl-3 mb-5">
              {[
                {
                  "img": img13,
                  "name": "Esther Mathias",
                  "position": "Business Analyst",
                  "count": 5,
                  "mutual": [img19, img8]
                }, {
                  "img": img14,
                  "name": "Gregory Harper",
                  "position": "UI Developer",
                  "count": 7,
                  "mutual": [img16, img13]
                }, {
                  "img": img15,
                  "name": "Maria Wetter",
                  "position": "Software Engineer",
                  "count": 10,
                  "mutual": [img6, img11]
                }
              ].map((connection, index) => (
                <Col sm="6" md="4" key={index}>
                  <Card className="card-people">
                    <Card.Body>
                      <Link to=""><Avatar img={connection.img} size="xl" status="online" /></Link>
                      <h6 className="mt-3"><Link to="">{connection.name}</Link></h6>
                      <p>{connection.position}</p>
                      <div className="mutual-badge mb-3">
                        <ul>
                          {connection.mutual.map((item, ind) => (
                            <li key={ind}><Avatar img={item} /></li>
                          ))}
                        </ul>
                        <label>{connection.count} mutual connections</label>
                      </div>
                      <div className="d-grid"><Button variant="outline-primary">Following</Button></div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>


          </Col>
          <Col xl="4" xxl="3" className="d-none d-xl-block">
            <h5 className="section-title">Find Connections</h5>
            <p className="text-secondary fs-sm mb-4">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>

            <div className="form-search">
              <i className="ri-search-line"></i>
              <Form.Control type="text" placeholder="Enter name or email" />
            </div>

            <hr className="my-4 opacity-0" />

            <h5 className="section-title mb-4">People You May Know</h5>
            <ul className="people-group">
              {[
                {
                  "avatar": img6,
                  "name": "Allan Rey Palban",
                  "position": "Senior Business Analyst"
                }, {
                  "avatar": img7,
                  "name": "Adrian Moniño",
                  "position": "Software Engineer"
                }, {
                  "avatar": img8,
                  "name": "Charlene Plateros",
                  "position": "Sales Representative"
                }, {
                  "avatar": img9,
                  "name": "Analyn Mercado",
                  "position": "Executive Assistant"
                }, {
                  "avatar": img10,
                  "name": "Rolando Paloso",
                  "position": "Senior Architect"
                }
              ].map((people, index) => (
                <li className="people-item" key={index}>
                  <Avatar img={people.avatar} />
                  <div className="people-body">
                    <h6><Link to="">{people.name}</Link></h6>
                    <span>{people.position}</span>
                  </div>
                </li>
              ))}
            </ul>

            <hr className="my-4 opacity-0" />

            <h5 className="section-title mb-4">People Also Viewed</h5>
            <ul className="people-group">
              {[
                {
                  "avatar": img11,
                  "name": "Maricel Villalon",
                  "position": "Engineering Manager"
                }, {
                  "avatar": img12,
                  "name": "Geraldine Cantones",
                  "position": "Software Architect"
                }, {
                  "avatar": img6,
                  "name": "Allan Rey Palban",
                  "position": "Senior Business Analyst"
                }, {
                  "avatar": img7,
                  "name": "Adrian Moniño",
                  "position": "Software Engineer"
                }, {
                  "avatar": img8,
                  "name": "Charlene Plateros",
                  "position": "Sales Representative"
                }
              ].map((people, index) => (
                <li className="people-item" key={index}>
                  <Avatar img={people.avatar} />
                  <div className="people-body">
                    <h6><Link to="">{people.name}</Link></h6>
                    <span>{people.position}</span>
                  </div>
                </li>
              ))}
            </ul>

            <hr className="my-4 opacity-0" />

            <h5 className="section-title">Discover By Position</h5>
            <p className="text-secondary fs-sm mb-4">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>

            <Nav className="nav-classic">
              {[
                {
                  "name": "Software Engineer",
                  "count": 20
                }, {
                  "name": "UI/UX Designer",
                  "count": 18
                }, {
                  "name": "Sales Representative",
                  "count": 14
                }, {
                  "name": "Product Representative",
                  "count": 12
                }, {
                  "name": "Full-Stack Developer",
                  "count": 10
                }
              ].map((position, index) => (
                <Nav.Link to="" key={index}><span>{position.name}</span> <span className="badge">{position.count}</span></Nav.Link>
              ))}
            </Nav>
          </Col>
        </Row>

        <Footer />
      </div>
    </React.Fragment>
  );
}