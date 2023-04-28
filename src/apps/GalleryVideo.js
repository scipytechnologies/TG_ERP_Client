import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { Carousel, Col, Row, Button, Card, ProgressBar, Nav } from "react-bootstrap";

import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img43 from "../assets/img/img43.jpg";
import img44 from "../assets/img/img44.jpg";
import img45 from "../assets/img/img45.jpg";
import img46 from "../assets/img/img46.jpg";
import img47 from "../assets/img/img47.jpg";
import img48 from "../assets/img/img48.jpg";
import img49 from "../assets/img/img49.jpg";
import img50 from "../assets/img/img50.jpg";

export default function GalleryVideo() {
  useEffect(() => {
    document.body.classList.add('app-video')
    return () => {
      document.body.classList.remove('app-video')
    }
  }, []);
  return (
    <React.Fragment>
      <Header />
      <div className="main main-app p-3 p-lg-4 p-xxl-5">
        <Carousel slide>
          <Carousel.Item>
            <div className="video-headline">
              <img src={img44} alt="..." />
              <div className="video-headline-body p-4">
                <div>
                  <h1 className="video-title mb-2">To Kill A Mockingbird</h1>
                  <div className="d-flex align-items-center opacity-75 gap-2 gap-sm-3 mb-3 fs-sm">
                    <span>1h 54m</span>
                    <span>Crime, Drama</span>
                    <span>October 2020</span>
                  </div>
                  <p className="opacity-75 mb-3">Atticus Finch, a widowed lawyer in Depression-era Alabama, defends a black man against an undeserved rape charge, and his children against prejudice.</p>

                  <Row className="gx-4 row-cols-auto mb-4">
                    <Col>
                      <label>IMDB Rating</label>
                      <h3>8.9</h3>
                    </Col>
                    <Col>
                      <label>Audience</label>
                      <h3>838K</h3>
                    </Col>
                    <Col>
                      <label>Popularity</label>
                      <h3>91%</h3>
                    </Col>
                  </Row>

                  <Button variant="" className="btn-icon btn-outline-white"><i className="ri-play-line"></i></Button>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="video-headline">
              <img src={img43} alt="..." />
              <div className="video-headline-body p-4">
                <div>
                  <h1 className="video-title mb-2">North By Northwest</h1>
                  <div className="d-flex align-items-center opacity-75 gap-2 gap-sm-3 mb-3 fs-sm">
                    <span>2h 20m</span>
                    <span>Action, Adventure</span>
                    <span>September 2020</span>
                  </div>
                  <p className="opacity-75 mb-3">A New York City advertising executive goes on the run after being mistaken for a government agent by a group of foreign spies, and falls for a woman whose loyalties he begins to doubt.</p>

                  <Row className="gx-4 row-cols-auto mb-4">
                    <Col>
                      <label>IMDB Rating</label>
                      <h3>8.3</h3>
                    </Col>
                    <Col>
                      <label>Audience</label>
                      <h3>324K</h3>
                    </Col>
                    <Col>
                      <label>Popularity</label>
                      <h3>87%</h3>
                    </Col>
                  </Row>

                  <Button variant="" className="btn-icon btn-outline-white"><i className="ri-play-line"></i></Button>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

        <Card className="card-video my-4 my-xxl-5">
          <Card.Body className="p-3 p-sm-4">
            <Row className="g-3 g-sm-4">
              <Col xl="7">
                <div className="video-player">
                  <img src={img45} className="video-player-img" alt="" />
                  <ProgressBar now={25} />

                  <Nav as="nav">
                    <Nav.Link href=""><i className="ri-play-line"></i></Nav.Link>
                    <Nav.Link href=""><i className="ri-volume-down-line"></i></Nav.Link>
                    <Nav.Link href="" className="me-auto">0:31 / 23:55</Nav.Link>
                    <Nav.Link href=""><i className="ri-closed-captioning-line"></i></Nav.Link>
                    <Nav.Link href=""><i className="ri-settings-3-line"></i></Nav.Link>
                    <Nav.Link href=""><i className="ri-cast-line"></i></Nav.Link>
                    <Nav.Link href=""><i className="ri-fullscreen-fill"></i></Nav.Link>
                  </Nav>
                </div>
              </Col>
              <Col xl>
                <Card.Title><Link to="#">Maxime placeat facere possimus, omnis voluptas assumenda est</Link></Card.Title>
                <p className="d-flex gap-3 fs-sm text-secondary"><span>320,423 views</span><span>3 months ago</span></p>
                <p>These cases are perfectly simple and easy to distinguish.</p>
                <p className="mb-0">In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <div className="main-label-group mb-3">
          <label>Recent Uploads</label>
          <Link to="">See All</Link>
        </div>

        <div className="row-wrapper mb-4 mb-xxl-5">
          <Row className="g-3 g-xl-4">
            {[
              {
                "img": img47,
                "title": "Accusantium doloremque",
                "author": "King Village",
                "views": "15,000",
                "date": "1 week ago"
              }, {
                "img": img48,
                "title": "Neque porro quisquam",
                "author": "Happy Island",
                "views": "245,720",
                "date": "2 weeks ago"
              }, {
                "img": img49,
                "title": "Quis autem vel eum iure",
                "author": "Goblet of Fire",
                "views": "320,109",
                "date": "3 weeks ago"
              }, {
                "img": img50,
                "title": "Iure reprehenderit",
                "author": "Jungle Hub",
                "views": "552,002",
                "date": "3 weeks ago"
              }
            ].map((upload, index) => (
              <Col key={index}>
                <Card className="card-video-item">
                  <img src={upload.img} className="card-img-top" alt="" />
                  <Card.Body className="p-3">
                    <Card.Title as="h6"><Link to="">{upload.title}</Link></Card.Title>
                    <Link to="" className="card-author">{upload.author}</Link>
                    <Card.Text><span>{upload.views} views</span><span>{upload.date}</span></Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <div className="main-label-group mb-3">
          <label>Upcoming Movies</label>
          <Link to="">See All</Link>
        </div>

        <Row className="g-3 g-lg-4">
          <Col xl="6">
            <Card className="card-movie">
              <Card.Body className="p-3 p-xxl-4">
                <Row className="g-3 gx-xxl-4">
                  <Col sm="4" md="3" xl="5">
                    <img src={img46} className="img-fluid" alt="" />
                  </Col>
                  <Col sm>
                    <label className="card-label">2020</label>
                    <Card.Title as="h5" className="mb-2">
                      <Link to="">Aircrash Investigation</Link>
                    </Card.Title>
                    <div className="d-flex text-secondary fs-xs gap-3 mb-3">
                      <span>1h 15m</span>
                      <span>Documentary, Investigation</span>
                    </div>

                    <div className="star-group mb-3">
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-half-line"></i>
                      <i className="ri-star-line"></i>
                      <span>3.5</span>
                    </div>

                    <p className="mb-4">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for...<Link to="">Read more</Link></p>

                    <Button variant="outline-primary">View Details</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="6" xl="3">
            <Link to="" className="card card-poster h-100">
              <img src={img3} alt="" />
            </Link>
          </Col>
          <Col sm="6" xl="3">
            <Link to="" className="card card-poster h-100">
              <img src={img4} alt="" />
            </Link>
          </Col>
        </Row>

        <Footer />
      </div>
    </React.Fragment>
  );
}