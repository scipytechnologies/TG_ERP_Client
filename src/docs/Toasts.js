import React, { useEffect } from "react";
import Prism from "prismjs";
import { Button, Card, Container, Nav, Toast, ToastContainer } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

export default function Toasts() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Components</label>
          <h2 className="main-title">Toasts</h2>
          <p className="main-title-text">Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Basic Example</h5>
          <p>Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your “toasted” content and strongly encourage a dismiss button.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="toast-demo">
                <Toast>
                  <Toast.Header>
                    <strong className="me-auto">Notification</strong>
                    <small>11 mins ago</small>
                  </Toast.Header>
                  <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                </Toast>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Toast>
  <Toast.Header>
    <strong className="me-auto">Notification</strong>
    <small>11 mins ago</small>
  </Toast.Header>
  <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
</Toast>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Translucent</h5>
          <p>Toasts are slightly translucent, too, so they blend over whatever they might appear over.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="toast-demo bg-dark">
                <Toast>
                  <Toast.Header>
                    <strong className="me-auto">Notification</strong>
                    <small>11 mins ago</small>
                  </Toast.Header>
                  <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                </Toast>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Toast>
  <Toast.Header>
    <strong className="me-auto">Notification</strong>
    <small>11 mins ago</small>
  </Toast.Header>
  <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
</Toast>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Stacking</h5>
          <p>When you have multiple toasts, we default to vertiaclly stacking them in a readable manner.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="toast-demo">
                <ToastContainer>
                  <Toast>
                    <Toast.Header>
                      <strong className="me-auto">Notification</strong>
                      <small>Just now</small>
                    </Toast.Header>
                    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                  </Toast>

                  <Toast>
                    <Toast.Header>
                      <strong className="me-auto">Notification</strong>
                      <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                  </Toast>
                </ToastContainer>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<ToastContainer>
  <Toast>...</Toast>
  <Toast>...</Toast>
</ToastContainer>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section4" className="main-subtitle">Custom Content</h5>
          <p>Customize your toasts by removing sub-components, tweaking them with utilities, or by adding your own markup.</p>

          <Card className="card-example">
            <Card.Body>
              <Toast>
                <Toast.Header>
                  <strong className="me-auto">Notification</strong>
                  <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>
                  Hello, world! This is a toast message.
                  <div className="mt-2 pt-2 border-top d-flex gap-1">
                    <Button type="button" variant="primary" size="sm">Take action</Button>
                    <Button type="button" variant="secondary" size="sm">Close</Button>
                  </div>
                </Toast.Body>
              </Toast>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Toast>
  <Toast.Header>
    <strong className="me-auto">Notification</strong>
    <small>11 mins ago</small>
  </Toast.Header>
  <Toast.Body>
    Hello, world! This is a toast message.
    <div className="mt-2 pt-2 border-top d-flex gap-1">
      <Button type="button" variant="primary" size="sm">Take action</Button>
      <Button type="button" variant="secondary" size="sm">Close</Button>
    </div>
  </Toast.Body>
</Toast>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Basic Example</Nav.Link>
          <Nav.Link href="#section2">Translucent</Nav.Link>
          <Nav.Link href="#section3">Stacking</Nav.Link>
          <Nav.Link href="#section4">Custom Content</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}