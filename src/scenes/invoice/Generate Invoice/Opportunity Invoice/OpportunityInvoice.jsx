import React, { useState, useRef } from 'react'
import Header from "../../../../layouts/Header";
import InvoiceHeader from '../header/Header'
import Footer from '../footer/Footer'
import { Card, Button } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print';

function OpportunityInvoice() {
    // to maintain dark and light mode
    const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
    const [skin, setSkin] = useState(currentSkin);
    const navigate = useNavigate()


    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })


    return (

        <>
            <Header onSkin={setSkin} />
            <div className="main main-app p-3 p-lg-4">
                <Card className="card-one" ref={componentRef}>
                    <InvoiceHeader />

                    <div className="border border-top-0 border-start-0 border-end-0">
                        <div className="container">
                            ss
                        </div>
                    </div>
                </Card>
                <Button onClick={handlePrint}>Print</Button>
            </div >
        </>
    )
}

export default OpportunityInvoice