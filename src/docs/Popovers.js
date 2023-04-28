import React, { useEffect } from "react";
import Prism from "prismjs";
import { Card, Container, Nav, OverlayTrigger, Popover, Button } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

export default function Popovers() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Components</label>
          <h2 className="main-title">Popovers</h2>
          <p className="main-title-text">Documentation and examples for adding Bootstrap popovers, like those found in iOS, to any element on your site.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Four Directions</h5>
          <p>Four options are available: top, right, bottom, and left aligned.</p>

          <Card className="card-example">
            <Card.Body className="d-flex gap-2">
              {['top', 'right', 'bottom', 'left'].map((placement) => (
                <OverlayTrigger
                  trigger="click"
                  key={placement}
                  placement={placement}
                  overlay={
                    <Popover id={`popover-positioned-${placement}`}>
                      <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header>
                      <Popover.Body>
                        <strong>Holy guacamole!</strong> Check this info.
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Button variant="secondary">Popover on {placement}</Button>
                </OverlayTrigger>
              ))}
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Popover right</Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
);

const Example = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <Button variant="success">Click me to see</Button>
  </OverlayTrigger>
);

render(<Example />);`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />
        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Four Directions</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}