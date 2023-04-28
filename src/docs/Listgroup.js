import React, { useEffect } from "react";
import Prism from "prismjs";
import { Badge, Card, Container, ListGroup, Nav } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

export default function Listgroup() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Components</label>
          <h2 className="main-title">List Group</h2>
          <p className="main-title-text">List groups are a flexible and powerful component for displaying a series of content.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Basic Example</h5>
          <p>The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed.</p>

          <Card className="card-example">
            <Card.Body>
              <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<ListGroup>
  <ListGroup.Item>Cras justo odio</ListGroup.Item>
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Active Item</h5>
          <p>Add active props to a <code>ListGroup.Item</code> to indicate the current active selection.</p>

          <Card className="card-example">
            <Card.Body>
              <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item active>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<ListGroup>
  <ListGroup.Item>Cras justo odio</ListGroup.Item>
  <ListGroup.Item active>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Disabled Item</h5>
          <p>Add disabled props to a <code>ListGroup.Item</code> to indicate the current active selection.</p>

          <Card className="card-example">
            <Card.Body>
              <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item disabled>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<ListGroup>
  <ListGroup.Item>Cras justo odio</ListGroup.Item>
  <ListGroup.Item active>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section4" className="main-subtitle">Links &amp; Buttons</h5>
          <p>Add action props to create actionable list group items with hover, disabled, and active states in <code>ListGroup.Item</code>.</p>

          <Card className="card-example">
            <Card.Body>
              <ListGroup>
                <ListGroup.Item action href="#">Cras justo odio</ListGroup.Item>
                <ListGroup.Item action href="#">Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item action href="#">Morbi leo risus</ListGroup.Item>
                <ListGroup.Item action href="#">Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item action href="#">Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<ListGroup>
  <ListGroup.Item action href="#">Cras justo odio</ListGroup.Item>
  <ListGroup.Item action href="#">Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item action href="#">Morbi leo risus</ListGroup.Item>
  <ListGroup.Item action href="#">Porta ac consectetur ac</ListGroup.Item>
  <ListGroup.Item action href="#">Vestibulum at eros</ListGroup.Item>
</ListGroup>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section5" className="main-subtitle">Numbered</h5>
          <p>Add the <code>numbered</code> modifier props (and optionally use an <code>as="ol"</code> element) to opt into numbered list group items.</p>

          <Card className="card-example">
            <Card.Body>
              <ListGroup as="ol" numbered>
                <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item as="li">Morbi leo risus</ListGroup.Item>
                <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item as="li">Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<ListGroup as="ol" numbered>
  <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
  <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item as="li">Morbi leo risus</ListGroup.Item>
  <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
  <ListGroup.Item as="li">Vestibulum at eros</ListGroup.Item>
</ListGroup>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section6" className="main-subtitle">With Badge</h5>
          <p>Add badges to any list group item to show unread counts, activity, and more with the help of some utilities.</p>

          <Card className="card-example">
            <Card.Body>
              <ListGroup>
                <ListGroup.Item className="d-flex align-items-center justify-content-between">
                  Cras justo odio
                  <Badge bg="primary" pill>8</Badge>  
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center justify-content-between">
                  Dapibus ac facilisis in
                  <Badge bg="primary" pill>2</Badge>  
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center justify-content-between">
                  Morbi leo risus
                  <Badge bg="primary" pill>12</Badge>  
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<ListGroup>
  <ListGroup.Item className="d-flex align-items-center justify-content-between">
    Cras justo odio
    <Badge bg="primary" pill>8</Badge>  
  </ListGroup.Item>
  <ListGroup.Item className="d-flex align-items-center justify-content-between">
    Dapibus ac facilisis in
    <Badge bg="primary" pill>2</Badge>  
  </ListGroup.Item>
  <ListGroup.Item className="d-flex align-items-center justify-content-between">
    Morbi leo risus
    <Badge bg="primary" pill>12</Badge>  
  </ListGroup.Item>
</ListGroup>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />
        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Basic Example</Nav.Link>
          <Nav.Link href="#section2">Active Item</Nav.Link>
          <Nav.Link href="#section3">Disabled Item</Nav.Link>
          <Nav.Link href="#section4">Links &amp; Buttons</Nav.Link>
          <Nav.Link href="#section5">Numbered</Nav.Link>
          <Nav.Link href="#section6">With Badge</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}