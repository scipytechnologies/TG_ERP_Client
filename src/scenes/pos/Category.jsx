import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Nav, Row, Form, Button } from "react-bootstrap";
import Footer from "../../layouts/Footer";
import HeaderMobile from "../../layouts/HeaderMobile";
import Avatar from "../../components/Avatar";
import Header from "../../layouts/Header";

import img1 from "../../assets/img/img1.jpg";
import img6 from "../../assets/img/img6.jpg";
import img7 from "../../assets/img/img7.jpg";
import img8 from "../../assets/img/img8.jpg";
import img9 from "../../assets/img/img9.jpg";
import img10 from "../../assets/img/img10.jpg";
import img11 from "../../assets/img/img11.jpg";
import img12 from "../../assets/img/img12.jpg";
import img13 from "../../assets/img/img13.jpg";
import img14 from "../../assets/img/img14.jpg";
import img15 from "../../assets/img/img15.jpg";
import img16 from "../../assets/img/img16.jpg";
import img19 from "../../assets/img/img19.jpg";

export default function Poscategory() {
  // useEffect(() => {
  //   document.body.classList.add('app-music')
  //   return () => {
  //     document.body.classList.remove('app-music')
  //   }
  // }, []);
  return (
    <React.Fragment>
      <Header />
      <div className="main p-4 p-lg-5 mt-5 ">
        <Row className="g-5">
          <Col xl>
            <ol className="breadcrumb fs-sm mb-2">
            <li className="breadcrumb-item"><Link to="#">Dashboard </Link></li>
              <li className="breadcrumb-item"><Link to="#"> Point on Sales</Link></li>
              <li className="breadcrumb-item active"><Link to="#">Category</Link></li>   
            </ol>
            <h2 className="main-title">Category</h2>

            <div className="main-label-group mb-3">
              <label>Active Category</label>
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
              ].map((event, index) => (
                <Col sm="6" md="3" key={index}>
                  <Card className="card-event">
                    <Link to="#"><img src={event.img} className="card-img-top" alt="" /></Link>
                    <Card.Body>
                      <h6><Link to="">{event.name}</Link></h6>
                      <p className="mb-0">{event.date}</p>
                      <p className="text-secondary fs-sm">{event.position}</p>
                    </Card.Body>
                    <Card.Footer>
                      <Button variant="primary"><i className="ri-star-line"></i> Interested</Button>
                      <Button variant="" className="btn-white"><i className="ri-share-box-line"></i> Share</Button>
                    </Card.Footer>
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
              ].map((event, index) => (
                <Col sm="6" md="3" key={index}>
                  <Card className="card-event">
                    <Link to="#"><img src={event.img} className="card-img-top" alt="" /></Link>
                    <Card.Body>
                      <h6><Link to="">{event.name}</Link></h6>
                      <p className="mb-0">{event.date}</p>
                      <p className="text-secondary fs-sm">{event.position}</p>
                    </Card.Body>
                    <Card.Footer>
                      <Button variant="primary"><i className="ri-star-line"></i> Interested</Button>
                      <Button variant="" className="btn-white"><i className="ri-share-box-line"></i> Share</Button>
                    </Card.Footer>
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
              ].map((event, index) => (
                <Col sm="6" md="3" key={index}>
                  <Card className="card-event">
                    <Link to="#"><img src={event.img} className="card-img-top" alt="" /></Link>
                    <Card.Body>
                      <h6><Link to="">{event.name}</Link></h6>
                      <p className="mb-0">{event.date}</p>
                      <p className="text-secondary fs-sm">{event.position}</p>
                    </Card.Body>
                    <Card.Footer>
                      <Button variant="primary"><i className="ri-star-line"></i> Interested</Button>
                      <Button variant="" className="btn-white"><i className="ri-share-box-line"></i> Share</Button>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>


          </Col>
          <Col xl="4" xxl="3" className="d-none d-xl-block">
            <Card>
              <Card.Header>
                <Card.Title>Add New Category</Card.Title>
              </Card.Header>
              <Card.Body> hello</Card.Body>
            </Card>
          </Col>
        </Row>

        <Footer />
      </div>
    </React.Fragment>
  );
}