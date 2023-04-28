import React, { useEffect } from "react";
import Prism from "prismjs";
import { Card, Col, Container, Nav, Placeholder, Row } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

export default function Placeholders() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Components</label>
          <h2 className="main-title">Placeholders</h2>
          <p className="main-title-text">Use loading placeholders for your components or pages to indicate something may still be loading.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Basic Example</h5>
          <p>In the example below, we take a typical card component and recreate it with placeholders applied to create a loading card.</p>

          <Card className="card-example">
            <Card.Body>
              <Row>
                <Col sm="8" md="6">
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        <Placeholder xs="6" animation="glow"></Placeholder>
                      </Card.Title>
                      <div>
                        <Placeholder as="p" animation="glow">
                          <Placeholder xs="7" />
                          <Placeholder xs="4" />
                          <Placeholder xs="6" />
                          <Placeholder xs="8" />
                        </Placeholder>
                      </div>
                      <Placeholder.Button variant="primary" xs="6"></Placeholder.Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Card>
  <Card.Body>
    <Card.Title>
      <Placeholder xs="6" animation="glow"></Placeholder>
    </Card.Title>
    <div>
      <Placeholder as="p" animation="glow">
        <Placeholder xs="7" />
        <Placeholder xs="4" />
        <Placeholder xs="6" />
        <Placeholder xs="8" />
      </Placeholder>
    </div>
    <Placeholder.Button variant="primary" xs="6"></Placeholder.Button>
  </Card.Body>
</Card>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Placeholder Width</h5>
          <p>You can change the width through grid column classes, width utilities, or inline styles.</p>

          <Card className="card-example">
            <Card.Body>
              <Placeholder as="div" xs="3" />
              <div className="w-100"></div>
              <Placeholder as="div" className="w-75" />
              <Placeholder as="div" className="w-50" />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Placeholder as="div" xs="3" />
<Placeholder as="div" className="w-75" />
<Placeholder as="div" className="w-50" />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Placeholder Color</h5>
          <p>By default, the Placeholder uses currentColor. This can be overridden with a custom color or utility class.</p>

          <Card className="card-example">
            <Card.Body>
              <Placeholder bg="primary" xs="12" />
              <Placeholder bg="secondary" xs="12" />
              <Placeholder bg="success" xs="12" />
              <Placeholder bg="danger" xs="12" />
              <Placeholder bg="warning" xs="12" />
              <Placeholder bg="info" xs="12" />
              <Placeholder bg="light" xs="12" />
              <Placeholder bg="dark" xs="12" />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Placeholder bg="primary" xs="12" />
<Placeholder bg="secondary" xs="12" />
<Placeholder bg="success" xs="12" />
<Placeholder bg="danger" xs="12" />
<Placeholder bg="warning" xs="12" />
<Placeholder bg="info" xs="12" />
<Placeholder bg="light" xs="12" />
<Placeholder bg="dark" xs="12" />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section4" className="main-subtitle">Placeholder Sizing</h5>
          <p>The size of placeholders are based on the typographic style of the parent element.</p>

          <Card className="card-example">
            <Card.Body>
              <Placeholder xs="12" size="lg" />
              <Placeholder xs="12" />
              <Placeholder xs="12" size="sm" />
              <Placeholder xs="12" size="xs" />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Placeholder xs="12" size="lg" />
<Placeholder xs="12" />
<Placeholder xs="12" size="sm" />
<Placeholder xs="12" size="xs" />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section5" className="main-subtitle">Animation</h5>
          <p>Animate placeholders with <code>glow</code> or <code>wave</code> to better convey the perception of something being actively loaded.</p>

          <Card className="card-example">
            <Card.Body>
              <Placeholder as="p" animation="glow">
                <Placeholder xs="12" />
              </Placeholder>
              <Placeholder as="div" animation="wave">
                <Placeholder xs="12" />
              </Placeholder>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Placeholder as="p" animation="glow">
  <Placeholder xs="12" />
</Placeholder>
<Placeholder as="p" animation="wave">
  <Placeholder xs="12" />
</Placeholder>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Basic Example</Nav.Link>
          <Nav.Link href="#section2">Placeholder Width</Nav.Link>
          <Nav.Link href="#section3">Placeholder Color</Nav.Link>
          <Nav.Link href="#section4">Placeholder Sizing</Nav.Link>
          <Nav.Link href="#section5">Animation</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}