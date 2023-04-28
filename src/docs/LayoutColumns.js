import React, { useEffect } from "react";
import { Card, Row, Col, Container, Nav } from "react-bootstrap";
import Prism from "prismjs";
import HeaderMobile from "../layouts/HeaderMobile";
import Footer from "../layouts/Footer";

export default function LayoutColumns() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />

      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Getting Started</label>
          <h2 className="main-title">Columns</h2>
          <p className="main-title-text">Learn how to modify columns with a handful of options for alignment, ordering, and offsetting thanks to our flexbox grid system.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Vertical Alignment</h5>
          <p>Use flexbox alignment utilities to vertically and horizontally align columns.</p>

          <Card className="card-example">
            <Card.Body>
              <Row className="g-2 row-example ht-150 align-items-center">
                <Col><span>1 of 3 Column</span></Col>
                <Col><span>2 of 3 Column</span></Col>
                <Col><span>3 of 3 Column</span></Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Row className="ht-150 align-items-center">
  <Col><span>1 of 3 Column</span></Col>
  <Col><span>2 of 3 Column</span></Col>
  <Col><span>3 of 3 Column</span></Col>
</Row>`}</code></pre>
            </Card.Footer>
          </Card>

          <Card className="card-example">
            <Card.Body>
              <Row className="g-2 row-example ht-150 align-items-end">
                <Col><span>1 of 3 Column</span></Col>
                <Col><span>2 of 3 Column</span></Col>
                <Col><span>3 of 3 Column</span></Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Row className="ht-150 align-items-end">
  <Col><span>1 of 3 Column</span></Col>
  <Col><span>2 of 3 Column</span></Col>
  <Col><span>3 of 3 Column</span></Col>
</Row>`}</code></pre>
            </Card.Footer>
          </Card>

          <Card className="card-example">
            <Card.Body>
              <Row className="g-2 row-example ht-150">
                <Col className="align-self-start"><span>1 of 3 Column</span></Col>
                <Col className="align-self-center"><span>2 of 3 Column</span></Col>
                <Col className="align-self-end"><span>3 of 3 Column</span></Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Row className="ht-150">
  <Col className="align-self-start"><span>1 of 3 Column</span></Col>
  <Col className="align-self-center"><span>2 of 3 Column</span></Col>
  <Col className="align-self-end"><span>3 of 3 Column</span></Col>
</Row>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Horizontal Alignment</h5>
          <p>Use flexbox alignment utilities to vertically and horizontally align columns.</p>

          <Card className="card-example">
            <Card.Body>
              <Row className="g-2 row-example justify-content-center">
                <Col xs="3"><span>1 of 3 Column</span></Col>
                <Col xs="3"><span>2 of 3 Column</span></Col>
                <Col xs="3"><span>3 of 3 Column</span></Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Row className="justify-content-center">
  <Col xs="3"><span>1 of 3 Column</span></Col>
  <Col xs="3"><span>2 of 3 Column</span></Col>
  <Col xs="3"><span>3 of 3 Column</span></Col>
</Row>`}</code></pre>
            </Card.Footer>
          </Card>

          <Card className="card-example">
            <Card.Body>
              <Row className="g-2 row-example justify-content-end">
                <Col xs="3"><span>1 of 3 Column</span></Col>
                <Col xs="3"><span>2 of 3 Column</span></Col>
                <Col xs="3"><span>3 of 3 Column</span></Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Row className="justify-content-end">
  <Col xs="3"><span>1 of 3 Column</span></Col>
  <Col xs="3"><span>2 of 3 Column</span></Col>
  <Col xs="3"><span>3 of 3 Column</span></Col>
</Row>`}</code></pre>
            </Card.Footer>
          </Card>

          <Card className="card-example">
            <Card.Body>
              <Row className="g-2 row-example justify-content-between">
                <Col xs="3"><span>1 of 2 Column</span></Col>
                <Col xs="3"><span>2 of 2 Column</span></Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Row className="justify-content-between">
  <Col xs="3"><span>1 of 2 Column</span></Col>
  <Col xs="3"><span>2 of 2 Column</span></Col>
</Row>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Column Breaks</h5>
          <p>Breaking columns to a new line in flexbox requires a small hack: add an element with width: 100% wherever you want to wrap your columns to a new line.</p>

          <Card className="card-example">
            <Card.Body>
              <Row className="g-2 row-example">
                <Col xs="4"><span>1 of 4 Column</span></Col>
                <Col xs="4"><span>2 of 4 Column</span></Col>

                <div className="w-100"></div>

                <Col xs="4"><span>3 of 4 Column</span></Col>
                <Col xs="4"><span>4 of 4 Column</span></Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Row>
  <Col xs="4"><span>1 of 4 Column</span></Col>
  <Col xs="4"><span>2 of 4 Column</span></Col>

  <div className="w-100"></div>

  <Col xs="4"><span>3 of 4 Column</span></Col>
  <Col xs="4"><span>4 of 4 Column</span></Col>
</Row>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section4" className="main-subtitle">Reordering</h5>
          <p>Use .order- classes for controlling the visual order of your content. These classes are responsive, so you can set the order by breakpoint.</p>

          <Card className="card-example">
            <Card.Body>
              <Row className="g-2 row-example">
                <Col xs="4"><span>1 of 3 Column</span></Col>
                <Col xs="4" className="order-3"><span>2 of 3 Column</span></Col>
                <Col xs="4" className="order-1"><span>3 of 3 Column</span></Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Row>
  <Col xs="4"><span>1 of 3 Column</span></Col>
  <Col xs="4" className="order-3"><span>2 of 3 Column</span></Col>
  <Col xs="4" className="order-1"><span>3 of 3 Column</span></Col>
</Row>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section5" className="main-subtitle">Offsetting Columns</h5>
          <p>You can offset grid columns in two ways: our responsive .offset- grid classes and our margin utilities. Grid classes are sized to match columns while margins are more useful for quick layouts where the width of the offset is variable.</p>

          <Card className="card card-example">
            <Card.Body>
              <Row className="g-2 row-example">
                <Col xs="4"><span>1 of 2 Column</span></Col>
                <Col xs="4" className="offset-3"><span>2 of 2 Column</span></Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Row>
  <Col xs="4"><span>1 of 2 Column</span></Col>
  <Col xs="4" className="offset-3"><span>2 of 2 Column</span></Col>
</Row>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section6" className="main-subtitle">Margin Utilities</h5>
          <p>With the move to flexbox in v4, you can use margin utilities like .me-auto to force sibling columns away from one another.</p>

          <Card className="card-example">
            <Card.Body>
              <Row className="g-2 row-example">
                <Col xs="4"><span>1 of 2 Column</span></Col>
                <Col xs="4" className="ms-auto"><span>2 of 2 Column</span></Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Row className="g-2 row-example">
  <Col xs="4"><span>1 of 2 Column</span></Col>
  <Col xs="4" className="ms-auto"><span>2 of 2 Column</span></Col>
</Row>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section7" className="main-subtitle">Standalone Column</h5>
          <p>The .col-* classes can also be used outside a .row to give an element a specific width. Whenever column classes are used as non direct children of a row, the paddings are omitted.</p>

          <Card className="card-example">
            <Card.Body>
              <Row className="g-2 row-example">
                <Col xs="3"><span>1 of 2 Column</span></Col>
                <Col sm="9"><span>2 of 2 Column</span></Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Row>
  <Col xs="3"><span>1 of 2 Column</span></Col>
  <Col sm="9"><span>2 of 2 Column</span></Col>
</Row>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Vertical Alignment</Nav.Link>
          <Nav.Link href="#section2">Horizontal Alignment</Nav.Link>
          <Nav.Link href="#section3">Column Breaks</Nav.Link>
          <Nav.Link href="#section4">Reordering</Nav.Link>
          <Nav.Link href="#section5">Offsetting Columns</Nav.Link>
          <Nav.Link href="#section6">Margin Utilities</Nav.Link>
          <Nav.Link href="#section7">Standalone Column</Nav.Link>
        </Nav>
      </div>

      <Footer />
    </React.Fragment>
  );
}