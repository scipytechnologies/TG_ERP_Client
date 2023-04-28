import React, { useEffect } from "react";
import Prism from "prismjs";
import { Card, Container, Nav, OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

export default function Tooltips() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Components</label>
          <h2 className="main-title">Tooltips</h2>
          <p className="main-title-text">Documentation and examples for adding custom Bootstrap tooltips with CSS and JavaScript using CSS3 for animations and data-bs-attributes for local title storage.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Basic Example</h5>
          <p>Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left. Directions are mirrored when using Bootstrap in RTL.</p>

          <Card className="card-example">
            <Card.Body className="d-flex gap-2">
              {['top', 'right', 'bottom', 'left'].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                      Tooltip on <strong>{placement}</strong>.
                    </Tooltip>
                  }
                >
                  <Button variant="secondary">Tooltip on {placement}</Button>
                </OverlayTrigger>
              ))}
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<OverlayTrigger
  placement="top"
  overlay={
    <Tooltip>
      Tooltip on <strong>top</strong>.
    </Tooltip>
  }
>
  <Button variant="secondary">Tooltip on top</Button>
</OverlayTrigger>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Basic Example</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}