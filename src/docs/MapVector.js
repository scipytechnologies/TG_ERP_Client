import React, { useEffect } from "react";
import Prism from "prismjs";
import { Card, Container, Nav } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";

import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import { usAea } from "@react-jvectormap/unitedstates";

export default function MapVector() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const regStyle = {
    selected: {
      fill: "#506fd9"
    },
    initial: {
      fill: "#5f748a"
    }
  };

  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Maps and Icons</label>
          <h2 className="main-title">Vector Maps</h2>
          <p className="main-title-text">A vector-based, cross-browser and cross-platform component for interactive geography-related data visualization on the web.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">World Map</h5>
          <p>Below is a basic example of displaying the world map.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="ht-350">
                <VectorMap map={worldMill} backgroundColor="#fff" regionStyle={regStyle} />
              </div>
            </Card.Body>  
            <Card.Footer>
              <pre><code className="language-html">{`<VectorMap map={worldMill} backgroundColor="#fff" regionStyle={regStyle} />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Enable Zoom</h5>
          <p>Whether to enable map zoom ( true or false, defaults to true).</p>

          <Card className="card-example">
            <Card.Body>
              <div className="ht-350">
                <VectorMap map={worldMill} backgroundColor="#fff" regionStyle={regStyle} />
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<VectorMap map={worldMill} backgroundColor="#fff" regionStyle={regStyle} />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Show Tooltip</h5>
          <p>Whether to show tooltips on mouseover (true or false, defaults to true).</p>

          <Card className="card-example">
            <Card.Body>
              <div className="ht-350">
                <VectorMap map={worldMill} backgroundColor="#fff" regionStyle={regStyle} />
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<VectorMap map={worldMill} backgroundColor="#fff" regionStyle={regStyle} />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section4" className="main-subtitle">Map By Country</h5>
          <p>In this example, we are showing map of the United States.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="ht-350">
                <VectorMap map={usAea} backgroundColor="#fff" regionStyle={regStyle} />
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<VectorMap map={usAea} backgroundColor="#fff" regionStyle={regStyle} />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section5" className="main-subtitle">Selected Region</h5>
          <p>In this example, we are showing pre selected region in country of United States.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="ht-350">
                <VectorMap map={usAea} backgroundColor="#fff" regionStyle={regStyle} selectedRegions={["US-CA","US-TX", "US-MO", "US-CO"]} />
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="ht-350">
  <VectorMap map={usAea} backgroundColor="#fff" regionStyle={regStyle} selectedRegions={["US-CA","US-TX", "US-MO", "US-CO"]} />
</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />
        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">World Map</Nav.Link>
          <Nav.Link href="#section2">Enable Zoom</Nav.Link>
          <Nav.Link href="#section3">Show Tooltip</Nav.Link>
          <Nav.Link href="#section4">Country Map</Nav.Link>
          <Nav.Link href="#section5">Selected Region</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}