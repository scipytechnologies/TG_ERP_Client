import React, { useEffect } from "react";
import Prism from "prismjs";
import { Card, Col, Container, Image, Nav, Row } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg"

export default function Images() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Components</label>
          <h2 className="main-title">Images</h2>
          <p className="main-title-text">Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them—all via classes.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Responsive Images</h5>
          <p>Images in React Bootstrap are made responsive using fluid set to true with max-width: 100%; and height: auto; are applied to the image so that it scales with the parent element.</p>

          <Card className="card-example">
            <Card.Body>
              <Image src={img3} fluid={true} alt="..." />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Image src={img3} fluid={true} alt="..." />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Image Thumbnails</h5>
          <p>In addition to our border-radius utilities, you can use thumbnail props to give an image a rounded 1px border appearance.</p>

          <Card className="card-example">
            <Card.Body>
              <Image src={img3} thumbnail={true} alt="..." />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html"></code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Aligning Images</h5>
          <p>Align images with the helper float classes or text alignment classes.</p>

          <Card className="card-example">
            <Card.Body>
              <Image src={img3} fluid={true} alt="..." className="float-start w-200" />
              <Image src={img4} fluid={true} alt="..." className="float-end w-200" />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Image src={img3} fluid={true} alt="..." className="float-start w-200" />
<Image src={img4} fluid={true} alt="..." className="float-end w-200" />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section4" className="main-subtitle">Background Image</h5>
          <p>Make image as background to your content using the helper or utilities classes.</p>

          <Card className="card-example">
            <Card.Body>
              <Row>
                <Col sm="9" md="7">
                  <figure className="figure-overlay">
                    <Image src={img3} fluid={true} alt="..." />
                    <figcaption className="p-4 text-white">
                      <h6 className="mb-3">What Does Royalty-Free Mean?</h6>
                      <p className="mb-0">Royalty free means you just need to pay for rights to use the item once per end product. You don't need to pay additional or ongoing fees for each person who sees or uses it.</p>
                    </figcaption>
                  </figure>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<figure className="figure-overlay">
  <Image src={img3} fluid={true} alt="..." />
  <figcaption className="p-4 text-white">
    <h6 className="mb-3">What Does Royalty-Free Mean?</h6>
    <p className="mb-0">Royalty free means you just need...</p>
  </figcaption>
</figure>`}</code></pre>
            </Card.Footer>
          </Card>

        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Responsive Images</Nav.Link>
          <Nav.Link href="#section2">Image Thumbnails</Nav.Link>
          <Nav.Link href="#section3">Aligning Images</Nav.Link>
          <Nav.Link href="#section4">Background Image</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}