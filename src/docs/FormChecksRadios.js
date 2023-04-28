import React, { useEffect } from "react";
import Prism from "prismjs";
import { Card, Container, Form, Nav } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

export default function FormChecksRadios() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Forms</label>
          <h2 className="main-title">Checks &amp; Radios</h2>
          <p className="main-title-text">Create consistent cross-browser and cross-device checkboxes and radios with our completely rewritten checks component.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Checks</h5>
          <p>For even more customization and cross browser consistency, use our completely custom checkbox element to replace the browser defaults.</p>

          <Card className="card-example mb-4">
            <Card.Body>
              <Form.Check type="checkbox" label="Default checkbox" />
              <Form.Check type="checkbox" checked label="Checked checkbox" onChange={() => {}} />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Form.Check type="checkbox" label="Default checkbox" />
<Form.Check type="checkbox" checked label="Checked checkbox" />`}</code></pre>
            </Card.Footer>
          </Card>

          <p>Add the disabled attribute and the associated labels are automatically styled to match with a lighter color to help indicate the input's state.</p>

          <Card className="card-example">
            <Card.Body>
              <Form.Check type="checkbox" label="Default checkbox" disabled />
              <Form.Check type="checkbox" checked label="Checked checkbox" disabled onChange={() => {}} />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Form.Check type="checkbox" label="Default checkbox" disabled />
<Form.Check type="checkbox" checked label="Checked checkbox" disabled />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Radios</h5>
          <p>For even more customization and cross browser consistency, use our completely custom radio element to replace the browser defaults.</p>

          <Card className="card-example mb-4">
            <Card.Body>
              <Form.Check type="radio" label="Default radio" />
              <Form.Check type="radio" checked label="Checked radio" onChange={() => {}} />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Form.Check type="radio" label="Default radio" />
<Form.Check type="radio" checked label="Checked radio" />`}</code></pre>
            </Card.Footer>
          </Card>

          <p>Add the disabled attribute and the associated labels are automatically styled to match with a lighter color to help indicate the input's state.</p>

          <Card className="card-example">
            <Card.Body>
              <Form.Check type="radio" label="Default radio" disabled />
              <Form.Check type="radio" checked label="Checked radio" disabled onChange={() => {}}/>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Form.Check type="radio" label="Default radio" disabled />
<Form.Check type="radio" checked label="Checked radio" disabled />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Switches</h5>
          <p>A switch has the markup of a custom checkbox but uses the type <code>switch</code> to render a toggle switch.</p>

          <Card className="card-example">
            <Card.Body>
              <Form.Check type="switch" label="Default switch" />
              <Form.Check type="switch" checked label="Switch on" onChange={() => {}} />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Form.Check type="switch" label="Default switch" />
<Form.Check type="switch" checked label="Switch on" />`}</code></pre>
            </Card.Footer>
          </Card>

          <Card className="card-example">
            <Card.Body>
              <Form.Check type="switch" label="Default switch" disabled />
              <Form.Check type="switch" checked label="Switch on" disabled onChange={() => {}} />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Form.Check type="switch" label="Default switch" disabled />
<Form.Check type="switch" checked label="Switch on" disabled />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Checks</Nav.Link>
          <Nav.Link href="#section2">Radios</Nav.Link>
          <Nav.Link href="#section3">Switches</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}