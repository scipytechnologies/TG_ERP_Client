import React, { useEffect } from "react";
import Prism from "prismjs";
import { Card, Container, Nav, Table } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

export default function UtilPosition() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Utilities</label>
          <h2 className="main-title">Position</h2>
          <p className="main-title-text">Use these shorthand utilities for quickly configuring the position of an element.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Position Values</h5>
          <p>Quick positioning classes are available, though they are not responsive.</p>

          <Card className="card-example">
            <Card.Footer>
              <pre><code className="language-html">{`<div className="position-static">...</div>
<div className="position-relative">...</div>
<div className="position-absolute">...</div>
<div className="position-fixed">...</div>
<div className="position-sticky">...</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Arrange Elements</h5>
          <p>Arrange elements easily with the edge positioning utilities.</p>

          <Table className="table-spacing">
            <tbody>
              <tr>
                <td colspan="2" className="text-dark ps-0">Where <strong>property</strong> is one of:</td>
              </tr>
              <tr>
                <td><code>top</code></td>
                <td>for the vertical top position</td>
              </tr>
              <tr>
                <td><code>start</code></td>
                <td>for the horizontal left position (in LTR)</td>
              </tr>
              <tr>
                <td><code>top</code></td>
                <td>for the vertical bottom position</td>
              </tr>
              <tr>
                <td><code>bottom</code></td>
                <td>for the horizontal right position (in LTR)</td>
              </tr>
              <tr>
                <td colspan="2" className="text-dark ps-0">Where <strong>position</strong> is one of:</td>
              </tr>
              <tr>
                <td><code>0</code></td>
                <td>for 0 edge position</td>
              </tr>
              <tr>
                <td><code>50</code></td>
                <td>for 50% edge position</td>
              </tr>
              <tr>
                <td><code>100</code></td>
                <td>for 100% edge position</td>
              </tr>
            </tbody>
          </Table>

          <Card className="card-example">
            <Card.Footer>
              <pre><code className="language-html">{`<div className="position-relative">
  <div className="position-absolute top-0 start-0"></div>
  <div className="position-absolute top-0 end-0"></div>
  <div className="position-absolute top-50 start-50"></div>
  <div className="position-absolute bottom-50 end-50"></div>
  <div className="position-absolute bottom-0 start-0"></div>
  <div className="position-absolute bottom-0 end-0"></div>
</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Center Elements</h5>
          <p>In addition, you can also center the elements with the transform utility class <code>.translate-middle</code>.</p>

          <Card className="card-example">
            <Card.Footer>
              <pre><code className="language-html">{`<div className="position-relative">
  <div className="position-absolute top-0 start-0 translate-middle"></div>
  <div className="position-absolute top-0 start-50 translate-middle"></div>
  <div className="position-absolute top-0 start-100 translate-middle"></div>
  <div className="position-absolute top-50 start-0 translate-middle"></div>
  <div className="position-absolute top-50 start-50 translate-middle"></div>
  <div className="position-absolute top-50 start-100 translate-middle"></div>
  <div className="position-absolute top-100 start-0 translate-middle"></div>
  <div className="position-absolute top-100 start-50 translate-middle"></div>
  <div className="position-absolute top-100 start-100 translate-middle"></div>
</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <Card className="card-example">
            <Card.Footer>
              <pre><code className="language-html">{`<div className="position-relative">
  <div className="position-absolute top-0 start-0"></div>
  <div className="position-absolute top-0 start-50 translate-middle-x"></div>
  <div className="position-absolute top-0 end-0"></div>
  <div className="position-absolute top-50 start-0 translate-middle-y"></div>
  <div className="position-absolute top-50 start-50 translate-middle"></div>
  <div className="position-absolute top-50 end-0 translate-middle-y"></div>
  <div className="position-absolute bottom-0 start-0"></div>
  <div className="position-absolute bottom-0 start-50 translate-middle-x"></div>
  <div className="position-absolute bottom-0 end-0"></div>
</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />
        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Position Values</Nav.Link>
          <Nav.Link href="#section2">Arrange Elements</Nav.Link>
          <Nav.Link href="#section3">Center Elements</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}