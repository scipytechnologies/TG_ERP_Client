import React from "react";
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
import { useEffect } from "react";

function AddSales() {
  // to maintain dark and light mode
  const currentSkin = localStorage.getItem("skin-mode") ? "dark" : "";
  const [skin, setSkin] = useState(currentSkin);
  const navigate = useNavigate();
  const [form, setform] = useState("");
  const index = useSelector((state) => state.index);
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

  async function PostSales(form) {
    console.log(form);
    const res = await mainservice.sales(form, index.SalesID);
    if (res.data != null) {
      console.log("Sales Added");
    } else {
      console.log(res);
    }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    PostSales(form);
  };

  const onUpdateHandler = (event) => {
    event.preventDefault();
    console.log(uform);
    updateSales(uform);
  };
  async function updateSales(uform) {
    const res = await mainservice.updateSales(index.SalesID, id, uform);
    if (res.data != null) {
      console.log(res.data, "Sales Details updated");
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
      const res = await mainservice.getSalesById(index.SalesID, id);
      setUform(res.data);
      console.log(res.data, "this");
    }
  };

  const [fields, setFields] = useState([{ ItemNo: "", ItemName: "" }]);

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
    const updatedFields = [...fields];
    updatedFields[index] = {
      ...updatedFields[index],
      [name]: value,
    };
    setFields(updatedFields);
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
                  <Link to="/dashboard/sales">Sales</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Add Sales
                </li>
              </ol>
              <h4 className="main-title mb-0">Create New Sales</h4>
            </div>
          </div>

          {/* responsive form in a card */}

          <Card>
            <Card.Body>
              <Row className="g-4 justify-content-between">
                <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="CustomerName">CustomerName</Form.Label>
                    <Form.Control
                      type="text"
                      id="CustomerName"
                      name="CustomerName"
                      value={uform.CustomerName}
                      placeholder="Customer Name"
                      onChange={onChangeHandler}
                    />
                  </div>
                </Col>
                <Col
                  className="d-flex justify-content-end"
                  lg="4"
                  md="6"
                  xs="12"
                >
                  <div>
                    <div>
                      <h3> BID0045</h3>
                    </div>
                    <div>
                      <h5>20/03/2023</h5>
                    </div>
                  </div>
                </Col>
                {/* <Col lg="4" md="6" xs="12">
                  <div className="mt-3">
                    <Form.Label htmlFor="SalesPerson">Sales Person</Form.Label>
                    <Form.Control
                      type="text"
                      id="SalesPerson"
                      name="SalesPerson"
                      value={uform.SalesPerson}
                      placeholder="Sales Person"
                      onChange={onChangeHandler}
                    />
                  </div>
                </Col> */}
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
                      <th scope="col">Item Name</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Price</th>
                      <th scope="col">Total</th>
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
                                  value={fields.ItemNo}
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
                                  value={fields.ItemName}
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
                                  value={fields.Quantity}
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
                                  value={fields.Price}
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
                              <div className="input-group mb-3" key={index}>
                                <Form.Control
                                  type="Number"
                                  id="TotalPrice"
                                  name="TotalPrice"
                                  value={fields.TotalPrice}
                                  placeholder="Total Price"
                                  onChange={(event) =>
                                    handleChangeField(index, event)
                                  }
                                />
                                <Button className="ms-2" variant="danger"
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
                    <Button onClick={handleAddField}><i class="ri-add-circle-fill"></i> Add Item</Button>
                  </div>
                </Table>
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

export default AddSales;
