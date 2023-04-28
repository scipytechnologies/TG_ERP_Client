import React, { useEffect } from "react";
import Prism from "prismjs";
import { Button, Card, Col, Container, Form, Nav, Row } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

export default function FormLayouts() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Forms</label>
          <h2 className="main-title">Layouts</h2>
          <p className="main-title-text">Give your forms some structure—from inline to horizontal to custom grid implementations—with our form layout options.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Utilities</h5>
          <p>Margin utilities are the easiest way to add some structure to forms. They provide basic grouping of labels, controls, optional form text, and form validation messaging.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="mb-3">
                <Form.Label htmlFor="formGroupExampleInput">Example label</Form.Label>
                <Form.Control type="text" id="formGroupExampleInput" placeholder="Example input placeholder" />
              </div>
              <div>
                <Form.Label htmlFor="formGroupExampleInput2">Another label</Form.Label>
                <Form.Control type="text" id="formGroupExampleInput2" placeholder="Another input placeholder" />
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="mb-3">
  <Form.Label htmlFor="formGroupExampleInput">Example label</Form.Label>
  <Form.Control type="text" id="formGroupExampleInput" placeholder="Example input placeholder" />
</div>
<div>
  <Form.Label htmlFor="formGroupExampleInput2">Another label</Form.Label>
  <Form.Control type="text" id="formGroupExampleInput2" placeholder="Another input placeholder" />
</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Form Grid</h5>
          <p>More complex forms can be built using our grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options.</p>

          <Card className="card-example">
            <Card.Body>
              <Row>
                <Col>
                  <Form.Control type="text" placeholder="First name" aria-label="First name" />
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="Last name" aria-label="Last name" />
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Row>
  <Col>
    <Form.Control type="text" placeholder="First name" aria-label="First name" />
  </Col>
  <Col>
    <Form.Control type="text" placeholder="Last name" aria-label="Last name" />
  </Col>
</Row>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Gutters</h5>
          <p>By adding gutter modifier classes, you can have control over the gutter width in as well the inline as block direction.</p>

          <Card className="card-example">
            <Card.Body>
              <Row className="g-2">
                <Col>
                  <Form.Control type="text" placeholder="First name" aria-label="First name" />
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="Last name" aria-label="Last name" />
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Row className="g-2">
  <Col>
    <Form.Control type="text" placeholder="First name" aria-label="First name" />
  </Col>
  <Col>
    <Form.Control type="text" placeholder="Last name" aria-label="Last name" />
  </Col>
</Row>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section4" className="main-subtitle">Horizontal Form</h5>
          <p>Create horizontal forms with the grid by adding the <code>Row</code> class to form groups and using the <code>Col</code> classes to specify the width of your labels and controls. </p>

          <Card className="card-example">
            <Card.Body>
              <Form>
                <Row className="mb-3">
                  <Form.Label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</Form.Label>
                  <Col sm="10">
                    <Form.Control type="email" id="inputEmail3" />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Form.Label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</Form.Label>
                  <Col sm="10">
                    <Form.Control type="password" id="inputPassword3" />
                  </Col>
                </Row>
                <Row as="fieldset" className="mb-3">
                  <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                  <Col sm="10">
                    <Form.Check type="radio" name="gridRadios" id="gridRadios1" value="option1" label="First radio" checked onChange={() => {}} />
                    <Form.Check type="radio" name="gridRadios" id="gridRadios2" value="option2" label="Second radio" />
                    <Form.Check type="radio" name="gridRadios" id="gridRadios3" value="option3" label="Third disabled radio" disabled />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col sm="10" className="offset-sm-2">
                    <Form.Check type="checkbox" name="gridCheck" id="gridCheck1" label="Example checkbox" />
                  </Col>
                </Row>
                <Button type="submit" variant="primary">Sign in</Button>
              </Form>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Form>
  <Row className="mb-3">
    <Form.Label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</Form.Label>
    <Col sm="10">
      <Form.Control type="email" id="inputEmail3" />
    </Col>
  </Row>
  <Row className="mb-3">
    <Form.Label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</Form.Label>
    <Col sm="10">
      <Form.Control type="password" id="inputPassword3" />
    </Col>
  </Row>
  <Row as="fieldset" className="mb-3">
    <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
    <Col sm="10">
      <Form.Check type="radio" name="gridRadios" id="gridRadios1" value="option1" label="First radio" checked />
      <Form.Check type="radio" name="gridRadios" id="gridRadios2" value="option2" label="Second radio" />
      <Form.Check type="radio" name="gridRadios" id="gridRadios3" value="option3" label="Third disabled radio" disabled />
    </Col>
  </Row>
  <Row className="mb-3">
    <Col sm="10" className="offset-sm-2">
      <Form.Check type="checkbox" name="gridCheck" id="gridCheck1" label="Example checkbox" />
    </Col>
  </Row>
  <Button type="submit" variant="primary">Sign in</Button>
</Form>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section5" className="main-subtitle">Column Sizing</h5>
          <p>As shown in the previous examples, our grid system allows you to place any number of <code>Col</code> within a <code>Row</code>. They'll split the available width equally between them.</p>

          <Card className="card-example">
            <Card.Body>
              <Row className="g-2">
                <Col sm="7">
                  <Form.Control type="text" placeholder="City" aria-label="City" />
                </Col>
                <Col sm>
                  <Form.Control type="text" placeholder="State" aria-label="State" />
                </Col>
                <Col sm>
                  <Form.Control type="text" placeholder="Zip" aria-label="Zip" />
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Row className="g-2">
  <Col sm="7">
    <Form.Control type="text" placeholder="City" aria-label="City" />
  </Col>
  <Col sm>
    <Form.Control type="text" placeholder="State" aria-label="State" />
  </Col>
  <Col sm>
    <Form.Control type="text" placeholder="Zip" aria-label="Zip" />
  </Col>
</Row>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

        </Container>
        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Utilities</Nav.Link>
          <Nav.Link href="#section2">Form Grid</Nav.Link>
          <Nav.Link href="#section3">Gutters</Nav.Link>
          <Nav.Link href="#section4">Horizontal Form</Nav.Link>
          <Nav.Link href="#section5">Column Sizing</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}