import React, { useEffect } from "react";
import Prism from "prismjs";
import { Card, Container, Nav, Pagination } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

export default function Paginations() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Components</label>
          <h2 className="main-title">Pagination</h2>
          <p className="main-title-text">Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Basic Example</h5>
          <p>Pagination is built with list HTML elements so screen readers can announce the number of available links.</p>

          <Card className="card-example">
            <Card.Body>
              <Pagination className="mb-0">
                <Pagination.Item disabled>Previous</Pagination.Item>
                <Pagination.Item active>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item>3</Pagination.Item>
                <Pagination.Item>Next</Pagination.Item>
              </Pagination>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Pagination className="mb-0">
  <Pagination.Item disabled>Previous</Pagination.Item>
  <Pagination.Item active>1</Pagination.Item>
  <Pagination.Item>2</Pagination.Item>
  <Pagination.Item>3</Pagination.Item>
  <Pagination.Item>Next</Pagination.Item>
</Pagination>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Alignment</h5>
          <p>Horizontal alignment of pagination can be done by adding flex utility classes.</p>

          <Card className="card-example">
            <Card.Body>
              <Pagination className="justify-content-center mb-0">
                <Pagination.Item disabled>Previous</Pagination.Item>
                <Pagination.Item active>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item>3</Pagination.Item>
                <Pagination.Item>Next</Pagination.Item>
              </Pagination>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Pagination className="justify-content-center mb-0">...</Pagination>`}</code></pre>
            </Card.Footer>
          </Card>

          <Card className="card-example">
            <Card.Body>
              <Pagination className="justify-content-end mb-0">
                <Pagination.Item disabled>Previous</Pagination.Item>
                <Pagination.Item active>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item>3</Pagination.Item>
                <Pagination.Item>Next</Pagination.Item>
              </Pagination>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Pagination className="justify-content-end mb-0">...</Pagination>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Spacing</h5>
          <p>A style variation with spaces in between pagination item.</p>

          <Card className="card-example">
            <Card.Body>
              <Pagination className="pagination-space mb-0">
                <Pagination.Item disabled>Previous</Pagination.Item>
                <Pagination.Item active>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item>3</Pagination.Item>
                <Pagination.Item>Next</Pagination.Item>
              </Pagination>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Pagination className="pagination-space mb-0">...</Pagination>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section4" className="main-subtitle">Colored Variation</h5>
          <p>A style variation with colored border in every pagination item.</p>

          <Card className="card-example">
            <Card.Body>
              <Pagination className="pagination-space pagination-secondary">
                <Pagination.Item disabled>Previous</Pagination.Item>
                <Pagination.Item active>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item>3</Pagination.Item>
                <Pagination.Item>Next</Pagination.Item>
              </Pagination>

              <Pagination className="pagination-space pagination-info mb-0">
                <Pagination.Item disabled>Previous</Pagination.Item>
                <Pagination.Item active>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item>3</Pagination.Item>
                <Pagination.Item>Next</Pagination.Item>
              </Pagination>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Pagination className="pagination-space pagination-secondary">...</Pagination>
<Pagination className="pagination-space pagination-info">...</Pagination>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section5" className="main-subtitle">Filled Variation</h5>
          <p>A style variation with background color in every pagination item. Only works with <code>.pagination-space</code>. and <code>.pagination-circled</code>.</p>

          <Card className="card-example">
            <Card.Body>
              <Pagination className="pagination-space pagination-filled mb-0">
                <Pagination.Item disabled>Previous</Pagination.Item>
                <Pagination.Item active>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item>3</Pagination.Item>
                <Pagination.Item>Next</Pagination.Item>
              </Pagination>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Pagination className="pagination-space pagination-filled mb-0">...</Pagination>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section6" className="main-subtitle">Circled Variation</h5>
          <p>A style variation with circled pagination item.</p>

          <Card className="card-example">
            <Card.Body>
              <Pagination className="pagination-space pagination-circled mb-0">
                <Pagination.Item disabled><i className="ri-arrow-left-s-line"></i></Pagination.Item>
                <Pagination.Item active>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item>3</Pagination.Item>
                <Pagination.Item><i className="ri-arrow-right-s-line"></i></Pagination.Item>
              </Pagination>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Pagination className="pagination-space pagination-circled mb-0">...</Pagination>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />


        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Basic Example</Nav.Link>
          <Nav.Link href="#section2">Alignment</Nav.Link>
          <Nav.Link href="#section3">Spacing</Nav.Link>
          <Nav.Link href="#section4">Colored Variation</Nav.Link>
          <Nav.Link href="#section5">Filled Variation</Nav.Link>
          <Nav.Link href="#section6">Circled Variation</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}