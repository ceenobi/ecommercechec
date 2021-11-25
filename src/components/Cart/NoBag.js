import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import AccordionBag from './Accordion'

export default function NoBag() {
  return (
    <NoBagWrap>
      <Row className='px-4 justify-content-center mt-4'>
        <Col lg={7} md={7}>
          <h6 className='mt-lg-5 border-bottom border-dark'>YOUR SELECTIONS</h6>
          <div className='d-flex flex-column mb-4'>
            <h1>Shopping bag is empty.</h1>
            <Link to='/signin'>
            <Button variant='dark'className='mb-2'>SIGN IN</Button>
            </Link>
            <Link to='/'>
             <Button variant='dark'>CONTINUE SHOPPING</Button>
             </Link>
          </div>
        </Col>
        <Col lg={4} md={5}>
        <div className='backdrop py-4 px-3 mt-lg-5'>
         <h6 className='mt-4 border-bottom pb-4'>
          <i className='bi bi-truck mx-2'></i>SHIPPING DETAILS
          </h6>
          <AccordionBag />
          </div>
        </Col>
      </Row>
    </NoBagWrap>
  )
}
export const NoBagWrap = styled.div`
  padding-top: 7rem;
  .push-down {
    margin-top: 6rem;
  }
  .bi-bag-fill {
    font-size: 9rem !important;
  }
  .backdrop {
    background-color: white;
  }
  h1 {
    font-size: rem;
  }
  background: url('https://res.cloudinary.com/ceenobi/image/upload/v1636538781/Gadgets/brando-makes-branding-smTDI-z1rlY-unsplash_ypg2gp.jpg');
  background-size: cover;
  height: 700px;
  @media (min-width: 992px) {
    .bi-bag-fill {
      font-size: 15rem !important;
    }
  }
`
