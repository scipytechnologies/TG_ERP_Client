import React, { useEffect, useState } from "react";
import Header from "../layouts/Header";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Button, Card, Col, Dropdown, Nav, ProgressBar, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FileManager() {
  useEffect(() => {
    document.body.classList.add('page-app');
    return () => {
      document.body.classList.remove('page-app');
    }
  }, []);

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Link
      to=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="dropdown-link"
    >
      {children}
    </Link>
  ));

  // toggle sidebar in mobile
  const [isSidebarShow, setSidebarShow] = useState(false);

  return (
    <React.Fragment>
      <Header />
      <div className={"main main-file-manager" + (isSidebarShow? " show" : "")}>
        <PerfectScrollbar className="file-sidebar">
          <div className="d-grid mb-4">
            <Button variant="primary" href="">New</Button>
          </div>

          <label className="sidebar-label mb-2">My Drive</label>
          <Nav className="nav-sidebar mb-4">
            <Nav.Link href="" className="active"><i className="ri-file-text-fill"></i> All Files</Nav.Link>
            <Nav.Link href=""><i className="ri-macbook-line"></i> My Devices</Nav.Link>
            <Nav.Link href=""><i className="ri-folder-history-line"></i> Recents</Nav.Link>
            <Nav.Link href=""><i className="ri-star-line"></i> Important</Nav.Link>
            <Nav.Link href=""><i className="ri-delete-bin-line"></i> Deleted Files</Nav.Link>
          </Nav>

          <label className="sidebar-label mb-2">File Library</label>
          <Nav className="nav-sidebar mb-4">
            <Nav.Link href=""><i className="ri-file-text-line"></i> Documents</Nav.Link>
            <Nav.Link href=""><i className="ri-image-line"></i> Images</Nav.Link>
            <Nav.Link href=""><i className="ri-live-line"></i> Videos</Nav.Link>
            <Nav.Link href=""><i className="ri-music-2-line"></i> Audio</Nav.Link>
            <Nav.Link href=""><i className="ri-file-zip-line"></i> Zip Files</Nav.Link>
          </Nav>

          <label className="sidebar-label mb-3">Storage Status</label>
          <div className="sidebar-storage mb-2">
            <i className="ri-database-line"></i>
            <div className="flex-fill mb-1 ms-2">
              <span className="storage-info">24.8GB used of 50GB</span>
              <ProgressBar now={50} />
            </div>
          </div>
          <small className="d-block mb-3">
            Get 2TB (2,000GB) of storage now and get 40% off. Offers ends soon. <Link href="">Learn more</Link>
          </small>

        </PerfectScrollbar>

        <PerfectScrollbar className="file-content p-3 p-lg-4">
          <div className="d-flex align-items-center mb-5">
            <Link href="" className="menu-file-manager" onClick={() => setSidebarShow(!isSidebarShow)}>
              <i className="ri-arrow-left-line"></i>
            </Link>
            <h5 className="mb-0 text-dark fw-semibold">All Files</h5>
            <Nav className="nav-icon ms-auto">
              <Nav.Link href=""><i className="ri-list-check-2"></i></Nav.Link>
              <Nav.Link href=""><i className="ri-information-line"></i></Nav.Link>
              <Nav.Link href=""><i className="ri-settings-3-line"></i></Nav.Link>
            </Nav>
          </div>

          <label className="d-block fs-sm text-secondary mb-3">Recently Accessed Files</label>
          <Row className="g-1 g-sm-2 g-xl-3 mb-5">
            {[
              {
                "bg": "danger",
                "icon": "ri-file-pdf-line",
                "name": "Medical Certificate.pdf",
                "size": "10.45kb",
                "access": "2 hours ago"
              }, {
                "bg": "primary",
                "icon": "ri-file-word-line",
                "name": "WorkContract.docx",
                "size": "22.67kb",
                "access": "5 hours ago"
              }, {
                "bg": "info",
                "icon": "ri-image-line",
                "name": "IMG_063037.jpg",
                "size": "4.1mb",
                "access": "6 hours ago"
              }, {
                "bg": "success",
                "icon": "ri-file-excel-line",
                "name": "Inventory.xls",
                "size": "965.1kb",
                "access": "6 hours ago"
              }, {
                "bg": "",
                "icon": "ri-file-zip-line",
                "name": "Backup102023.zip",
                "size": "2.31mb",
                "access": "8 hours ago"
              }
            ].map((file, index) => (
              <Col xs="6" sm="4" md="3" xl key={index}>
                <Card className="card-file">
                  <Dropdown align="end" className="dropdown-file">
                    <Dropdown.Toggle as={CustomToggle}>
                      <i className="ri-more-2-fill"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#" className="details"><i className="ri-information-line"></i> View Details</Dropdown.Item>
                      <Dropdown.Item href="#" className="important"><i className="ri-star-line"></i> Mark as Important</Dropdown.Item>
                      <Dropdown.Item href="#" className="share"><i className="ri-share-forward-line"></i> Share</Dropdown.Item>
                      <Dropdown.Item href="#" className="download"><i className="ri-download-2-line"></i> Download</Dropdown.Item>
                      <Dropdown.Item href="#" className="copy"><i className="ri-file-copy-line"></i> Copy to</Dropdown.Item>
                      <Dropdown.Item href="#" className="move"><i className="ri-folders-line"></i> Move to</Dropdown.Item>
                      <Dropdown.Item href="#" className="rename"><i className="ri-edit-2-line"></i> Rename</Dropdown.Item>
                      <Dropdown.Item href="#" className="delete"><i className="ri-delete-bin-line"></i> Delete</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <div className={"card-file-icon " + file.bg}>
                    <i className={file.icon}></i>
                  </div>
                  <Card.Body>
                    <h6><Link href="" className="link-02">{file.name}</Link></h6>
                    <span>{file.size}</span>
                  </Card.Body>
                  <Card.Footer>
                    <span className="d-none d-sm-inline">Last access: </span> {file.access}
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>

          <label className="d-block fs-sm text-secondary mb-3">Folders</label>
          <Row className="g-2 g-lg-3 mb-5">
            {[
              {
                "name": "Downloads",
                "files": 2,
                "size": "14.05MB"
              }, {
                "name": "Personal Stuff",
                "files": 8,
                "size": "76.3MB"
              }, {
                "name": "3D Objects",
                "files": 5,
                "size": "126.8MB"
              }, {
                "name": "Recordings",
                "files": 0
              }, {
                "name": "Support",
                "files": 1,
                "size": "268.1KB"
              }, {
                "name": "Cloud Files",
                "files": 23,
                "size": "199.1MB"
              }
            ].map((folder, index) => (
              <Col xs="6" md="4" xl="3" key={index}>
                <Card className="card-folder">
                  <Dropdown align="end" className="dropdown-file">
                    <Dropdown.Toggle as={CustomToggle}>
                      <i className="ri-more-2-fill"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#" className="details"><i className="ri-information-line"></i> View Details</Dropdown.Item>
                      <Dropdown.Item href="#" className="important"><i className="ri-star-line"></i> Mark as Important</Dropdown.Item>
                      <Dropdown.Item href="#" className="share"><i className="ri-share-forward-line"></i> Share</Dropdown.Item>
                      <Dropdown.Item href="#" className="download"><i className="ri-download-2-line"></i> Download</Dropdown.Item>
                      <Dropdown.Item href="#" className="copy"><i className="ri-file-copy-line"></i> Copy to</Dropdown.Item>
                      <Dropdown.Item href="#" className="move"><i className="ri-folders-line"></i> Move to</Dropdown.Item>
                      <Dropdown.Item href="#" className="rename"><i className="ri-edit-2-line"></i> Rename</Dropdown.Item>
                      <Dropdown.Item href="#" className="delete"><i className="ri-delete-bin-line"></i> Delete</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Card.Body>
                    <i className="ri-folder-2-line"></i>
                    <div className="card-content">
                      <h6><Link href="" className="link-02">{folder.name}</Link></h6>
                      <span>{folder.files} files{folder.size && (", " + folder.size)}</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Table className="table table-files" responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Last Modified</th>
                <th>File Size</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  "color": "primary",
                  "icon": "ri-folder-5-line",
                  "name": "Dashboard Concepts",
                  "date": "Aug 20, 2023",
                  "size": "21.5MB"
                }, {
                  "color": "primary",
                  "icon": "ri-folder-5-line",
                  "name": "Gallery",
                  "date": "Aug 19, 2023",
                  "size": "341.2MB"
                }, {
                  "color": "primary",
                  "icon": "ri-folder-5-line",
                  "name": "Receipts",
                  "date": "Aug 19, 2023",
                  "size": "1.9MB"
                }, {
                  "color": "",
                  "icon": "ri-file-zip-line",
                  "name": "Backups091022.zip",
                  "date": "Aug 10, 2023",
                  "size": "4.7MB"
                }, {
                  "color": "orange",
                  "icon": "ri-file-ppt-line",
                  "name": "Presentation.ppt",
                  "date": "Aug 10, 2023",
                  "size": "11.21MB"
                }, {
                  "color": "success",
                  "icon": "ri-file-excel-line",
                  "name": "Expenses091122.xls",
                  "date": "Sep 11, 2023",
                  "size": "7.38MB"
                }, {
                  "color": "",
                  "icon": "ri-image-2-line",
                  "name": "IMG_101022.jpg",
                  "date": "Sep 10, 2023",
                  "size": "1.26MB"
                }, {
                  "color": "",
                  "icon": "ri-image-2-line",
                  "name": "IMG_101122.jpg",
                  "date": "Sep 10, 2023",
                  "size": "1.83MB"
                }, {
                  "color": "danger",
                  "icon": "ri-file-pdf-line",
                  "name": "Documents001.pdf",
                  "date": "Sep 05, 2023",
                  "size": "876.1KB"
                }, {
                  "color": "danger",
                  "icon": "ri-file-pdf-line",
                  "name": "Geting_Started.pdf",
                  "date": "Aug 01, 2023",
                  "size": "112.4KB"
                }
              ].map((file, index) => (
                <tr key={index}>
                  <td>
                    <div className="media">
                      <div className={"media-icon " + file.color}><i className={file.icon}></i></div>
                      <h6 className="file-name"><Link href="">{file.name}</Link></h6>
                    </div>
                  </td>
                  <td>{file.date}</td>
                  <td>{file.size}</td>
                  <td>
                    <Dropdown align="end" className="dropdown-file">
                      <Dropdown.Toggle as={CustomToggle}>
                        <i className="ri-more-2-fill"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#" className="details"><i className="ri-information-line"></i> View Details</Dropdown.Item>
                        <Dropdown.Item href="#" className="important"><i className="ri-star-line"></i> Mark as Important</Dropdown.Item>
                        <Dropdown.Item href="#" className="share"><i className="ri-share-forward-line"></i> Share</Dropdown.Item>
                        <Dropdown.Item href="#" className="download"><i className="ri-download-2-line"></i> Download</Dropdown.Item>
                        <Dropdown.Item href="#" className="copy"><i className="ri-file-copy-line"></i> Copy to</Dropdown.Item>
                        <Dropdown.Item href="#" className="move"><i className="ri-folders-line"></i> Move to</Dropdown.Item>
                        <Dropdown.Item href="#" className="rename"><i className="ri-edit-2-line"></i> Rename</Dropdown.Item>
                        <Dropdown.Item href="#" className="delete"><i className="ri-delete-bin-line"></i> Delete</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

        </PerfectScrollbar>
      </div>
    </React.Fragment>
  )
}