

import React, { useState, useEffect } from 'react';
import HeaderMobile from "../../layouts/HeaderMobile"
import { Col, Row, Form, Nav, Card, Button, Table } from "react-bootstrap";

import mainservice from "../../services/mainservice";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { data } from 'jquery';


function CompanyRegistraton() {
    const navigate = useNavigate();
    const active = useSelector((state) => state.loginedUser.role);
    console.log(active, "owner==ano");

    const RegistrationChecker = (params) => {
        if (params == "owner") {
            navigate('/pages/signin2')
        }
    }

    useEffect(() => {
        RegistrationChecker(active)
    }, []);


    // dynamic tabs state
    const [activeTab, setActiveTab] = useState('1')
    const [form, setForm] = useState({});
    const [error, setError] = useState(false)


    const loginuser = useSelector((state) => state.loginedUser.id)
    function handleTabs(no) {
        setActiveTab(no)
    }
    document.body.classList.remove("sidebar-show");

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,

        });
        console.log(form);
    };
    async function RegsiterCompany(form) {
        console.log(form);
        const res = await mainservice.RegisterCompany(form)
        if (res.data != null) {
            console.log("Company Registered");
            const data = { Companyid: res.data._id, userid: loginuser }
            const res2 = await mainservice.InitializeCompany(loginuser, data)
            if (res2.data != null) {
                const token = res2.data
                console.log("Company Registration in profile also updated");
                localStorage.setItem("user-token", JSON.stringify(token));
                // window.location.reload(false);
                dashboardSetup(res.data._id)
            }
            else {
                console.log(res2.message);
            }
        }
        else {
            console.log(res.message);
        }
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        RegsiterCompany(form);
    }

    const dashboardSetup = async (id) => {
        const data = {
            companyId: id
        }

        // CRM

        const customer = await mainservice.createCustomerCollection(data)
        if (customer.data != null) {
            console.log(customer.data._id)
        }
        else {
            console.log("error occured in creating customerCollection");
            setError(true)
        }
        
        // EMPLOYEE

        const employee = await mainservice.createEmployeeCollection(data)
        if(employee.data != null) {
            console.log(employee.data._id)
        }
        else{
            console.log("error occured in creating employeeCollection");
            setError(true)
        }

        // Inventory

        const inventory = await mainservice.createInventorymanagementCollection(data)
        if(inventory.data != null) {
            console.log(inventory.data._id)
        }
        else{
            console.log("error occured in creating inventoryCollection");
            setError(true)
        }

        // PRJ

        const PRJ = await mainservice.createPrjmanagerCollection(data)
        if(PRJ.data != null) {
            console.log(PRJ.data._id)
        }
        else{
            console.log("error occured in creating PRJCollection");
            setError(true)
        }

        // Product

        const product = await mainservice.createProductCollection(data)
        if(product.data != null) {
            console.log(product.data._id)
        }
        else{
            console.log("error occured in creating productCollection");
            setError(true)
        }

        // Purchase

        const purchase = await mainservice.createPurchaseCollection(data)
        if(purchase.data != null) {
            console.log(purchase.data._id)
        }
        else{
            console.log("error occured in creating purchaseCollection");
            setError(true)
        }

        // RFQ

        const purchaseitem = await mainservice.createPurchaseitemCollection(data)
        if(purchaseitem.data != null) {
            console.log(purchaseitem.data._id)
        }
        else{
            console.log("error occured in creating purchaseitemCollection");
            setError(true)
        }

        const purchaseorder = await mainservice.createPurchaseorderCollection(data)
        if(purchaseorder.data != null) {
            console.log(purchaseorder.data._id)
        }
        else{
            console.log("error occured in creating purchaseorderCollection");
            setError(true)
        }

        const RFQ = await mainservice.createRFQCollection(data)
        if(RFQ.data != null) {
            console.log(RFQ.data._id)
        }
        else{
            console.log("error occured in creating RFQCollection");
            setError(true)
        }

        // Sales

        const invoice = await mainservice.createInvoiceCollection(data)
        if(invoice.data != null) {
            console.log(invoice.data._id)
        }
        else{
            console.log("error occured in creating invoiceCollection");
            setError(true)
        }

        const sales = await mainservice.createSalesCollection(data)
        if(sales.data != null) {
            console.log(sales.data._id)
        }
        else{
            console.log("error occured in creating salesCollection");
            setError(true)
        }

        if(error == false){
            const index ={
                CompanyID : id,
                CrmID : customer.data._id,
                EmployeeID : employee.data._id,
                Inventory : inventory.data._id,
                PRJ : PRJ.data._id,
                ProductID : product.data._id,
                PurchaseID : purchase.data._id,
                PurchaseorderID : purchaseorder.data._id,
                PurchaseitemID : purchaseitem.data._id,
                RFQID : RFQ.data._id,
                InvoiceID : invoice.data._id,
                SalesID :sales.data._id
            }

            PostIndex(index, id)
        }
    }

    const PostIndex = async (data, id) => {
        const res = await mainservice.Index(data)
        if (res.data != null) {
            const index = {
                IndexId: res.data._id
            }
            const res2 = await mainservice.AddIndex(id,index)
            if (res2.data != null) {
                console.log("index added to company profile");
            } else {
                console.log(res2.message);
            }
            console.log("index created", res.data);

       window.location.reload(false);

        }
    }

    return (
        <React.Fragment>
            {/* <HeaderMobile /> */}
            <div className="main p-4 p-lg-5">
                <h2 className="main-title">Company Registration</h2>

                {/* form switcging */}
                <Nav className="nav-line mb-4">
                    <Nav.Link className={activeTab === '1' ? "active" : ''} onClick={() => handleTabs('1')}>General</Nav.Link>
                    <Nav.Link className={activeTab === '2' ? "active" : ''} onClick={() => handleTabs('2')}>Contact Information</Nav.Link>
                    <Nav.Link className={activeTab === '3' ? "active" : ''} onClick={() => handleTabs('3')}>Language &amp; Region</Nav.Link>
                    <Nav.Link className={activeTab === '4' ? "active" : ''} onClick={() => handleTabs('4')}>Accessibility</Nav.Link>
                    <Nav.Link className={activeTab === '5' ? "active" : ''} onClick={() => handleTabs('5')}>Advanced</Nav.Link>
                </Nav>

                {/* dynamic company registaton from according to nav */}
                {
                    activeTab === '1' && (
                        <Card className="card-settings">
                            <Card.Header>
                                <Card.Title>Company Information</Card.Title>
                                <Card.Text>Please provide the following details about your company.</Card.Text>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div className="setting-item">
                                    <Row className="g-2 align-items-center">
                                        <Col md="5">
                                            <h6>Company Name</h6>
                                            <p>Please enter the name of your company as registered with the relevant authorities.</p>
                                        </Col>
                                        <Col md>
                                            <Form.Control name='CompanyName' value={form.CompanyName} type="text" placeholder="Enter company name" onChange={onChangeHandler} />
                                        </Col>
                                    </Row>
                                </div>

                                <div className="setting-item">
                                    <Row className="g-2 align-items-center">
                                        <Col md="5">
                                            <h6>Tag Line</h6>
                                            <p>Enter your company's tagline.</p>
                                        </Col>
                                        <Col md>
                                            <Form.Control name='TagLine' value={form.TagLine} type="text" placeholder="Tagline" onChange={onChangeHandler} />
                                        </Col>
                                    </Row>
                                </div>


                                <div className="setting-item">
                                    <Row className="g-2 align-items-center">
                                        <Col md="5">
                                            <h6>Company Logo</h6>
                                            <p> Upload your company logo (PNG, JPEG, or SVG)</p>
                                        </Col>
                                        <Col md>
                                            <Form.Group controlId="formFile" className="mb-3">
                                                <Form.Control type="file" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </div>


                                <div className="setting-item">
                                    <Row className="g-2">
                                        <Col md="5">
                                            <h6>Business Entity Type</h6>
                                            <p>'(LLC)', 'Corporation', 'Partnership', or 'Sole Proprietorship</p>
                                        </Col>
                                        <Col md>
                                            <Form.Select name='EntityType' value={form.EntityType} aria-label="Default select example mt-1" onChange={onChangeHandler}>
                                                <option>Company Type</option>
                                                <option value="1">Limited Liability Company</option>
                                                <option value="2">Corporation</option>
                                                <option value="3">Partnership</option>
                                                <option value="4">Sole Proprietorship</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="setting-item">
                                    <Row className="g-2">
                                        <Col md="5">
                                            <h6>Business Entity Type</h6>
                                            <p>'(LLC)', 'Corporation', 'Partnership', or 'Sole Proprietorship</p>
                                        </Col>
                                        <Col md>
                                            <Form.Select name='Industry' value={form.Industry} aria-label="Default select example mt-1" onChange={onChangeHandler}>
                                                <option>Company Type</option>
                                                <option value="1">Limited Liability Company</option>
                                                <option value="2">Corporation</option>
                                                <option value="3">Partnership</option>
                                                <option value="4">Sole Proprietorship</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="setting-item">
                                    <Row className="g-2 align-items-center">
                                        <Col md="5">
                                            <h6>Number of Employees</h6>
                                            <p>Please enter the total number of employees currently working in your company, including both full-time and part-time staff.</p>
                                        </Col>
                                        <Col md>
                                            <Form.Control type="number" name='NoOFEmployee' value={form.NoOFEmployee} placeholder="eg : 10, 100, 1000" onChange={onChangeHandler} />
                                        </Col>
                                    </Row>
                                </div>
                                <div className="setting-item">
                                    <Row className="g-2 align-items-center">
                                        <Col md="5">
                                            <h6>Your Designation</h6>
                                            <p>Please enter your current role or designation within the company, such as 'CEO', 'Manager', 'Team Leader', or 'Employee'.</p>
                                        </Col>
                                        <Col md>
                                            <Form.Control type="text" name='YourDesignation' value={form.YourDesignation} placeholder="eg: CEO, CFO, Manager" onChange={onChangeHandler} />
                                        </Col>
                                    </Row>
                                </div>


                                <div className="setting-item">
                                    <Row className="g-2 align-items-center">
                                        <Col md="5">
                                            <h6>Company Description</h6>
                                            <p> Please provide a brief description of your company. This should include information about what your company does, its mission, vision, and values, as well as any unique features</p>
                                        </Col>
                                        <Col md>
                                            <Form.Control name='CompanyDescription' as="textarea" value={form.CompanyDescription} id="exampleFormControlTextarea1" rows="3" placeholder="description.." onChange={onChangeHandler}></Form.Control>
                                        </Col>
                                    </Row>



                                    <div className="d-flex justify-content-end mb-2 mt-2">
                                        <Button variant="primary" onClick={() => handleTabs('2')}>Next</Button>
                                    </div>
                                </div>


                            </Card.Body>
                        </Card>
                    )
                }

                {/* tab 2 */}
                {
                    activeTab === '2' && (
                        <Card className="card-settings">
                            <Card.Header>
                                <Card.Title>Contact Information</Card.Title>
                                <Card.Text> Please provide your company's contact information below.</Card.Text>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div className="setting-item">
                                    <Row className="g-2 align-items-center">
                                        <Col md="5">
                                            <h6>Company Email</h6>
                                            <p>This email address will be used for communication with your customers, suppliers, and other stakeholders.</p>
                                        </Col>
                                        <Col md>
                                            <Form.Control name='Email' value={form.Email} type="text" placeholder="seboin@gmail.com" onChange={onChangeHandler} />
                                        </Col>
                                    </Row>
                                </div>
                                <div className="setting-item">
                                    <Row className="g-2">
                                        <Col md="5">
                                            <h6>Company Phone</h6>
                                            <p>This phone number will be used for communication with your customers, suppliers, and other stakeholders.</p>
                                        </Col>
                                        <Col md>
                                            <Form.Control name='PhoneNo' value={form.PhoneNo} type="tel" placeholder="81-390-31770" onChange={onChangeHandler} />
                                        </Col>
                                    </Row>
                                </div>
                                <div className="setting-item">
                                    <Row className="g-2 align-items-center">
                                        <Col md="5">
                                            <h6>Company Address</h6>
                                            <p>Include your street address, city, state/province, and postal/zip code. Ensure that the address you provide is accurate and up-to-date.</p>
                                        </Col>
                                        <Col md>
                                            <Form.Control name='Address' as="textarea" value={form.Address} id="exampleFormControlTextarea1" rows="3" placeholder="" onChange={onChangeHandler}></Form.Control>
                                        </Col>
                                    </Row>


                                    <div className="d-flex justify-content-end mb-2 mt-2">
                                        <Button onClick={onSubmitHandler} variant="primary">Submit</Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    )
                }

                {/* tab3 */}
                {
                    activeTab === '3' && (
                        <Card className="card-settings">
                            <Card.Header>
                                <Card.Title>Tab 3</Card.Title>
                                <Card.Text>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</Card.Text>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div className="setting-item">
                                    <Row className="g-2 align-items-center">
                                        <Col md="5">
                                            <h6>Company Name</h6>
                                            <p>Neque porro quisquam est qui dolorem.</p>
                                        </Col>
                                        <Col md>
                                            <Form.Control type="text" placeholder="Enter company name" />
                                        </Col>
                                    </Row>
                                </div>
                                <div className="setting-item">
                                    <Row className="g-2">
                                        <Col md="5">
                                            <h6>Tagline</h6>
                                            <p>Temporibus autem quibusdam et aut officiis.</p>
                                        </Col>
                                        <Col md>
                                            <Form.Control as="textarea" rows="3" placeholder="Enter tagline" />
                                        </Col>
                                    </Row>
                                </div>
                                <div className="setting-item">
                                    <Row className="g-2 align-items-center">
                                        <Col md="5">
                                            <h6>Company Logo</h6>
                                            <p>Temporibus autem quibusdam et aut officiis.</p>
                                        </Col>
                                        <Col md>
                                            <Button variant="" className="btn-white">Upload logo</Button>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="setting-item">
                                    <Row className="g-2 align-items-center">
                                        <Col md="5">
                                            <h6>Company Email</h6>
                                            <p>Neque porro quisquam est qui dolorem.</p>
                                        </Col>
                                        <Col md>
                                            <Form.Control type="text" placeholder="Enter email address" />
                                            <Form.Check type="checkbox" label="Blanditiis praesentium voluptatum deleniti atque." className="mt-3" />
                                            <Form.Check type="checkbox" label="Similique sunt in culpa qui officia." className="mt-1" />
                                        </Col>
                                    </Row>

                                    <div className="d-flex justify-content-end mb-2 mt-2">
                                        <Button variant="primary">Next</Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    )
                }

                {/* tab 4 */}
                {
                    activeTab === '4' && (
                        <Card className="card-settings">
                            <Card.Header>
                                <Card.Title>Tab 4</Card.Title>
                                <Card.Text>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</Card.Text>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div className="setting-item">
                                    <Row className="g-2 align-items-center">
                                        <Col md="5">
                                            <h6>Company Name</h6>
                                            <p>Neque porro quisquam est qui dolorem.</p>
                                        </Col>
                                        <Col md>
                                            <Form.Control type="text" placeholder="Enter company name" />
                                        </Col>
                                    </Row>
                                </div>
                                <div className="setting-item">
                                    <Row className="g-2">
                                        <Col md="5">
                                            <h6>Tagline</h6>
                                            <p>Temporibus autem quibusdam et aut officiis.</p>
                                        </Col>
                                        <Col md>
                                            <Form.Control as="textarea" rows="3" placeholder="Enter tagline" />
                                        </Col>
                                    </Row>
                                </div>
                                <div className="setting-item">
                                    <Row className="g-2 align-items-center">
                                        <Col md="5">
                                            <h6>Company Logo</h6>
                                            <p>Temporibus autem quibusdam et aut officiis.</p>
                                        </Col>
                                        <Col md>
                                            <Button variant="" className="btn-white">Upload logo</Button>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="setting-item">
                                    <Row className="g-2 align-items-center">
                                        <Col md="5">
                                            <h6>Company Email</h6>
                                            <p>Neque porro quisquam est qui dolorem.</p>
                                        </Col>
                                        <Col md>
                                            <Form.Control type="text" placeholder="Enter email address" />
                                            <Form.Check type="checkbox" label="Blanditiis praesentium voluptatum deleniti atque." className="mt-3" />
                                            <Form.Check type="checkbox" label="Similique sunt in culpa qui officia." className="mt-1" />
                                        </Col>
                                    </Row>

                                    <div className="d-flex justify-content-end mb-2 mt-2">
                                        <Button variant="primary">Save</Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    )
                }
            </div>
        </React.Fragment>
    )
}

export default CompanyRegistraton