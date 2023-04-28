import React, { useEffect } from "react";
import Prism from "prismjs";
import { Card, Container, Nav } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

export default function UtilDivider() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Utilities</label>
          <h2 className="main-title">Divider</h2>
          <p className="main-title-text">Use display utilities to quickly style the display of an element.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Basic Divider</h5>
          <p>The example divider below allows you to separate section with this basic divider element.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="divider"></div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="divider"></div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">With Label</h5>
          <p>The example divider below allows you to add text label with this basic divider element.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="divider"><span>Example Text</span></div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="divider"><span>Example Text</span></div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Vertical Divider</h5>
          <p>A divider variant with vertical display and with text in the center of the divider element.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="d-flex">
                <div className="flex-fill ht-100 bg-gray-300"></div>
                <div className="divider divider-vertical"></div>
                <div className="flex-fill ht-100 bg-gray-300"></div>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="d-flex">
  <div className="flex-fill ht-100 bg-gray-300"></div>
  <div className="divider divider-vertical"></div>
  <div className="flex-fill ht-100 bg-gray-300"></div>
</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <Card className="card-example">
            <Card.Body>
              <div className="d-flex">
                <div className="flex-fill ht-100 bg-gray-300"></div>
                <div className="divider divider-vertical"><span>AND</span></div>
                <div className="flex-fill ht-100 bg-gray-300"></div>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="d-flex">
  <div className="flex-fill ht-100 bg-gray-300"></div>
  <div className="divider divider-vertical"><span>AND</span></div>
  <div className="flex-fill ht-100 bg-gray-300"></div>
</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section4" className="main-subtitle">Label Alignment</h5>
          <p>A divider variant with label alignment wheather in the center, left or right.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="divider divider-start"><span>Example Text</span></div>
              <div className="divider divider-end"><span>Example Text</span></div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="divider divider-start"><span>Example Text</span></div>
<div className="divider divider-end"><span>Example Text</span></div>`}</code></pre>
            </Card.Footer>
          </Card>

          <Card className="card-example">
            <Card.Body>
              <div className="d-flex mb-3">
                <div className="flex-fill ht-100 bg-gray-300"></div>
                <div className="divider divider-vertical divider-top"><span>AND</span></div>
                <div className="flex-fill ht-100 bg-gray-300"></div>
              </div>

              <div className="d-flex">
                <div className="flex-fill ht-100 bg-gray-300"></div>
                <div className="divider divider-vertical divider-bottom"><span>AND</span></div>
                <div className="flex-fill ht-100 bg-gray-300"></div>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="d-flex mb-3">
  <div className="flex-fill ht-100 bg-gray-300"></div>
  <div className="divider divider-vertical divider-top"><span>AND</span></div>
  <div className="flex-fill ht-100 bg-gray-300"></div>
</div>

<div className="d-flex">
  <div className="flex-fill ht-100 bg-gray-300"></div>
  <div className="divider divider-vertical divider-bottom"><span>AND</span></div>
  <div className="flex-fill ht-100 bg-gray-300"></div>
</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

        </Container>
        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Basic Divider</Nav.Link>
          <Nav.Link href="#section2">With Label</Nav.Link>
          <Nav.Link href="#section3">Vertical Divider</Nav.Link>
          <Nav.Link href="#section4">Label Alignment</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}