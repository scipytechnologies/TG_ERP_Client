import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import { Card, Container, Nav, Offcanvas, Button } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

export default function OffCanvas() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [showTop, setShowTop] = useState(false);
  const handleCloseTop = () => setShowTop(false);
  const handleShowTop = () => setShowTop(true);

  const [showBottom, setShowBottom] = useState(false);
  const handleCloseBottom = () => setShowBottom(false);
  const handleShowBottom = () => setShowBottom(true);

  const [showRight, setShowRight] = useState(false);
  const handleCloseRight = () => setShowRight(false);
  const handleShowRight = () => setShowRight(true);

  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Components</label>
          <h2 className="main-title">Off-Canvas</h2>
          <p className="main-title-text">Build hidden sidebars into your project for navigation, shopping carts, and more with a few classes and our JavaScript plugin.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Live Demo</h5>

          <p>Offcanvas includes support for a header with a close button and an optional body class for some initial padding. We suggest that you include offcanvas headers with dismiss actions whenever possible, or provide an explicit dismiss action.</p>

          <Card className="card-example">
            <Card.Body>
              <Button variant="primary" onClick={handleShow}>Launch Offcanvas</Button>

              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  Some text as placeholder. In real life you can have the elements you
                  have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
              </Offcanvas>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Offcanvas show={show} onHide={handleClose}>
  <Offcanvas.Header closeButton>
    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
  </Offcanvas.Header>
  <Offcanvas.Body>
    Some text as placeholder. In real life you can have the elements you
    have chosen. Like, text, images, lists, etc.
  </Offcanvas.Body>
</Offcanvas>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Placement</h5>
          <p>Offcanvas supports a few different placements.</p>

          <Card className="card-example">
            <Card.Body>
              <Button variant="primary" onClick={handleShowTop}>Offcanvas Top</Button>

              <Offcanvas show={showTop} onHide={handleCloseTop} placement="top">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Offcanvas Top</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  Some text as placeholder. In real life you can have the elements you
                  have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
              </Offcanvas>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Offcanvas show={showTop} onHide={handleCloseTop} placement="top">...</Offcanvas>`}</code></pre>
            </Card.Footer>
          </Card>

          <Card className="card-example">
            <Card.Body>
              <Button variant="primary" onClick={handleShowBottom}>Offcanvas Bottom</Button>

              <Offcanvas show={showBottom} onHide={handleCloseBottom} placement="bottom">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Offcanvas Bottom</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  Some text as placeholder. In real life you can have the elements you
                  have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
              </Offcanvas>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Offcanvas show={showBottom} onHide={handleCloseBottom} placement="bottom">...</Offcanvas>`}</code></pre>
            </Card.Footer>
          </Card>

          <Card className="card-example">
            <Card.Body>
              <Button variant="primary" onClick={handleShowRight}>Offcanvas Right</Button>

              <Offcanvas show={showRight} onHide={handleCloseRight} placement="end">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Offcanvas Right</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  Some text as placeholder. In real life you can have the elements you
                  have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
              </Offcanvas>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Offcanvas show={showRight} onHide={handleCloseRight} placement="end">...</Offcanvas>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Backdrop</h5>
          <p>Scrolling the body element is disabled when an offcanvas and its backdrop are visible. Use the scroll prop to toggle body scrolling and the backdrop prop to toggle the backdrop.</p>

          <Card className="card-example">
            <Card.Body>
              <Button variant="primary" onClick={handleShow2}>Offcanvas No Backdrop</Button>

              <Offcanvas show={show2} onHide={handleClose2} backdrop={false}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  Some text as placeholder. In real life you can have the elements you
                  have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
              </Offcanvas>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Offcanvas show={show2} onHide={handleClose2} backdrop={false}>...</Offcanvas>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Live Demo</Nav.Link>
          <Nav.Link href="#section2">Placement</Nav.Link>
          <Nav.Link href="#section3">Backdrop</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}