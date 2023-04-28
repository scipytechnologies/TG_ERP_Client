import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Prism from "prismjs";
import { Breadcrumb, Card, Container, Nav } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

export default function Breadcrumbs() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Components</label>
          <h2 className="main-title">Breadcrumbs</h2>
          <p className="main-title-text">Indicate the current page's location within a navigational hierarchy that automatically adds separators via CSS.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Basic Styling</h5>
          <p>The example below is the basic styling of the breadcrumb from Bootstrap.</p>

          <Card className="card-example">
            <Card.Body>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Library</Breadcrumb.Item>
              </Breadcrumb>

              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="">
                  Library
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
              </Breadcrumb>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="">
    Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Custom Styling</h5>
          <p>The example below is the custom styling of the breadcrumb used by this template.</p>

          <Card className="card-example">
            <Card.Body>
              <Nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-custom1 mb-0">
                  <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                  <li className="breadcrumb-item"><Link to="#">Library</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Data</li>
                </ol>
              </Nav>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Nav aria-label="breadcrumb">
  <ol className="breadcrumb breadcrumb-custom1 mb-0">
    <li className="breadcrumb-item"><Link to="#">Home</Link></li>
    <li className="breadcrumb-item"><Link to="#">Library</Link></li>
    <li className="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</Nav>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Custom Divider</h5>
          <p>The example below is the custom styling of the breadcrumb used by this template.</p>

          <Card className="card-example">
            <Card.Body>
              <Nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-custom2 mb-0">
                  <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                  <li className="breadcrumb-item"><Link to="#">Library</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Data</li>
                </ol>
              </Nav>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Nav aria-label="breadcrumb">
  <ol className="breadcrumb breadcrumb-custom2 mb-0">
    <li className="breadcrumb-item"><Link to="#">Home</Link></li>
    <li className="breadcrumb-item"><Link to="#">Library</Link></li>
    <li className="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</Nav>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Basic Styling</Nav.Link>
          <Nav.Link href="#section2">Custom Styling</Nav.Link>
          <Nav.Link href="#section3">Custom Divider</Nav.Link>
        </Nav>

      </div>
      <Footer />
    </React.Fragment>
  );
}