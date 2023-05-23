import React from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState, useEffect, useRef } from "react";
import {
  Button,
  Card,
  Col,
  Nav,
  ProgressBar,
  Row,
  Modal,
  Form,
  Dropdown,
  ListGroup,
  Placeholder
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { category, products } from "../../data/posData";
import './pos.css'

function POS() {
  // to maintain dark and light mode
  const currentSkin = localStorage.getItem("skin-mode") ? "dark" : "";
  const [skin, setSkin] = useState(currentSkin);
  const navigate = useNavigate();

  // to handle fullscreen
  const handle = useFullScreenHandle();
  let fullScreen = handle.active;

  //   pos category scrolling react-slick settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  //   handle modal
  // const [posCount, setPosCount] = useState(1);
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState(false);
  const handleClick = (item) => {
    console.log(item);
    setOpen(true);
    setModalData(item);
  };



  // posFilter function
  useEffect(() => {
    setFilteredProducts(products);
  }, []);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleFilter = (i) => {
    console.log(i);
    let filterProducts;
    if (i != "All Items") {
      filterProducts = products.filter((items) => {
        return items.category === i;
      });
      console.log(filterProducts);
      setFilteredProducts(filterProducts);
    } else if ((i = "")) {
      setFilteredProducts("");
    } else {
      setFilteredProducts(products);
    }
  };


  // controllers for modal and cart dds
  const [open, setOpen] = React.useState(false);
  const [posCount, setPosCount] = useState(1)
  const [addons, setAddons] = useState('')
  const [cart, setCart] = useState([])
  const [posModal, setPosModal] = useState({
    id: '',
    name: '',
    img: '',
    price: ''
  })

  let priceArr = []
  let price
  let subTotal = 0
  let tax
  let discount
  let total


  const handleClose = () => {
    setOpen(false)
    setTimeout(() => setPosCount(1), 500)
    setTimeout(() => setAddons(), 500)
  }


  // modal close while clicking window
  const modalRef = useRef();
  useEffect(() => {
    window.onclick = (e) => {
      // console.log(e)
      if (e.target.contains(modalRef.current)) {
        // console.log('inside ref')
        handleClose()
      }
      else {
        // console.log('outside the ref')
      }
    }
  }, [])

  let cartItems = []
  const handleCart = (i, name, price, addons, posCount) => {
    cartItems.push({
      id: i,
      name: name,
      price: price,
      addons: addons,
      quantity: posCount
    })
    console.log(cartItems)
    cartItems.push(...cart) //logic for saving previous values in cart
    setCart(cartItems)
    handleClose()
  }
  // let sum = 0
  // function to find percentage
  function percentage(num, per) {
    return (num / 100) * per;
  }

  cart.map((i) => {
    // quantity x rate
    price = Number(i.price) * Number(i.quantity)
    priceArr.push(price)

    // to find subTotal
    subTotal = priceArr.reduce((a, b) => a + b, 0)

    // to find tax
    tax = percentage(10, subTotal)
    discount = percentage(8, subTotal)
    console.log(tax)

    // to find grand total
    total = (subTotal + tax) - discount
  })

  return (
    <>
      <Header onSkin={setSkin} />
      <FullScreen handle={handle}>
        <div
          className={
            fullScreen
              ? "p-lg-4 p-2  bg-light h-100"
              : "main main-app p-3 p-lg-4 "
          }
        >
          <div className="d-flex align-items-center justify-content-between mb-4">
            <div>
              {!fullScreen && (
                <>
                  <ol className="breadcrumb fs-sm mb-1">
                    <li className="breadcrumb-item">
                      <Link to="/dashboard/home">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      POS
                    </li>
                  </ol>
                </>
              )}
              <h4 className="main-title mb-0">Point On Sale</h4>
            </div>

            <div>
              {fullScreen ? (
                <Button
                  className="btn btn-light d-flex align-items-center justify-content-center rounded-3 rounded-circle"
                  onClick={handle.exit}
                >
                  <i
                    className="ri-fullscreen-exit-line  fs-18 lh-1"
                    style={{ color: "#506fd9" }}
                  ></i>
                </Button>
              ) : (
                <Button
                  className="btn btn-light d-flex align-items-center justify-content-centerrounded-3 rounded-circle"
                  onClick={handle.enter}
                >
                  <i
                    className="ri-fullscreen-line fs-18 lh-1"
                    style={{ color: "#506fd9" }}
                  ></i>
                </Button>
              )}
            </div>
          </div>
          {/* cateogru slider using react-slick */}

          <p>Categories</p>
          <Slider {...settings}>
            {category.map((item, val) => {
              return (
                <div style={{ cursor: "pointer" }}>
                  <Card
                    className="shadow-sm pt-1 mb-2 bg-white rounded border-none me-2 d-flex align-items-center justify-content-center"
                    key={val}
                    onClick={() => handleFilter(item.name)}
                  >
                    <Card.Img
                      src={item.img}
                      variant="top"
                      style={{ height: "3rem", width: "3.5rem" }}
                    />
                    {/* <div className="mt-2"> */}
                    <p className="fw-bolder" style={{ marginBottom: "-1px" }}>
                      {item.name}
                    </p>
                    <p>{item.amount}</p>
                    {/* </div> */}
                  </Card>
                </div>
              );
            })}
          </Slider>

          {/* available items  cards */}
          <div
            className="mt-3 h-100 overflow-auto"
            style={{ paddingBottom: fullScreen && "15rem" }}
          >
            <p>Available Items</p>
            <Row>
              <Col md="8">
                <Row className="g-3">
                  {filteredProducts != "" ? (

                    filteredProducts.map((item, val) => {
                      return (
                        <Col xs="12" sm="6" md="4" lg="3">
                          <Card
                            className="card-one shadow-md"
                            onClick={() => handleClick(item)}
                          >
                            <Card.Img variant="top" src={item.img} />
                            <Card.Body className="overflow-hidden">
                              <h5 className="card-value mb-1">
                                <span>&#8377;</span> {item.price}
                              </h5>
                              <h6 className="text-dark fw-semibold mb-1">
                                {item.name}
                              </h6>
                              <p className="fs-xs text-secondary mb-0 lh-4">
                                The gross profit you make on each dollar of sales.
                              </p>
                            </Card.Body>
                          </Card>
                        </Col>
                      );
                    })


                  ) : (
                    <p className="h5 text-bold">
                      No products found on your filter!
                    </p>
                  )}


                </Row>
              </Col>
              <Col md="4">

                <div style={{ minHeight: '10vh' }}>
                  <Card className="h-100  w-100 border p-1">

                    <Card.Header>
                      <Card.Title as="h6">Order Details</Card.Title>
                    </Card.Header>

                    <Card.Body>
                      <ListGroup as="ul" className="list-group-one">
                        {[
                          {
                            "icon": "btc",
                            "bg": "orange",
                            "name": "Bitcoin",
                            "value": "$4,000.19",
                            "percent": "0.27%",
                            "success": true
                          }, {
                            "icon": "eth",
                            "bg": "twitter",
                            "name": "Ethereum",
                            "value": "$138.90",
                            "percent": "0.35%",
                            "success": true
                          }, {
                            "icon": "ltc",
                            "bg": "litecoin",
                            "name": "Litecoin",
                            "value": "$59.95",
                            "percent": "0.05%",
                            "success": true
                          }, {
                            "icon": "btc",
                            "bg": "success",
                            "name": "Bitcoin Cash",
                            "value": "$160.28",
                            "percent": "-0.19%",
                            "success": false
                          }, {
                            "icon": "dash",
                            "bg": "primary",
                            "name": "Dash",
                            "value": "$92.20",
                            "percent": "-0.21%",
                            "success": false
                          }, {
                            "icon": "bsd",
                            "bg": "ui-02",
                            "name": "Bitsend",
                            "value": "$56.53",
                            "percent": "2.86%",
                            "success": true
                          }, {
                            "icon": "bcn",
                            "bg": "pink",
                            "name": "Bytecoin",
                            "value": "$0.76",
                            "percent": "-1.32%",
                            "success": false
                          }, {
                            "icon": "dmd",
                            "bg": "info",
                            "name": "Diamond",
                            "value": "$280.80",
                            "percent": "2.01%",
                            "success": true
                          }, {
                            "icon": "emc",
                            "bg": "danger",
                            "name": "Emercoin",
                            "value": "$48.25",
                            "percent": "1.22%",
                            "success": true
                          }
                        ].map((item, index) => (
                          <ListGroup.Item key={index} as="li" className="px-0 d-flex align-items-center gap-2">
                            {/* <div className={"avatar text-white bg-" + item.bg}>
                              <i className={"cf cf-" + item.icon}></i>
                            </div> */}
                            <div>
                              <h6 className="mb-0">{item.name}</h6>

                              <small>{item.icon.toUpperCase()}/USD</small>
                            </div>
                            <div className="ms-auto text-end">
                              <h6 className="ff-numerals mb-0">{item.value}</h6>
                              <small className={"text-" + (item.success ? "success" : "danger")}>{item.percent}</small>
                            </div>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Card.Body>
                  </Card>
                </div>

              </Col>
            </Row>

          </div>
          <Footer />
        </div>
        {/* </Col>

          <Col  sm="7">hellos</Col>
        </Row> */}

        {/* product modal  */}
        {/* <div style={{ zIndex: 1000 }}>
          <Modal show={modal} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Product Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Card>
                <Card.Img src={modalData.img} variant="top" />
                <Card.Body>
                  <div className="d-flex align-items-end justify-content-between">
                    <div>
                      <h2 className="card-value mb-1">
                        <span>&#8377;</span> {modalData.price}
                      </h2>
                      <h6 className="fw-semibold mb-1">{modalData.name}</h6>
                    </div>
                    <div className="w-25">

                      <Form.Select multiple
                        value={selectedValues}
                        onChange={handleSelectChange} name="multiSelect">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>

                      <div className="mt-2 d-flex align-items-center justify-content-between bg-gray-300 bg-gradient border-none">



                        <Button
                          variant="white"
                          className="btn-icon"
                          onClick={() =>
                            setPosCount(
                              posCount != 0 && posCount != 1
                                ? posCount - 1
                                : posCount
                            )
                          }
                        >
                          <i className="ri-subtract-line  fs-18 lh-1"></i>
                        </Button>
                        <div>{posCount}</div>
                        <Button
                          variant="white"
                          className="btn-icon"
                          onClick={() => setPosCount(posCount + 1)}
                        >
                          <i className="ri-add-line  fs-18 lh-1"></i>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Modal.Body>
            <Modal.Footer>
              <Button className="w-100" variant="primary" onClick={handleClose}>
                Add to Cart
              </Button>
            </Modal.Footer>
          </Modal>
        </div> */}

        <div className={open ? 'pos_modal_container' : 'pos_modal_container_none'} ref={modalRef}>
          <div className="pos_modal">
            <div className="pos_modal_img">
              <img src={modalData.img} alt="" />
            </div>
            <div className="pos_modal_details">
              <p>{modalData.name}</p>
              <p>	&#8377; {modalData.price}</p>
            </div>
            <div className="pos_modal_actions">
              <select name="addons" id="addons" onChange={e => setAddons(e.target.value)}>
                <option value="addons">Addons</option>
                <option value="extra">Extra Pickels</option>
                <option value="add salad">Add salad</option>
                <option value="mionise">Mionise</option>
              </select>

              <div className="pos_modal_actions_counter">
                <button onClick={() => setPosCount((posCount != 0) && (posCount != 1) ? posCount - 1 : posCount)}>-</button>
                <p>{posCount}</p>
                <button onClick={(() => setPosCount(posCount + 1))}>+</button>
              </div>
            </div>

            <div className="pos_modal_actions_button">
              <button onClick={() => handleCart(modalData.id, modalData.name, modalData.price, addons, posCount)}>Add To Cart</button>
            </div>
          </div>
        </div>
      </FullScreen>
    </>
  );
}

export default POS;
