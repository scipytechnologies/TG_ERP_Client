import React from 'react'
import { Button, Col, Row } from "react-bootstrap";

function Header() {
  return (
    <div className="w-100">
      <div className="border border-top-0 border-start-0 border-end-0 border-4">
        <div className="container">
          <div className='d-flex align-items-center justify-content-between'>
            <div>
              {/* header logo */}
              <div className='d-flex justify-content-start align-items-center' style={{ height: '6rem', width: '30rem', overflow: 'hidden' }}>
                <img src="https://img.freepik.com/free-vector/flat-design-ac-logo-design_23-2149482027.jpg?size=626&ext=jpg" alt="" height="100%" />
                <p className="fs-2 ps-1 fw-bold">Company Name</p>
              </div>
            </div>

            <div>
              {/* header logo */}
              <p className='fs-1 text-end text-grey fw-light mt-2'>INVOICE</p>
              <p className="lh-sm text-end">
                <div className='fw-bold'>Lorem company</div>
                <div>156 ave Large house</div>
                <div>New York, US</div>
              </p>
              <p className='text-end'>+91 8322341340</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header