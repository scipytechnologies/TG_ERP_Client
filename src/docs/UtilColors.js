import React, { useEffect } from "react";
import Prism from "prismjs";
import { Card, Container, Nav } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";
import { Link } from "react-router-dom";

export default function UtilColors() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Utilities</label>
          <h2 className="main-title">Colors</h2>
          <p className="main-title-text">Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Text Color</h5>
          <p>Colorize text with color utilities.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="demo-text">
                <p className="text-primary">Seeing a spider in my room isn't scary. It's scary when it disappears.</p>
                <p className="text-secondary">Seeing a spider in my room isn't scary. It's scary when it disappears.</p>
                <p className="text-success">Seeing a spider in my room isn't scary. It's scary when it disappears.</p>
                <p className="text-warning">Seeing a spider in my room isn't scary. It's scary when it disappears.</p>
                <p className="text-danger">Seeing a spider in my room isn't scary. It's scary when it disappears.</p>
                <p className="text-info">Seeing a spider in my room isn't scary. It's scary when it disappears.</p>
                <p className="text-dark">Seeing a spider in my room isn't scary. It's scary when it disappears.</p>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<p className="text-primary">Seeing a spider in my room isn't scary. It's scary when it disappears.</p>
<p className="text-secondary">Seeing a spider in my room isn't scary. It's scary when it disappears.</p>
<p className="text-success">Seeing a spider in my room isn't scary. It's scary when it disappears.</p>
<p className="text-warning">Seeing a spider in my room isn't scary. It's scary when it disappears.</p>
<p className="text-danger">Seeing a spider in my room isn't scary. It's scary when it disappears.</p>
<p className="text-info">Seeing a spider in my room isn't scary. It's scary when it disappears.</p>
<p className="text-dark">Seeing a spider in my room isn't scary. It's scary when it disappears.</p>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Link Color</h5>
          <p>Colorize text links with color utilities.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="demo-text">
                <Link className="link-primary">Seeing a spider in my room isn't scary. It's scary when it disappears.</Link>
                <Link className="link-secondary">Seeing a spider in my room isn't scary. It's scary when it disappears.</Link>
                <Link className="link-success">Seeing a spider in my room isn't scary. It's scary when it disappears.</Link>
                <Link className="link-warning">Seeing a spider in my room isn't scary. It's scary when it disappears.</Link>
                <Link className="link-danger">Seeing a spider in my room isn't scary. It's scary when it disappears.</Link>
                <Link className="link-info">Seeing a spider in my room isn't scary. It's scary when it disappears.</Link>
                <Link className="link-dark">Seeing a spider in my room isn't scary. It's scary when it disappears.</Link>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Link className="link-primary">Seeing a spider in my room isn't scary. It's scary when it disappears.</Link>
<Link className="link-secondary">Seeing a spider in my room isn't scary. It's scary when it disappears.</Link>
<Link className="link-success">Seeing a spider in my room isn't scary. It's scary when it disappears.</Link>
<Link className="link-warning">Seeing a spider in my room isn't scary. It's scary when it disappears.</Link>
<Link className="link-danger">Seeing a spider in my room isn't scary. It's scary when it disappears.</Link>
<Link className="link-info">Seeing a spider in my room isn't scary. It's scary when it disappears.</Link>
<Link className="link-dark">Seeing a spider in my room isn't scary. It's scary when it disappears.</Link>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Opacity</h5>
          <p>This allows for real-time color changes without compilation and dynamic alpha transparency changes.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="demo-text">
                <p className="text-primary">Seeing a spider in my room isn't scary. It's scary when it disappears.</p>
                <p className="text-primary text-opacity-75">Seeing a spider in my room isn't scary. It's scary when it disappears.</p>
                <p className="text-primary text-opacity-50">Seeing a spider in my room isn't scary. It's scary when it disappears.</p>
                <p className="text-primary text-opacity-25">Seeing a spider in my room isn't scary. It's scary when it disappears.</p>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<p className="text-primary">Seeing a spider in my room isn't scary. It's scary when it disappears.</p>
<p className="text-primary text-opacity-75">Seeing a spider in my room isn't scary. It's scary when it disappears.</p>
<p className="text-primary text-opacity-50">Seeing a spider in my room isn't scary. It's scary when it disappears.</p>
<p className="text-primary text-opacity-25">Seeing a spider in my room isn't scary. It's scary when it disappears.</p>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Text Color</Nav.Link>
          <Nav.Link href="#section2">Link Color</Nav.Link>
          <Nav.Link href="#section3">Opacity</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}