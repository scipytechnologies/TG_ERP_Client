import React, { useEffect } from "react";
import Prism from "prismjs";
import { Card, Container, Nav } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";
import { Circle, MapContainer, Marker, Polygon, Popup, TileLayer } from 'react-leaflet'

import "leaflet/dist/leaflet.css";
import L from "leaflet";

import iconMarker from "leaflet/dist/images/marker-icon.png";

const icon = L.icon({
  iconUrl: iconMarker
});

export default function MapLeaflet() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Maps and Icons</label>
          <h2 className="main-title">Leaflet Maps</h2>
          <p className="main-title-text">Leaflet is designed with simplicity, performance and usability in mind. It works efficiently across all major desktop and mobile platforms.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Basic Map</h5>
          <p>A default map style by Leaflet Maps.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="leaflet-wrapper">
                <MapContainer center={[51.505, -0.09]} zoom={7} scrollWheelZoom={false}>
                  <TileLayer
                    attribution="&copy; OpenStreetMap"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    maxZoom={19}
                  />
                </MapContainer>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<MapContainer center={[51.505, -0.09]} zoom={7} scrollWheelZoom={false}>
  <TileLayer
    attribution="&copy; OpenStreetMap"
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    maxZoom={19}
  />
</MapContainer>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">With Popups</h5>
          <p>Popups are usually used when you want to attach some information to a particular object on a map.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="leaflet-wrapper">
                <MapContainer center={[51.505, -0.09]} zoom={7} scrollWheelZoom={false}>
                  <TileLayer
                    attribution="&copy; OpenStreetMap"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    maxZoom={19}
                  />
                  <Marker position={[51.505, -0.09]} icon={icon}>
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="leaflet-wrapper">
  <MapContainer center={[51.505, -0.09]} zoom={7} scrollWheelZoom={false}>
    <TileLayer
      attribution="&copy; OpenStreetMap"
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      maxZoom={19}
    />
    <Marker position={[51.505, -0.09]} icon={icon}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Circles &amp; Polygons</h5>
          <p>Besides tile layers, you can easily add other things to your map, including polylines, polygons, circles, and popups.</p>

          <Card className="card-example">
            <Card.Body>
              <div className="leaflet-wrapper">
                <MapContainer center={[51.505, -0.09]} zoom={12} scrollWheelZoom={false}>
                  <TileLayer
                    attribution="&copy; OpenStreetMap"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    maxZoom={19}
                  />
                  <Circle center={[51.505, -0.09]} pathOptions={{ fillColor: "blue" }} radius={200} />
                  <Polygon pathOptions={{ color: "blue" }} positions={[
                    [51.515, -0.09],
                    [51.52, -0.1],
                    [51.52, -0.12],
                  ]} />
                </MapContainer>
              </div>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<div className="leaflet-wrapper">
  <MapContainer center={[51.505, -0.09]} zoom={12} scrollWheelZoom={false}>
    <TileLayer
      attribution="&copy; OpenStreetMap"
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      maxZoom={19}
    />
    <Circle center={[51.505, -0.09]} pathOptions={{ fillColor: "blue" }} radius={200} />
    <Polygon pathOptions={{ color: "blue" }} positions={[
      [51.515, -0.09],
      [51.52, -0.1],
      [51.52, -0.12],
    ]} />
  </MapContainer>
</div>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>On This Page</label>
          <Nav.Link href="#section1">Basic Map</Nav.Link>
          <Nav.Link href="#section2">With Popups</Nav.Link>
          <Nav.Link href="#section3">Markers, Circles &amp; Polygons</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}