import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Form, Nav, Card, Button } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";
import Avatar from "../components/Avatar";

import img1 from "../assets/img/img1.jpg";
import img7 from "../assets/img/img7.jpg";
import img8 from "../assets/img/img8.jpg";
import img10 from "../assets/img/img10.jpg";
import img11 from "../assets/img/img11.jpg";
import img12 from "../assets/img/img12.jpg";
import img13 from "../assets/img/img13.jpg";
import img14 from "../assets/img/img14.jpg";
import img15 from "../assets/img/img15.jpg";
import img20 from "../assets/img/img20.jpg";
import img21 from "../assets/img/img21.jpg";
import img22 from "../assets/img/img22.jpg";
import img23 from "../assets/img/img23.jpg";
import img24 from "../assets/img/img24.jpg";
import img25 from "../assets/img/img25.jpg";
import img26 from "../assets/img/img26.jpg";

export default function Events() {
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main p-4 p-lg-5">
        <Row className="g-5">
          <Col xl>
            <ol className="breadcrumb fs-sm mb-2">
              <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
              <li className="breadcrumb-item"><Link to="#">User Pages</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Events</li>
            </ol>
            <h2 className="main-title">Discover Events</h2>

            <Nav className="nav-line mb-4">
              <Nav.Link href="" className="active">Top Events</Nav.Link>
              <Nav.Link href="">Local</Nav.Link>
              <Nav.Link href="">Classes</Nav.Link>
              <Nav.Link href="">Online</Nav.Link>
              <Nav.Link href="">Connections</Nav.Link>
            </Nav>

            <Row className="g-3">
              {[
                {
                  "imgtop": img20,
                  "title": "Dirt Bike Championship",
                  "date": "Mar 22 - Mar 24",
                  "location": "Metro Arena, Quezon City",
                  "mutual": [img1, img12],
                  "mutualprimary": "Rhea",
                  "mutualcount": 5
                },{
                  "imgtop": img21,
                  "title": "Reggae Music Showdown",
                  "date": "Mar 30 - Mar 31",
                  "location": "Cebu Business Park, Cebu City",
                  "mutual": [img15, img14],
                  "mutualprimary": "Ian",
                  "mutualcount": 2
                },{
                  "imgtop": img22,
                  "title": "Fishing Tournament",
                  "date": "Apr 10 - Apr 15",
                  "location": "Lite Port, Tagbilaran City",
                  "mutual": [img10, img11],
                  "mutualprimary": "You",
                  "mutualcount": 7
                },{
                  "imgtop": img23,
                  "title": "Dog Showdown",
                  "date": "Apr 18 - Apr 19",
                  "location": "Bay Area, San Francisco, CA",
                  "mutual": [img15, img7],
                  "mutualprimary": "Mary",
                  "mutualcount": 12
                },{
                  "imgtop": img24,
                  "title": "8th Fun Run 2023",
                  "date": "May 01 - May 03",
                  "location": "Mountain View, California",
                  "mutual": [img7, img8],
                  "mutualprimary": "You",
                  "mutualcount": 4
                },{
                  "imgtop": img25,
                  "title": "Bike Festival 2023",
                  "date": "May 05 - May 06",
                  "location": "AS Fortuna, Mandaue City",
                  "mutual": [img11, img12],
                  "mutualprimary": "You",
                  "mutualcount": 9
                },{
                  "imgtop": img26,
                  "title": "Scuba Diving Fest 2023",
                  "date": "Jun 16 - Jun 18",
                  "location": "Mactan, Lapulapu City",
                  "mutual": [img13, img14],
                  "mutualprimary": "You",
                  "mutualcount": 4
                }
              ].map((event, index) => (
                <Col sm="6" key={index}>
                  <Card className="card-event">
                    <Link to="#"><img src={event.imgtop} className="card-img-top" alt="" /></Link>
                    <Card.Body>
                      <h6><Link to="">{event.title}</Link></h6>
                      <p className="mb-0">{event.date}</p>
                      <p className="text-secondary fs-sm">{event.location}</p>

                      <div className="mutual-badge">
                        <ul>
                          {event.mutual.map((img, ind) => (
                            <li key={ind}><Avatar img={img} /></li>
                          ))}
                        </ul>
                        <label>{event.mutualprimary} and {event.mutualcount} connections interested</label>
                      </div>
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
          <Col xl="4" className="d-none d-xl-block">
            <div className="form-search">
              <i className="ri-search-line"></i>
              <Form.Control type="text" placeholder="Search events" />
            </div>

            <hr className="my-3 opacity-0" />

            <h5 className="section-title mb-4">Your Events</h5>
            <ul className="event-group">
              <li className="event-item">
                <div className="event-icon"><i className="ri-cake-2-line"></i></div>
                <div className="event-body">
                  <h6><Link to="">37th Birthday Celebration</Link></h6>
                  <p>Tomorrow, April 21, 6:00pm</p>
                  <div className="mutual-badge">
                    <ul>
                      <li><Avatar img={img13} /></li>
                      <li><Avatar img={img14} /></li>
                    </ul>
                    <label>Lea and 4 others are going</label>
                  </div>
                </div>
              </li>
              <li className="event-item">
                <div className="event-icon bg-secondary"><i className="ri-restaurant-fill"></i></div>
                <div className="event-body">
                  <h6><Link to="">Food Restobar Opening</Link></h6>
                  <p>Friday, April 27, 8:00am</p>
                  <div className="mutual-badge">
                    <ul>
                      <li><Avatar img={img13} /></li>
                      <li><Avatar img={img14} /></li>
                    </ul>
                    <label>Lea and 4 others are going</label>
                  </div>
                </div>
              </li>
              <li className="event-item">
                <div className="event-icon bg-primary"><i className="ri-roadster-line"></i></div>
                <div className="event-body">
                  <h6><Link to="">Monster Trucks Event</Link></h6>
                  <p>Saturday, April 30, 9:00m</p>
                  <div className="mutual-badge">
                    <ul>
                      <li><Avatar img={img13} /></li>
                      <li><Avatar img={img14} /></li>
                    </ul>
                    <label>You and 8 others are going</label>
                  </div>
                </div>
              </li>
            </ul>

            <hr className="my-4 opacity-0" />

            <h5 className="section-title">Events By Category</h5>
            <p className="text-secondary fs-sm mb-4">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>

            <Nav className="nav-classic">
              {[
                {
                  "icon": "ri-palette-line",
                  "name": "Arts & Crafts",
                  "count": 20
                }, {
                  "icon": "ri-heart-pulse-line",
                  "name": "Fitness",
                  "count": 18
                }, {
                  "icon": "ri-restaurant-line",
                  "name": "Food & Drinks",
                  "count": 14
                }, {
                  "icon": "ri-gamepad-line",
                  "name": "Games",
                  "count": 12
                }, {
                  "icon": "ri-first-aid-kit-line",
                  "name": "Health & Medical",
                  "count": 10
                }, {
                  "icon": "ri-home-8-line",
                  "name": "Home & Garden",
                  "count": 11
                }, {
                  "icon": "ri-music-2-line",
                  "name": "Music & Audio",
                  "count": 34
                }, {
                  "icon": "ri-robot-line",
                  "name": "Religions",
                  "count": 2
                }, {
                  "icon": "ri-shopping-bag-line",
                  "name": "Shopping",
                  "count": 16
                }, {
                  "icon": "ri-basketball-line",
                  "name": "Sports",
                  "count": 12
                }, {
                  "icon": "ri-tv-line",
                  "name": "TV & Movies",
                  "count": 45
                }
              ].map((category, index) => (
                <Nav.Link href="" key={index}><i className={category.icon}></i><span>{category.name}</span> <span className="badge">{category.count}</span></Nav.Link>
              ))}
            </Nav>

          </Col>
        </Row>

        <Footer />
      </div>
    </React.Fragment>
  );
}