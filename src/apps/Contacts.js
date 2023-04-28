import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { Button, Col, Dropdown, Nav, Row } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import Avatar from "../components/Avatar";

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
import img17 from "../assets/img/img17.jpg";
import img18 from "../assets/img/img18.jpg";
import img19 from "../assets/img/img19.jpg";

export default function Contacts() {
  useEffect(() => {
    document.body.classList.add('page-app')
    return () => {
      document.body.classList.remove('page-app')
    }
  }, []);

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Link
      to=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="header-link"
    >
      {children}
    </Link>
  ));

  const contactGroup = [
    {
      "group": "A",
      "items": [
        {
          "status": "offline",
          "thumb": img11,
          "name": "Abigaile Johnson",
          "contact": "+1-234-567-890",
          "selected": true
        }, {
          "status": "online",
          "thumb": img9,
          "name": "Angeline Cantones",
          "contact": "angeline@cantones.com"
        }, {
          "status": "online",
          "initial": "primary",
          "name": "Allan Rey Palban",
          "contact": "allanrey@palban.com"
        }, {
          "status": "online",
          "initial": "pink",
          "name": "Aileen Palomares",
          "contact": "aileen@palomares.com"
        }
      ]
    }, {
      "group": "B",
      "items": [
        {
          "status": "offline",
          "thumb": img14,
          "name": "Bellamy Newton",
          "contact": "+1-890-1234-567"
        }, {
          "status": "online",
          "initial": "purple",
          "name": "Brenda Wilkins",
          "contact": "+1-567-8901-234"
        }, {
          "status": "online",
          "thumb": img17,
          "name": "Bob Wise",
          "contact": "bob@wise.com"
        }
      ]
    }, {
      "group": "C",
      "items": [
        {
          "status": "offline",
          "thumb": img6,
          "name": "Clifford Solis",
          "contact": "+1-001-2236-445"
        }
      ]
    }, {
      "group": "D",
      "items": [
        {
          "status": "offline",
          "thumb": img7,
          "name": "Daniel Stewart",
          "contact": "+1-201-2345-876"
        }, {
          "status": "offline",
          "thumb": img10,
          "name": "David Barrett",
          "contact": "+1-323-5432-101"
        }, {
          "status": "offline",
          "thumb": img8,
          "name": "Dinah Webster",
          "contact": "dinah@webster.com"
        }, {
          "status": "online",
          "initial": "success",
          "name": "Dindo Robertson",
          "contact": "dindo@robertson.com"
        }
      ]
    }, {
      "group": "E",
      "items": [
        {
          "status": "online",
          "thumb": img11,
          "name": "Emily Blunt",
          "contact": "emily@blunt.com"
        }
      ]
    }, {
      "group": "G",
      "items": [
        {
          "status": "online",
          "initial": "info",
          "name": "Georgie Kavkaz",
          "contact": "georgie@kavkaz.com"
        }, {
          "status": "online",
          "initial": "danger",
          "name": "Guztavo Diaz",
          "contact": "+2 345 6789 012"
        }
      ]
    }, {
      "group": "H",
      "items": [
        {
          "status": "online",
          "thumb": img12,
          "name": "Honey Lee",
          "contact": "+9 012 3456 789"
        }
      ]
    }, {
      "group": "J",
      "items": [
        {
          "status": "offline",
          "thumb": img19,
          "name": "Joanna Cesar",
          "contact": "+7 890 1234 567"
        }, {
          "status": "online",
          "thumb": img18,
          "name": "Jane Doe",
          "contact": "+5 678 9012 345"
        }, {
          "status": "online",
          "thumb": img16,
          "name": "Janice Bentulan",
          "contact": "janice@bentulan.com"
        }
      ]
    }, {
      "group": "M",
      "items": [
        {
          "status": "online",
          "initial": "indigo",
          "name": "Marie Recamada",
          "contact": "marie@recamadas.org"
        }
      ]
    }, {
      "group": "P",
      "items": [
        {
          "status": "online",
          "initial": "warning",
          "name": "Pamela Anderson",
          "contact": "pamela@andreson.com"
        }
      ]
    }, {
      "group": "S",
      "items": [
        {
          "status": "online",
          "thumb": img15,
          "name": "Samantha Perez",
          "contact": "+3 456 7890 123"
        }
      ]
    }, {
      "group": "Z",
      "items": [
        {
          "status": "online",
          "thumb": img13,
          "name": "Zenaida Sanchez",
          "contact": "+4 567 8901 234"
        }
      ]
    }
  ];

  // toggle contact sidebar in mobile
  const [isSidebarShow, setSidebarShow] = useState(false);

  const sidebarShow = () => {
    setSidebarShow(!isSidebarShow);
  };

  return (
    <React.Fragment>
      <Header />
      <div className="main main-app p-3 p-lg-4">
        <div className={"contact-panel " + (isSidebarShow? "sidebar-show": "")}>
          <PerfectScrollbar className="contact-sidebar">
            <div className="mb-4">
              <Button variant="primary" className="btn-contact-new">
                <i className="ri-add-fill"></i> Add New Contact
              </Button>
            </div>

            <Nav className="nav-sidebar">
              <Nav.Link href="" className="active"><i className="ri-contacts-fill"></i>All Contacts <small>264</small></Nav.Link>
              <Nav.Link href=""><i className="ri-archive-line"></i> Archive</Nav.Link>
              <Nav.Link href=""><i className="ri-group-line"></i> Other Contacts <small>25</small></Nav.Link>
              <Nav.Link href=""><i className="ri-delete-bin-line"></i> Trash</Nav.Link>
            </Nav>

            <hr />

            <label className="sidebar-label mb-2">Labels</label>
            <Nav className="nav-sidebar">
              <Nav.Link href=""><i className="ri-price-tag-line"></i> From Google <small>65</small></Nav.Link>
              <Nav.Link href=""><i className="ri-price-tag-line"></i> From iPhone <small>24</small></Nav.Link>
              <Nav.Link href=""><i className="ri-price-tag-line"></i> 11/08 Import <small>36</small></Nav.Link>
            </Nav>

            <hr />

            <Nav className="nav-sidebar">
              <Nav.Link href=""><i className="ri-download-2-line"></i> Import</Nav.Link>
              <Nav.Link href=""><i className="ri-upload-2-line"></i> Export</Nav.Link>
              <Nav.Link href=""><i className="ri-printer-line"></i> Print</Nav.Link>
            </Nav>

          </PerfectScrollbar>
          <div className="contact-body">
            <div className="contact-list">
              <div className="contact-list-header">
                <Link onClick={sidebarShow} href="#" className="contact-menu d-xl-none"><i className="ri-arrow-left-line"></i></Link>
                <h6 className="sidebar-title me-auto">All Contacts</h6>

                <Dropdown align="end">
                  <Dropdown.Toggle as={CustomToggle}>
                    <i className="ri-more-2-fill"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href=""><i className="ri-contacts-book-2-line"></i> Display Density</Dropdown.Item>
                    <Dropdown.Item href=""><i className="ri-list-check-2"></i> Filter Contacts</Dropdown.Item>
                    <Dropdown.Item href=""><i className="ri-list-settings-line"></i> Contact Settings</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <PerfectScrollbar className="contact-list-body">
                {contactGroup.map((contact, index) => (
                  <React.Fragment key={index}>
                    <label className="sidebar-label mb-2">{contact.group}</label>
                    <div className="contact-group mb-3">
                      {contact.items.map((item, ind) => (
                        <div key={ind} className={item.selected ? "contact-item selected" : "contact-item"}>
                          <div className={"avatar " + item.status}>
                            {item.thumb && <img src={item.thumb} alt="" />}
                            {item.initial && <span className={"avatar-initial text-white bg-" + item.initial}>{contact.group}</span>}
                          </div>
                          <div className="contact-item-body">
                            <div className="d-flex align-items-center mb-1">
                              <h6 className="mb-0">{item.name}</h6>
                            </div>
                            <span>{item.contact}</span>
                          </div>
                          <Nav className="nav-icon">
                            <Nav.Link href=""><i className="ri-star-line"></i></Nav.Link>
                            <Nav.Link href=""><i className="ri-pencil-line"></i></Nav.Link>
                          </Nav>
                        </div>
                      ))}
                    </div>
                  </React.Fragment>
                ))}
              </PerfectScrollbar>

            </div>

            <PerfectScrollbar className="contact-content">
              <Link id="contactClose" href="" className="contact-close"><i className="ri-close-fill"></i></Link>
              <div className="d-sm-flex p-2 p-sm-4 p-md-2 p-xl-4">
                <div className="me-4 mb-3 mb-sm-0"><Avatar img={img11} /></div>
                <div className="flex-fill">
                  <h4 className="mb-1 text-dark fw-semibold">Abigaile Johnson</h4>
                  <p>Software Engineer at Themepixels, Inc.</p>
                  <div className="d-flex">
                    <Button variant="primary" className="px-5">Message</Button>
                    <Button variant="" className="btn-icon btn-gray ms-1"><i className="ri-star-line"></i></Button>
                    <Button variant="" className="btn-icon btn-gray ms-1"><i className="ri-more-fill"></i></Button>
                  </div>
                </div>
              </div>

              <hr />

              <Row>
                <Col xs="4" className="text-end text-secondary">Status</Col>
                <Col>
                  <strong className="fw-semibold">Do Not Disturb</strong> - Gambler, Tea Drinker, Ultimate Piggie, Replacement President of a Major Soft Drink Manufacturer. When I give out candies, I give people the flavour I don't like.
                </Col>
              </Row>

              <hr />

              <Row>
                <Col xs="4" className="text-end text-secondary">Email</Col>
                <Col>abigaile@johnson.com<br />ajohnson@gmail.com</Col>
              </Row>
              <Row className="mt-2">
                <Col xs="4" className="text-end text-secondary">Phone</Col>
                <Col>234-5678-901</Col>
              </Row>
              <Row className="mt-2">
                <Col xs="4" className="text-end text-secondary">Location</Col>
                <Col>Bay Area, San Francisco, CA</Col>
              </Row>

              <hr />

              <Nav className="nav-sidebar">
                <Nav.Link href=""><i className="ri-check-double-line"></i> Activity</Nav.Link>
                <Nav.Link href=""><i className="ri-list-check-2"></i> Call &amp; Message Logs</Nav.Link>
                <Nav.Link href=""><i className="ri-share-forward-line"></i> Share Contact</Nav.Link>
                <Nav.Link href=""><i className="ri-forbid-line"></i> Block Contact</Nav.Link>
                <Nav.Link href=""><i className="ri-delete-bin-line"></i> Delete Contact</Nav.Link>
              </Nav>

            </PerfectScrollbar>

          </div>
        </div>

        <Footer />
      </div>
    </React.Fragment>
  );
}