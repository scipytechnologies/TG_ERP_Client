import React, { useEffect } from "react";
import Prism from "prismjs";
import { Card, Container, Nav } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

export default function UtilOpacity() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Utilities</label>
          <h2 className="main-title">Opacity</h2>
          <p className="main-title-text">Control the opacity of elements.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Basic Usage</h5>
          <p>The opacity property sets the opacity level for an element. The opacity level describes the transparency level, where 1 is not transparent at all, .5 is 50% visible, and 0 is completely transparent.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="d-flex gap-3">
                <div className="w-25 opacity-100 bg-primary text-white text-center p-3">100%</div>
                <div className="w-25 opacity-75 bg-primary text-white text-center p-3">75%</div>
                <div className="w-25 opacity-50 bg-primary text-white text-center p-3">50%</div>
                <div className="w-25 opacity-25 bg-primary text-white text-center p-3">25%</div>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html"></code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

        </Container>
        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Basic Usage</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}