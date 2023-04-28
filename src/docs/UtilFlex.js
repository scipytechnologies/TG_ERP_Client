import React, { useEffect } from "react";
import Prism from "prismjs";
import { Card, Container, Nav } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

import img1 from "../assets/img/img1.jpg";

export default function UtilFlex() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Utilities</label>
          <h2 className="main-title">Flex</h2>
          <p className="main-title-text">Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Enable Flex</h5>
          <p>Apply display utilities to create a flexbox container and transform direct children elements into flex items.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="d-flex p-2 border">I'm a flexbox container!</div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="d-flex p-2 border">I'm a flexbox container!</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <Card className="card-example">
            <Card.Body>
              <div className="d-inline-flex p-2 border">I'm an inline flexbox container!</div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="d-inline-flex p-2 border">I'm an inline flexbox container!</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Direction</h5>
          <p>Set the direction of flex items in a flex container with direction utilities.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="demo-flex">
                <div className="d-flex flex-row border mb-2">
                  <div className="p-2 bg-gray-300">Flex item 1</div>
                  <div className="p-2 bg-gray-300">Flex item 2</div>
                  <div className="p-2 bg-gray-300">Flex item 3</div>
                </div>
                <div className="d-flex flex-row-reverse border">
                  <div className="p-2 bg-gray-300">Flex item 1</div>
                  <div className="p-2 bg-gray-300">Flex item 2</div>
                  <div className="p-2 bg-gray-300">Flex item 3</div>
                </div>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="d-flex flex-row border mb-2">
  <div className="p-2 bg-gray-300">Flex item 1</div>
  <div className="p-2 bg-gray-300">Flex item 2</div>
  <div className="p-2 bg-gray-300">Flex item 3</div>
</div>
<div className="d-flex flex-row-reverse border">
  <div className="p-2 bg-gray-300">Flex item 1</div>
  <div className="p-2 bg-gray-300">Flex item 2</div>
  <div className="p-2 bg-gray-300">Flex item 3</div>
</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Justify Content</h5>
          <p>Use justify-content utilities on flexbox containers to change the alignment of flex items on the main axis</p>

          <Card className="card-example">
            <Card.Body className="demo-flex">
              <div className="d-flex justify-content-start border mb-2">
                <div className="p-2 bg-gray-300">Flex item 1</div>
                <div className="p-2 bg-gray-300">Flex item 2</div>
                <div className="p-2 bg-gray-300">Flex item 3</div>
              </div>
              <div className="d-flex justify-content-end border mb-2">
                <div className="p-2 bg-gray-300">Flex item 1</div>
                <div className="p-2 bg-gray-300">Flex item 2</div>
                <div className="p-2 bg-gray-300">Flex item 3</div>
              </div>
              <div className="d-flex justify-content-center border mb-2">
                <div className="p-2 bg-gray-300">Flex item 1</div>
                <div className="p-2 bg-gray-300">Flex item 2</div>
                <div className="p-2 bg-gray-300">Flex item 3</div>
              </div>
              <div className="d-flex justify-content-between border mb-2">
                <div className="p-2 bg-gray-300">Flex item 1</div>
                <div className="p-2 bg-gray-300">Flex item 2</div>
                <div className="p-2 bg-gray-300">Flex item 3</div>
              </div>
              <div className="d-flex justify-content-around border mb-2">
                <div className="p-2 bg-gray-300">Flex item 1</div>
                <div className="p-2 bg-gray-300">Flex item 2</div>
                <div className="p-2 bg-gray-300">Flex item 3</div>
              </div>
              <div className="d-flex justify-content-evenly border">
                <div className="p-2 bg-gray-300">Flex item 1</div>
                <div className="p-2 bg-gray-300">Flex item 2</div>
                <div className="p-2 bg-gray-300">Flex item 3</div>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="d-flex justify-content-start border mb-2">
  <div className="p-2 bg-gray-300">Flex item 1</div>
  <div className="p-2 bg-gray-300">Flex item 2</div>
  <div className="p-2 bg-gray-300">Flex item 3</div>
</div>
<div className="d-flex justify-content-end border mb-2">
  <div className="p-2 bg-gray-300">Flex item 1</div>
  <div className="p-2 bg-gray-300">Flex item 2</div>
  <div className="p-2 bg-gray-300">Flex item 3</div>
</div>
<div className="d-flex justify-content-center border mb-2">
  <div className="p-2 bg-gray-300">Flex item 1</div>
  <div className="p-2 bg-gray-300">Flex item 2</div>
  <div className="p-2 bg-gray-300">Flex item 3</div>
</div>
<div className="d-flex justify-content-between border mb-2">
  <div className="p-2 bg-gray-300">Flex item 1</div>
  <div className="p-2 bg-gray-300">Flex item 2</div>
  <div className="p-2 bg-gray-300">Flex item 3</div>
</div>
<div className="d-flex justify-content-around border mb-2">
  <div className="p-2 bg-gray-300">Flex item 1</div>
  <div className="p-2 bg-gray-300">Flex item 2</div>
  <div className="p-2 bg-gray-300">Flex item 3</div>
</div>
<div className="d-flex justify-content-evenly border">
  <div className="p-2 bg-gray-300">Flex item 1</div>
  <div className="p-2 bg-gray-300">Flex item 2</div>
  <div className="p-2 bg-gray-300">Flex item 3</div>
</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section4" className="main-subtitle">Align Items</h5>
          <p>Use align-items utilities on flexbox containers to change the alignment of flex items on the cross axis.</p>

          <Card className="card-example">
            <Card.Body className="demo-flex">
              <div className="d-flex align-items-start ht-100 border mb-2">
                <div className="p-2 bg-gray-300">Flex item 1</div>
                <div className="p-2 bg-gray-300">Flex item 2</div>
                <div className="p-2 bg-gray-300">Flex item 3</div>
              </div>
              <div className="d-flex align-items-end ht-100 border mb-2">
                <div className="p-2 bg-gray-300">Flex item 1</div>
                <div className="p-2 bg-gray-300">Flex item 2</div>
                <div className="p-2 bg-gray-300">Flex item 3</div>
              </div>
              <div className="d-flex align-items-center ht-100 border mb-2">
                <div className="p-2 bg-gray-300">Flex item 1</div>
                <div className="p-2 bg-gray-300">Flex item 2</div>
                <div className="p-2 bg-gray-300">Flex item 3</div>
              </div>
              <div className="d-flex align-items-stretch ht-100 border">
                <div className="p-2 bg-gray-300">Flex item 1</div>
                <div className="p-2 bg-gray-300">Flex item 2</div>
                <div className="p-2 bg-gray-300">Flex item 3</div>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="d-flex align-items-start ht-100 border mb-2">
  <div className="p-2 bg-gray-300">Flex item 1</div>
  <div className="p-2 bg-gray-300">Flex item 2</div>
  <div className="p-2 bg-gray-300">Flex item 3</div>
</div>
<div className="d-flex align-items-end ht-100 border mb-2">
  <div className="p-2 bg-gray-300">Flex item 1</div>
  <div className="p-2 bg-gray-300">Flex item 2</div>
  <div className="p-2 bg-gray-300">Flex item 3</div>
</div>
<div className="d-flex align-items-center ht-100 border mb-2">
  <div className="p-2 bg-gray-300">Flex item 1</div>
  <div className="p-2 bg-gray-300">Flex item 2</div>
  <div className="p-2 bg-gray-300">Flex item 3</div>
</div>
<div className="d-flex align-items-stretch ht-100 border">
  <div className="p-2 bg-gray-300">Flex item 1</div>
  <div className="p-2 bg-gray-300">Flex item 2</div>
  <div className="p-2 bg-gray-300">Flex item 3</div>
</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section5" className="main-subtitle">Align Self</h5>
          <p>Use align-self utilities on flexbox items to individually change their alignment on the cross axis.</p>

          <Card className="card-example">
            <Card.Body className="demo-flex">
              <div className="d-flex ht-100 border mb-2">
                <div className="p-2 bg-gray-300 align-self-start">Flex item 1</div>
                <div className="p-2 bg-gray-300 align-self-end">Flex item 2</div>
                <div className="p-2 bg-gray-300 align-self-center">Flex item 3</div>
                <div className="p-2 bg-gray-300 align-self-stretch">Flex item 4</div>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="d-flex ht-100 border mb-2">
  <div className="p-2 bg-gray-300 align-self-start">Flex item 1</div>
  <div className="p-2 bg-gray-300 align-self-end">Flex item 2</div>
  <div className="p-2 bg-gray-300 align-self-center">Flex item 3</div>
  <div className="p-2 bg-gray-300 align-self-stretch">Flex item 4</div>
</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section6" className="main-subtitle">Fill</h5>
          <p>Use the <code>.flex-fill</code> class on a series of sibling elements to force them into widths equal to their content.</p>

          <Card className="card-example">
            <Card.Body className="demo-flex">
              <div className="d-flex">
                <div className="p-2 bg-gray-300 flex-fill">Flex item with a lot of content</div>
                <div className="p-2 bg-gray-300 flex-fill">Flex item</div>
                <div className="p-2 bg-gray-300 flex-fill">Flex item</div>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="d-flex">
  <div className="p-2 bg-gray-300 flex-fill">Flex item with a lot of content</div>
  <div className="p-2 bg-gray-300 flex-fill">Flex item</div>
  <div className="p-2 bg-gray-300 flex-fill">Flex item</div>
</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section7" className="main-subtitle">Grow &amp; Shrink</h5>
          <p>Use <code>.flex-grow</code> utilities to toggle a flex item's ability to grow to fill available space.</p>

          <Card className="card-example">
            <Card.Body className="demo-flex">
              <div className="d-flex">
                <div className="p-2 bg-gray-300 flex-grow-1">Flex item with a lot of content</div>
                <div className="p-2 bg-gray-300">Flex item</div>
                <div className="p-2 bg-gray-300">Flex item</div>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="d-flex">
  <div className="p-2 bg-gray-300 flex-grow-1">Flex item with a lot of content</div>
  <div className="p-2 bg-gray-300">Flex item</div>
  <div className="p-2 bg-gray-300">Flex item</div>
</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section8" className="main-subtitle">Auto Margins</h5>
          <p>Flexbox can do some pretty awesome things when you mix flex alignments with auto margins.</p>

          <Card className="card-example">
            <Card.Body className="demo-flex">
              <div className="d-flex mb-2">
                <div className="p-2 bg-gray-300">Flex item</div>
                <div className="p-2 bg-gray-300 me-auto">Flex item</div>
                <div className="p-2 bg-gray-300">Flex item</div>
              </div>
              <div className="d-flex">
                <div className="p-2 bg-gray-300">Flex item</div>
                <div className="p-2 bg-gray-300 ms-auto">Flex item</div>
                <div className="p-2 bg-gray-300">Flex item</div>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="d-flex mb-2">
  <div className="p-2 bg-gray-300">Flex item</div>
  <div className="p-2 bg-gray-300 me-auto">Flex item</div>
  <div className="p-2 bg-gray-300">Flex item</div>
</div>
<div className="d-flex">
  <div className="p-2 bg-gray-300">Flex item</div>
  <div className="p-2 bg-gray-300 ms-auto">Flex item</div>
  <div className="p-2 bg-gray-300">Flex item</div>
</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section9" className="main-subtitle">Order</h5>
          <p>Change the visual order of specific flex items with a handful of order utilities.</p>

          <Card className="card-example">
            <Card.Body className="demo-flex">
              <div className="d-flex">
                <div className="order-3 p-2 bg-gray-300">First flex item</div>
                <div className="order-2 p-2 bg-gray-300">Second flex item</div>
                <div className="order-1 p-2 bg-gray-300">Third flex item</div>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="d-flex">
  <div className="order-3 p-2 bg-gray-300">First flex item</div>
  <div className="order-2 p-2 bg-gray-300">Second flex item</div>
  <div className="order-1 p-2 bg-gray-300">Third flex item</div>
</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section10" className="main-subtitle">Align Content</h5>
          <p>Use align-content utilities on flexbox containers to align flex items together on the cross axis.</p>

          <Card className="card-example">
            <Card.Body className="demo-flex">
              <div className="d-flex align-content-end flex-wrap border ht-150 mb-2">
                <div className="p-2 bg-gray-300">Flex item</div>
                <div className="p-2 bg-gray-300">Flex item</div>
                <div className="p-2 bg-gray-300">Flex item</div>
                <div className="p-2 bg-gray-300">Flex item</div>
                <div className="p-2 bg-gray-300">Flex item</div>
                <div className="p-2 bg-gray-300">Flex item</div>
                <div className="p-2 bg-gray-300">Flex item</div>
                <div className="p-2 bg-gray-300">Flex item</div>
                <div className="p-2 bg-gray-300">Flex item</div>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="d-flex align-content-end flex-wrap border ht-150 mb-2">
  <div className="p-2 bg-gray-300">Flex item</div>
  <div className="p-2 bg-gray-300">Flex item</div>
  <div className="p-2 bg-gray-300">Flex item</div>
  <div className="p-2 bg-gray-300">Flex item</div>
  <div className="p-2 bg-gray-300">Flex item</div>
  <div className="p-2 bg-gray-300">Flex item</div>
  <div className="p-2 bg-gray-300">Flex item</div>
  <div className="p-2 bg-gray-300">Flex item</div>
  <div className="p-2 bg-gray-300">Flex item</div>
</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section11" className="main-subtitle">Media Object</h5>
          <p>Looking to replicate the media object component from Bootstrap 4? Recreate it in no time with a few flex utilities that allow even more flexibility and customization than before.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 w-15">
                  <img src={img1} className="img-fluid" alt="" />
                </div>
                <div className="flex-grow-1 ms-3">
                  This is some content from a media component. You can replace this with any content and adjust it as needed.
                </div>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="d-flex align-items-center">
  <div className="flex-shrink-0 w-15">
    <img src={img1} className="img-fluid" alt="" />
  </div>
  <div className="flex-grow-1 ms-3">
    This is some content from a media component. You can replace this with any content and adjust it as needed.
  </div>
</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Enable Flex</Nav.Link>
          <Nav.Link href="#section2">Direction</Nav.Link>
          <Nav.Link href="#section3">Justify Content</Nav.Link>
          <Nav.Link href="#section4">Align Items</Nav.Link>
          <Nav.Link href="#section5">Align Self</Nav.Link>
          <Nav.Link href="#section6">Fill</Nav.Link>
          <Nav.Link href="#section7">Grow &amp; Shrink</Nav.Link>
          <Nav.Link href="#section8">Auto Margins</Nav.Link>
          <Nav.Link href="#section9">Order</Nav.Link>
          <Nav.Link href="#section10">Align Content</Nav.Link>
          <Nav.Link href="#section11">Media Object</Nav.Link>
        </Nav>

      </div>
      <Footer />
    </React.Fragment>
  );
}