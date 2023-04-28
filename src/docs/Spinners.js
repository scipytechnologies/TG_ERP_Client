import React, { useEffect } from "react";
import Prism from "prismjs";
import { Card, Container, Nav, Spinner, Button } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

export default function Spinners() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Components</label>
          <h2 className="main-title">Spinners</h2>
          <p className="main-title-text">Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Border Spinner</h5>
          <p>Use the border spinners for a lightweight loading indicator.</p>

          <Card className="card-example">
            <Card.Body>
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Border Colors</h5>
          <p>You can use any of our text color utilities on the standard spinner.</p>

          <Card className="card-example">
            <Card.Body className="d-flex gap-2">
              <Spinner animation="border" variant="primary" />
              <Spinner animation="border" variant="secondary" />
              <Spinner animation="border" variant="success" />
              <Spinner animation="border" variant="danger" />
              <Spinner animation="border" variant="warning" />
              <Spinner animation="border" variant="info" />
              <Spinner animation="border" variant="light" />
              <Spinner animation="border" variant="dark" />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Spinner animation="border" variant="primary" />
<Spinner animation="border" variant="secondary" />
<Spinner animation="border" variant="success" />
<Spinner animation="border" variant="danger" />
<Spinner animation="border" variant="warning" />
<Spinner animation="border" variant="info" />
<Spinner animation="border" variant="light" />
<Spinner animation="border" variant="dark" />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Growing Spinner</h5>
          <p>If you don't fancy a border spinner, switch to the grow spinner. While it doesn't technically spin, it does repeatedly grow.</p>

          <Card className="card-example">
            <Card.Body>
              <Spinner animation="grow" />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Spinner animation="grow" />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section4" className="main-subtitle">Growing Colors</h5>
          <p>If you don't fancy a border spinner, switch to the grow spinner. While it doesn't technically spin, it does repeatedly grow.</p>

          <Card className="card-example">
            <Card.Body className="d-flex gap-2">
              <Spinner animation="grow" variant="primary" />
              <Spinner animation="grow" variant="secondary" />
              <Spinner animation="grow" variant="success" />
              <Spinner animation="grow" variant="danger" />
              <Spinner animation="grow" variant="warning" />
              <Spinner animation="grow" variant="info" />
              <Spinner animation="grow" variant="light" />
              <Spinner animation="grow" variant="dark" />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Spinner animation="grow" variant="primary" />
<Spinner animation="grow" variant="secondary" />
<Spinner animation="grow" variant="success" />
<Spinner animation="grow" variant="danger" />
<Spinner animation="grow" variant="warning" />
<Spinner animation="grow" variant="info" />
<Spinner animation="grow" variant="light" />
<Spinner animation="grow" variant="dark" />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section5" className="main-subtitle">Alignment</h5>
          <p>Use flexbox utilities or text alignment utilities to place spinners exactly where you need them in any situation.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="d-flex justify-content-center">
                <Spinner animation="border" />
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="d-flex justify-content-center">
  <Spinner animation="border" />
</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <Card className="card-example">
            <Card.Body>
              <div className="d-flex justify-content-end">
                <Spinner animation="border" />
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="d-flex justify-content-end">
  <Spinner animation="border" />
</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section6" className="main-subtitle">Size</h5>
          <p>Add <code>.spinner-border-sm</code> and <code>.spinner-grow-sm</code> to make a smaller spinner that can quickly be used within other components.</p>

          <Card className="card-example">
            <Card.Body className="d-flex gap-1">
              <Spinner animation="border" size="sm" />
              <Spinner animation="grow" size="sm" />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Spinner animation="border" size="sm" />
<Spinner animation="grow" size="sm" />`}</code></pre>
            </Card.Footer>
          </Card>

          <Card className="card-example">
            <Card.Body className="d-flex gap-1">
              <Spinner animation="border" size="lg" />
              <Spinner animation="grow" size="lg" />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Spinner animation="border" size="lg" />
<Spinner animation="grow" size="lg" />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section7" className="main-subtitle">Button</h5>
          <p>Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.</p>

          <Card className="card-example">
            <Card.Body>
              <Button variant="primary" disabled>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Loading...</span>
              </Button>{' '}
              <Button variant="primary" disabled>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </Button>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Button variant="primary" disabled>
  <Spinner
    as="span"
    animation="border"
    size="sm"
    role="status"
    aria-hidden="true"
  />
  <span className="visually-hidden">Loading...</span>
</Button>{' '}
<Button variant="primary" disabled>
  <Spinner
    as="span"
    animation="grow"
    size="sm"
    role="status"
    aria-hidden="true"
  />
  Loading...
</Button>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Border Spinner</Nav.Link>
          <Nav.Link href="#section2">Border Colors</Nav.Link>
          <Nav.Link href="#section3">Growing Spinner</Nav.Link>
          <Nav.Link href="#section4">Growing Colors</Nav.Link>
          <Nav.Link href="#section5">Alignment</Nav.Link>
          <Nav.Link href="#section6">Size</Nav.Link>
          <Nav.Link href="#section7">Button</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}