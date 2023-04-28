import React, { useEffect } from "react";
import Prism from "prismjs";
import { Card, Container, Nav } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

export default function UtilExtras() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Utilities</label>
          <h2 className="main-title">Extras</h2>
          <p className="main-title-text">Use some extra class utilities to quickly style the element. Great for cards, text, buttons, or any other element.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Overflow</h5>
          <p>Use these shorthand utilities for quickly configuring how content overflows an element.</p>

          <Card className="card-example">
            <Card.Footer>
              <pre><code className="language-html">{`<div className="overflow-auto">...</div>
<div className="overflow-hidden">...</div>
<div className="overflow-visible">...</div>
<div className="overflow-scroll">...</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Vertical Alignment</h5>
          <p>Easily change the vertical alignment of inline, inline-block, inline-table, and table cell elements.</p>

          <Card className="card-example">
            <Card.Footer>
              <pre><code className="language-html">{`<span className="align-baseline">baseline</span>
<span className="align-top">top</span>
<span className="align-middle">middle</span>
<span className="align-bottom">bottom</span>
<span className="align-text-top">text-top</span>
<span className="align-text-bottom">text-bottom</span>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Float</h5>
          <p>Toggle floats on any element, across any breakpoint, using our responsive float utilities.</p>

          <Card className="card-example">
            <Card.Footer>
              <pre><code className="language-html">{`<div className="float-start">Float start on all viewport sizes</div><br>
<div className="float-end">Float end on all viewport sizes</div><br>
<div className="float-none">Don't float on all viewport sizes</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section4" className="main-subtitle">Visibility</h5>
          <p>Control the visibility of elements, without modifying their display, with visibility utilities.</p>

          <Card className="card-example">
            <Card.Footer>
              <pre><code className="language-html">{`<div className="visible">...</div>
<div className="invisible">...</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />
        </Container>
        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Overflow</Nav.Link>
          <Nav.Link href="#section2">Vertical Alignment</Nav.Link>
          <Nav.Link href="#section3">Float</Nav.Link>
          <Nav.Link href="#section4">Visibility</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}