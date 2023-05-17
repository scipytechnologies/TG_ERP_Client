import React, { useEffect } from 'react';
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useState, useRef } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import { Grid } from "gridjs-react";
import { h } from "gridjs";
import mainservice from '../../services/mainservice';

function Customer() {
    // to maintain dark and light mode
    const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
    const [skin, setSkin] = useState(currentSkin);
    const navigate = useNavigate()

    // state for drop down of view more button
    const [showDropdown, setShowDropdown] = useState(false);
    const [dropdownItem, setDropdownItem] = useState(null);
    const handleCloseDropdown = () => {
        setShowDropdown(false);
    };

    // axios get interceptor for table data
    const [data, setData] = useState([])
    async function customerDetails() {
        const res = await mainservice.customerDetails();
        console.log('Customer Details ' + JSON.stringify(res))
        console.log(res)
        setData(res.data)
    }
    useEffect(() => {
        customerDetails()
    }, []);

    const handleButtonClick = (row) => {
        console.log(row);
    };

    const buttonRef = useRef();
    const handleViewMore = (row) => {
        // console.log(row);
        setDropdownItem(row);
        setShowDropdown((prev) => !prev ? true : false);
        const position = buttonRef?.current.getBoundingClientRect();
        // alert(position)
        console.log(position);
    };

    const dStyle = {
        position: 'absolute',
        zIndex: '50',
        // top: '50%',
        // right: '12%',
        top: buttonRef?.current?.getBoundingClientRect().top + buttonRef?.current?.clientHeight,
        left: 931.390625,

        height: '7rem',
        width: '7rem',
        borderRadius: '0.3rem',
        padding: '0.5rem',
        backgroundColor: 'white',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    }
    return (
        <>
            <Header onSkin={setSkin} />
            <div className="main main-app p-3 p-lg-4">
                <div className="d-md-flex align-items-center justify-content-between mb-4">
                    <div>
                        <ol className="breadcrumb fs-sm mb-1">
                            <li className="breadcrumb-item"><Link to="/dashboard/home">Dashboard</Link></li>
                            <li className="breadcrumb-item"><Link to="/dashboard/crm">CRM</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Customer List</li>
                        </ol>
                        <h4 className="main-title mb-0">Customer List</h4>
                    </div>
                </div>

                <Card>
                    <Card.Body>
                        <Grid
                            data={data !== undefined && data.map((item) => [
                                item.FirstName,
                                item.LastName,
                                h('div', {}, [
                                    h(
                                        'Button',
                                        {
                                            onClick: () => handleButtonClick(item),
                                            className: 'btn btn-outline-success ri-pencil-fill me-1 btn-sm',
                                        },

                                    ),
                                    h(
                                        'Button',
                                        {
                                            onClick: () => handleButtonClick(item),
                                            className: 'btn btn-outline-danger ri-delete-bin-6-line me-1 btn-sm',
                                        },

                                    ),
                                    h(
                                        'Button',
                                        {
                                            ref: buttonRef,
                                            onClick: () => handleViewMore(item),
                                            className: 'btn btn-outline-primary ri-more-fill me-1 btn-sm ',
                                        },

                                    ),
                                ]),
                            ])}
                            columns={['First Name', 'Last Name', 'Action']}
                            search={true}
                            pagination={true}
                            sort={true}
                            resizable={true}
                            className={{
                                table: 'table table-bordered mb-0',
                            }}
                        />
                        {/* view more dropdown
                        <Dropdown show={showDropdown} onClose={handleCloseDropdown}>
                            <Dropdown.Toggle variant="secondary">
                                Dropleft Button
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item>{dropdownItem && dropdownItem.name}</Dropdown.Item>
                                <Dropdown.Item>{dropdownItem && dropdownItem.email}</Dropdown.Item>
                                <Dropdown.Item>Something else</Dropdown.Item>
                            </Dropdown.Menu> */}
                        {/* </Dropdown> */}
                    </Card.Body>
                </Card>
                <Footer />
            </div >

            {
                showDropdown ?
                    <div style={dStyle} onClick={handleCloseDropdown}>
                        hello
                    </div>
                    : ''
            }
        </>
    )
}

export default Customer