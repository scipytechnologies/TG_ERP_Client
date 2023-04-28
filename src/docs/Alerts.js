import React, { useEffect } from "react";
import Prism from "prismjs";
import { Alert, Card, Container, Nav } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

export default function Alerts() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Components</label>
          <h2 className="main-title">Alerts</h2>
          <p className="main-title-text">Provide contextual feedback messages for typical user actions.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Default Functionality</h5>
          <p>The accordion uses collapse internally to make it collapsible. Click the accordions below to expand/collapse the accordion content.</p>

          <Card className="card-example">
            <Card.Body>
              {[
                'primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info',
                'light',
                'dark',
              ].map((variant) => (
                <Alert key={variant} variant={variant}>
                  This is a {variant} alert—check it out!
                </Alert>
              ))}
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Alert variant={variant}>
  This is a {variant} alert—check it out!
</Alert>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Alert Link</h5>
          <p>Use the <code>&lt;Alert.Link&gt;</code> utility class to quickly provide matching colored links within any alert.</p>

          <Card className="card-example">
            <Card.Body>
              <Alert variant="primary">
                A simple primary alert with <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you like.
              </Alert>
              <Alert variant="success">
                A simple success alert with <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you like.
              </Alert>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Alert variant="primary">
  A simple primary alert with <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you like.
</Alert>
<Alert variant="success">
  A simple success alert with <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you like.
</Alert>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Additional Content</h5>
          <p>Alerts can also contain additional HTML elements like headings, paragraphs and dividers.</p>

          <Card className="card-example">
            <Card.Body>
              <Alert variant="success">
                <Alert.Heading className="fs-16">Hey, nice to see you</Alert.Heading>
                <p>
                  Aww yeah, you successfully read this important alert message. This
                  example text is going to run a bit longer so that you can see how
                  spacing within an alert works with this kind of content.
                </p>
                <hr />
                <p className="mb-0">
                  Whenever you need to, be sure to use margin utilities to keep things
                  nice and tidy.
                </p>
              </Alert>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Alert variant="success">
  <Alert.Heading className="fs-16">Hey, nice to see you</Alert.Heading>
  <p>
    Aww yeah, you successfully read this important alert message. This
    example text is going to run a bit longer so that you can see how
    spacing within an alert works with this kind of content.
  </p>
  <hr />
  <p className="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things
    nice and tidy.
  </p>
</Alert>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section4" className="main-subtitle">Dismissing</h5>
          <p>Using the alert JavaScript plugin, it's possible to dismiss any alert inline. Add attribute <code>dismissible</code>, which adds extra padding to the right of the alert and positions the close button.</p>

          <Card className="card-example">
            <Card.Body>
              <Alert variant="warning" dismissible className="mb-0">
                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
              </Alert>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Alert variant="warning" dismissible>
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
</Alert>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section5" className="main-subtitle">Outline Style</h5>
          <p>An outline style variant with a little thicker border and a little thicker font weight with both border and text have the same color. Use one of the four required contextual classes.</p>

          <Card className="card-example">
            <Card.Body>
              {[
                'primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info',
                'light',
                'dark',
              ].map((variant) => (
                <Alert key={variant} variant={variant} className="alert-outline">
                  This is a {variant} alert—check it out!
                </Alert>
              ))}
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Alert variant={variant} className="alert-outline">
  This is a {variant} alert—check it out!
</Alert>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section6" className="main-subtitle">Solid Background</h5>
          <p>A solid background style variant with white text and without border. Use one of the four required contextual classes.</p>

          <Card className="card-example">
            <Card.Body>
              {[
                'primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info',
                'light',
                'dark',
              ].map((variant) => (
                <Alert key={variant} variant={variant} className="alert-solid">
                  This is a {variant} alert—check it out!
                </Alert>
              ))}
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Alert variant={variant} className="alert-solid">
  This is a {variant} alert—check it out!
</Alert>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section7" className="main-subtitle">Alert With Icon</h5>
          <p>Adding icon to different alert variant using additional class of <code>.d-flex</code> and <code>.align-items-center</code>.</p>

          <Card className="card-example">
            <Card.Body>
              <Alert variant="primary" className="d-flex align-items-center mb-2">
                <i className="ri-information-line"></i> A primary alert—check it out!
              </Alert>
              <Alert variant="primary" className="alert-outline d-flex align-items-center mb-2">
                <i className="ri-information-line"></i> A primary alert—check it out!
              </Alert>
              <Alert variant="primary" className="alert-solid d-flex align-items-center mb-0">
                <i className="ri-information-line"></i> A primary alert—check it out!
              </Alert>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Alert variant="primary" className="d-flex align-items-center mb-2">
  <i className="ri-information-line"></i> A primary alert—check it out!
</Alert>
<Alert variant="primary" className="alert-outline d-flex align-items-center mb-2">
  <i className="ri-information-line"></i> A primary alert—check it out!
</Alert>
<Alert variant="primary" className="alert-solid d-flex align-items-center mb-0">
  <i className="ri-information-line"></i> A primary alert—check it out!
</Alert>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Default Functionality</Nav.Link>
          <Nav.Link href="#section2">Alert Link</Nav.Link>
          <Nav.Link href="#section3">Additional Content</Nav.Link>
          <Nav.Link href="#section4">Dismissing</Nav.Link>
          <Nav.Link href="#section5">Outline Style</Nav.Link>
          <Nav.Link href="#section6">Solid Background</Nav.Link>
          <Nav.Link href="#section7">Alert With Icon</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}