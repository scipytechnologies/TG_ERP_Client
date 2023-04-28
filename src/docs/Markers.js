import React, { useEffect } from "react";
import Prism from "prismjs";
import { Card, Col, Container, Nav, Row } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

import img2 from "../assets/img/img2.jpg";

export default function Markers() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Components</label>
          <h2 className="main-title">Markers</h2>
          <p className="main-title-text">A marker is a type of label that can be attached in any images or cards component with the help of utilities/helper classes.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Basic Example</h5>
          <p>The most basic marker that is attached to image and card component.</p>

          <Card className="card-example">
            <Card.Body>
              <Row>
                <Col sm="8" md="6">
                  <div className="position-relative">
                    <div className="marker top-left shadow-sm">Sample Marker</div>
                    <img src={img2} className="img-fluid rounded" alt="" />
                  </div>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="position-relative">
  <div className="marker top-left shadow-sm">Sample Marker</div>
  <img src={img2} className="img-fluid rounded" alt="" />
</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Positioning</h5>
          <p>A marker can change it's position with the help of position helper classes.</p>

          <Card className="card-example">
            <Card.Body>
              <Row className="g-2">
                <Col md="6">
                  <div className="position-relative">
                    <div className="marker top-left shadow-sm">Top Left Marker</div>
                    <img src={img2} className="img-fluid rounded" alt="" />
                  </div>
                </Col>
                <Col md="6">
                  <div className="position-relative">
                    <div className="marker top-right shadow-sm">Top Right Marker</div>
                    <img src={img2} className="img-fluid rounded" alt="" />
                  </div>
                </Col>
                <Col md="6">
                  <div className="position-relative">
                    <div className="marker bottom-left shadow-sm">Bottom Left Marker</div>
                    <img src={img2} className="img-fluid rounded" alt="" />
                  </div>
                </Col>
                <Col md="6">
                  <div className="position-relative">
                    <div className="marker bottom-right shadow-sm">Bottom Right Marker</div>
                    <img src={img2} className="img-fluid rounded" alt="" />
                  </div>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="marker top-left">Top Left Marker</div>
<div className="marker top-right">Top Right Marker</div>
<div className="marker bottom-left">Bottom Left Marker</div>
<div className="marker bottom-right">Bottom Right Marker</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Icon Marker</h5>
          <p>A marker can be an icon with the use of class <code>.marker-icon.</code></p>

          <Card className="card-example">
            <Card.Body>
              <Row className="g-2">
                <Col md>
                  <div className="position-relative">
                    <div className="marker-icon top-left"><i className="ri-star-line"></i></div>
                    <img src={img2} className="img-fluid rounded" alt="" />
                  </div>
                </Col>
                <Col md>
                  <div className="position-relative">
                    <div className="marker-icon bottom-right"><i className="ri-star-line"></i></div>
                    <img src={img2} className="img-fluid rounded" alt="" />
                  </div>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="marker-icon top-left"><i className="ri-star-line"></i></Col>
<div className="marker-icon bottom-right"><i className="ri-star-line"></i></Col>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section4" className="main-subtitle">Ribbon Marker</h5>
          <p>A marker style variant like ribbon like in the example below.</p>

          <Card className="card-example">
            <Card.Body>
              <Row className="px-4 g-2">
                <Col md="6">
                  <div className="position-relative">
                    <div className="marker-ribbon top-left">Top Left Marker</div>
                    <img src={img2} className="img-fluid rounded" alt="" />
                  </div>
                </Col>
                <Col md="6">
                  <div className="position-relative">
                    <div className="marker-ribbon top-right">Top Right Marker</div>
                    <img src={img2} className="img-fluid rounded" alt="" />
                  </div>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="marker-ribbon top-left">Top Left Marker</div>
<div className="marker-ribbon top-right">Top Right Marker</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section5" className="main-subtitle">Contextual Variations</h5>
          <p>Add any of the below mentioned modifier classes to change the appearance of a marker. The example below uses border color utility class for card component and not part of the marker style.</p>

          <Card className="card-example">
            <Card.Body>
              <Row className="g-2">
                <Col md="4">
                  <div className="position-relative">
                    <div className="marker marker-primary top-left">Primary</div>
                    <img src={img2} className="img-fluid rounded" alt="" />
                  </div>
                </Col>
                <Col md="4">
                  <div className="position-relative">
                    <div className="marker-icon marker-danger top-left"><i className="ri-star-line"></i></div>
                    <img src={img2} className="img-fluid rounded" alt="" />
                  </div>
                </Col>
                <Col md="4">
                  <div className="position-relative">
                    <div className="marker-ribbon marker-success top-left">Success</div>
                    <img src={img2} className="img-fluid rounded" alt="" />
                  </div>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="marker marker-primary top-left">Primary</div>
<div className="marker-icon marker-danger top-left"><i className="ri-star-line"></i></Col>
<div className="marker-ribbon marker-success top-left">Success</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Basic Example</Nav.Link>
          <Nav.Link href="#section2">Positioning</Nav.Link>
          <Nav.Link href="#section3">Icon Marker</Nav.Link>
          <Nav.Link href="#section4">Ribbon Marker</Nav.Link>
          <Nav.Link href="#section5">Contextual Variations</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}