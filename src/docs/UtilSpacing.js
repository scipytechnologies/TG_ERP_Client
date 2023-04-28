import React, { useEffect } from "react";
import Prism from "prismjs";
import { Card, Container, Nav, Table } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

export default function UtilSpacing() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Utilities</label>
          <h2 className="main-title">Spacing</h2>
          <p className="main-title-text">Bootstrap includes a wide range of shorthand responsive margin, padding, and gap utility classes to modify an element's appearance.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Margin &amp; Padding</h5>
          <p>Assign responsive-friendly margin and padding values to an element or a subset of its sides with shorthand classes.</p>

          <p>The classes are named using the format <code>{`{property}{sides}-{size}`}</code> for xs and <code>{`{property}{sides}-{breakpoint}-{size}`}</code> for sm, md, lg, xl, and xxl.</p>

          <Table className="table-spacing">
            <tbody>
              <tr>
                <td colSpan="2" className="text-dark ps-0">Where <strong>property</strong> is one of:</td>
              </tr>
              <tr>
                <td><code>m</code></td>
                <td>for classes that set margin</td>
              </tr>
              <tr>
                <td><code>p</code></td>
                <td>for classes that set padding</td>
              </tr>
              <tr>
                <td colSpan="2" className="text-dark ps-0">Where <strong>sides</strong> is one of:</td>
              </tr>
              <tr>
                <td><code>t</code></td>
                <td>for classes that set <code>margin-top</code> or <code>padding-top</code></td>
              </tr>
              <tr>
                <td><code>b</code></td>
                <td>for classes that set <code>margin-bottom</code> or <code>padding-bottom</code></td>
              </tr>
              <tr>
                <td><code>s</code></td>
                <td>for classes that set <code>margin-left</code> or <code>padding-left</code></td>
              </tr>
              <tr>
                <td><code>e</code></td>
                <td>for classes that set <code>margin-right</code> or <code>padding-right</code></td>
              </tr>
              <tr>
                <td colSpan="2" className="text-dark ps-0">Where <strong>size</strong> is one of:</td>
              </tr>
              <tr>
                <td><code>0</code></td>
                <td>for classes that eliminate the <code>margin</code> or <code>padding</code> by setting it to <code>0</code></td>
              </tr>
              <tr>
                <td><code>1</code></td>
                <td>for classes that set the <code>margin</code> or <code>padding</code> to <code>$spacer * .25</code></td>
              </tr>
              <tr>
                <td><code>2</code></td>
                <td>for classes that set the <code>margin</code> or <code>padding</code> to <code>$spacer * .5</code></td>
              </tr>
              <tr>
                <td><code>3</code></td>
                <td>for classes that set the <code>margin</code> or <code>padding</code> to <code>$spacer</code></td>
              </tr>
              <tr>
                <td><code>4</code></td>
                <td>for classes that set the <code>margin</code> or <code>padding</code> to <code>$spacer * 1.5</code></td>
              </tr>
              <tr>
                <td><code>5</code></td>
                <td>for classes that set the <code>margin</code> or <code>padding</code> to <code>$spacer * 3</code></td>
              </tr>
              <tr>
                <td><code>auto</code></td>
                <td>for classes that set the <code>margin</code> to auto</td>
              </tr>
            </tbody>
          </Table>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Horizontal Centering</h5>
          <p>Additionally, Bootstrap also includes an <code>.mx-auto</code> class for horizontally centering fixed-width block level content</p>

          <Card className="card-example">
            <Card.Body>
              <div className="mx-auto w-200 p-2 bg-gray-200 text-center">
                Centered element
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="mx-auto w-200 p-2 bg-gray-200 text-center">
  Centered element
</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Gap</h5>
          <p>When using <code>display: grid</code>, you can make use of gap utilities on the parent grid container. This can save on having to add margin utilities to individual grid items.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="d-grid gap-3">
                <div className="p-2 bg-light border">Grid item 1</div>
                <div className="p-2 bg-light border">Grid item 2</div>
                <div className="p-2 bg-light border">Grid item 3</div>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="d-grid gap-3">
  <div className="p-2 bg-light border">Grid item 1</div>
  <div className="p-2 bg-light border">Grid item 2</div>
  <div className="p-2 bg-light border">Grid item 3</div>
</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />
        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Margin &amp; Padding</Nav.Link>
          <Nav.Link href="#section2">Horizontal Centering</Nav.Link>
          <Nav.Link href="#section3">Gap</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}