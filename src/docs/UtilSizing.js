import React, { useEffect } from "react";
import Prism from "prismjs";
import { Card, Container, Nav, Row, Col } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

export default function UtilSizing() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Utilities</label>
          <h2 className="main-title">Sizing</h2>
          <p className="main-title-text">Easily make an element as wide or as tall with our width and height utilities.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Set a Width</h5>
          <p>Use width utilities to quickly style the width of an element. Great for cards, buttons, or any other element.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="w-25 p-2 bg-secondary text-white text-center">25% width</div>
              <div className="w-50 p-2 bg-secondary text-white text-center mt-2">50% width</div>
              <div className="w-75 p-2 bg-secondary text-white text-center mt-2">75% width</div>
              <div className="w-100 p-2 bg-secondary text-white text-center mt-2">100% width</div>
              <div className="w-auto p-2 bg-secondary text-white text-center mt-2">auto width</div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="w-25 p-2 bg-secondary text-white text-center">25% width</div>
<div className="w-50 p-2 bg-secondary text-white text-center mt-2">50% width</div>
<div className="w-75 p-2 bg-secondary text-white text-center mt-2">75% width</div>
<div className="w-100 p-2 bg-secondary text-white text-center mt-2">100% width</div>
<div className="w-auto p-2 bg-secondary text-white text-center mt-2">auto width</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Set a Height</h5>
          <p>Use height utilities to quickly style the height of an element. Great for cards, buttons, or any other element.</p>

          <Card className="card-example">
            <Card.Body>
              <Row className="g-1 px-1 border ht-250">
                <Col><div className="h-25 p-2 bg-secondary text-white text-center">25% height</div></Col>
                <Col><div className="h-50 p-2 bg-secondary text-white text-center">50% height</div></Col>
                <Col><div className="h-75 p-2 bg-secondary text-white text-center">75% height</div></Col>
                <Col><div className="h-100 p-2 bg-secondary text-white text-center">100% height</div></Col>
                <Col><div className="h-auto p-2 bg-secondary text-white text-center">auto height</div></Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Row className="g-1 px-1 border ht-250">
  <Col><div className="h-25 p-2 bg-secondary text-white text-center">25% height</div></Col>
  <Col><div className="h-50 p-2 bg-secondary text-white text-center">50% height</div></Col>
  <Col><div className="h-75 p-2 bg-secondary text-white text-center">75% height</div></Col>
  <Col><div className="h-100 p-2 bg-secondary text-white text-center">100% height</div></Col>
  <Col><div className="h-auto p-2 bg-secondary text-white text-center">auto height</div></Col>
</Row>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Set a Width</Nav.Link>
          <Nav.Link href="#section2">Set a Height</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}