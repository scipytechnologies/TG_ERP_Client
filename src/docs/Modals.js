import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import { Button, Modal, Card, Container, Nav } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

export default function Modals() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const handleClose5 = () => setShow5(false);

  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [xlShow, setXlShow] = useState(false);

  const smHandleClose = () => setSmShow(false);

  const lgHandleClose = () => setLgShow(false);

  const xlHandleClose = () => setXlShow(false);

  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Components</label>
          <h2 className="main-title">Modals</h2>
          <p className="main-title-text">Add dialogs to your site for lightboxes, user notifications, or completely custom content.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Basic Example</h5>
          <p>Below is a static modal dialog (without the positioning) to demonstrate the look and feel of the Modal.</p>

          <Card className="card-example">
            <Card.Body>
              <Button variant="primary" onClick={handleShow}>
                Launch demo modal
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Modal heading</Modal.Title>
  </Modal.Header>
  <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    <Button variant="primary" onClick={handleClose}>
      Save Changes
    </Button>
  </Modal.Footer>
</Modal>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Vertically Centered</h5>
          <p>You can vertically center a modal by passing the centered prop.</p>

          <Card className="card-example">
            <Card.Body>
              <Button variant="primary" onClick={handleShow2}>
                Launch vertically centered modal
              </Button>

              <Modal show={show2} onHide={handleClose2} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose2}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose2}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Modal show={show} onHide={handleClose} centered>...</Modal`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Static Backdrop</h5>
          <p>When backdrop is set to static, the modal will not close when clicking outside it. Click the button below to try it.</p>

          <Card className="card-example">
            <Card.Body>
              <Button variant="primary" onClick={handleShow3}>
                Launch static modal
              </Button>

              <Modal show={show3} onHide={handleClose3} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  I will not close if you click outside me. Don't even try to press
                  escape key.
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose3}>
                    Close
                  </Button>
                  <Button variant="primary">Understood</Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>...</Modal>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section4" className="main-subtitle">Fullscreen Modal</h5>
          <p>Another override is the option to pop up a modal that covers the user viewport. You can use the fullscreen prop to make the modal fullscreen.</p>

          <Card className="card-example">
            <Card.Body>
              <Button variant="primary" onClick={handleShow4}>
                Launch fullscreen modal
              </Button>

              <Modal show={show4} onHide={handleClose4} fullscreen={true}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a full screen modal!</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose4}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose4}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Modal show={show} onHide={handleClose} fullscreen={true}>...</Modal`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section5" className="main-subtitle">Optional Sizes</h5>
          <p>Modals have three optional sizes, available via size props to be placed on a <code>Modal</code>.</p>

          <Card className="card-example">
            <Card.Body>
              <Button onClick={() => setSmShow(true)} className="me-2">Small modal</Button>
              <Button onClick={() => setLgShow(true)} className="me-2">Large modal</Button>
              <Button onClick={() => setXlShow(true)}>Extra Large modal</Button>

              <Modal show={smShow} onHide={smHandleClose} size="sm">
                <Modal.Header closeButton>
                  <Modal.Title>Modal Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a small modal!</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={smHandleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={smHandleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>

              <Modal show={lgShow} onHide={lgHandleClose} size="lg">
                <Modal.Header closeButton>
                  <Modal.Title>Modal Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a large modal!</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={lgHandleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={lgHandleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>

              <Modal show={xlShow} onHide={xlHandleClose} size="xl">
                <Modal.Header closeButton>
                  <Modal.Title>Modal Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a extra large modal!</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={xlHandleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={xlHandleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>

            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Modal show={smShow} onHide={smHandleClose} size="sm">...</Modal>
<Modal show={lgShow} onHide={lgHandleClose} size="lg">...</Modal>
<Modal show={xlShow} onHide={xlHandleClose} size="xl">...</Modal>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section6" className="main-subtitle">Remove Animation</h5>
          <p>A Modal can also be without an animation. For that set the animation prop to false.</p>

          <Card className="card-example">
            <Card.Body>
              <Button onClick={() => setShow5(true)}>No animation modal</Button>

              <Modal show={show5} onHide={handleClose5} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose5}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose5}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Modal show={show5} onHide={handleClose5} animation={false}>...</Modal>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Basic Example</Nav.Link>
          <Nav.Link href="#section2">Vertically Centered</Nav.Link>
          <Nav.Link href="#section3">Static Backdrop</Nav.Link>
          <Nav.Link href="#section4">Fullscreen Modal</Nav.Link>
          <Nav.Link href="#section5">Optional Sizes</Nav.Link>
          <Nav.Link href="#section6">Remove Animation</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}