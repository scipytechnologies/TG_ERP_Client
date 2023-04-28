import React, { useEffect } from "react";
import Header from "../layouts/Header";
import { Card, Col, Nav, ProgressBar, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import img19 from "../assets/img/img19.jpg";
import img27 from "../assets/img/img27.jpg";
import img28 from "../assets/img/img28.jpg";
import img29 from "../assets/img/img29.jpg";
import img30 from "../assets/img/img30.jpg";
import img31 from "../assets/img/img31.jpg";
import img32 from "../assets/img/img32.jpg";
import img33 from "../assets/img/img33.jpg";
import img34 from "../assets/img/img34.jpg";
import img35 from "../assets/img/img35.jpg";
import img36 from "../assets/img/img36.jpg";
import img37 from "../assets/img/img37.jpg";
import img38 from "../assets/img/img38.jpg";
import img39 from "../assets/img/img39.jpg";
import img40 from "../assets/img/img40.jpg";
import img41 from "../assets/img/img41.jpg";
import img42 from "../assets/img/img42.jpg";

export default function GalleryMusic() {
  useEffect(() => {
    document.body.classList.add('app-music')
    return () => {
      document.body.classList.remove('app-music')
    }
  }, []);
  return (
    <React.Fragment>
      <Header />
      <div className="main main-app app-music p-3 p-lg-4 p-xxl-5">
        <Row className="row-cols-auto g-4 g-xxl-5">
          <Col xl>
            <div className="music-headline mb-4 mb-xxl-5">
              <img src={img27} alt="" />
              <div>
                <label>New Album</label>
                <h2>Romantic Piano Hits</h2>
                <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                <Link to="" className="btn btn-icon btn-outline-white"><i className="ri-play-line"></i></Link>
              </div>
            </div>

            <div className="main-label-group mb-3">
              <label>Trending Album</label>
              <Link to="">See All</Link>
            </div>

            <div className="row-wrapper mb-4 mb-xxl-5">
              <Row className="g-2 g-lg-3">
                {[
                  {
                    "img": img28,
                    "title": "Guitar Soundtrack",
                    "text": "A calm and relaxing guitar soundtrack.",
                    "listeners": "10,323"
                  }, {
                    "img": img29,
                    "title": "Country Hits List",
                    "text": "A country album celebrating the best music.",
                    "listeners": "9,998"
                  }, {
                    "img": img30,
                    "title": "Rosse Best Hits",
                    "text": "All the greatest hits from Rosse McGeorge.",
                    "listeners": "7,004"
                  }, {
                    "img": img31,
                    "title": "All Greatest Hits",
                    "text": "All of Lea's greatest hits from the 19th century.",
                    "listeners": "6,985"
                  }
                ].map((album, index) => (
                  <Col key={index}>
                    <div className="music-item">
                      <Link to="" className="music-thumb mb-3"><img src={album.img} alt="" className="img-fluid" /></Link>
                      <h6 className="music-title"><Link to="">{album.title}</Link></h6>
                      <p className="music-text">{album.text}</p>
                      <span>{album.listeners} Listeners</span>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>

            <div className="main-label-group mb-3">
              <label>Recently Played</label>
              <Link to="">See All</Link>
            </div>

            <Row className="row-cols-auto g-2 mb-4 mb-xxl-5">
              <Col>
                <Card className="card-album">
                  <Card.Body className="p-3">
                    <Row className="g-1 mb-2">
                      <Col xs="3" md="6"><img src={img19} className="img-fluid" alt="" /></Col>
                      <Col xs="3" md="6"><img src={img32} className="img-fluid" alt="" /></Col>
                      <Col xs="3" md="6"><img src={img31} className="img-fluid" alt="" /></Col>
                      <Col xs="3" md="6"><img src={img33} className="img-fluid" alt="" /></Col>
                    </Row>
                    <label>Playlist</label>
                    <h6 className="music-title"><Link to="">The Greatest Hits</Link></h6>
                    <span className="music-text-sm">56 Songs - 2 hours 3 minutes</span>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="12" sm>
                <Table className="table-music mb-0">
                  <tbody>
                    {[
                      {
                        "img": img29,
                        "title": "My Love",
                        "artist": "Westlife",
                        "time": "02:33"
                      }, {
                        "img": img30,
                        "title": "Beautiful In White",
                        "artist": "Sam Milby",
                        "time": "03:02"
                      }, {
                        "img": img31,
                        "title": "Time After Time",
                        "artist": "Cyndi Lauper",
                        "time": "04:16"
                      }, {
                        "img": img32,
                        "title": "When I Was Your Man",
                        "artist": "Bruno Mars",
                        "time": "02:58"
                      }, {
                        "img": img33,
                        "title": "A Thousand Miles",
                        "artist": "Vanessa Carlton",
                        "time": "03:18"
                      }
                    ].map((music, index) => (
                      <tr key={index}>
                        <td className="w-5">{index + 1}</td>
                        <td className="w-75">
                          <div className="media-music">
                            <Link to="" className="media-img"><img src={music.img} alt="" /></Link>
                            <div className="media-body">
                              <h6><Link to="">{music.title}</Link></h6>
                              <span>{music.artist}</span>
                            </div>
                          </div>
                        </td>
                        <td className="w-15"><span className="time">{music.time}</span></td>
                        <td className="w-5">
                          <Link to="" className="dropdown-link"><i className="ri-more-2-fill"></i></Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>

            <div className="main-label-group mb-3">
              <label>Popular Artists</label>
              <Link to="">See All</Link>
            </div>

            <div className="row-wrapper">
              <Row className="g-2 g-lg-3">
                {[
                  {
                    "img": img37,
                    "name": "Angeline Quinto",
                    "followers": "210,000"
                  }, {
                    "img": img36,
                    "name": "Sarah Geronimo",
                    "followers": "198,540"
                  }, {
                    "img": img34,
                    "name": "Sam Milby",
                    "followers": "195,050"
                  }, {
                    "img": img35,
                    "name": "Kath McPhee",
                    "followers": "192,902"
                  }, {
                    "img": img28,
                    "name": "Brownbuds",
                    "followers": "192,000"
                  }
                ].map((artist, index) => (
                  <Col key={index}>
                    <div className="music-item">
                      <Link to="" className="music-thumb mb-3"><img src={artist.img} alt="" className="img-fluid" /></Link>
                      <h6 className="music-title"><Link to="">{artist.name}</Link></h6>
                      <span>{artist.followers} Followers</span>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>

          </Col>
          <Col>
            <div className="sidebar-right">
              <h5 className="section-title mb-3">Your Library</h5>
              <Nav className="nav-classic">
                {[
                  {
                    "icon": "ri-star-line",
                    "label": "Liked Songs",
                    "count": 134
                  }, {
                    "icon": "ri-music-2-line",
                    "label": "Discover",
                    "count": ""
                  }, {
                    "icon": "ri-speaker-line",
                    "label": "New Releases",
                    "count": ""
                  }, {
                    "icon": "ri-radio-2-line",
                    "label": "Podcasts",
                    "count": ""
                  }, {
                    "icon": "ri-user-voice-line",
                    "label": "Artists",
                    "count": 15
                  }, {
                    "icon": "ri-disc-line",
                    "label": "Albums",
                    "count": 28
                  }
                ].map((menu, index) => (
                  <Nav.Link href="#" key={index}><i className={menu.icon}></i><span>{menu.label}</span> <span className="badge">{menu.count}</span></Nav.Link>
                ))}
              </Nav>

              <div className="mb-4 mb-xxl-5"></div>

              <h5 className="section-title mb-3">Playlists</h5>
              <Nav className="nav-classic">
                {[
                  {
                    "label": "Favorite Tunes",
                    "count": 9
                  }, {
                    "label": "Light Rock",
                    "count": 10
                  }, {
                    "label": "Mood Booster",
                    "count": 23
                  }, {
                    "label": "Positive Vibes",
                    "count": 12
                  }, {
                    "label": "Rock Ballad",
                    "count": 14
                  }, {
                    "label": "Road Trip",
                    "count": 28
                  }, {
                    "label": "Scenic Route",
                    "count": 47
                  }, {
                    "label": "Today's Top Hits",
                    "count": 20
                  }, {
                    "label": "Top Tracks in Kids",
                    "count": 21
                  }, {
                    "label": "Weekend Hangouts",
                    "count": 58
                  }
                ].map((playlist, index) => (
                  <Nav.Link href="" key={index}><i className="ri-play-list-line"></i><span>{playlist.label}</span> <span className="badge">{playlist.count}</span></Nav.Link>
                ))}
              </Nav>

              <div className="mt-3 fs-sm"><Link to="">Show more (18)</Link></div>

              <div className="mb-4 mb-xxl-5"></div>

              <h5 className="section-title mb-3">Live Podcasts</h5>
              {[
                {
                  "img": img38,
                  "title": "Pray The Rosary",
                  "desc": "Your daily holy rosary companion..."
                }, {
                  "img": img39,
                  "title": "Romantic Podcast",
                  "desc": "Lorem ipsum dolor sit amet consec tetur adipis..."
                }, {
                  "img": img40,
                  "title": "Tambalan Podcast",
                  "desc": "Sint occaecati cupiditate non provident simi..."
                }, {
                  "img": img41,
                  "title": "All About Life",
                  "desc": "Temporibus autem quibusdam et aut officiis..."
                }, {
                  "img": img42,
                  "title": "Fitness Podcast",
                  "desc": "Debitis aut rerum neces sitatibus saepe eveniet..."
                }
              ].map((podcast, index) => (
                <div key={index} className="media-music">
                  <Link to="" className="media-img"><img src={podcast.img} alt="" /></Link>
                  <div className="media-body">
                    <h6><Link to="">{podcast.title}</Link></h6>
                    <span>{podcast.desc}</span>
                  </div>
                </div>
              ))}

              <div className="mt-3 fs-sm">
                <Link to="">Show more (5)</Link>
              </div>
            </div>
          </Col>
        </Row>

        <div className="music-player mt-4 mt-xxl-5">
          <div className="media-music">
            <Link to="" className="media-img"><img src={img42} alt="" /></Link>
            <div className="media-body">
              <h6><Link to="">One Thing Remains - Live</Link></h6>
              <span>Passion, Kristian Stanfill</span>
            </div>
          </div>

          <div className="flex-fill ms-2 ms-sm-3 mg-lg-4">
            <div className="music-range">
              <span>1:24</span>
              <ProgressBar now={25} />
              <span>05:10</span>
            </div>
            <div className="d-flex align-items-center">
              <Nav className="nav-player flex-fill">
                <Nav.Link href=""><i className="ri-repeat-line"></i></Nav.Link>
                <Nav.Link href="" className="me-auto"><i className="ri-shuffle-line"></i></Nav.Link>
                <Nav.Link href="" className="lg"><i className="ri-skip-back-line"></i></Nav.Link>
                <Nav.Link href="" className="lg play"><div><i className="ri-play-fill"></i></div></Nav.Link>
                <Nav.Link href="" className="lg"><i className="ri-skip-forward-line"></i></Nav.Link>
                <Nav.Link href="" className="ms-auto"><i className="ri-order-play-line"></i></Nav.Link>
                <Nav.Link href=""><i className="ri-cast-line"></i></Nav.Link>
              </Nav>
              <div className="music-volume">
                <Link to=""><i className="ri-volume-up-line"></i></Link>
                <ProgressBar now={75} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}