import React, { useEffect } from "react";
import Prism from "prismjs";
import { Card, Container, Nav, Navbar, NavDropdown, Form, Button } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

export default function NavTabs() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Components</label>
          <h2 className="main-title">Navs &amp; Tabs</h2>
          <p className="main-title-text">Documentation and examples for how to use Bootstrap's included navigation components.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Basic Example</h5>
          <p>Navigation available in Bootstrap share general markup and styles, from the base .nav class to the active and disabled states. Swap modifier classes to switch between each style.</p>

          <Card className="card-example">
            <Card.Body>
              <Nav>
                <Nav.Item>
                  <Nav.Link>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link disabled>Disabled</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Nav>
  <Nav.Item>
    <Nav.Link>Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link>About</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link>Services</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link disabled>Disabled</Nav.Link>
  </Nav.Item>
</Nav>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Horizontal Alignment</h5>
          <p>Change the horizontal alignment of your nav with flexbox utilities. By default, navs are left-aligned, but you can easily change them to center or right aligned.</p>

          <Card className="card-example mb-20">
            <Card.Body>
              <Nav className="justify-content-center">
                <Nav.Item>
                  <Nav.Link>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link disabled>Disabled</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Nav className="justify-content-center">...</Nav>`}</code></pre>
            </Card.Footer>
          </Card>

          <Card className="card-example">
            <Card.Body>
              <Nav className="justify-content-end">
                <Nav.Item>
                  <Nav.Link>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link disabled>Disabled</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Nav className="justify-content-end">...</Nav>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Vertical Nav</h5>
          <p>Stack your navigation by changing the flex item direction with the <code>.flex-column</code> utility.</p>

          <Card className="card-example">
            <Card.Body>
              <Nav className="flex-column">
                <Nav.Item>
                  <Nav.Link>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link disabled>Disabled</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Nav className="flex-column">...</Nav>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section4" className="main-subtitle">Pills</h5>
          <p>Take that same HTML, but add variant <code>pills</code> props to it. Same goes to vertical nav.</p>

          <Card className="card-example">
            <Card.Body>
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link active>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link disabled>Disabled</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Nav variant="pills">...</Nav>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section5" className="main-subtitle">Fill &amp; Justify</h5>
          <p>Force your nav’s contents to extend the full available width one of two modifier classes.</p>

          <Card className="card-example">
            <Card.Body>
              <Nav variant="pills" fill>
                <Nav.Item>
                  <Nav.Link active>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link disabled>Disabled</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Nav variant="pills" fill>...</Nav>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section6" className="main-subtitle">Using Dropdown</h5>
          <p>You can mix and match the Dropdown components with the NavLink and NavItem components to create a Dropdown that plays well in a Nav component.</p>

          <Card className="card-example">
            <Card.Body>
              <Nav variant="pills" activeKey="1">
                <Nav.Item>
                  <Nav.Link eventKey="1" href="#/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="2" title="Item">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="3">Services</Nav.Link>
                </Nav.Item>
                <NavDropdown title="Dropdown" id="nav-dropdown">
                  <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Nav variant="pills" activeKey="1">
  <Nav.Item>
    <Nav.Link eventKey="1" href="#/home">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="2" title="Item">About</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="3">Services</Nav.Link>
  </Nav.Item>
  <NavDropdown title="Dropdown" id="nav-dropdown">
    <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
    <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
    <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
  </NavDropdown>
</Nav>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section7" className="main-subtitle">Navbar</h5>
          <p>Responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.</p>

          <Card className="card-example">
            <Card.Body>
              <Navbar bg="light">
                <Container fluid>
                  <Navbar.Brand href="#" className="text-uppercase fw-bold">Navbar</Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                    <Nav
                      className="me-auto my-2 my-lg-0"
                      style={{ maxHeight: '100px' }}
                      navbarScroll
                    >
                      <Nav.Link href="#action1">Home</Nav.Link>
                      <Nav.Link href="#action2">Link</Nav.Link>
                      <NavDropdown title="Link" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                          Something else here
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button variant="primary">Search</Button>
                    </Form>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Navbar bg="light">
  <Container fluid>
    <Navbar.Brand href="#" className="text-uppercase fw-bold">Navbar</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">
            Another action
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="primary">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Basic Example</Nav.Link>
          <Nav.Link href="#section2">Horizontal Alignment</Nav.Link>
          <Nav.Link href="#section3">Vertical Nav</Nav.Link>
          <Nav.Link href="#section4">Pills</Nav.Link>
          <Nav.Link href="#section5">Fill &amp; Justify</Nav.Link>
          <Nav.Link href="#section6">Using Dropdown</Nav.Link>
          <Nav.Link href="#section7">Navbar</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}