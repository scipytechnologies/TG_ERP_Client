import React, { useEffect } from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState, useRef } from "react";
import {
  Button,
  Card,
  Col,
  Nav,
  ProgressBar,
  Row,
  Dropdown,
  Offcanvas,
  ButtonGroup,
  Image,
  ListGroup,
  ListGroupItem,
  Form,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Grid } from "gridjs-react";
import mainservice from "../../services/mainservice";
import { _ } from "gridjs-react";
import { useSelector } from "react-redux";

function ProductManagement() {
  // to maintain dark and light mode
  const currentSkin = localStorage.getItem("skin-mode") ? "dark" : "";
  const [skin, setSkin] = useState(currentSkin);
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [data, setData] = useState([]);
  const index = useSelector((state) => state.index);
  console.log(index);

  async function getInventorymanagementDetails() {
    const res = await mainservice.getInventorymanagementDetails(
      index.InventoryID
    );
    // console.log('Inventory Details ' + JSON.stringify(res))
    console.log(res.data.inventorymanagements);
    setData(res.data.inventorymanagements);
  }
  useEffect(() => {
    getInventorymanagementDetails();
  }, []);

  async function deleteInventorymanagementDetails(id) {
    const res = await mainservice.deleteInventorymanagementDetails(
      index.InventoryID,
      id
    );
    if (res.data != null) {
      console.log("deleted");
      getInventorymanagementDetails();
    } else {
      console.log(res.message);
    }
  }

  const onDeleteHandler = (item) => {
    console.log(item._id);
    deleteInventorymanagementDetails(item._id);
  };

  // Grid js each row clicking funciton
  const [offCanvas, setOffCanvas] = useState(false);
  const [canvasData, setCanvasData] = useState([]);
  const handleCanvas = (item) => {
    setOffCanvas(true);
    setCanvasData(item);
  };
  const handleCloseCanvas = () => {
    setOffCanvas(false);
    setCanvasData("");
  };

  return (
    <>
      <Header onSkin={setSkin} />
      <div className="main main-app p-3 p-lg-4">
        <div className="d-md-flex align-items-center justify-content-between mb-4">
          <div>
            <ol className="breadcrumb fs-sm mb-1">
              <li className="breadcrumb-item">
                <Link to="/dashboard/home">Dashboard</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/dashboard/inventory">Inventory</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Inventory Management
              </li>
            </ol>
            <h4 className="main-title mb-0">Inventory List</h4>
          </div>

          <Button
            variant="primary"
            className="d-flex align-items-center gap-2"
            onClick={() => navigate("/dashboard/inventory/AddProduct")}
          >
            <i className="ri-bar-chart-2-line fs-18 lh-1"></i>Add Product
            <span className="d-none d-sm-inline"></span>
          </Button>
        </div>

        <div className="mb-3">
          <div className="d-flex justify-content-between gap-2">
            {[
              {
                bg: "ui-06",
                icon: "ri-inbox-archive-fill",
                value: "387",
                percent: "+3.82%",
                success: true,
                label: "Total Product in Stock",
                // "avatar": [img10, img11, img9, img8],
                agents: "Total Product : 200",
              },
              {
                bg: "ui-07",
                icon: "ri-alert-fill",
                value: "387",
                percent: "+3.82%",
                success: true,
                label: "Low in Stock",
                // "avatar": [img10, img11, img9, img8],
                agents: "Ordered Stock : 20",
              },
              {
                bg: "ui-05",
                icon: "ri-alarm-warning-fill",
                value: "296",
                percent: "-0.08%",
                success: false,
                label: "Out of Stock",
                // "avatar": [img15, img16, img17, img18],
                agents: "Ordered Stock : 20",
              },
              {
                bg: "ui-03",
                icon: "ri-emotion-sad-fill",
                value: "198",
                percent: "-0.03%",
                success: false,
                label: "Damaged Product",
                // "avatar": [img7, img8, img9, img10],
                agents: "Total Amount : 3400",
              },
            ].map((item, index) => (
              <Col sm="3" key={index}>
                <Card className="card-one">
                  <Card.Body className="p-3">
                    <div className="d-flex d-sm-block d-xl-flex align-items-center">
                      <div className={"helpdesk-icon text-white bg-" + item.bg}>
                        <i className={item.icon}></i>
                      </div>
                      <div className="ms-3 ms-sm-0 ms-xl-3 mt-sm-3 mt-xl-0">
                        <h2 className="card-value d-flex align-items-baseline mb-0">
                          {item.value}{" "}
                          <small
                            className={
                              "text-" + (item.success ? "success" : "")
                            }
                          >
                            {item.percent}
                          </small>
                        </h2>
                        <label className="card-label fs-sm fw-medium mb-1">
                          {item.label}
                        </label>
                        <div className="mutual-badge">
                          <ul>
                            <li>
                              <i class="ri-arrow-right-fill"></i>
                            </li>
                          </ul>
                          <label>{item.agents}</label>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </div>
        </div>

        {/* analatics cards */}
        <Card>
          <Card.Body>
            <Grid
              data={
                data !== undefined
                  ? data.map((item) => [
                      item.SKUNo,
                      item.ItemName,
                      item.ItemCategory,
                      item.Price,
                      item.CurrentStock,
                      _(<p className="text-success"> In Stock </p>),
                      _(
                        <>
                          <ButtonGroup>
                            <Button
                              size="sm"
                              variant="white"
                              onClick={() => handleCanvas(item)}
                            >
                              <i className="ri-eye-line"></i>
                            </Button>
                            <Button className="p-0" variant="white">
                              <Dropdown drop="end">
                                <Dropdown.Toggle
                                  variant="white"
                                  size="sm"
                                  className="btn-no-outline"
                                >
                                  <i
                                    className="ri-more-2-fill"
                                    color="primary"
                                  ></i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                  <Dropdown.Item href="#/action-1">
                                    Action
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    onClick={() =>
                                      navigate(
                                        `/dashboard/inventory/addproduct/?id=${item._id}`
                                      )
                                    }
                                  >
                                    Edit
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    style={{ color: "red" }}
                                    onClick={() => onDeleteHandler(item)}
                                  >
                                    Delete
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </Button>
                          </ButtonGroup>
                        </>
                      ),
                    ])
                  : []
              }
              columns={[
                "SKU No",
                "Item Name",
                "Category",
                "Price",
                "CurrentStcok",
                "Status",
                "Action",
              ]}
              search={true}
              pagination={true}
              sort={true}
              resizable={true}
              className={{
                table: "table table-bordered mb-0",
              }}
            />
          </Card.Body>
          {/* sidebar offcanvars */}
          <Offcanvas
            show={offCanvas}
            onHide={handleCloseCanvas}
            placement="end"
            className="w-50"
          >
            <Offcanvas.Body>
              <Card className="card-one">
                <Card.Header>
                  <Card.Title as="h6">Inventory Manager</Card.Title>
                  {/* <Nav className="nav-icon nav-icon-sm ms-auto">
                  <Nav.Link href=""><i className="ri-refresh-line"></i></Nav.Link>
                  <Nav.Link href=""><i className="ri-more-2-fill"></i></Nav.Link>
                </Nav> */}
                </Card.Header>
                <Card.Body className="p-3">
                  <Row className="g-3">
                    <Col sm="5" md="4" xl="5" xxl="4">
                      <div className="h-100 border rounded px-2 bg-white">
                        {/* <img src={prod5} className="img-fluid" alt="" /> */}
                      </div>
                    </Col>
                    <Col
                      sm="7"
                      md="8"
                      xl="7"
                      xxl
                      className="d-flex flex-column"
                    >
                      <ListGroup>
                        <ListGroup.Item>
                          <div className="d-flex">
                            <div className="w-40">First Name</div>
                            <div className="w-50">: {canvasData.ItemName} </div>
                          </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <div className="d-flex">
                            <div className="w-40">Last Name</div>
                            <div className="w-50">: </div>
                          </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <div className="d-flex">
                            <div className="w-40">Business Role</div>
                            <div className="w-50">: </div>
                          </div>
                        </ListGroup.Item>
                        <ListGroupItem>
                          <div className="d-flex">
                            <div className="w-40">Email</div>
                            <div className="w-50">: </div>
                          </div>
                        </ListGroupItem>
                        <ListGroup.Item>
                          <div className="d-flex">
                            <div className="w-40">Phone Mobile</div>
                            <div className="w-50">: </div>
                          </div>
                        </ListGroup.Item>
                      </ListGroup>
                    </Col>
                  </Row>
                  <Row className="g-3 mt-3">
                    <Col
                      sm="7"
                      md="8"
                      xl="7"
                      xxl
                      className="d-flex flex-column"
                    >
                      <ListGroup>
                        <ListGroup.Item>
                          <div className="d-flex">
                            <div className="w-40">First Name</div>
                            <div className="w-50">: {canvasData.ItemName} </div>
                          </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <div className="d-flex">
                            <div className="w-40">Last Name</div>
                            <div className="w-50">: </div>
                          </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <div className="d-flex">
                            <div className="w-40">Business Role</div>
                            <div className="w-50">: </div>
                          </div>
                        </ListGroup.Item>
                        <ListGroupItem>
                          <div className="d-flex">
                            <div className="w-40">Email</div>
                            <div className="w-50">: </div>
                          </div>
                        </ListGroupItem>
                        <ListGroup.Item>
                          <div className="d-flex">
                            <div className="w-40">Phone Mobile</div>
                            <div className="w-50">: </div>
                          </div>
                        </ListGroup.Item>
                      </ListGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      {" "}
                      <Card className="m-3">
                        <Card.Header>
                          <Card.Title as="h6">Manage Stocks</Card.Title>
                        </Card.Header>
                        <Card.Body>
                          <div className="d-flex">
                            <div className="mb-3 w-40 d-flex">
                              <Form.Control
                                type="email"
                                id="exampleFormControlInput1"
                                placeholder="name@example.com"
                              />
                            </div>
                            <div>
                              <i class="ri-arrow-left-right-fill"></i>
                            </div>

                            <div className="mb-3 w-40 d-flex">
                              <Form.Control
                                type="email"
                                id="exampleFormControlInput1"
                                placeholder="name@example.com"
                              />
                            </div>
                            <div className="d-flex justify-content-end ">
                              {" "}
                              <Button variant="primary">Primary</Button>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Card>
                        <Card.Header>
                          <Card.Title>History</Card.Title>
                        </Card.Header>
                        <Card.Body>
                          <ul className="activity-group mb-5">
                            <li className="activity-date"> 
                              Today, Sep 13, 2023
                            </li>
                            <li className="activity-item comment"> 
                            
                              <p className="d-sm-flex align-items-center mb-2">
                                <span className="fs-sm">
                                  <strong>You</strong> mentioned{" "}
                                  <strong>Mellisa Ricks</strong> in a comment.
                                </span>
                                <span className="text-secondary fs-xs ms-auto">
                                  06:55pm
                                </span>
                              </p>
                              <Card className="card-comment">
                                <Card.Body>
                                  There are many variations of passages of Lorem
                                  Ipsum available, but the majority have
                                  suffered alteration in some form, by injected
                                  humour, or randomised words which don't look
                                  even slightly believable.{" "}
                                  <strong>@mellisaricks</strong>
                                </Card.Body>
                              </Card>
                            </li>
                            <li className="activity-date">
                              Today, Sep 13, 2023
                            </li>
                            <li className="activity-item comment">
                              <p className="d-sm-flex align-items-center mb-2">
                                <span className="fs-sm">
                                  <strong>You</strong> mentioned{" "}
                                  <strong>Mellisa Ricks</strong> in a comment.
                                </span>
                                <span className="text-secondary fs-xs ms-auto">
                                  06:55pm
                                </span>
                              </p>
                              <Card className="card-comment">
                                <Card.Body>
                                  There are many variations of passages of Lorem
                                  Ipsum available, but the majority have
                                  suffered alteration in some form, by injected
                                  humour, or randomised words which don't look
                                  even slightly believable.{" "}
                                  <strong>@mellisaricks</strong>
                                </Card.Body>
                              </Card>
                            </li>
                          </ul>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Offcanvas.Body>
          </Offcanvas>
        </Card>
        <Footer />
      </div>
    </>
  );
}

export default ProductManagement;
