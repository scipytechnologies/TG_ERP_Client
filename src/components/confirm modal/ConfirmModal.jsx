import React from 'react'
import { Modal, Button, Row, Col } from 'react-bootstrap'
import toast from 'react-hot-toast';

function ConfirmModal(props) {
    const { type, show, setShow } = props;

    // demo function to invoke toast
    const InvokeToast = (msg) => {
        toast.success(msg)
        setTimeout(() => {
            setShow(false)
        }, 2000)
    }
    return (
        <>
            <Modal centered show={show} onHide={() => setShow(false)} animation={false}>
                <Modal.Body>
                    <div className='p-1'>

                        {/* delete */}
                        {
                            type === 'delete' &&
                            <Row>
                                <Col xs="2">
                                    <div className='helpdesk-icon text-white bg-danger me-2'>
                                        <i className="ri-error-warning-fill"></i>
                                    </div>
                                </Col>

                                <Col xs="10">
                                    <div className='p-1'>
                                        <p className='fs-4 mb-0'>Are you sure you want to delete ?</p>
                                        <p className='fs-6'>These changes are not reversible</p>
                                    </div>
                                </Col>

                                <Col xs="12" className='mt-3'>
                                    <div className="d-flex align-items-center justify-content-end">
                                        <Button onClick={() => setShow(false)}>Cancel</Button>
                                        <Button className='btn btn-danger ms-2' onClick={() => InvokeToast("Succesfully Deleted")}>Delete</Button>
                                    </div>
                                </Col>
                            </Row>
                        }

                        {/* warning */}
                        {
                            type === 'warning' &&
                            <Row>
                                <Col xs="2">
                                    <div className='helpdesk-icon text-white bg-warning me-2'>
                                        <i className="ri-error-warning-fill"></i>
                                    </div>
                                </Col>

                                <Col xs="10">
                                    <div className='p-1'>
                                        <p className='fs-4 mb-0'>Are you sure you want to update the details?</p>
                                        <p className='fs-6'>Updated details will overwrite the exisiting data</p>
                                    </div>
                                </Col>

                                <Col xs="12" className='mt-3'>
                                    <div className="d-flex align-items-center justify-content-end">
                                        <Button onClick={() => setShow(false)}>Cancel</Button>
                                        <Button className='btn btn-warning ms-2' onClick={() => InvokeToast("Successfully Updated")}>Continue</Button>
                                    </div>
                                </Col>
                            </Row>
                        }

                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ConfirmModal