import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Nav, Row, Form, Button, Modal } from "react-bootstrap";
import { useState } from 'react';
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

// const [form, setform] = useState("")


export default function Poscategory() {
  // useEffect(() => {
  //   document.body.classList.add('app-music')
  //   return () => {
  //     document.body.classList.remove('app-music')
  //   }
  // }, []);
  // const onChangeHandler = (event) => {
  //   const { name, value } = event.target;
  //   setform({
  //     ...form,
  //     [event.target.name]: event.target.value
  //   })
  // }

  // async function AddPos(form) {
  //   console.log(form);
  //   const res = await mainservice.category(form, index.EmployeeID);
  //   if (res.data != null) {
  //     console.log("Employee Added");
  //   }
  //   else {
  //     console.log(res);
  //   }
  // }

  // const onSubmitHandler = (event) => {
  //   event.preventDefault();
  //   AddEmployee(form);
  // }
  // useEffect(() => {
  //   Poscategory()
  // }, []);

  const [showModal, setShowModal] = useState(false);
  // const [showInterestedModal, setShowInterestedModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showEventModal, setShowEventModal] = useState(false);
  const [showCity, setShowCity] = useState(false);
  const [showHometown, setshowHometown] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseyourCity = () => {
    setShowCity(false);
  }

  const handleShowCity = () => {
    setShowCity(true);
  }

  const handleCloseHometown = () => {
    setshowHometown(false);
  }

  const handleShowHometown = () => {
    setshowHometown(true);
  }


  // const handleCloseInterestedModal = () => {
  //   setShowInterestedModal(false);
  // };

  // const handleShowInterestedModal = () => {
  //   setShowInterestedModal(true);
  // };
  return (
    // <form onSubmit={onSubmitHandler}>
    <React.Fragment>
      <Header />
      <div className="main p-4 p-lg-5 mt-5 ">
        <Row className="g-5">
          <Col className="me-0">
            <ol className="breadcrumb fs-sm mb-2">
              <li className="breadcrumb-item"><Link to="#">Dashboard </Link></li>
              <li className="breadcrumb-item"><Link to="#"> Point on Sales</Link></li>
              <li className="breadcrumb-item active"><Link to="#">Products</Link></li>
              <Col className="d-grid gap-2 d-md-flex justify-content-md-end">
                <Button class="btn btn-primary" variant="primary" onClick={handleShowModal} className="w-20">
                  Add Product
                </Button>
              </Col>
            </ol>
            <h2 className="main-title">Product</h2>

            <Modal show={showModal} onHide={handleCloseModal} size="xl">
              <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Card>
                  <Card.Body>
                    <Row className="g-2">
                      <Col md="6">
                        <div className="mt-4">
                          <Form.Label htmlFor="ProductName">Product Name</Form.Label>
                          <Form.Control type="text" id="ProductName" name="ProductName" placeholder="Product Name" />
                        </div>
                      </Col>

                      <Col md="6">
                        <div className="mt-4">
                          <Form.Label htmlFor="Price">Price</Form.Label>
                          <Form.Control type="Number" id="Price" name="Price" placeholder="Price" />
                        </div>
                      </Col>
                    </Row>

                    <Row className="g-2">

                      <Col md="6">
                        <div className="mt-4">
                          <Form.Label htmlFor="TaxInformation">Tax Information</Form.Label>
                          <Form.Control type="text" id="TaxInformation" name="TaxInformation" placeholder="Tax Information" />
                        </div>
                      </Col>

                      <Col md="6">
                        <div className="mt-4">
                          <Form.Label htmlFor="Discounts">Discounts</Form.Label>
                          <Form.Control type="text" id="Discounts" name="Discounts" placeholder="Discounts" />
                        </div>
                      </Col>
                    </Row>

                    <Row className="g-2">
                      <Col md="6">
                        <div className="mt-4">
                          <Form.Label htmlFor="StockQuantity">Stock Quantity</Form.Label>
                          <Form.Control type="text" id="StockQuantity" name="StockQuantity" placeholder="Stock Quantity" />
                        </div>
                      </Col>

                      <Col md="6">
                        <div className="mt-4">
                          <Form.Label htmlFor="Unit">Unit</Form.Label>
                          <Form.Control type="text" id="Unit" name="Unit" placeholder="Unit" />
                        </div>
                      </Col>
                    </Row>

                    <Row className="g-2">
                      <Col xs="12">
                        <div className="mt-4">
                          <Form.Label htmlFor="Description">Description</Form.Label>
                          <Form.Control as="textarea" id="Description" rows="4" name="Description" placeholder="Description" />
                        </div>
                      </Col>
                    </Row>

                  </Card.Body>
                </Card>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Close
                </Button>
                <Button variant="primary">Submit</Button>
              </Modal.Footer>
            </Modal>


            <div className="main-label-group mb-3">
              <label>Active Product</label>
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
                    <Card.Body className="w-100">
                      <h6><Link to="">{event.name}</Link></h6>
                      <p className="text-secondary fs-sm">{event.position}</p>
                    </Card.Body>
                    <Card.Footer>
                      <Button
                        variant="primary"
                        onClick={() => {
                          setSelectedEvent(event);
                          setShowEventModal(true);
                        }}
                        type="button"
                      >
                        <i className="ri-star-line"></i> Interested
                      </Button>
                      <Button variant="" className="btn-white me-2">
                        <i className="ri-share-box-line"></i> Share
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}

              <Modal show={showEventModal} onHide={() => setShowEventModal(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>Event Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {selectedEvent && (
                    <div>
                      <img className="w-100" src={selectedEvent.img} alt={selectedEvent.name} />
                      <h4>{selectedEvent.name}</h4>
                      <p>{selectedEvent.position}</p>
                    </div>
                  )}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={() => setShowEventModal(false)}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
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
                  "mutual": [img1, img12],

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
                      <p className="text-secondary fs-sm">{event.position}</p>
                    </Card.Body>
                    <Card.Footer>
                      <Button
                        variant="primary"
                        onClick={() => {
                          setSelectedEvent(event);
                          setShowCity(true);
                          handleCloseyourCity()
                          handleShowCity()
                        }}
                        type="button"
                      >
                        <i className="ri-star-line"></i> Interested
                      </Button>
                      <Button variant="" className="btn-white me-2">
                        <i className="ri-share-box-line"></i> Share
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}

              <Modal show={showCity} onHide={() => setShowCity(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>Event Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {selectedEvent && (
                    <div>
                      <img className="w-100" src={selectedEvent.img} alt={selectedEvent.name} />
                      <h4>{selectedEvent.name}</h4>
                      <p>{selectedEvent.position}</p>
                    </div>
                  )}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={() => setShowCity(false)}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
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
                      <p className="text-secondary fs-sm">{event.position}</p>
                    </Card.Body>
                    <Card.Footer>
                      <Button
                        variant="primary"
                        onClick={() => {
                          setSelectedEvent(event);
                          setshowHometown(true);
                          handleCloseHometown()
                          handleShowHometown()
                        }}
                        type="button"
                      >
                        <i className="ri-star-line"></i> Interested
                      </Button>
                      <Button variant="" className="btn-white me-2">
                        <i className="ri-share-box-line"></i> Share
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}

              <Modal show={showHometown} onHide={() => setshowHometown(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>Event Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {selectedEvent && (
                    <div>
                      <img className="w-100" src={selectedEvent.img} alt={selectedEvent.name} />
                      <h4>{selectedEvent.name}</h4>
                      <p>{selectedEvent.position}</p>
                    </div>
                  )}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={() => setshowHometown(false)}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Row>

          </Col>
        </Row>
        <Footer />
      </div>
    </React.Fragment>
    // </form>
  );
}