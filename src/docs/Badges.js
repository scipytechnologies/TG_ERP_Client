import React, { useEffect } from "react";
import Prism from "prismjs";
import { Badge, Card, Container, Nav } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

export default function Badges() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Components</label>
          <h2 className="main-title">Badges</h2>
          <p className="main-title-text">Documentation and examples for badges, our small count and labeling component.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Contextual Variations</h5>
          <p>Add any of the below mentioned modifier classes to change the appearance of a badge.</p>

          <Card className="card-example">
            <Card.Body className="d-flex flex-wrap gap-2">
              {[
                'primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info',
                'light',
                'dark',
              ].map((bg, index) => (
                <Badge key={index} bg={bg}>
                  {bg[0].toUpperCase() + bg.slice(1)}
                </Badge>
              ))}
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Badge bg="primary">Primary</Badge>
<Badge bg="secondary">Secondary</Badge>
<Badge bg="success">Success</Badge>
<Badge bg="danger">Danger</Badge>
<Badge bg="warning">Warning</Badge>
<Badge bg="info">Info</Badge>
<Badge bg="light">Light</Badge>
<Badge bg="dark">Dark</Badge>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Pill Badges</h5>
          <p>Use the <code>pill</code> props to make badges more rounded.</p>

          <Card className="card-example">
            <Card.Body className="d-flex flex-wrap gap-2">
              {[
                'primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info',
                'light',
                'dark',
              ].map((bg, index) => (
                <Badge key={index} bg={bg} pill>
                  {bg[0].toUpperCase() + bg.slice(1)}
                </Badge>
              ))}
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Badge bg="primary" pill>Primary</Badge>
<Badge bg="secondary" pill>Secondary</Badge>
<Badge bg="success" pill>Success</Badge>
<Badge bg="danger" pill>Danger</Badge>
<Badge bg="warning" pill>Warning</Badge>
<Badge bg="info" pill>Info</Badge>
<Badge bg="light" pill>Light</Badge>
<Badge bg="dark" pill>Dark</Badge>`}</code></pre>
            </Card.Footer>
          </Card>

        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Contextual Variations</Nav.Link>
          <Nav.Link href="#section2">Pill Badges</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}