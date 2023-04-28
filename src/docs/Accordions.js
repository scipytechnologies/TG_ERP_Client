import React, { useEffect } from "react";
import Prism from "prismjs";
import { Accordion, Card, Container, Nav } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

export default function Accordions() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Components</label>
          <h2 className="main-title">Accordion</h2>
          <p className="main-title-text">Build vertically collapsing accordions in combination with our Collapse JavaScript plugin.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Default Functionality</h5>
          <p>The accordion uses collapse internally to make it collapsible. Click the accordions below to expand/collapse the accordion content.</p>

          <Card className="card-example">
            <Card.Body>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    <p className="mb-2"><strong>This is the first item's accordion body.</strong></p>
                    <p className="mb-0">It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    <p className="mb-2"><strong>This is the second item's accordion body.</strong></p>
                    <p className="mb-0">It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Accordion Item #3</Accordion.Header>
                  <Accordion.Body>
                    <p className="mb-2"><strong>This is the third item's accordion body.</strong></p>
                    <p className="mb-0">It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
      <p className="mb-2"><strong>This is the first item's accordion body.</strong></p>
      <p className="mb-0">It is shown by default, until the collapse plugin adds the...</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">...</Accordion.Item>
  <Accordion.Item eventKey="2">...</Accordion.Item>
</Accordion>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Accordion Flush</h5>
          <p>Add <code>flush</code> to remove the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.</p>

          <Card className="card-example">
            <Card.Body>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    <p className="mb-2"><strong>This is the first item's accordion body.</strong></p>
                    <p className="mb-0">It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    <p className="mb-2"><strong>This is the second item's accordion body.</strong></p>
                    <p className="mb-0">It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Accordion Item #3</Accordion.Header>
                  <Accordion.Body>
                    <p className="mb-2"><strong>This is the third item's accordion body.</strong></p>
                    <p className="mb-0">It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Accordion defaultActiveKey="0" flush>
  <Accordion.Item eventKey="0">...</Accordion.Item>
  <Accordion.Item eventKey="1">...</Accordion.Item>
  <Accordion.Item eventKey="2">...</Accordion.Item>
</Accordion>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Always Open</h5>
          <p>Add <code>alwaysOpen</code> to make accordion items stay open when another item is opened.</p>

          <Card className="card-example">
            <Card.Body>
              <Accordion defaultActiveKey="0" alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    <p className="mb-2"><strong>This is the first item's accordion body.</strong></p>
                    <p className="mb-0">It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    <p className="mb-2"><strong>This is the second item's accordion body.</strong></p>
                    <p className="mb-0">It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Accordion Item #3</Accordion.Header>
                  <Accordion.Body>
                    <p className="mb-2"><strong>This is the third item's accordion body.</strong></p>
                    <p className="mb-0">It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Accordion defaultActiveKey="0" alwaysOpen>
  <Accordion.Item eventKey="0">...</Accordion.Item>
  <Accordion.Item eventKey="1">...</Accordion.Item>
  <Accordion.Item eventKey="2">...</Accordion.Item>
</Accordion>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section4" className="main-subtitle">Custom Style</h5>
          <p>We've created a custom style to the active state panel based on the brand color for this template.</p>

          <Card className="card-example">
            <Card.Body>
              <Accordion defaultActiveKey="0" className="accordion-custom">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    <p className="mb-2"><strong>This is the first item's accordion body.</strong></p>
                    <p className="mb-0">It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    <p className="mb-2"><strong>This is the second item's accordion body.</strong></p>
                    <p className="mb-0">It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Accordion Item #3</Accordion.Header>
                  <Accordion.Body>
                    <p className="mb-2"><strong>This is the third item's accordion body.</strong></p>
                    <p className="mb-0">It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Accordion defaultActiveKey="0" className="accordion-custom">
  <Accordion.Item eventKey="0">...</Accordion.Item>
  <Accordion.Item eventKey="1">...</Accordion.Item>
  <Accordion.Item eventKey="2">...</Accordion.Item>
</Accordion>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section5" className="main-subtitle">Colored Variant</h5>
          <p>We've created a colored variant style based on the primary brand color.</p>

          <Card className="card-example">
            <Card.Body>
              <Accordion defaultActiveKey="0" className="accordion-primary">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    <p className="mb-2"><strong>This is the first item's accordion body.</strong></p>
                    <p className="mb-0">It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    <p className="mb-2"><strong>This is the second item's accordion body.</strong></p>
                    <p className="mb-0">It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Accordion Item #3</Accordion.Header>
                  <Accordion.Body>
                    <p className="mb-2"><strong>This is the third item's accordion body.</strong></p>
                    <p className="mb-0">It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Accordion defaultActiveKey="0" className="accordion-primary">
  <Accordion.Item eventKey="0">...</Accordion.Item>
  <Accordion.Item eventKey="1">...</Accordion.Item>
  <Accordion.Item eventKey="2">...</Accordion.Item>
</Accordion>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Default Functionality</Nav.Link>
          <Nav.Link href="#section2">Accordion Flush</Nav.Link>
          <Nav.Link href="#section3">Always Open</Nav.Link>
          <Nav.Link href="#section4">Custom Style</Nav.Link>
          <Nav.Link href="#section5">Colored Variant</Nav.Link>
        </Nav>
      </div>

      <Footer />
    </React.Fragment>
  )
}