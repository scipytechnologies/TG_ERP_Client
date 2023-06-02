import React from 'react'
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { useState } from 'react';
import { Button, Card, Col, Nav, ProgressBar, Row } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

function Home() {
  // to maintain dark and light mode
  const currentSkin = (localStorage.getItem('skin-mode')) ? 'dark' : '';
  const [skin, setSkin] = useState(currentSkin);
  const navigate = useNavigate()
  const user = useSelector((state) => state.loginedUser)
  const company = useSelector((state) => state.company)


  return (
    <>
      <Header onSkin={setSkin} />
      <div className="main main-app p-3 p-lg-4">


        {/* analatics cards */}
        <Row className="g-3">
          <Col xl="12">
            <Card className="card-one flex-fill ht-100 bg-primary bg-gradient">
              <Card.Body className="overflow-hidden">
                <p className='fs-4 text-white'>hi,{user.firstName}, Welcome to {company.CompanyName}</p>  
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Footer />
      </div>
    </>
  )
}

export default Home