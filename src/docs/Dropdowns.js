import React, { useEffect } from "react";
import Prism from "prismjs";
import { Button, Card, Container, Dropdown, Form, Nav } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

export default function Dropdowns() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Components</label>
          <h2 className="main-title">Dropdown</h2>
          <p className="main-title-text">Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They're made interactive with the included Bootstrap dropdown javascript plugin.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Basic Example</h5>
          <p>Wrap the dropdown's toggle (your button or link) and the dropdown menu within .dropdown, or another element that declares position relative. Dropdowns can be triggered from link or button elements to better fit your potential needs.</p>

          <Card className="card-example">
            <Card.Body>
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Dropdown>
  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Dropup</h5>
          <p>Trigger dropdown menus above elements by adding dropup class to the parent element.</p>

          <Card className="card-example">
            <Card.Body>
              <Dropdown drop="up">
                <Dropdown.Toggle variant="secondary">
                  Dropup Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Dropdown drop="up">...</Dropdown`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Dropright</h5>
          <p>Trigger dropdown menus above elements by adding dropright class to the parent element.</p>

          <Card className="card-example">
            <Card.Body>
              <Dropdown drop="end">
                <Dropdown.Toggle variant="secondary">
                  Dropright Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Dropdown drop="end">...</Dropdown`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section4" className="main-subtitle">Dropleft</h5>
          <p>Trigger dropdown menus above elements by adding dropleft class to the parent element.</p>

          <Card className="card-example">
            <Card.Body>
              <Dropdown drop="start">
                <Dropdown.Toggle variant="secondary">
                  Dropleft Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Dropdown drop="start">...</Dropdown`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section5" className="main-subtitle">Active Menu</h5>
          <p>Add active class to items in the dropdown to style them as active.</p>

          <Card className="card-example">
            <Card.Body>
              <Dropdown>
                <Dropdown.Toggle variant="secondary">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Regular Link</Dropdown.Item>
                  <Dropdown.Item href="#/action-2" className="active">Active Link</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Regular Link</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Dropdown.Item href="#" className="active">Active Link</Dropdown.Item>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section6" className="main-subtitle">Disabled Menu</h5>
          <p>Add disabled class to items in the dropdown to style them as disabled.</p>

          <Card className="card-example">
            <Card.Body>
              <Dropdown>
                <Dropdown.Toggle variant="secondary">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Regular Link</Dropdown.Item>
                  <Dropdown.Item href="#/action-2" className="disabled">Disabled Link</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Regular Link</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Dropdown.Item href="#" className="disabled">Disabled Link</Dropdown.Item>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section7" className="main-subtitle">Dropdown Header</h5>
          <p>Add a header to label sections of actions in any dropdown menu.</p>

          <Card className="card-example">
            <Card.Body>
              <Dropdown>
                <Dropdown.Toggle variant="secondary">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Header>Dropdown Header</Dropdown.Header>
                  <Dropdown.Item href="#/action-1">Regular Link</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Regular Link</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Regular Link</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Dropdown>
  <Dropdown.Toggle variant="secondary">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Header>Dropdown Header</Dropdown.Header>
    <Dropdown.Item href="#/action-1">...</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section8" className="main-subtitle">Dropdown Divider</h5>
          <p>Separate groups of related menu items with a divider.</p>

          <Card className="card-example">
            <Card.Body>
              <Dropdown>
                <Dropdown.Toggle variant="secondary">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Regular Link</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Regular Link</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-3">Regular Link</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Dropdown>
  <Dropdown.Toggle variant="secondary">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Regular Link</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Regular Link</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item href="#/action-3">Regular Link</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section9" className="main-subtitle">Text in Dropdown</h5>
          <p>Place any freeform text within a dropdown menu with text and use spacing utilities. Note that you’ll likely need additional sizing styles to constrain the menu width.</p>

          <Card className="card-example">
            <Card.Body>
              <Dropdown>
                <Dropdown.Toggle variant="secondary">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu className="p-3">
                  <p className="mb-2">Some example text that's free-flowing within the dropdown menu.</p>
                  <p className="mb-0">And this is more example text.</p>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Dropdown>
  <Dropdown.Toggle variant="secondary">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu className="p-3">
    <p className="mb-2">Some example text that's free-flowing within the dropdown menu.</p>
    <p className="mb-0">And this is more example text.</p>
  </Dropdown.Menu>
</Dropdown>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section10" className="main-subtitle">Form in Dropdown</h5>
          <p>Put a form within a dropdown menu, or make it into a dropdown menu, and use margin or padding utilities to give it the negative space you require.</p>

          <Card className="card-example">
            <Card.Body>
              <Dropdown>
                <Dropdown.Toggle variant="secondary">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Form className="p-3">
                    <div className="mb-3">
                      <Form.Label for="exampleDropdownFormEmail1">Email address</Form.Label>
                      <Form.Control type="email" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
                    </div>
                    <div className="mb-3">
                      <Form.Label for="exampleDropdownFormPassword1">Password</Form.Label>
                      <Form.Control type="password" id="exampleDropdownFormPassword1" placeholder="Password" />
                    </div>
                    <div className="mb-3">
                      <Form.Check type="checkbox" label="Remember me" id="dropdownCheck" />
                    </div>
                    <Button variant="primary" type="submit">Sign in</Button>
                  </Form>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Dropdown>
  <Dropdown.Toggle variant="secondary">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Form className="p-3">
      <div className="mb-3">
        <Form.Label for="exampleDropdownFormEmail1">Email address</Form.Label>
        <Form.Control type="email" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
      </div>
      <div className="mb-3">
        <Form.Label for="exampleDropdownFormPassword1">Password</Form.Label>
        <Form.Control type="password" id="exampleDropdownFormPassword1" placeholder="Password" />
      </div>
      <div className="mb-3">
        <Form.Check type="checkbox" label="Remember me" id="dropdownCheck" />
      </div>
      <Button variant="primary" type="submit">Sign in</Button>
    </Form>
  </Dropdown.Menu>
</Dropdown>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Basic Example</Nav.Link>
          <Nav.Link href="#section2">Dropup</Nav.Link>
          <Nav.Link href="#section3">Dropright</Nav.Link>
          <Nav.Link href="#section4">Dropleft</Nav.Link>
          <Nav.Link href="#section5">Active Menu</Nav.Link>
          <Nav.Link href="#section6">Disabled Menu</Nav.Link>
          <Nav.Link href="#section7">Dropdown Header</Nav.Link>
          <Nav.Link href="#section8">Dropdown Divider</Nav.Link>
          <Nav.Link href="#section9">Text in Dropdown</Nav.Link>
          <Nav.Link href="#section10">Form in Dropdown</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}