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
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import mainservice from "../../services/mainservice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Select from "react-select";
import moment from "moment";

function AddSales() {
  // to maintain dark and light mode
  const currentSkin = localStorage.getItem("skin-mode") ? "dark" : "";
  const [skin, setSkin] = useState(currentSkin);
  const navigate = useNavigate();
  const [form, setform] = useState("");
  const [select, setSelect] = useState("");
  const [salesIndex, setSalesIndex] = useState(0);
  const index = useSelector((state) => state.index);
  const user = useSelector((state) => state.loginedUser);

  const [grandTotal, setGrandTotal] = useState(0);
  const [gst, setGST] = useState(0);
  const [sgst, setSGST] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [Rounded, setRounded] = useState(0);
  // const onChangeHandler = (event) => {
  //   const { name, value } = event.target;
  //   setform({
  //     ...form,
  //     [event.target.name]: event.target.value,
  //   });
  //   setUform({
  //     ...uform,
  //     [event.target.name]: event.target.value,
  //   });
  //   console.log(uform);
  // };

  async function GetIndex() {
    const res = await mainservice.getSaleIndex(index.SalesID);
    if (res.data == null) {
      console.log("No index Found");
    } else {
      setSalesIndex(res.data + 1);
      console.log(res.data + 1);
    }
  }

  async function PostSales(form) {
    const addon = {
      SalesItems: fields,
      OrderNumber: salesIndex,
      SubTotal: grandTotal,
      GST: gst,
      SGST: sgst,
      GrandTotal: finalAmount,
      Roundoff: Rounded,
      discountPercentage: discountPercentage,
      discountAmount: discountAmount,
    };
    const employee = {
      EmpId: user.id,
      SalesPerson: user.firstName + " " + user.lastName,
    };
    const postdata = { ...form, ...addon, ...employee };
    console.log(postdata, "item to post");
    const res = await mainservice.sales(postdata, index.SalesID);
    if (res.data != null) {
      console.log("Sales Added");
    } else {
      console.log(res);
    }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    PostSales(select);
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

  const [fields, setFields] = useState([
    {
      ItemNo: "",
      ItemName: "",
      Quantity: 0,
      Price: 0,
      TotalPrice: 0,
    },
  ]);

  const handleAddField = () => {
    const newItem = {
      ItemNo: "",
      ItemName: "",
      Quantity: 0,
      Price: 0,
      TotalPrice: 0,
    };
    setFields([...fields, newItem]);
    calculateTotals();
  };

  const handleRemoveField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
    calculateTotals();
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

    setFields(newFields);
    calculateTotals();
    console.log(fields);
  };

  useEffect(() => {
    GetIndex();
    CheckEdit();
    customerDetails();
    calculateTotals();
  }, []);

  const [data, setData] = useState([]);
  async function customerDetails() {
    const res = await mainservice.customerList(index.CrmID);
    console.log(res.data.customers);
    // console.log('Customer Details ' + JSON.stringify(res))
    setData(res.data.customers);
  }

  // const option = [
  //   { value: data[0].customerName, label: data[0]._id },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' },
  // ];

  const options = data.map((x) => {
    return { label: x.FirstName + x.LastName, value: x._id };
  });

  const onSelectHandler = (event, field) => {
    const temp = data.filter((x) => x._id === event.value);
    console.log(temp);
    setSelect((prev) => ({
      ...prev,
      [field]: event.value,
      CustomerName: temp[0].FirstName + " " + temp[0].LastName,
      Address: temp[0].Address,
      Email: temp[0].Email,
      Phone: temp[0].PhoneMobile,
    }));
  };
  const currentDate = new Date();
  const formattedDate = moment(currentDate).format("ll");

  useEffect(() => {
    calculateTotals();
  }, [discountPercentage, fields]);

  const calculateTotals = () => {
    let total = 0;
    let gstAmount = 0;
    let sgstAmount = 0;

    fields.forEach((field) => {
      const totalPrice = field.Quantity * field.Price;
      total += totalPrice;
    });

    setGrandTotal(total);
    setGST(gstAmount);
    setSGST(sgstAmount);

    // Calculate discount and final amount
    if (isNaN(discountPercentage)) {
      setDiscountPercentage(0);
    }
    const discountValue = (total * discountPercentage) / 100;
    setDiscountAmount(discountValue);
    const amount = total - discountValue;
    // Calculate GST and SGST amounts
    const gstRate = 0.18; // Assuming 18% GST
    gstAmount += (amount * gstRate) / 2;
    sgstAmount += (amount * gstRate) / 2;
    setGrandTotal(total);
    setGST(gstAmount);
    setSGST(sgstAmount);
    const LastAmount = total - discountValue + gstAmount + sgstAmount;
    setFinalAmount(
      LastAmount % 1 >= 0.5 ? Math.ceil(LastAmount) : Math.floor(LastAmount)
    );

    setRounded(
      (LastAmount % 1 >= 0.5 ? Math.ceil(LastAmount) : Math.floor(LastAmount)) -
        LastAmount
    );

    // setFinalAmount(total - discountValue); // tax inclued in Total
  };

  const handleDiscountChange = (event) => {
    const newDiscountPercentage = parseFloat(event.target.value);
    setDiscountPercentage(newDiscountPercentage);

    // Recalculate totals based on the new discount percentage
    calculateTotals();
  };

  return (
    <>
      <form>
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
                {/* <Col lg="4" md="6" xs="12">
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
                </Col> */}
                <Col lg="4" md="6" xs="12">
                  <ListGroup>
                    <h5 className="p-2">Customer Information</h5>
                    <ListGroup.Item>
                      <div className="d-flex align-items-center">
                        <div className="w-30 ">
                          <Form.Label htmlFor="CustomerName">
                            CustomerName
                          </Form.Label>
                        </div>
                        <div className="w-70">
                          <Select
                            styles={{
                              control: (baseStyles) => ({
                                ...baseStyles,
                                border: 0,
                              }),
                            }}
                            options={options}
                            isSearchable={true}
                            onChange={(x) => onSelectHandler(x, "CustomerId")}
                          />
                        </div>
                        <div className="ps-2">
                          <Button variant="primary" className="btn-icon">
                            <i className="ri-add-circle-fill"></i>
                          </Button>
                        </div>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      {" "}
                      <div className="d-flex">
                        <div className="w-30">
                          <Form.Label htmlFor="CustomerName">
                            Address
                          </Form.Label>
                        </div>
                        <div className="w-70"> {select.Address}</div>
                      </div>{" "}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      {" "}
                      <div className="d-flex">
                        <div className="w-30">
                          <Form.Label htmlFor="CustomerName">Email</Form.Label>
                        </div>
                        <div className="w-70"> {select.Email}</div>
                      </div>{" "}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      {" "}
                      <div className="d-flex">
                        <div className="w-30">
                          <Form.Label htmlFor="CustomerName">
                            Phone Number
                          </Form.Label>
                        </div>
                        <div className="w-70"> {select.Phone}</div>
                      </div>{" "}
                    </ListGroup.Item>
                  </ListGroup>
                </Col>

                <Col
                  className="d-flex justify-content-end"
                  lg="4"
                  md="6"
                  xs="12"
                >
                  <ListGroup className=" w-100">
                    <h5 className="p-2">Billing Information</h5>
                    <ListGroupItem>
                      <div className="d-flex">
                        <div className="w-30">
                          <Form.Label htmlFor="CustomerName">
                            Bill No
                          </Form.Label>
                        </div>
                        <div className="w-70">
                          <h3>{salesIndex.toString().padStart(6, "0")}</h3>
                        </div>
                      </div>
                    </ListGroupItem>
                    <ListGroupItem>
                      <div className="d-flex">
                        <div className="w-30">
                          <Form.Label htmlFor="CustomerName">
                            Billed Date
                          </Form.Label>
                        </div>
                        <div className="w-70"> {formattedDate}</div>
                      </div>
                    </ListGroupItem>
                  </ListGroup>
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
                  <div className="w-40">
                    <Table>
                      <tbody>
                        <tr>
                          <td colSpan="3"></td>
                          <td>Sub Total :</td>
                          <td>{grandTotal.toFixed(2)}</td>
                        </tr>
                        <tr>
                          <td colSpan="3"></td>
                          <td>
                            <Form.Group as={Row} className="mb-3">
                              <Form.Label column sm="3">
                                Discount (%):
                              </Form.Label>
                              <Col sm="6">
                                <Form.Control
                                  type="number"
                                  value={discountPercentage}
                                  onChange={handleDiscountChange}
                                  min={0}
                                  max={100}
                                />
                              </Col>
                            </Form.Group>
                          </td>
                          <td>{discountAmount.toFixed(2)}</td>
                        </tr>
                        <tr>
                          <td colSpan="3"></td>
                          <td>GST :</td>
                          <td>{gst.toFixed(2)}</td>
                        </tr>
                        <tr>
                          <td colSpan="3"></td>
                          <td>SGST :</td>
                          <td>{sgst.toFixed(2)}</td>
                        </tr>

                        <tr className="bg-primary">
                          <td colSpan="3"></td>
                          <td className="text-white">
                            {" "}
                            <h5>Grand Total :</h5>
                          </td>
                          <td className="text-white">
                            {" "}
                            <h5>{finalAmount.toFixed(2)}</h5>
                          </td>
                        </tr>
                        {Rounded ? (
                          <tr>
                            <td colSpan="3"></td>
                            <td>Round-off :</td>
                            <td>{Rounded.toFixed(2)}</td>
                          </tr>
                        ) : (
                          []
                        )}
                      </tbody>
                    </Table>
                  </div>
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

          <Footer />
        </div>
      </form>
    </>
  );
}

export default AddSales;
