import React, { useEffect } from 'react';
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState, useRef } from 'react';
import { Button, Card, Col, Row, Dropdown, Offcanvas, ButtonGroup, Table, Badge, Alert } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import { Grid } from "gridjs-react";
import mainservice from '../../services/mainservice';
import { _ } from "gridjs-react";
import Avatar from "../../components/Avatar";
import { useSelector, useDispatch } from 'react-redux';
import { setCustomerCount } from '../../store/crm';


function Customer() {
    // to maintain dark and light mode
    const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
    const [skin, setSkin] = useState(currentSkin);
    const navigate = useNavigate()
    const index = useSelector((state) => state.index)
    const dispatch = useDispatch()


    // axios get interceptor for table data
    const [data, setData] = useState([])
    async function customerDetails() {
        const res = await mainservice.customerList(index.CrmID);
        console.log(res.data.customers);
        // console.log('Customer Details ' + JSON.stringify(res))
        setData(res.data.customers)
        dispatch(setCustomerCount(res.data.customers.length))
    }
    useEffect(() => {
        customerDetails()
    }, []);

    // Grid js each row clicking funciton
    const [offCanvas, setOffCanvas] = useState(false)
    const [canvasData, setCanvasData] = useState([])
    const handleCanvas = (item) => {
        console.log(item);
        setOffCanvas(true)
        setCanvasData(item)
    };
    const handleCloseCanvas = () => {
        setOffCanvas(false)
        setCanvasData('')
    }


    // demo profile image link
    const imageLink = 'https://api.tgraderp.com/crm/customer/image/customer/8170dcba-23ad-4dca-af96-a7801a8c12f4-pro-avatar.png' 
    return (
        <>


            <Header onSkin={setSkin} />
            <div className="main main-app p-3 p-lg-4">
                <div className="d-md-flex align-items-center justify-content-between ">
                    <div>
                        <ol className="breadcrumb fs-sm mb-1">
                            <li className="breadcrumb-item"><Link to="/dashboard/home">Dashboard</Link></li>
                            <li className="breadcrumb-item"><Link to="/dashboard/crm">Customer</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Contacts</li>
                        </ol>
                        <h4 className="main-title mb-0">Customers</h4>
                        <p className="w-100 fs-sm text-secondary " >Manage all your customer's details</p>
                    </div>

                    <Button variant="primary" className="d-flex align-items-center gap-2" onClick={() => navigate('/dashboard/crm/addCrm')}>
                        <i className="ri-bar-chart-2-line fs-18 lh-1"></i>Add Customer<span className="d-none d-sm-inline"></span>
                    </Button>
                </div>

                <Card >
                    <Card.Body>
                        <Grid
                            data={data !== undefined ? data.map((item) => [
                                data.indexOf(item) + 1,
                                item.FirstName,
                                item.LastName,
                                item.Title,
                                _(
                                    <>
                                        <ButtonGroup>
                                            <Button size="sm" variant='white' onClick={() => handleCanvas(item)}><i className='ri-eye-line'></i></Button>
                                            <Button className='p-0' variant="white">


                                                <Dropdown drop="end">
                                                    <Dropdown.Toggle variant='white' size="sm" className='btn-no-outline'>
                                                        <i className='ri-more-2-fill' color="primary"></i>
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </Button>
                                        </ButtonGroup>

                                    </>

                                )
                            ])
                                : []
                            }
                            columns={[
                                {
                                    name: "Sl no",
                                    width: '9%'
                                },
                                {
                                    name: "First Name",
                                    width: '20%'
                                }, {
                                    name: "Last Name",
                                    width: '20%'
                                },
                                {
                                    name: "Title",
                                    width: '20%'
                                },
                                'Action']}
                            search={true}
                            pagination={true}
                            sort={true}
                            resizable={true}
                            className={{
                                table: 'table table-bordered mb-0',
                            }}
                        />

                    </Card.Body>
                </Card >
                {/* sidebar offcanvars */}
                <Offcanvas className="bg-light" show={offCanvas} onHide={handleCloseCanvas} placement="end" style={{ width: '600px' }}>
                    {/* <Offcanvas.Header closeButton>
                        <Offcanvas.Title>
                            <p className='mb-0'>Customer Details</p>
                        </Offcanvas.Title>
                    </Offcanvas.Header> */}
                    <Offcanvas.Body>

                        {/* canvas body */}
                        <div className="w-100 overflow-hidden">
                            {/* customer profile details */}
                            <div className='bg-white mb-2'>
                                <Table bordered style={{ overflow: 'hidden' }}>
                                    <tbody>
                                        <tr>
                                            <td colSpan={4}>
                                                <Row>
                                                    <Col xs="10">
                                                        <div className='d-flex align-items-start'>
                                                            <Avatar img={`https://api.tgraderp.com/crm/customer/image/${canvasData.Image}`} size="xl" status="online" />
                                                            <div className='ms-2 mt-2'>
                                                                <div className='d-flex align-items-center justify-content-between w-85'>
                                                                    <p className='fw-bolder mb-1'>Jorem Berline</p>
                                                                    <Badge bg="primary">New Customer</Badge>
                                                                </div>


                                                                <div className="d-flex mt-1">
                                                                    <p className='me-1  mb-0 fs_1'><span><i className='ri-message-3-line me-1' style={{ fontSize: '14px' }}></i></span>jorem@gmail.com</p>
                                                                    <p className='ms-4 mb-0 fs_1'><span><i className='ri-phone-line me-1' style={{ fontSize: '14px' }}></i></span>+91 8181237262</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>

                                                    <Col xs="2">
                                                        <ButtonGroup size="sm">
                                                            <Button variant='light'><i className='ri-message-3-line'></i>
                                                            </Button>
                                                            <Button variant='light'><i className='ri-phone-line'></i>
                                                            </Button>
                                                        </ButtonGroup>
                                                    </Col>
                                                </Row>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className='w-10'>
                                                <p className='mb-0 fs_2'>Lead owner</p>
                                                <p className='fw-bolder'>Esther Howard</p>
                                            </td>
                                            <td className='w-10'>
                                                <p className='mb-0 fs_2'>Company</p>
                                                <p className='fw-bolder'>Google</p>
                                            </td>
                                            <td className='w-10'>
                                                <p className='mb-0 fs_2'>Job Title</p>
                                                <p className='fw-bolder'>Content Writter</p>
                                            </td>
                                            <td className='w-10'>
                                                <p className='mb-0 fs_2'>Annual Revenuew</p>
                                                <p className='fw-bolder'>&#8377; 50000</p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td colSpan={2}>
                                                <div className="d-flex">
                                                    <p className='fs_1 mb-0'>Lead source</p>
                                                    <p className='fw-bolder fs_1 mb-0  ms-2'>Online Store</p>
                                                </div>
                                            </td>

                                            <td colSpan={2}>
                                                <div className="d-flex mb-0">
                                                    <p className='fs_1 mb-0'>Lead activity</p>
                                                    <p className='fw-bolder fs_1 mb-0 ms-2'>2 Jan 2020 at 10:00 AM</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>


                            {/* upcoming activites */}
                            <div className='mt-4 bg-white mb-2'>
                                <Table className='p-1' bordered>
                                    <tbody>
                                        <tr>
                                            <td colSpan={3}>
                                                <p className='fs-5 mb-0'>Upcoming Activity </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={3}>
                                                <p className='fs_1 fw-bolder'>Prepare quote for Jerome Bell</p>
                                                <div className="w-70">
                                                    <p className='fs_1'>She intreseted on our new product line and wants our very best price Please include a deatiled breakdown of costs</p>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className='w-20'>
                                                <p className='mb-0 fs_2'>Reminder</p>
                                                <p className='fw-bolder mb-0'>No reminder</p>
                                            </td>
                                            <td className='w-20'>
                                                <p className='mb-0 fs_2'>Task Prority</p>
                                                <p className='fw-bolder mb-0'>High</p>
                                            </td>
                                            <td className='w-20'>
                                                <p className='mb-0 fs_2'>Assigned to</p>
                                                <p className='fw-bolder mb-0'>Esther Howard</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>

                            {/* previous activities */}
                            <div className='mt-4 bg-white mb-2'>
                                <Table bordered>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p className='fs-5 mb-0'>Previous Activities</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='hide_scrollbar' style={{ maxHeight: '50vh', overflow: 'scroll' }}>
                                                    <ul className="events-list p-2">
                                                        {[
                                                            {
                                                                "active": true,
                                                                "date": {
                                                                    "day": "Sat",
                                                                    "num": "12"
                                                                },
                                                                "events": [
                                                                    {
                                                                        "time": "08:00am - 10:30am",
                                                                        "title": "Web Design Workshop",
                                                                        "text": "Duis aute irure dolor in repre hen derit in volup tate velit esse cillum."
                                                                    }
                                                                ]
                                                            },
                                                            {

                                                                "date": {
                                                                    "day": "Sat",
                                                                    "num": "11"
                                                                },
                                                                "events": [
                                                                    {
                                                                        "time": "08:00am - 10:30am",
                                                                        "title": "Golden Autumn Festival",
                                                                        "text": "Duis aute irure dolor in repre hen derit in volup tate velit esse cillum."
                                                                    }
                                                                ]
                                                            },
                                                            {

                                                                "date": {
                                                                    "day": "Sat",
                                                                    "num": "10"
                                                                },
                                                                "events": [
                                                                    {
                                                                        "time": "08:00am - 10:30am",
                                                                        "title": "Front-End Devs Meetup",
                                                                        "text": "Duis aute irure dolor in repre hen derit in volup tate velit esse cillum."
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "active": true,
                                                                "date": {
                                                                    "day": "Sat",
                                                                    "num": "09"
                                                                },
                                                                "events": [
                                                                    {
                                                                        "time": "08:00am - 10:30am",
                                                                        "title": "Web Design Workshop",
                                                                        "text": "Duis aute irure dolor in repre hen derit in volup tate velit esse cillum."
                                                                    }
                                                                ]
                                                            },
                                                            {

                                                                "date": {
                                                                    "day": "Sat",
                                                                    "num": "07"
                                                                },
                                                                "events": [
                                                                    {
                                                                        "time": "08:00am - 10:30am",
                                                                        "title": "5th Religious Conference",
                                                                        "text": "Duis aute irure dolor in repre hen derit in volup tate velit esse cillum."
                                                                    }
                                                                ]
                                                            },
                                                            {

                                                                "date": {
                                                                    "day": "Sat",
                                                                    "num": "04"
                                                                },
                                                                "events": [
                                                                    {
                                                                        "time": "08:00am - 10:30am",
                                                                        "title": "Web Design Workshop",
                                                                        "text": "Duis aute irure dolor in repre hen derit in volup tate velit esse cillum."
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "active": true,
                                                                "date": {
                                                                    "day": "Sat",
                                                                    "num": "03"
                                                                },
                                                                "events": [
                                                                    {
                                                                        "time": "08:00am - 10:30am",
                                                                        "title": "Golden Autumn Festival",
                                                                        "text": "Duis aute irure dolor in repre hen derit in volup tate velit esse cillum."
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "date": {
                                                                    "day": "Wed",
                                                                    "num": "02"
                                                                },
                                                                "events": [
                                                                    {
                                                                        "time": "08:00am - 11:30am",
                                                                        "title": "5th Religious Conference",
                                                                        "text": "Excep teur sint occae cat cupi datat non proident sunt in culpa qui."
                                                                    }, {
                                                                        "time": "1:30pm - 5:30pm",
                                                                        "title": "Church Workshop Events",
                                                                        "text": "Datat non proident sunt in culpa qui."
                                                                    }
                                                                ]
                                                            }, {
                                                                "date": {
                                                                    "day": "Thu",
                                                                    "num": "08"
                                                                },
                                                                "events": [
                                                                    {
                                                                        "time": "08:30am - 03:30pm",
                                                                        "title": "Front-End Devs Meetup",
                                                                        "text": "Sed ut perspi ciatis unde omnis iste natus error sit volup tatem."
                                                                    }
                                                                ]
                                                            }, {
                                                                "date": {
                                                                    "day": "Mon",
                                                                    "num": "23"
                                                                },
                                                                "events": [
                                                                    {
                                                                        "time": "09:00am - 05:30pm",
                                                                        "title": "Golden Autumn Festival"
                                                                    }
                                                                ]
                                                            }
                                                        ].map((item, index) => (
                                                            <li key={index} className={item.active ? "active" : ""}>
                                                                <div className="event-date">
                                                                    <small>{item.date.day}</small>
                                                                    <h5>{item.date.num}</h5>
                                                                </div>
                                                                <div className="events-body">
                                                                    {item.events.map((event, ind) => (
                                                                        <div key={ind} className="ev-item">
                                                                            <small>{event.time}</small>
                                                                            <p className='fs_2 text-primary fw-bolder'>{event.title}</p>
                                                                            {event.text && <p>{event.text}</p>}
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
                <Footer />
            </div >
        </>
    )
}

export default Customer