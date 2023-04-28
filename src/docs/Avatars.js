import React, { useEffect } from "react";
import Prism from "prismjs";
import { Card, Container, Nav } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";
import Avatar from "../components/Avatar";

import img1 from "../assets/img/img1.jpg";

export default function Avatars() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />

      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Components</label>
          <h2 className="main-title">Avatars</h2>
          <p className="main-title-text">Avatars are user's face image that you can use throughout the design from tables to dialog or menus with options for sizes and shapes.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Default Functionality</h5>
          <p>Avatars are user's face image that you can use throughout the design from tables to dialog or menus with options for sizes and shapes.</p>

          <Card className="card-example">
            <Card.Body>
              <Avatar img={img1} />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Avatar img={img1} />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Sizes</h5>
          <p>An avatar can have different sizes like larger and smaller avatar.</p>

          <Card className="card-example">
            <Card.Body className="d-flex align-items-center gap-2">
              <Avatar img={img1} size="xs" />
              <Avatar img={img1} size="sm" />
              <Avatar img={img1} size="lg" />
              <Avatar img={img1} size="xl" />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Avatar img={img1} size="xs" />
<Avatar img={img1} size="sm" />
<Avatar img={img1} size="lg" />
<Avatar img={img1} size="xl" />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Shapes</h5>
          <p>An avatar can have different shapes by using Bootstrap's border-radius utilities classes.</p>

          <Card className="card-example">
            <Card.Body>
              <Avatar img={img1} shape="rounded" />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Avatar img={img1} shape="rounded" />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section4" className="main-subtitle">Initials</h5>
          <p>An avatar can have a temporary use of user's initial name while their photos are not yet available.</p>

          <Card className="card-example">
            <Card.Body>
              <Avatar initial="s" />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Avatar initial="s" />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section5" className="main-subtitle">Status Indicator</h5>
          <p>An avatar can have a status indicator to indicate users availability.</p>

          <Card className="card-example">
            <Card.Body className="d-flex align-items-center gap-3">
              <Avatar img={img1} status="online" />
              <Avatar img={img1} status="offline" />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Avatar img={img1} status="online" />
<Avatar img={img1} status="offline" />`}</code></pre>
            </Card.Footer>
          </Card>

        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Default Functionality</Nav.Link>
          <Nav.Link href="#section2">Sizes</Nav.Link>
          <Nav.Link href="#section3">Shapes</Nav.Link>
          <Nav.Link href="#section4">Initials</Nav.Link>
          <Nav.Link href="#section5">Status Indicator</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}