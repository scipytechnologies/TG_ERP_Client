import React, { useEffect } from "react";
import Prism from "prismjs";
import { Card, Container, Form, Nav } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

export default function FormRange() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Forms</label>
          <h2 className="main-title">Range</h2>
          <p className="main-title-text">Use our custom range inputs for consistent cross-browser styling and built-in customization.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Basic Example</h5>
          <p>The track (the background) and thumb (the value) are both styled to appear the same across browsers.</p>

          <Card className="card-example">
            <Card.Body>
              <Form.Range />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Form.Range />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Disabled</h5>
          <p>Add the disabled boolean attribute on an input to give it a grayed out appearance and remove pointer events.</p>

          <Card className="card-example">
            <Card.Body>
              <Form.Range disabled />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Form.Range disabled />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Min &amp; Max</h5>
          <p>Range inputs have implicit values for min and max 0 and 100, respectively. You may specify new values for those using the min and max attributes.</p>

          <Card className="card-example">
            <Card.Body>
              <Form.Range min={0} max={5} />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Form.Range min={0} max={5} />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section4" className="main-subtitle">Steps</h5>
          <p>By default, range inputs "snap" to integer values. To change this, you can specify a step value.</p>

          <Card className="card-example">
            <Card.Body>
              <Form.Range min={0} max={5} step={0.5} />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Form.Range min={0} max={5} step={0.5} />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

        </Container>
        <Nav id="navDocs" className="nav-docs">
          <label>On this Page</label>
          <Nav.Link href="#section1">Basic Example</Nav.Link>
          <Nav.Link href="#section2">Disabled</Nav.Link>
          <Nav.Link href="#section3">Min &amp; Max</Nav.Link>
          <Nav.Link href="#section4">Steps</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}