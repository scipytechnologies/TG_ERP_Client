import React, { useEffect } from "react";
import Prism from "prismjs";
import { Button, Card, CardGroup, Col, Container, ListGroup, Nav, Row } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";
import img2 from "../assets/img/img2.jpg";

export default function Cards() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Components</label>
          <h2 className="main-title">Cards</h2>
          <p className="main-title-text">Bootstrap's cards provide a flexible and extensible content container with multiple variants and options.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Basic Styling</h5>
          <p>Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they’ll naturally fill the full width of its parent element.</p>

          <Card className="card-example">
            <Card.Body>
              <Row>
                <Col sm="8" md="6">
                  <Card>
                    <Card.Img src={img2} variant="top" />
                    <Card.Body>
                      <Card.Title className="text-dark">Card title</Card.Title>
                      <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Card>
  <Card.Img src={img2} variant="top" />
  <Card.Body>
    <Card.Title className="text-dark">Card title</Card.Title>
    <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Content Types</h5>
          <p>Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what's supported.</p>

          <Card className="card-example">
            <Card.Body>
              <Card>
                <Card.Body>
                  This is some text within a card body.
                </Card.Body>
              </Card>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Card>
  <Card.Body>
    This is some text within a card body.
  </Card.Body>
</Card>`}</code></pre>
            </Card.Footer>
          </Card>

          <br />

          <Card className="card-example">
            <Card.Body>
              <Row>
                <Col sm="8" md="6">
                  <Card>
                    <Card.Body>
                      <Card.Title className="text-dark">Card title</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Card subtitle</Card.Subtitle>
                      <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                      <Card.Link href="#">Card link</Card.Link>
                      <Card.Link href="#">Another link</Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Card>
  <Card.Body>
    <Card.Title className="text-dark">Card title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card subtitle</Card.Subtitle>
    <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
    <Card.Link href="#">Card link</Card.Link>
    <Card.Link href="#">Another link</Card.Link>
  </Card.Body>
</Card>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Kitchen Sink</h5>
          <p>Mix and match multiple content types to create the card you need, or throw everything in there. Shown below are image styles, blocks, text styles, and a list group—all wrapped in a fixed-width card.</p>

          <Card className="card-example">
            <Card.Body>
              <Row>
                <Col sm="8" md="6">
                  <Card>
                    <Card.Img src={img2} variant="top" alt="" />
                    <Card.Body>
                      <Card.Title className="text-dark">Card title</Card.Title>
                      <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                    </Card.Body>
                    <ListGroup variant="flush">
                      <ListGroup.Item>An item</ListGroup.Item>
                      <ListGroup.Item>A second item</ListGroup.Item>
                      <ListGroup.Item>A third item</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                      <Card.Link href="#">Card link</Card.Link>
                      <Card.Link href="#">Another link</Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Card>
  <Card.Img src={img2} variant="top" />
  <Card.Body>
    <Card.Title className="text-dark">Card title</Card.Title>
    <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
  </Card.Body>
  <ListGroup variant="flush">
    <ListGroup.Item>An item</ListGroup.Item>
    <ListGroup.Item>A second item</ListGroup.Item>
    <ListGroup.Item>A third item</ListGroup.Item>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card link</Card.Link>
    <Card.Link href="#">Another link</Card.Link>
  </Card.Body>
</Card>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section4" className="main-subtitle">Header &amp; Footer</h5>
          <p>Add an optional header and/or footer within a card.</p>

          <Card className="card-example">
            <Card.Body>
              <Row className="g-3">
                <Col md>
                  <Card>
                    <Card.Header>Featured</Card.Header>
                    <Card.Body>
                      <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md>
                  <Card>
                    <Card.Body>
                      <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Card.Link href="">Like</Card.Link>
                      <Card.Link href="" className="ms-2">Comment</Card.Link>
                      <Card.Link href="" className="ms-2">Share</Card.Link>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Card>
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
  </Card.Body>
</Card>

<Card>
  <Card.Body>
    <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
  </Card.Body>
  <Card.Footer>
    <Card.Link href="">Like</Card.Link>
    <Card.Link href="" className="ms-2">Comment</Card.Link>
    <Card.Link href="" className="ms-2">Share</Card.Link>
  </Card.Footer>
</Card>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section5" className="main-subtitle">Card Navigation</h5>
          <p>Add some navigation to a card's header (or block) with Bootstrap's nav components.</p>

          <Card className="card-example">
            <Card.Body>
              <Card>
                <Card.Header>
                  <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                      <Nav.Link href="#first">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#link">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#disabled" disabled>
                        Disabled
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Header>
                <Card.Body className="text-center">
                  <Card.Title className="text-dark">Special title treatment</Card.Title>
                  <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Card>
  <Card.Header>
    <Nav variant="tabs" defaultActiveKey="#first">
      <Nav.Item>
        <Nav.Link href="#first">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#link">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>
  <Card.Body className="text-center">
    <Card.Title className="text-dark">Special title treatment</Card.Title>
    <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section6" className="main-subtitle">Image Overlay</h5>
          <p>Turn an image into a card background and overlay your card’s text. Depending on the image, you may or may not need additional styles or utilities.</p>

          <Card className="card-example">
            <Card.Body>
              <Row>
                <Col sm="9" md="7" lg="8">
                  <Card className="bg-dark text-white border-0">
                    <Card.Img src={img2} alt="Card image" />
                    <Card.ImgOverlay>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                      </Card.Text>
                      <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Card className="bg-dark text-white border-0">
  <Card.Img src={img2} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in
      to additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section7" className="main-subtitle">Background Color</h5>
          <p>Use text and background utilities to change the appearance of a card.</p>

          <Card className="card-example">
            <Card.Body>
              <Row className="g-3">
                <Col md="6">
                  <Card className="card-primary">
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                      <Card.Title>Primary card title</Card.Title>
                      <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="card-secondary">
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                      <Card.Title>Primary card title</Card.Title>
                      <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="card-success">
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                      <Card.Title>Primary card title</Card.Title>
                      <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="card-danger">
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                      <Card.Title>Primary card title</Card.Title>
                      <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="card-warning">
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                      <Card.Title>Primary card title</Card.Title>
                      <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="card-info">
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                      <Card.Title>Primary card title</Card.Title>
                      <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="card-light">
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                      <Card.Title>Primary card title</Card.Title>
                      <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="card-dark">
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                      <Card.Title>Primary card title</Card.Title>
                      <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Card className="card-primary">...</Card>
<Card className="card-secondary">...</Card>
<Card className="card-success">...</Card>
<Card className="card-warning">...</Card>
<Card className="card-danger">...</Card>
<Card className="card-info">...</Card>
<Card className="card-light">...</Card>
<Card className="card-dark">...</Card>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section8" className="main-subtitle">Card Groups</h5>
          <p>Use card groups to render cards as a single, attached element with equal width and height columns. Card groups use flex display to achieve their uniform sizing.</p>

          <Card className="card-example">
            <Card.Body>
              <CardGroup>
                <Card>
                  <Card.Img variant="top" src={img2} />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content. This content is a little bit longer.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src={img2} />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in to
                      additional content.{' '}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src={img2} />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content. This card has even longer content than the
                      first to show that equal height action.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Footer>
                </Card>
              </CardGroup>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<CardGroup>
  <Card>...</Card>
  <Card>...</Card>
  <Card>...</Card>
</CardGroup>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section9" className="main-subtitle">Grid Cards</h5>
          <p>Use the Bootstrap grid system and its <code>.row-cols</code> classes to control how many grid columns (wrapped around your cards) you show per row. For example, here's <code>.row-cols-1</code> laying out the cards on one column, and <code>.row-cols-md-2</code> splitting four cards to equal width across multiple rows, from the medium breakpoint up.</p>

          <Card className="card-example">
            <Card.Body>
              <Row xs={1} md={2} className="g-2">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <Col key={idx}>
                    <Card>
                      <Card.Img variant="top" src={img2} />
                      <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                          This is a longer card with supporting text below as a natural
                          lead-in to additional content. This content is a little bit
                          longer.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Row xs={1} md={2} className="g-2">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={img2} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>...</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Basic Styling</Nav.Link>
          <Nav.Link href="#section2">Content Types</Nav.Link>
          <Nav.Link href="#section3">Kitchen Sink</Nav.Link>
          <Nav.Link href="#section4">Header &amp; Footer</Nav.Link>
          <Nav.Link href="#section5">Card Navigation</Nav.Link>
          <Nav.Link href="#section6">Image Overlay</Nav.Link>
          <Nav.Link href="#section7">Background Color</Nav.Link>
          <Nav.Link href="#section8">Card Groups</Nav.Link>
          <Nav.Link href="#section9">Grid Cards</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}