import React, { useEffect, useState } from "react";
import Header from "../layouts/Header";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Button, Card, Col, Dropdown, Form, Nav, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";

import img10 from "../assets/img/img10.jpg";
import img11 from "../assets/img/img11.jpg";
import img12 from "../assets/img/img12.jpg";
import img14 from "../assets/img/img14.jpg";
import img16 from "../assets/img/img16.jpg";
import img17 from "../assets/img/img17.jpg";
import img18 from "../assets/img/img18.jpg";
import img19 from "../assets/img/img19.jpg";

export default function Email() {

  useEffect(() => {
    document.body.classList.add('page-app');
    return () => {
      document.body.classList.remove('page-app');
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

  const [showContent, setShowContent] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [emailActive, setEmailActive] = useState(null);
  const [showCompose, setShowCompose] = useState(false);
  const [minimize, setMinimize] = useState(false);
  const [maximize, setMaximize] = useState(false);

  return (
    <React.Fragment>
      <Header />
      <div className={"main main-email" + (showContent? " show-content" : "") + (showSidebar? " show" : "") }>
        <PerfectScrollbar className="email-sidebar p-4">
          <div className="d-grid mb-4">
            <Button variant="primary" onClick={() => setShowCompose(true)}>Compose</Button>
          </div>

          <Nav className="nav-sidebar">
            <Nav.Link href="" className="active"><i className="ri-inbox-fill"></i> Inbox</Nav.Link>
            <Nav.Link href=""><i className="ri-mail-star-line"></i> Starred</Nav.Link>
            <Nav.Link href=""><i className="ri-bookmark-line"></i> Important</Nav.Link>
            <Nav.Link href=""><i className="ri-mail-send-line"></i> Sent Mail</Nav.Link>
            <Nav.Link href=""><i className="ri-draft-line"></i> Drafts</Nav.Link>
            <Nav.Link href=""><i className="ri-spam-line"></i> Spam</Nav.Link>
            <Nav.Link href=""><i className="ri-delete-bin-line"></i> Trash</Nav.Link>
          </Nav>

          <hr />

          <label className="sidebar-label mb-2">Labels</label>
          <Nav className="nav-sidebar">
            <Nav.Link href=""><i className="ri-group-line"></i> Social</Nav.Link>
            <Nav.Link href=""><i className="ri-folder-info-line"></i> Updates</Nav.Link>
            <Nav.Link href=""><i className="ri-trophy-line"></i> Promotions</Nav.Link>
            <Nav.Link href=""><i className="ri-discuss-line"></i> Forums</Nav.Link>
            <Nav.Link href=""><i className="ri-exchange-dollar-line"></i> Finance</Nav.Link>
            <Nav.Link href=""><i className="ri-bug-line"></i> Bug Reports</Nav.Link>
          </Nav>
        </PerfectScrollbar>
        <PerfectScrollbar className="email-list">
          <div className="email-list-header pe-3">
            <Link href="" className="email-menu" onClick={() => setShowSidebar(!showSidebar)}><i className="ri-arrow-left-line"></i></Link>

            <h5 className="mb-0">Inbox</h5>

            <Dropdown align="end" className="ms-auto">
              <Dropdown.Toggle as={CustomToggle}>
                <i className="ri-more-2-fill"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <label>Select</label>
                <Dropdown.Item href="" className="active">None</Dropdown.Item>
                <Dropdown.Item href="">All</Dropdown.Item>
                <Dropdown.Item href="">Read</Dropdown.Item>
                <Dropdown.Item href="">Unread</Dropdown.Item>
                <Dropdown.Item href="">Starred</Dropdown.Item>
                <Dropdown.Item href="">Custom</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {[
            {
              "date": "Today",
              "emails": [
                {
                  "unread": true,
                  "avatar": img11,
                  "sender": "Dyanne Aceron",
                  "star": "line",
                  "time": "1:20pm",
                  "subject": "Asking some few questions",
                  "summary": "It is a long established fact that a reader will be distracted by the readable..."
                }, {
                  "avatar": img10,
                  "sender": "Reynante Labares",
                  "star": "fill",
                  "time": "11:45am",
                  "subject": "30 seconds survey to your next job",
                  "summary": "The point of using Lorem Ipsum is that it has a more-or-less normal distribu..."
                }
              ]
            }, {
              "date": "Yesterday",
              "emails": [
                {
                  "avatar": img19,
                  "sender": "Mary Johnson",
                  "star": "line",
                  "time": "05:22pm",
                  "subject": "Reactivate and reconnect",
                  "summary": "Excepteur sint occa cupidatat non pro ident, sunt in culpa qui officia..."
                }, {
                  "initial": {
                    "letter": "p",
                    "bg": "info"
                  },
                  "sender": "Patricia Anderson",
                  "star": "line",
                  "time": "03:14pm",
                  "subject": "Score Midnight Flash Deals",
                  "summary": "Many desktop publishing packages and web page editors now use Lorem Ip..."
                }, {
                  "unread": true,
                  "avatar": img12,
                  "sender": "Joyce Trimmer",
                  "star": "fill",
                  "time": "09:46am",
                  "subject": "New Earnings Insights",
                  "summary": "Many desktop publishing packages and web page editors now use Lorem Ip..."
                }
              ]
            }, {
              "date": "August 20",
              "emails": [
                {
                  "avatar": img16,
                  "sender": "Leslie Cañete",
                  "star": "line",
                  "time": "04:44pm",
                  "subject": "Please Verify Your Email Address",
                  "summary": "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit..."
                }
              ]
            }, {
              "date": "August 16",
              "emails": [
                {
                  "avatar": img17,
                  "sender": "Gerald Dominggo",
                  "star": "line",
                  "time": "10:23pm",
                  "subject": "Upcoming Annual Tech Talks",
                  "summary": "Tempo ribus autem quibus dam et aut officiis debitis aut rerum nam libero..."
                }, {
                  "initial": {
                    "letter": "r",
                    "bg": "teal"
                  },
                  "sender": "Richard Simbulas",
                  "star": "line",
                  "time": "06:16pm",
                  "subject": "Changes to your Basic Plan",
                  "summary": "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit..."
                }
              ]
            }, {
              "date": "August 15",
              "emails": [
                {
                  "unread": true,
                  "initial": {
                    "letter": "j",
                    "bg": "primary"
                  },
                  "sender": "James Segovia",
                  "star": "line",
                  "time": "02:28pm",
                  "subject": "Developer Position: Remote",
                  "summary": "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit..."
                }, {
                  "avatar": img18,
                  "sender": "Lanie Celeres",
                  "star": "line",
                  "time": "01:30am",
                  "subject": "Reserve Your Spot Today",
                  "summary": "The point of using Lorem Ipsum is that it has a more-or-less normal distributio..."
                }
              ]
            }
          ].map((group, index) => (
            <React.Fragment key={index}>
              <label className="email-list-label">{group.date}</label>
              {group.emails.map((email, ind) => (
                <div
                  className={"email-item" + (email.unread ? " unread" : "") + ((emailActive === (index.toString() + ind.toString())) ? " selected" : "")}
                  key={index.toString() + ind.toString()}
                  onClick={(e) => {
                    setShowContent(true);
                    setEmailActive(index.toString() + ind.toString());
                    setShowSidebar(false);
                  }}
                >
                  <div className="avatar">
                    {email.avatar && <img src={email.avatar} alt="" />}
                    {email.initial && <span className={"avatar-initial bg-" + email.initial.bg}>{email.initial.letter}</span>}
                  </div>
                  <div className="email-item-body">
                    <div className="d-flex align-items-center mb-1">
                      <span className="email-item-sender">{email.sender}</span>
                      <Link href="" className={"email-item-star" + ((email.star === "fill") ? " active" : "")}>
                        <i className={"ri-star-" + email.star}></i>
                      </Link>
                      <span className="email-item-date">{email.time}</span>
                    </div>
                    <h6 className="email-item-subject">{email.subject}</h6>
                    <p className="email-item-summary">{email.summary}</p>
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
        </PerfectScrollbar>

        <PerfectScrollbar className={"email-content" + (showContent ? " show" : "")}>
          <div className="email-content-empty">No email has been selected</div>
          <div className="email-content-header">
            <Nav as="nav">
              <Nav.Link href="#" className="d-xl-none" onClick={() => setShowContent(false)}><i className="ri-arrow-left-line"></i></Nav.Link>
              {[
                {
                  "title": "Archive",
                  "icon": "ri-archive-drawer-line"
                }, {
                  "title": "Report Spam",
                  "icon": "ri-spam-2-line"
                }, {
                  "title": "Labels",
                  "icon": "ri-price-tag-line"
                }, {
                  "title": "Print",
                  "icon": "ri-printer-line"
                }, {
                  "title": "Delete",
                  "icon": "ri-delete-bin-5-line",
                  "addonClass": "ms-auto"
                }, {
                  "title": "More",
                  "icon": "ri-more-2-fill"
                }
              ].map((menu, index) => (
                <OverlayTrigger key={index} placement="bottom" overlay={<Tooltip>{menu.title}</Tooltip>}>
                  <Nav.Link className={menu.addonClass && menu.addonClass}><i className={menu.icon}></i></Nav.Link>
                </OverlayTrigger>
              ))}
              <Nav.Link href=""><i className="ri-arrow-left-s-line"></i></Nav.Link>
              <Nav.Link href=""><i className="ri-arrow-right-s-line"></i></Nav.Link>
            </Nav>
          </div>
          <div className="email-content-body p-4">
            <div className="email-msg-item">
              <div className="d-flex align-items-center fs-sm mb-4">
                <div className="avatar online me-3">
                  <img src={img14} alt="" />
                </div>
                <div className="me-auto">
                  <p className="mb-0">
                    <strong>David Doe </strong>
                    <span className="text-secondary">&lt;david.doe@domain.com&gt;</span>
                  </p>
                  <p className="mb-0">
                    <span className="text-secondary">To: </span>
                    <strong>Themepixels</strong>
                  </p>
                </div>
                <span className="fs-xs text-secondary d-none">11:15am (3 hours ago)</span>
                <Nav className="nav-icon ms-3">
                  <Nav.Link href="" className="d-none d-sm-block"><i className="ri-star-line"></i></Nav.Link>
                  <Nav.Link href="" className="d-none d-sm-block"><i className="ri-reply-line"></i></Nav.Link>
                  <Nav.Link href=""><i className="ri-more-2-fill"></i></Nav.Link>
                </Nav>
              </div>

              <div>
                <h4 className="text-dark mb-4">Asking some few questions</h4>

                <p>Dear Maam/Sir,</p>

                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                <p>Best regards,<br /><strong>David Doe</strong></p>

                <hr className="my-4" />

                <label className="section-label mb-2">2 Attachments</label>
                <Row className="g-3 row-cols-auto">
                  <Col>
                    <Card className="card-attachment">
                      <Card.Body>
                        <div className="card-icon primary">
                          <i className="ri-file-zip-line"></i>
                        </div>
                        <div className="card-content">
                          <h6><Link to="#">MarketingAssets.zip</Link></h6>
                          <span>835kb</span>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card className="card-attachment">
                      <Card.Body>
                        <div className="card-icon success">
                          <i className="ri-file-excel-line"></i>
                        </div>
                        <div className="card-content">
                          <h6><Link href="#">Marketing_Report.xls</Link></h6>
                          <span>922kb</span>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>

              </div>
            </div>

            <hr className="my-4" />

            <div className="compose-wrapper">
              <Form.Control as="textarea" rows="4" placeholder="Type here to Reply or Forward"></Form.Control>
              <div className="d-flex align-items-center mt-1">
                <Nav className="nav-icon py-3">
                  <Nav.Link href=""><i className="ri-bold"></i></Nav.Link>
                  <Nav.Link href=""><i className="ri-italic"></i></Nav.Link>
                  <Nav.Link href=""><i className="ri-underline"></i></Nav.Link>
                </Nav>
                <Nav className="nav-icon py-3 ms-3">
                  <Nav.Link href=""><i className="ri-attachment-line"></i></Nav.Link>
                  <Nav.Link href=""><i className="ri-image-line"></i></Nav.Link>
                </Nav>
                <Button variant="primary" className="ms-auto">Reply</Button>
              </div>
            </div>

          </div>
        </PerfectScrollbar>

        <div className={"compose" + (!showCompose? " d-none" : "") + (maximize? " fullscreen" : "") + (minimize? " minimize" : "")}>
          <div className="compose-content">
            <div className="compose-header">
              <h6 className="compose-title">New Message</h6>
              <Nav as="nav">
                <Nav.Link 
                  href="#" 
                  className="nav-link-minimize"
                  onClick={() => setMinimize(!minimize)}
                >
                  <i className="ri-subtract-line"></i>
                </Nav.Link>
                <Nav.Link href="#" className="nav-link-fullscreen" onClick={() => setMaximize(!maximize)}>
                  <i className="ri-fullscreen-line"></i>
                  <i className="ri-fullscreen-exit-line"></i>
                </Nav.Link>
                <Nav.Link href="#" className="nav-link-close" onClick={() => {
                  setShowCompose(false);
                  setMaximize(false);
                  setMinimize(false);
                }}>
                  <i className="ri-close-line"></i>
                </Nav.Link>
              </Nav>
            </div>
            <div className="compose-body">
              <Form.Group>
                <Form.Control type="text" placeholder="Enter receipient's email address" />
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" placeholder="Enter subject" />
              </Form.Group>
              <Form.Group>
                <Form.Control as="textarea" rows="10" />
              </Form.Group>
            </div>
            <Nav className="nav-toolbar">
              <Nav.Link href=""><i className="ri-arrow-go-back-line"></i></Nav.Link>
              <Nav.Link href=""><i className="ri-arrow-go-forward-line"></i></Nav.Link>
              <span className="nav-separator"></span>
              <Nav.Link href=""><i className="ri-text"></i></Nav.Link>
              <Nav.Link href=""><i className="ri-bold"></i></Nav.Link>
              <Nav.Link href=""><i className="ri-italic"></i></Nav.Link>
              <Nav.Link href=""><i className="ri-underline"></i></Nav.Link>
              <Nav.Link href=""><i className="ri-align-left"></i></Nav.Link>
              <Nav.Link href=""><i className="ri-list-check"></i></Nav.Link>
              <span className="nav-separator"></span>
              <Nav.Link href=""><i className="ri-attachment-2"></i></Nav.Link>
              <Nav.Link href=""><i className="ri-link"></i></Nav.Link>
              <Nav.Link href=""><i className="ri-image-add-line"></i></Nav.Link>
              <Nav.Link href=""><i className="ri-emotion-line"></i></Nav.Link>
              <Nav.Link href=""><i className="ri-more-2-fill"></i></Nav.Link>
            </Nav>
            <div className="compose-footer">
              <Button variant="primary" type="submit" className="btn-icontext">Send</Button>
              <Button variant="" className="btn-white btn-icon"><i className="ri-delete-bin-line"></i></Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}