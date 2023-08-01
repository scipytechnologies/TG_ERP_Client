import React, { useState, useEffect } from "react";
import Header from "../../layouts/Header";
import { Button, Card, Col, Nav, Row } from "react-bootstrap";
import Avatar from "../../components/Avatar";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../../assets/img/img1.jpg";
import Attendence from "../../components/attendence/Attendence";
import mainservice from "../../services/mainservice";
import { useSelector, useDispatch } from "react-redux";
import PerfectScrollbar from "react-perfect-scrollbar";

function EmployeeProfile() {
  const user = useSelector((state) => state.loginedUser);
  const index = useSelector((state) => state.index);

  const currentSkin = localStorage.getItem("skin-mode") ? "dark" : "";
  const [skin, setSkin] = useState(currentSkin);
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("1");
  const handleTabs = (no) => {
    setActiveTab(no);
  };
  async function getEmployeeByUserID() {
    const res = await mainservice.getEmployeeByUserID(
      index.EmployeeID,
      user.id
    );
    console.log(res.data);
    setData(res.data);
  }
  useEffect(() => {
    getEmployeeByUserID();
  }, []);

  return (
    <div>
      <Header onSkin={setSkin} />
      <div className="main main-app p-3 p-lg-4">
        <div className="d-md-flex align-items-center justify-content-between mb-0">
          <div>
            <ol className="breadcrumb fs-sm mb-1">
              <li className="breadcrumb-item">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/dashboard/employee">Employee</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Employee Profile
              </li>
            </ol>
            <h4 className="main-title mt-2 mb-0">Profile</h4>
            <p className="w-100 fs-sm text-secondary">Employee details</p>
          </div>

          {/* <Button variant="primary" className="d-flex align-items-center gap-2" onClick={() => navigate('/dashboard/Employee/addEmployee')}>
                        <i className="ri-bar-chart-2-line fs-18 lh-1"></i>Add Employee<span className="d-none d-sm-inline"></span>
                    </Button> */}
        </div>

        <Card className="p-2 mt-0">
          <Card.Body>
            <div className="media-profile mb-5">
              <div className="media-img mb-3 mb-sm-0">
                <img src={img1} className="img-fluid" alt="..." />
              </div>
              <div className="media-body">
                <h5 className="media-name">
                  {data.firstName + " " + data.lastName}
                </h5>
                <p className="d-flex gap-2 mb-4">{data.Designation}</p>
                <div className="d-flex justify-content-between border mb-2 p-2 bg-#000000">
                  <div className="w-50 border mb-2 p-2">
                    Employee ID : <strong>{data.EmpCode} </strong>{" "}
                  </div>
                  <div className="w-50 border mb-2 p-2">
                    E-mail : <strong>{data.Email} </strong>
                  </div>
                  <div className="w-50 border mb-2 p-2">
                    Department : <strong>{data.Department} </strong>{" "}
                  </div>
                  <div className="w-50 border mb-2 p-2">
                    Working Hours : <strong>{data.From}</strong> -{" "}
                    <strong>{data.To}</strong>
                  </div>
                </div>
              </div>
            </div>
            <Nav className="nav-line mt-5">
              <Nav.Link
                className={activeTab === "1" ? "active" : ""}
                onClick={() => handleTabs("1")}
              >
                Personal Information
              </Nav.Link>
              <Nav.Link
                className={activeTab === "2" ? "active" : ""}
                onClick={() => handleTabs("2")}
              >
                Attendance
              </Nav.Link>
              <Nav.Link
                className={activeTab === "3" ? "active" : ""}
                onClick={() => handleTabs("3")}
              >
                Connections
              </Nav.Link>
              <Nav.Link
                className={activeTab === "4" ? "active" : ""}
                onClick={() => handleTabs("4")}
              >
                Profile Settings
              </Nav.Link>
            </Nav>

            {activeTab === "2" && <Attendence />}
            {activeTab === "1" && (
              <PerfectScrollbar className="mt-5" >
                <Row>
                  <Col xs="1" className="text-end text-secondary">
                    Status
                  </Col>
                  <Col>
                    <strong className="fw-semibold">Do Not Disturb</strong> -
                    Gambler, Tea Drinker, Ultimate Piggie, Replacement President
                    of a Major Soft Drink Manufacturer. When I give out candies,
                    I give people the flavour I don't like.
                  </Col>
                </Row>

                <hr />

                <Row>
                  <Col xs="1" className="text-end text-secondary">
                    Email
                  </Col>
                  <Col>
                    abigaile@johnson.com
                    <br />
                    ajohnson@gmail.com
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col xs="1" className="text-end text-secondary">
                    Phone
                  </Col>
                  <Col>234-5678-901</Col>
                </Row>
                <Row className="mt-2">
                  <Col xs="1" className="text-end text-secondary">
                    Location
                  </Col>
                  <Col>Bay Area, San Francisco, CA</Col>
                </Row>

                <hr />

                <Nav className="nav-sidebar">
                  <Nav.Link href="">
                    <i className="ri-check-double-line"></i> Activity
                  </Nav.Link>
                  <Nav.Link href="">
                    <i className="ri-list-check-2"></i> Call &amp; Message Logs
                  </Nav.Link>
                  <Nav.Link href="">
                    <i className="ri-share-forward-line"></i> Share Contact
                  </Nav.Link>
                  <Nav.Link href="">
                    <i className="ri-forbid-line"></i> Block Contact
                  </Nav.Link>
                  <Nav.Link href="">
                    <i className="ri-delete-bin-line"></i> Delete Contact
                  </Nav.Link>
                </Nav>
              </PerfectScrollbar>
            )}
          </Card.Body>
        </Card>

        {/* profile header */}
      </div>
    </div>
  );
}

export default EmployeeProfile;
