import React, { useEffect } from "react";
import Prism from "prismjs";
import { Card, Container, Nav } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

export default function UtilShadows() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Utilities</label>
          <h2 className="main-title">Shadows</h2>
          <p className="main-title-text">Add or remove shadows to elements with box-shadow utilities. </p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Text Alignment</h5>
          <p>While shadows on components are disabled by default in Bootstrap and can be enabled via <code>$enable-shadows</code>, you can also quickly add or remove a shadow with our box-shadow utility classes. Includes support for <code>.shadow-none</code> and three default sizes (which have associated variables to match).</p>

          <Card className="card-example">
            <Card.Body>
              <div className="shadow-none p-3 mb-4 bg-white rounded">No shadow</div>
              <div className="shadow-sm p-3 mb-4 bg-white rounded">Small shadow</div>
              <div className="shadow p-3 mb-4 bg-white rounded">Regular shadow</div>
              <div className="shadow-lg p-3 mb-4 bg-white rounded">Larger shadow</div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html"></code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

        </Container>
        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1" className="nav-link">Basic Example</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}