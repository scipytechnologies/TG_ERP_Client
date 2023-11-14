import React, { useEffect } from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Nav,
  ProgressBar,
  Row,
  Form,
  Table,
} from "react-bootstrap";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import mainservice from "../../services/mainservice";
import { useSelector } from "react-redux";

function AddRFQ() {
  // to maintain dark and light mode
  const currentSkin = localStorage.getItem("skin-mode") ? "dark" : "";
  const [skin, setSkin] = useState(currentSkin);
  const navigate = useNavigate();
  const [form, setform] = useState("");
  const index = useSelector((state) => state.index);
  console.log(index.RFQID, "RFQ");
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setform({
      ...form,
      [event.target.name]: event.target.value,
    });
    setUform({
      ...uform,
      [event.target.name]: event.target.value,
    });
    console.log(uform);
  };
  const [fields, setFields] = useState([
    {
      ItemNo: "",
      ItemName: "",
      Quantity: 0,
      Price: 0,
      TotalPrice: 0,
    },
  ]);

  async function PostRFQ(form) {
    console.log(form);
    const res = await mainservice.rfq(form, index.RFQID);
    if (res.data != null) {
      console.log("RFQ Added");
    } else {
      console.log(res);
    }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    PostRFQ(form);
  };

  const onUpdateHandler = (event) => {
    event.preventDefault();
    console.log(uform);
    updaterfq(uform);
  };

  async function updaterfq(uform) {
    const res = await mainservice.updaterfq(index.RFQID, id, uform);
    if (res.data != null) {
      console.log(res.data, "RFQ details updated");
    } else {
      console.log(res);
    }
  }

  let [searchParams, setSearchParams] = useSearchParams();
  const [uform, setUform] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const id = searchParams.get("id");
  const CheckEdit = async () => {
    if (id) {
      setEditMode(true);
      const res = await mainservice.getRFQ(index.RFQID, id);
      setUform(res.data);
      console.log(res.data, "this");
    }
  };

  const handleAddField = () => {
    const newItem = {
      ItemNo: "",
      ItemName: "",
      Quantity: 0,
      Price: 0,
      TotalPrice: 0,
    };
    setFields([...fields, newItem]);
  };

  const handleRemoveField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const handleChangeField = (index, event) => {
    const { name, value } = event.target;
    const newFields = [...fields];
    newFields[index][name] = value;

    // Calculate TotalPrice for the current row
    if (name === "Quantity" || name === "Price") {
      newFields[index].TotalPrice = (
        newFields[index].Quantity * newFields[index].Price
      ).toFixed(2);
    }
    console.log(fields);
  };

  useEffect(() => {
    CheckEdit();
  }, []);

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <Header onSkin={setSkin} />
        <div className="main main-app p-3 p-lg-4">
          <div className="d-md-flex align-items-center justify-content-between mb-4">
            <div>
              <ol className="breadcrumb fs-sm mb-1">
                <li className="breadcrumb-item">
                  <Link to="/dashboard/home">Dashboard</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/dashboard/RFQ">RFQ</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Add RFQ
                </li>
              </ol>
              <h4 className="main-title mb-0">Create New RFQ</h4>
            </div>
          </div>

          {/* responsive form in a card */}
          <Card className="mb-4">
            <Card.Body>
              <Row className="g-4">
                <Col lg="4" md="6" xs="12"></Col>
                <Col lg="4" md="6" xs="12"></Col>
                <Col lg="4" md="6" xs="12">
                  <div className="mt-3 d-flex">
                    <small>Type of Purchase Requisition</small>
                    <Form.Check name="1" type="radio" label="New PR" />
                    <Form.Check name="1" type="radio" checked label="PR Change Request" />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="DeliveryDate">
                      Delivery Date
                    </Form.Label>
                    <Form.Control
                      type="Date"
                      id="DeliveryDate"
                      name="DeliveryDate"
                      value={uform.DeliveryDate}
                      placeholder="Delivery Date"
                      onChange={onChangeHandler}
                    />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Priority">Priority</Form.Label>
                    <Form.Control
                      type="text"
                      id="Priority"
                      name="Priority"
                      value={uform.Priority}
                      placeholder="Priority"
                      onChange={onChangeHandler}
                    />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="PointofDelivery">
                      Point of Delivery
                    </Form.Label>
                    <Form.Control
                      type="text"
                      id="PointofDelivery"
                      name="PointofDelivery"
                      value={uform.PointofDelivery}
                      placeholder="Point of Delivery"
                      onChange={onChangeHandler}
                    />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Receivedby">Receivedby</Form.Label>
                    <Form.Control
                      type="text"
                      id="Receivedby"
                      name="Receivedby"
                      value={uform.Receivedby}
                      placeholder="Receivedby"
                      onChange={onChangeHandler}
                    />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="Position">Position</Form.Label>
                    <Form.Control
                      type="text"
                      id="Position"
                      name="Position"
                      value={uform.Position}
                      placeholder="Position"
                      onChange={onChangeHandler}
                    />
                  </div>
                </Col>

                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="TelephoneNo">
                      Telephone Number
                    </Form.Label>
                    <Form.Control
                      type="Number"
                      id="TelephoneNo"
                      name="TelephoneNo"
                      value={uform.TelephoneNo}
                      placeholder="Telephone Number"
                      onChange={onChangeHandler}
                    />
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Row className="g-1">
                <Table size="sm" borderless className="mb-0" hover>
                  <thead>
                    <tr>
                      <th scope="col">Item No</th>
                      <th scope="col">Description</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Unit</th>
                      <th scope="col">CapEx or OpEx</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fields.map((field, index) => {
                      return (
                        <tr>
                          <th scope="row">
                            <div className="mt-2">
                              <div key={index}>
                                <Form.Control
                                  type="Number"
                                  id="ItemNo"
                                  name="ItemNo"
                                  value={field.ItemNo}
                                  placeholder="Item No"
                                  onChange={(event) =>
                                    handleChangeField(index, event)
                                  }
                                />
                              </div>
                            </div>
                          </th>
                          <td>
                            <div className="mt-2">
                              <div key={index}>
                                <Form.Control
                                  type="text"
                                  id="ItemName"
                                  name="ItemName"
                                  value={field.ItemName}
                                  placeholder="Item Name"
                                  onChange={(event) =>
                                    handleChangeField(index, event)
                                  }
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="mt-2">
                              <div key={index}>
                                <Form.Control
                                  type="Number"
                                  id="Quantity"
                                  name="Quantity"
                                  value={field.Quantity}
                                  placeholder="Quantity"
                                  onChange={(event) =>
                                    handleChangeField(index, event)
                                  }
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            {" "}
                            <div className="mt-2">
                              <div key={index}>
                                <Form.Control
                                  type="Number"
                                  id="Price"
                                  name="Price"
                                  value={field.Price}
                                  placeholder="Price"
                                  onChange={(event) =>
                                    handleChangeField(index, event)
                                  }
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="mt-2">
                              <div className="input-group mb-3">
                                <Form.Control
                                  type="Number"
                                  id={`TotalPrice`}
                                  name="TotalPrice"
                                  value={field.TotalPrice}
                                  placeholder="Total Price"
                                  onChange={(event) =>
                                    handleChangeField(index, event)
                                  }
                                  readOnly
                                />
                                <Button
                                  className="ms-2"
                                  variant="danger"
                                  onClick={() => handleRemoveField(index)}
                                >
                                  <i class="ri-delete-bin-5-fill"></i>
                                </Button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <div className="mt-3">
                    <Button onClick={handleAddField}>
                      <i class="ri-add-circle-fill"></i> Add Item
                    </Button>
                  </div>
                </Table>
                <div className="d-flex justify-content-end pe-5">
                  <div className="w-40"></div>
                </div>

                <Col xs="12">
                  {editMode ? (
                    <div
                      className="mt-1"
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <Button onClick={onUpdateHandler} type="submit">
                        Update
                      </Button>
                    </div>
                  ) : (
                    <div
                      className="mt-1"
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <Button onClick={onSubmitHandler} type="submit">
                        Submit
                      </Button>
                    </div>
                  )}
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Row className="g-4">
                <Col xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="SpecialInstructions">
                      Special Instructions
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      id="SpecialInstructions"
                      name="SpecialInstructionsn"
                      value={uform.SpecialInstructions}
                      rows="4"
                      placeholder="SpecialInstructions"
                      onChange={onChangeHandler}
                    />
                  </div>
                </Col>

                <Col xs="12">
                  {editMode ? (
                    <div
                      className="mt-1"
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <Button onClick={onUpdateHandler} type="submit">
                        Update
                      </Button>
                    </div>
                  ) : (
                    <div
                      className="mt-1"
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <Button onClick={onSubmitHandler} type="submit">
                        Submit
                      </Button>
                    </div>
                  )}
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Footer />
        </div>
      </form>
    </>
  );
}

export default AddRFQ;
