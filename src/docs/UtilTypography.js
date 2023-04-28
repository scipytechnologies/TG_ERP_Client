import React, { useEffect } from "react";
import Prism from "prismjs";
import { Card, Container, Nav } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";
import { Link } from "react-router-dom";

export default function UtilTypography() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Utilities</label>
          <h2 className="main-title">Typography</h2>
          <p className="main-title-text">Documentation and examples for common text utilities to control alignment, wrapping, weight, and more.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Text Alignment</h5>
          <p>Easily realign text to components with text alignment classes. For start, end, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.</p>

          <Card className="card-example">
            <Card.Body>
              <p className="text-start">Start aligned text on all viewport sizes.</p>
              <p className="text-center">Center aligned text on all viewport sizes.</p>
              <p className="text-end mb-0">End aligned text on all viewport sizes.</p>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<p className="text-start">Start aligned text on all viewport sizes.</p>
<p className="text-center">Center aligned text on all viewport sizes.</p>
<p className="text-end mb-0">End aligned text on all viewport sizes.</p>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Text Transform</h5>
          <p>Transform text in components with text capitalization classes.</p>

          <Card className="card-example">
            <Card.Body>
              <p className="text-lowercase">Lowercased text.</p>
              <p className="text-uppercase">Uppercased text.</p>
              <p className="text-capitalize mb-0">CapiTaliZed text.</p>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<p className="text-lowercase">Lowercased text.</p>
<p className="text-uppercase">Uppercased text.</p>
<p className="text-capitalize mb-0">CapiTaliZed text.</p>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Font Size</h5>
          <p>Quickly change the font size of text. Sizing for these utilities matches HTML's heading elements, so as the number increases, their size decreases.</p>

          <Card className="card-example">
            <Card.Body className="text-dark">
              <p className="fs-1">No guts, no glory.</p>
              <p className="fs-2">No guts, no glory.</p>
              <p className="fs-3">No guts, no glory.</p>
              <p className="fs-4">No guts, no glory.</p>
              <p className="fs-5">No guts, no glory.</p>
              <p className="fs-6 mb-0">No guts, no glory.</p>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<p className="fs-1">No guts, no glory.</p>
<p className="fs-2">No guts, no glory.</p>
<p className="fs-3">No guts, no glory.</p>
<p className="fs-4">No guts, no glory.</p>
<p className="fs-5">No guts, no glory.</p>
<p className="fs-6 mb-0">No guts, no glory.</p>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section4" className="main-subtitle">Weights &amp; Italic</h5>
          <p>Quickly change the font weight or font style of text with these utilities.</p>

          <Card className="card-example">
            <Card.Body className="text=-darl">
              <p className="fw-bold">Bold text.</p>
              <p className="fw-bolder">Bolder weight text (relative to the parent element).</p>
              <p className="fw-normal">Normal weight text.</p>
              <p className="fw-light">Light weight text.</p>
              <p className="fw-lighter">Lighter weight text (relative to the parent element).</p>
              <p className="fst-italic">Italic text.</p>
              <p className="fst-normal mb-0">Text with normal font style</p>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<p className="fw-bold">Bold text.</p>
<p className="fw-bolder">Bolder weight text (relative to the parent element).</p>
<p className="fw-normal">Normal weight text.</p>
<p className="fw-light">Light weight text.</p>
<p className="fw-lighter">Lighter weight text (relative to the parent element).</p>
<p className="fst-italic">Italic text.</p>
<p className="fst-normal mb-0">Text with normal font style</p>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section5" className="main-subtitle">Line Height</h5>
          <p>Change the line height with <code>.lh-*</code> utilities.</p>

          <Card className="card-example">
            <Card.Body>
              <p className="lh-1">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
              <p className="lh-sm">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
              <p className="lh-base">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
              <p className="lh-lg mb-0">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<p className="lh-1">...</p>
<p className="lh-sm">...</p>
<p className="lh-base">...</p>
<p className="lh-lg mb-0">...</p>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section6" className="main-subtitle">Monospace</h5>
          <p>Change a selection to our monospace font stack with <code>.font-monospace</code>.</p>

          <Card className="card-example">
            <Card.Body>
              <p className="font-monospace mb-0">This is in monospace</p>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<p className="font-monospace mb-0">This is in monospace</p>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section7" className="main-subtitle">Text Decoration</h5>
          <p>Decorate text in components with text decoration classes.</p>

          <Card className="card-example">
            <Card.Body>
              <p className="text-decoration-underline">This text has a line underneath it.</p>
              <p className="text-decoration-line-through">This text has a line going through it.</p>
              <Link to="#" className="text-decoration-none">This link has its text decoration removed</Link>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<p className="text-decoration-underline">This text has a line underneath it.</p>
<p className="text-decoration-line-through">This text has a line going through it.</p>
<a href="#" className="text-decoration-none">This link has its text decoration removed</a>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Position Values</Nav.Link>
          <Nav.Link href="#section2">Text Transform</Nav.Link>
          <Nav.Link href="#section3">Font Size</Nav.Link>
          <Nav.Link href="#section4">Weights &amp; Italic</Nav.Link>
          <Nav.Link href="#section5">Line Height</Nav.Link>
          <Nav.Link href="#section6">Monospace</Nav.Link>
          <Nav.Link href="#section7">Text Decoration</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}