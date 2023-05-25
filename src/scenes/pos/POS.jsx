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
  Placeholder,
  Table
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
    setFilteredProducts(products)
    handle.enter()
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
  const [reversedCart, setReversedCart] = useState([])
  const handleCart = (i, name, price, addons, posCount) => {
    cartItems.push(...cart) //logic for saving previous values in cart
    cartItems.push({
      id: i,
      name: name,
      price: price,
      addons: addons,
      quantity: posCount
    })
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
          <p>Available Items</p>
          <div
            className="mt-3 overflow-auto h-100 hide-scroll"
            style={{ paddingBottom: fullScreen && "15rem" }}
          >
            <Row>
              <Col md="">
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
                <div className={fullScreen && "h-100 overflow-auto position-fixed mb-2"}>
                  <Card className="border p-1">
                    <Card.Header>
                      <Card.Title as="h6">Order Details</Card.Title>
                    </Card.Header>
                    <Card.Body>

                      <div className={fullScreen && "table-containers hide-scroll"}>
                        <Table className="tables">
                          <thead>
                            <tr>
                              <th scope="col">Sl no</th>
                              <th scope="col">Name</th>
                              <th scope="col">Qty</th>
                              <th scope="col">Price</th>
                            </tr>
                          </thead>
                          {
                            cart !== '' &&
                            cart.map((item, index) => (
                              <tbody className="overflow-auto">
                                <tr>
                                  <th scope="row">{cart.indexOf(item) + 1}</th>
                                  <td >{item.name}</td>
                                  <td>{item.quantity}</td>
                                  <td>{item.price}</td>
                                </tr>
                              </tbody>
                            ))}
                        </Table>
                      </div>
                    </Card.Body>
                    <Card.Footer>
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h6>
                            Sub Total
                          </h6>
                          <h6>
                            Tax (10%)
                          </h6>
                          <h6>
                          </h6>
                        </div>

                        <div>
                          <h6 className="text-dark">
                            &#8377; {subTotal}
                          </h6>
                          <h6>
                            &#8377; {tax}
                          </h6>
                          <h6>
                            &#8377; {discount}
                          </h6>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="text-dark">
                          Grand Total
                        </h5>
                        <h5 className="text-dark">
                          &#8377; {total}/-
                        </h5>
                      </div>
                      <Button className="btn btn-primary btn-sm w-100 mt-1">Print Bill</Button>
                    </Card.Footer>
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

        <div className={open ? 'pos_modal_container' : 'pos_modal_container_none'} ref={modalRef}>
          <div className="pos_modal">
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
                  <div className="w-30">
                    <Form.Select name="addons" id="addons" onChange={e => setAddons(e.target.value)}>
                      <option value="addons">Addons</option>
                      <option value="extra">Extra Pickels</option>
                      <option value="add salad">Add salad</option>
                      <option value="mionise">Mionise</option>
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
                <Button className="primary btn-sm w-100 mt-3" onClick={() => handleCart(modalData.id, modalData.name, modalData.price, addons, posCount)}>Add to cart</Button>
              </Card.Body>
            </Card>

          </div>
        </div>
      </FullScreen >
    </>
  );
}

export default POS;
