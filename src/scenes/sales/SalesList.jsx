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
  Form,
  Dropdown,
  Offcanvas,
  Modal,
  ButtonGroup,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import mainservice from "../../services/mainservice";
import { Grid } from "gridjs-react";
import { _ } from "gridjs-react";
import { useSelector } from "react-redux";
import moment from "moment";
import SalesBill from "../invoice/Sales/Body/SalesBill";

function SalesList() {
  // to maintain dark and light mode
  const currentSkin = localStorage.getItem("skin-mode") ? "dark" : "";
  const [skin, setSkin] = useState(currentSkin);
  const navigate = useNavigate();

  // get

  const [user, setUser] = useState("");

  const index = useSelector((state) => state.index);
  console.log(index);
  const [data, setData] = useState([]);
  async function salesdetails() {
    const res = await mainservice.salesdetails(index.SalesID);
    // console.log('Sales Details ' + JSON.stringify(res))
    console.log(res.data.saless);
    setData(res.data.saless);
  }
  useEffect(() => {
    salesdetails();
  }, []);

  async function deleteSales(id) {
    const res = await mainservice.deleteSales(index.SalesID, id);
    if (res.data != null) {
      console.log("deleted");
      salesdetails();
    } else {
      console.log(res.message);
    }
  }

  const onDeleteHandler = (item) => {
    console.log(item._id);
    deleteSales(item._id);
  };

  // Grid js each row clicking funciton
  const [offCanvas, setOffCanvas] = useState(false);
  const [offCanvasData,setOffCanvasData] = useState()
  const handleCanvas = (row) => {
    setOffCanvasData(row)
    setOffCanvas(true);
  };
  const handleCloseCanvas = () => {
    
    setOffCanvas(false);
  };

  // console.log(data[6].SalesItems.length);

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
                <Link to="/dashboard/sales">Purchase</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Sales List
              </li>
            </ol>
            <h4 className="main-title mb-0">Sales List</h4>
          </div>
        </div>
        <Card>
          <Card.Body>
            <Grid
              data={
                data !== undefined
                  ? data.toReversed().map((item) => [
                      item.OrderNumber.toString().padStart(6, "0"),
                      _(moment(item.createdAt).format("ll")),
                      item.CustomerName,
                      item.SalesItems.length,
                      item.GrandTotal,
                      _(<p className="text-color-success">Paid</p>),
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
                                        `/dashboard/sales/addSales/?id=${item._id}`
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
                "Order Number",
                "Billed Date",
                "Customer",
                "No. of Items",
                "Total",
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
  

          <Modal show={offCanvas} onHide={handleCloseCanvas} size="xl">
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <SalesBill data={offCanvasData} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseCanvas}>
                Close
              </Button>
              <Button variant="primary" onClick={handleCloseCanvas}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Card>
        <Footer />
      </div>
    </>
  );
}

export default SalesList;
