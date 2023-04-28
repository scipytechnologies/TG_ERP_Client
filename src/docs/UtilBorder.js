import React, { useEffect } from "react";
import Prism from "prismjs";
import { Card, Container, Nav } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

export default function UtilBorder() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Utilities</label>
          <h2 className="main-title">Border</h2>
          <p className="main-title-text">Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Set/Unset Border</h5>
          <p>The following border utilities classes will add border to any side of an element.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="demo-bordered">
                <span className="border-0"></span>
                <span className="border-top-0"></span>
                <span className="border-end-0"></span>
                <span className="border-bottom-0"></span>
                <span className="border-start-0"></span>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<span className="border-0"></span>
<span className="border-top-0"></span>
<span className="border-end-0"></span>
<span className="border-bottom-0"></span>
<span className="border-start-0"></span>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Border Color</h5>
          <p>Change the border color using utilities built on our theme colors.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="demo-border">
                <span className="border border-primary"></span>
                <span className="border border-secondary"></span>
                <span className="border border-success"></span>
                <span className="border border-danger"></span>
                <span className="border border-warning"></span>
                <span className="border border-info"></span>
                <span className="border border-light"></span>
                <span className="border border-dark"></span>
                <span className="border border-white"></span>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<span className="border border-primary"></span>
<span className="border border-secondary"></span>
<span className="border border-success"></span>
<span className="border border-danger"></span>
<span className="border border-warning"></span>
<span className="border border-info"></span>
<span className="border border-light"></span>
<span className="border border-dark"></span>
<span className="border border-white"></span>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Border Width</h5>
          <p>Change the border width using utilities to change the border thickness.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="demo-border">
                <span className="border border-1"></span>
                <span className="border border-2"></span>
                <span className="border border-3"></span>
                <span className="border border-4"></span>
                <span className="border border-5"></span>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<span className="border border-1"></span>
<span className="border border-2"></span>
<span className="border border-3"></span>
<span className="border border-4"></span>
<span className="border border-5"></span>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section4" className="main-subtitle">Border Radius</h5>
          <p>Add classes to an element to easily round its corners.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="demo-bordered">
                <span className="border rounded"></span>
                <span className="border rounded-top"></span>
                <span className="border rounded-end"></span>
                <span className="border rounded-bottom"></span>
                <span className="border rounded-start"></span>
                <span className="border rounded-circle"></span>
                <span className="border rounded-pill"></span>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<span className="border rounded"></span>
<span className="border rounded-top"></span>
<span className="border rounded-end"></span>
<span className="border rounded-bottom"></span>
<span className="border rounded-start"></span>
<span className="border rounded-circle"></span>
<span className="border rounded-pill"></span>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />
        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Set/Unset Border</Nav.Link>
          <Nav.Link href="#section2">Border Color</Nav.Link>
          <Nav.Link href="#section3">Border Width</Nav.Link>
          <Nav.Link href="#section4">Border Radius</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}