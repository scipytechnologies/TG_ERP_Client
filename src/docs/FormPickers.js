import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import { Card, Container, Nav, Row, Col } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";
import ReactDatePicker from "react-datepicker";
import { SketchPicker } from "react-color";

import "../assets/css/react-datepicker.min.css";

export default function FormPickers() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const [startDate, setStartDate] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());
  const [startDate3, setStartDate3] = useState(new Date());
  const [startDate4, setStartDate4] = useState(new Date());

  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Forms</label>
          <h2 className="main-title">Pickers</h2>
          <p className="main-title-text">The date and color picker is tied to a standard form input field. Focus on the input (click, or use the tab key) to open an interactive calendar in a small overlay.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Display Inline</h5>
          <p>Display the datepicker embedded in the page instead of in an overlay.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="d-inline-block position-relative">
                <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)} inline />
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-js">{`<ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)} inline />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Basic Functionality</h5>
          <p>Choose a date, click elsewhere on the page (blur the input), or hit the Esc key to close. If a date is chosen, feedback is shown as the input's value.</p>

          <Card className="card-example">
            <Card.Body>
              <Row>
                <Col sm="6">
                  <ReactDatePicker selected={startDate2} onChange={(date) => setStartDate2(date)} className="form-control" />
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-js">{`<ReactDatePicker selected={startDate2} onChange={(date) => setStartDate2(date)} className="form-control" />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Multiple Months</h5>

          <Card className="card-example">
            <Card.Body>
              <Row>
                <Col sm="6">
                  <ReactDatePicker
                    renderCustomHeader={({
                      monthDate,
                      customHeaderCount,
                      decreaseMonth,
                      increaseMonth,
                    }) => (
                      <div>
                        <button
                          aria-label="Previous Month"
                          className={
                            "react-datepicker__navigation react-datepicker__navigation--previous"
                          }
                          style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
                          onClick={decreaseMonth}
                        >
                          <span
                            className={
                              "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                            }
                          >
                            {"<"}
                          </span>
                        </button>
                        <span className="react-datepicker__current-month">
                          {monthDate.toLocaleString("en-US", {
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                        <button
                          aria-label="Next Month"
                          className={
                            "react-datepicker__navigation react-datepicker__navigation--next"
                          }
                          style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
                          onClick={increaseMonth}
                        >
                          <span
                            className={
                              "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                            }
                          >
                            {">"}
                          </span>
                        </button>
                      </div>
                    )}
                    selected={startDate3}
                    onChange={(date) => setStartDate3(date)}
                    monthsShown={2}
                    className="form-control"
                  />
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-js">{`<ReactDatePicker
  renderCustomHeader={({
    monthDate,
    customHeaderCount,
    decreaseMonth,
    increaseMonth,
  }) => (
    <div>
      <button
        aria-label="Previous Month"
        className={
          "react-datepicker__navigation react-datepicker__navigation--previous"
        }
        style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
        onClick={decreaseMonth}
      >
        <span
          className={
            "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
          }
        >
          {"<"}
        </span>
      </button>
      <span className="react-datepicker__current-month">
        {monthDate.toLocaleString("en-US", {
          month: "long",
          year: "numeric",
        })}
      </span>
      <button
        aria-label="Next Month"
        className={
          "react-datepicker__navigation react-datepicker__navigation--next"
        }
        style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
        onClick={increaseMonth}
      >
        <span
          className={
            "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
          }
        >
          {">"}
        </span>
      </button>
    </div>
  )}
  selected={startDate2}
  onChange={(date) => setStartDate2(date)}
  monthsShown={2}
  className="form-control"
/>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section4" className="main-subtitle">Custom Date Format</h5>

          <Card className="card-example">
            <Card.Body>
              <Row>
                <Col sm="6">
                  <ReactDatePicker
                    dateFormat="MMMM dd, yyyy"
                    selected={startDate4}
                    onChange={(date) => setStartDate4(date)}
                    className="form-control"
                  />
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-js">{`<ReactDatePicker
  dateFormat="MMMM dd, yyyy"
  selected={startDate4}
  onChange={(date) => setStartDate4(date)}
  className="form-control"
/>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <br /><br /><br />

          <h5 id="section5" className="main-subtitle">React Color</h5>
          <p>A Collection of Color Pickers from Sketch, Photoshop, Chrome, Github, Twitter, Material Design & more. To learn more about this plugin, go to <a href="https://casesandberg.github.io/react-color/" target="_blank" rel="noreferrer">https://casesandberg.github.io/react-color/</a></p>

          <Card className="card-example">
            <Card.Body>
              <Row>
                <Col sm="6">
                  <SketchPicker />
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-js">{`<SketchPicker />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Display Inline</Nav.Link>
          <Nav.Link href="#section2">Basic Functionality</Nav.Link>
          <Nav.Link href="#section3">Multiple Months</Nav.Link>
          <Nav.Link href="#section4">Custom Date Format</Nav.Link>
          <Nav.Link href="#section5">React Color</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}