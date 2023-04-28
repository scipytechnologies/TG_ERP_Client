import React, { useEffect } from "react";
import Prism from "prismjs";
import { Card, Container, Nav } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

export default function UtilBackground() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Utilities</label>
          <h2 className="main-title">Background</h2>
          <p className="main-title-text">Use background utilities to quickly style the background of an element. Great for cards, buttons, or any other element.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Gray Set</h5>
          <p>A set of gray background utilities classes.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="demo-background">
                <div className="flex-fill ht-50 bg-gray-900"></div>
                <div className="flex-fill ht-50 bg-gray-800"></div>
                <div className="flex-fill ht-50 bg-gray-700"></div>
                <div className="flex-fill ht-50 bg-gray-600"></div>
                <div className="flex-fill ht-50 bg-gray-500"></div>
                <div className="flex-fill ht-50 bg-gray-400"></div>
                <div className="flex-fill ht-50 bg-gray-300"></div>
                <div className="flex-fill ht-50 bg-gray-200"></div>
                <div className="flex-fill ht-50 bg-gray-100"></div>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="flex-fill ht-50 bg-gray-900"></div>
<div className="flex-fill ht-50 bg-gray-800"></div>
<div className="flex-fill ht-50 bg-gray-700"></div>
<div className="flex-fill ht-50 bg-gray-600"></div>
<div className="flex-fill ht-50 bg-gray-500"></div>
<div className="flex-fill ht-50 bg-gray-400"></div>
<div className="flex-fill ht-50 bg-gray-300"></div>
<div className="flex-fill ht-50 bg-gray-200"></div>
<div className="flex-fill ht-50 bg-gray-100"></div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Background Color</h5>
          <p>Similar to the contextual text color classes, set the background of an element to any contextual class.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="demo-background">
                <div className="flex-fill ht-50 bg-primary"></div>
                <div className="flex-fill ht-50 bg-secondary"></div>
                <div className="flex-fill ht-50 bg-success"></div>
                <div className="flex-fill ht-50 bg-warning"></div>
                <div className="flex-fill ht-50 bg-danger"></div>
                <div className="flex-fill ht-50 bg-info"></div>
                <div className="flex-fill ht-50 bg-light"></div>
                <div className="flex-fill ht-50 bg-dark"></div>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="flex-fill ht-50 bg-primary"></div>
<div className="flex-fill ht-50 bg-secondary"></div>
<div className="flex-fill ht-50 bg-success"></div>
<div className="flex-fill ht-50 bg-warning"></div>
<div className="flex-fill ht-50 bg-danger"></div>
<div className="flex-fill ht-50 bg-info"></div>
<div className="flex-fill ht-50 bg-light"></div>
<div className="flex-fill ht-50 bg-dark"></div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Background Gradient</h5>
          <p>By adding a <code>.bg-gradient</code> class, a linear gradient is added as background image to the backgrounds. This gradient starts with a semi-transparent white which fades out to the bottom.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="demo-background">
                <div className="flex-fill ht-100 bg-primary bg-gradient"></div>
                <div className="flex-fill ht-100 bg-secondary bg-gradient"></div>
                <div className="flex-fill ht-100 bg-success bg-gradient"></div>
                <div className="flex-fill ht-100 bg-warning bg-gradient"></div>
                <div className="flex-fill ht-100 bg-danger bg-gradient"></div>
                <div className="flex-fill ht-100 bg-info bg-gradient"></div>
                <div className="flex-fill ht-100 bg-light bg-gradient"></div>
                <div className="flex-fill ht-100 bg-dark bg-gradient"></div>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="flex-fill ht-100 bg-primary bg-gradient"></div>
<div className="flex-fill ht-100 bg-secondary bg-gradient"></div>
<div className="flex-fill ht-100 bg-success bg-gradient"></div>
<div className="flex-fill ht-100 bg-warning bg-gradient"></div>
<div className="flex-fill ht-100 bg-danger bg-gradient"></div>
<div className="flex-fill ht-100 bg-info bg-gradient"></div>
<div className="flex-fill ht-100 bg-light bg-gradient"></div>
<div className="flex-fill ht-100 bg-dark bg-gradient"></div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section4" className="main-subtitle">Background Opacity</h5>
          <p>Background-color utilities are generated with Sass using CSS variables. This allows for real-time color changes without compilation and dynamic alpha transparency changes.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="demo-background">
                <div className="flex-fill ht-50 bg-primary"></div>
                <div className="flex-fill ht-50 bg-primary bg-opacity-75"></div>
                <div className="flex-fill ht-50 bg-primary bg-opacity-50"></div>
                <div className="flex-fill ht-50 bg-primary bg-opacity-25"></div>
              </div>
              <div className="demo-background mt-1">
                <div className="flex-fill ht-50 bg-success"></div>
                <div className="flex-fill ht-50 bg-success bg-opacity-75"></div>
                <div className="flex-fill ht-50 bg-success bg-opacity-50"></div>
                <div className="flex-fill ht-50 bg-success bg-opacity-25"></div>
              </div>
              <div className="demo-background mt-1">
                <div className="flex-fill ht-50 bg-warning"></div>
                <div className="flex-fill ht-50 bg-warning bg-opacity-75"></div>
                <div className="flex-fill ht-50 bg-warning bg-opacity-50"></div>
                <div className="flex-fill ht-50 bg-warning bg-opacity-25"></div>
              </div>
              <div className="demo-background mt-1">
                <div className="flex-fill ht-50 bg-danger"></div>
                <div className="flex-fill ht-50 bg-danger bg-opacity-75"></div>
                <div className="flex-fill ht-50 bg-danger bg-opacity-50"></div>
                <div className="flex-fill ht-50 bg-danger bg-opacity-25"></div>
              </div>
              <div className="demo-background mt-1">
                <div className="flex-fill ht-50 bg-info"></div>
                <div className="flex-fill ht-50 bg-info bg-opacity-75"></div>
                <div className="flex-fill ht-50 bg-info bg-opacity-50"></div>
                <div className="flex-fill ht-50 bg-info bg-opacity-25"></div>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html"></code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Gray Set</Nav.Link>
          <Nav.Link href="#section2">Background Color</Nav.Link>
          <Nav.Link href="#section3">Background Gradient</Nav.Link>
          <Nav.Link href="#section4">Background Opacity</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}