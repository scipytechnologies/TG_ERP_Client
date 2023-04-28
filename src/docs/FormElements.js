import React, { useEffect } from "react";
import Prism from "prismjs";
import { Card, Container, Form, Nav } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

export default function FormElements() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Forms</label>
          <h2 className="main-title">Text Elements</h2>
          <p className="main-title-text">Give textual form controls like inputs and textareas an upgrade with custom styles, sizing, focus states, and more.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Basic Example</h5>
          <p>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="mb-3">
                <Form.Label htmlFor="exampleFormControlInput1">Email address</Form.Label>
                <Form.Control type="email" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div>
                <Form.Label htmlFor="exampleFormControlTextarea1">Message</Form.Label>
                <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="3" placeholder="Enter message here..."></Form.Control>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="mb-3">
  <Form.Label htmlFor="exampleFormControlInput1">Email address</Form.Label>
  <Form.Control type="email" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<div>
  <Form.Label htmlFor="exampleFormControlTextarea1">Message</Form.Label>
  <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="3" placeholder="Enter message here..."></Form.Control>
</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Sizing</h5>
          <p>Set heights using classes like <code>.form-control-lg</code> and <code>.form-control-sm</code>.</p>

          <Card className="card-example">
            <Card.Body>
              <Form.Control className="form-control-lg mb-2" type="text" placeholder="Large input" />
              <Form.Control className="mb-2" type="text" placeholder="Default input" />
              <Form.Control className="form-control-sm" type="text" placeholder="Small input" />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Form.Control className="form-control-lg mb-2" type="text" placeholder="Large input" />
<Form.Control className="mb-2" type="text" placeholder="Default input" />
<Form.Control className="form-control-sm" type="text" placeholder="Small input" />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Disabled</h5>
          <p>Add the disabled boolean attribute on an input to give it a grayed out appearance and remove pointer events.</p>

          <Card className="card-example">
            <Card.Body>
              <Form.Control className="mb-2" type="text" placeholder="Disabled input" disabled />
              <Form.Control type="text" value="Disabled readonly input" onChange={() => {}} disabled readOnly />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Form.Control className="mb-2" type="text" placeholder="Disabled input" disabled />
<Form.Control type="text" value="Disabled readonly input" disabled readOnly />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section4" className="main-subtitle">Readonly</h5>
          <p>Add the readonly boolean attribute on an input to prevent modification of the input's value.</p>

          <Card className="card-example">
            <Card.Body>
              <Form.Control type="text" value="Readonly input" onChange={() => {}} readOnly />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Form.Control type="text" value="Readonly input" readOnly />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section5" className="main-subtitle">File Input</h5>
          <p>The file input is the most gnarly of the bunch and requires additional JavaScript if you'd like to hook them up with functional Choose file… and selected file name text.</p>

          <Card className="card-example">
            <Card.Body>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Default file input example</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Multiple files input example</Form.Label>
                <Form.Control type="file" multiple />
              </Form.Group>
              <Form.Group controlId="formFileDisabled" className="mb-3">
                <Form.Label>Disabled file input example</Form.Label>
                <Form.Control type="file" disabled />
              </Form.Group>
              <Form.Group controlId="formFileSm" className="mb-3">
                <Form.Label>Small file input example</Form.Label>
                <Form.Control type="file" size="sm" />
              </Form.Group>
              <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Label>Large file input example</Form.Label>
                <Form.Control type="file" size="lg" />
              </Form.Group>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Form.Group controlId="formFile" className="mb-3">
  <Form.Label>Default file input example</Form.Label>
  <Form.Control type="file" />
</Form.Group>
<Form.Group controlId="formFileMultiple" className="mb-3">
  <Form.Label>Multiple files input example</Form.Label>
  <Form.Control type="file" multiple />
</Form.Group>
<Form.Group controlId="formFileDisabled" className="mb-3">
  <Form.Label>Disabled file input example</Form.Label>
  <Form.Control type="file" disabled />
</Form.Group>
<Form.Group controlId="formFileSm" className="mb-3">
  <Form.Label>Small file input example</Form.Label>
  <Form.Control type="file" size="sm" />
</Form.Group>
<Form.Group controlId="formFileLg" className="mb-3">
  <Form.Label>Large file input example</Form.Label>
  <Form.Control type="file" size="lg" />
</Form.Group>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Basic Example</Nav.Link>
          <Nav.Link href="#section2">Sizing</Nav.Link>
          <Nav.Link href="#section3">Disabled</Nav.Link>
          <Nav.Link href="#section4">Readonly</Nav.Link>
          <Nav.Link href="#section5">File Input</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}