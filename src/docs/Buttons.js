import React, { useEffect } from "react";
import Prism from "prismjs";
import { Button, ButtonGroup, Card, Container, Nav } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

export default function Buttons() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Components</label>
          <h2 className="main-title">Buttons</h2>
          <p className="main-title-text">Use Bootstrap's custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Basic Styling</h5>
          <p>Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="d-flex flex-wrap gap-2">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="info">Info</Button>
                <Button variant="dark">Dark</Button>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
<Button variant="danger">Danger</Button>
<Button variant="info">Info</Button>
<Button variant="dark">Dark</Button>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Outline Buttons</h5>
          <p>In need of a button, but not the hefty background colors they bring? Replace the variant attribute with the <code>outline-*</code> ones to remove all background images and colors on any button.</p>

          <Card className="card-example">
            <Card.Body className="d-flex flex-wrap gap-2">
              <Button variant="outline-primary">Primary</Button>
              <Button variant="outline-secondary">Secondary</Button>
              <Button variant="outline-success">Success</Button>
              <Button variant="outline-warning">Warning</Button>
              <Button variant="outline-danger">Danger</Button>
              <Button variant="outline-info">Info</Button>
              <Button variant="outline-dark">Dark</Button>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Button variant="outline-primary">Primary</Button>
<Button variant="outline-secondary">Secondary</Button>
<Button variant="outline-success">Success</Button>
<Button variant="outline-warning">Warning</Button>
<Button variant="outline-danger">Danger</Button>
<Button variant="outline-info">Info</Button>
<Button variant="outline-dark">Dark</Button>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Sizes</h5>
          <p>Button can have additional sizes like larger or smaller buttons.</p>

          <Card className="card-example">
            <Card.Body className="d-flex align-items-center gap-2">
              <Button variant="primary" size="sm">Small button</Button>
              <Button variant="primary" size="lg">Large button</Button>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Button variant="primary" size="sm">Small button</Button>
<Button variant="primary" size="lg">Large button</Button>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section4" className="main-subtitle">Full Width</h5>
          <p>Create block level buttons—those that span the full width of a parent.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="d-grid gap-2">
                <Button variant="primary">Small button</Button>
                <Button variant="secondary">Large button</Button>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="d-grid gap-2">
  <Button variant="primary">Small button</Button>
  <Button variant="secondary">Large button</Button>
</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section5" className="main-subtitle">Active State</h5>
          <p>Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active and also by adding active class.</p>

          <Card className="card-example">
            <Card.Body className="d-flex gap-2">
              <Button variant="primary">Button</Button>
              <Button variant="primary" active>Active Button</Button>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Button variant="primary">Button</Button>
<Button variant="primary" active>Active Button</Button>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section6" className="main-subtitle">Disabled State</h5>
          <p>Make buttons look inactive by adding the disabled boolean attribute to any button element.</p>

          <Card className="card-example">
            <Card.Body className="d-flex gap-2">
              <Button variant="primary">Button</Button>
              <Button variant="primary" disabled>Disabled Button</Button>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Button variant="primary">Button</Button>
<Button variant="primary" disabled>Disabled Button</Button>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section7" className="main-subtitle">Rounded Corner</h5>
          <p>Make rounded corner buttons by adding a class modifier from Bootstrap utilities class <code>.rounded-pill</code></p>

          <Card className="card-example">
            <Card.Body className="d-flex gap-2">
              <Button variant="primary" className="rounded-pill">Primary Button</Button>
              <Button variant="success" className="rounded-pill">Success Button</Button>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Button variant="primary" className="rounded-pill">Primary Button</Button>
<Button variant="success" className="rounded-pill">Success Button</Button>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section8" className="main-subtitle">Icon Buttons</h5>
          <p>Make icon buttons by adding only icon and add class modifier using <code>.btn-icon</code></p>

          <Card className="card-example">
            <Card.Body className="d-flex gap-2">
              <Button variant="primary" className="btn-icon"><i className="ri-menu-line"></i></Button>
              <Button variant="secondary" className="btn-icon"><i className="ri-pencil-fill"></i></Button>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Button variant="primary" className="btn-icon"><i className="ri-menu-line"></i></Button>
<Button variant="secondary" className="btn-icon"><i className="ri-pencil-fill"></i></Button>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section9" className="main-subtitle">Button Group</h5>
          <p>Group a series of buttons together on a single line or stack them in a vertical column.</p>

          <Card className="card-example">
            <Card.Body>
              <ButtonGroup aria-label="Basic example">
                <Button variant="primary">Left</Button>
                <Button variant="primary">Middle</Button>
                <Button variant="primary">Right</Button>
              </ButtonGroup>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<ButtonGroup aria-label="Basic example">
  <Button variant="primary">Left</Button>
  <Button variant="primary">Middle</Button>
  <Button variant="primary">Right</Button>
</ButtonGroup>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section10" className="main-subtitle">Checkbox &amp; Radio Group</h5>
          <p>Combine button-like checkbox and radio toggle buttons into a seamless looking button group.</p>

          <Card className="card-example">
            <Card.Body>
              <ButtonGroup aria-label="Basic checkbox toggle button group">
                <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" />
                <label className="btn btn-outline-primary" htmlFor="btncheck1">Checkbox 1</label>

                <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" />
                <label className="btn btn-outline-primary" htmlFor="btncheck2">Checkbox 2</label>

                <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off" />
                <label className="btn btn-outline-primary" htmlFor="btncheck3">Checkbox 3</label>
              </ButtonGroup>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<ButtonGroup aria-label="Basic checkbox toggle button group">
  <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" />
  <label className="btn btn-outline-primary" htmlFor="btncheck1">Checkbox 1</label>

  <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" />
  <label className="btn btn-outline-primary" htmlFor="btncheck2">Checkbox 2</label>

  <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off" />
  <label className="btn btn-outline-primary" htmlFor="btncheck3">Checkbox 3</label>
</ButtonGroup>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section11" className="main-subtitle">Button Toolbar</h5>
          <p>Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to space out groups, buttons, and more.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                <ButtonGroup className="me-2" aria-label="First group">
                  <Button type="button" variant="primary">1</Button>
                  <Button type="button" variant="primary">2</Button>
                  <Button type="button" variant="primary">3</Button>
                  <Button type="button" variant="primary">4</Button>
                </ButtonGroup>
                <ButtonGroup className="me-2" aria-label="Second group">
                  <Button type="button" variant="secondary">5</Button>
                  <Button type="button" variant="secondary">6</Button>
                  <Button type="button" variant="secondary">7</Button>
                </ButtonGroup>
                <ButtonGroup aria-label="Third group">
                  <Button type="button" variant="info">8</Button>
                </ButtonGroup>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <ButtonGroup className="me-2" aria-label="First group">
    <Button type="button" variant="primary">1</Button>
    <Button type="button" variant="primary">2</Button>
    <Button type="button" variant="primary">3</Button>
    <Button type="button" variant="primary">4</Button>
  </ButtonGroup>
  <ButtonGroup className="me-2" aria-label="Second group">
    <Button type="button" variant="secondary">5</Button>
    <Button type="button" variant="secondary">6</Button>
    <Button type="button" variant="secondary">7</Button>
  </ButtonGroup>
  <ButtonGroup aria-label="Third group">
    <Button type="button" variant="info">8</Button>
  </ButtonGroup>
</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Basic Styling</Nav.Link>
          <Nav.Link href="#section2">Outline Buttons</Nav.Link>
          <Nav.Link href="#section3">Sizes</Nav.Link>
          <Nav.Link href="#section4">Full Width</Nav.Link>
          <Nav.Link href="#section5">Active State</Nav.Link>
          <Nav.Link href="#section6">Disabled State</Nav.Link>
          <Nav.Link href="#section7">Rounded Corner</Nav.Link>
          <Nav.Link href="#section8">Icon Buttons</Nav.Link>
          <Nav.Link href="#section9">Button Group</Nav.Link>
          <Nav.Link href="#section10">Checkbox &amp; Radio Group</Nav.Link>
          <Nav.Link href="#section11">Button Toolbar</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}