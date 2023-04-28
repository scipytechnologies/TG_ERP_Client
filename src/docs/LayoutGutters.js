import React, { useEffect } from "react";
import Prism from "prismjs";
import HeaderMobile from "../layouts/HeaderMobile";
import { Card, Container, Row, Col, Nav } from "react-bootstrap";
import Footer from "../layouts/Footer";

export default function LayoutGutters() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />

      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Getting Started</label>
          <h2 className="main-title">Gutters</h2>
          <p className="main-title-text">Gutters are the padding between your columns, used to responsively space and align content in the Bootstrap grid system.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Horizontal Gutters</h5>
          <p>Gutters can be responsively adjusted. Use breakpoint-specific gutter classes to modify horizontal gutters, vertical gutters, and all gutters.</p>

          <Card className="card-example">
            <Card.Body>
              <Row className="gx-5 row-example">
                <Col><span>1 of 3 Column</span></Col>
                <Col><span>2 of 3 Column</span></Col>
                <Col><span>3 of 3 Column</span></Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Row className="gx-5">
  <Col><span>1 of 3 Column</span></Col>
  <Col><span>2 of 3 Column</span></Col>
  <Col><span>3 of 3 Column</span></Col>
</Row>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Vertical Gutters</h5>
          <p>Like the horizontal gutters, the vertical gutters can cause some overflow below the row at the end of a page.</p>

          <Card className="card-example">
            <Card.Body>
              <Row className="gy-5 row-example">
                <Col xs="6"><span>1 of 4 Column</span></Col>
                <Col xs="6"><span>2 of 4 Column</span></Col>
                <Col xs="6"><span>3 of 4 Column</span></Col>
                <Col xs="6"><span>4 of 4 Column</span></Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Row className="gy-5">
  <Col xs="6"><span>1 of 4 Column</span></Col>
  <Col xs="6"><span>2 of 4 Column</span></Col>
  <Col xs="6"><span>3 of 4 Column</span></Col>
  <Col xs="6"><span>4 of 4 Column</span></Col>
</Row>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Vertical &amp; Horizontal Gutters</h5>
          <p>Classes <code>.g-*</code> can be used to control the horizontal gutter widths, for the following example we use a smaller gutter width, so there won’t be a need to add the .overflow-hidden wrapper class.</p>

          <Card className="card-example">
            <Card.Body>
              <Row className="g-2 row-example">
                <Col xs="6"><span>1 of 4 Column</span></Col>
                <Col xs="6"><span>2 of 4 Column</span></Col>
                <Col xs="6"><span>3 of 4 Column</span></Col>
                <Col xs="6"><span>4 of 4 Column</span></Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Row className="g-2">
  <Col xs="6"><span>1 of 4 Column</span></Col>
  <Col xs="6"><span>2 of 4 Column</span></Col>
  <Col xs="6"><span>3 of 4 Column</span></Col>
  <Col xs="6"><span>4 of 4 Column</span></Col>
</Row>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section4" className="main-subtitle">No Gutters</h5>
          <p>The gutters between columns in our predefined grid classes can be removed with <code>.g-0</code>. This removes the negative margins from .row and the horizontal padding from all immediate children columns.</p>

          <Card className="card-example">
            <Card.Body>
              <Row className="g-0 row-example">
                <Col xs="6"><span>1 of 4 Column</span></Col>
                <Col xs="6"><span>2 of 4 Column</span></Col>
                <Col xs="6"><span>3 of 4 Column</span></Col>
                <Col xs="6"><span>4 of 4 Column</span></Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Row className="g-0">
  <Col xs="6"><span>1 of 4 Column</span></Col>
  <Col xs="6"><span>2 of 4 Column</span></Col>
  <Col xs="6"><span>3 of 4 Column</span></Col>
  <Col xs="6"><span>4 of 4 Column</span></Col>
</Row>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Horizontal Gutters</Nav.Link>
          <Nav.Link href="#section2">Vertical Gutters</Nav.Link>
          <Nav.Link href="#section3">Vertical &amp; Horizontal Gutters</Nav.Link>
          <Nav.Link href="#section4">No Gutters</Nav.Link>
        </Nav>

      </div>

      <Footer />
    </React.Fragment>
  )
}