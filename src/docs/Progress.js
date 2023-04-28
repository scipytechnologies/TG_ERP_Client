import React, { useEffect } from "react";
import Prism from "prismjs";
import { Card, Container, Nav, ProgressBar } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

export default function Progresss() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Components</label>
          <h2 className="main-title">Progress</h2>
          <p className="main-title-text">Documentation and examples for using Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and text labels.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Basic Example</h5>
          <p>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.</p>

          <Card className="card-example">
            <Card.Body>
              <ProgressBar className="mb-2" />
              <ProgressBar now={25} className="mb-2" />
              <ProgressBar now={50} className="mb-2" />
              <ProgressBar now={75} className="mb-2" />
              <ProgressBar now={100} />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<ProgressBar className="mb-2" />
<ProgressBar now={25} className="mb-2" />
<ProgressBar now={50} className="mb-2" />
<ProgressBar now={75} className="mb-2" />
<ProgressBar now={100} />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Labels</h5>
          <p>Add labels to your progress bars by placing text within the <code>.progress-bar</code>.</p>

          <Card className="card-example">
            <Card.Body>
              <ProgressBar now="50" label="50%" />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<ProgressBar now="50" label="50%" />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Height</h5>
          <p>We only set a height value on the progress, so if you change that value the inner progress bar will automatically resize accordingly.</p>

          <Card className="card-example">
            <Card.Body>
              <ProgressBar now="50" className="h-1 mb-2" />
              <ProgressBar now="50" className="h-2" />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<ProgressBar now="50" className="h-1 mb-2" />
<ProgressBar now="50" className="h-2" />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section4" className="main-subtitle">Background</h5>
          <p>Use background utility classes to change the appearance of individual progress bars.</p>

          <Card className="card-example">
            <Card.Body>
              <ProgressBar variant="success" now={40} className="mb-2" />
              <ProgressBar variant="info" now={20} className="mb-2" />
              <ProgressBar variant="warning" now={60} className="mb-2" />
              <ProgressBar variant="danger" now={80} />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<ProgressBar variant="success" now={40} className="mb-2" />
<ProgressBar variant="info" now={20} className="mb-2" />
<ProgressBar variant="warning" now={60} className="mb-2" />
<ProgressBar variant="danger" now={80} />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section5" className="main-subtitle">Multiple Bars</h5>
          <p>Include multiple progress bars in a progress component if you need.</p>

          <Card className="card-example">
            <Card.Body>
              <ProgressBar>
                <ProgressBar now={25} />
                <ProgressBar variant="success" now={25} />
                <ProgressBar variant="info" now={25} />
              </ProgressBar>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<ProgressBar>
  <ProgressBar now={25} />
  <ProgressBar variant="success" now={25} />
  <ProgressBar variant="info" now={25} />
</ProgressBar>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section6" className="main-subtitle">Striped</h5>
          <p>Add <code>.progress-bar-striped</code> to any progress bar to apply a stripe via CSS gradient over the progress bar’s background color.</p>

          <Card className="card-example">
            <Card.Body>
              <ProgressBar striped variant="success" now={40} className="mb-2" />
              <ProgressBar striped variant="info" now={20} className="mb-2" />
              <ProgressBar striped variant="warning" now={60} className="mb-2" />
              <ProgressBar striped variant="danger" now={80} />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<ProgressBar striped variant="success" now={40} className="mb-2" />
<ProgressBar striped variant="info" now={20} className="mb-2" />
<ProgressBar striped variant="warning" now={60} className="mb-2" />
<ProgressBar striped variant="danger" now={80} />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section7" className="main-subtitle">Animated Striped</h5>
          <p>The striped gradient can also be animated.</p>

          <Card className="card-example">
            <Card.Body>
              <ProgressBar animated now={75} />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<ProgressBar animated now={75} />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Basic Example</Nav.Link>
          <Nav.Link href="#section2">Labels</Nav.Link>
          <Nav.Link href="#section3">Height</Nav.Link>
          <Nav.Link href="#section4">Background</Nav.Link>
          <Nav.Link href="#section5">Multiple Bars</Nav.Link>
          <Nav.Link href="#section6">Striped</Nav.Link>
          <Nav.Link href="#section7">Animated Stripes</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}