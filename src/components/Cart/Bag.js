import { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Spinner from '../others/Spinner'
import { JumboCover } from '../others/Jumbotron'
import BagItems from './Bagtitems'
import AccordionBag from './Accordion'
import NoBag from './NoBag'
import NewsLink from './NewsLink'

export default function Bag({ bag,handleUpdateBagQty,handleRemoveFromBag,handleEmptyBag}) {
 
  const [showSpinner, setShowSpinner] = useState(true)
  
  const loading = () => {
    setTimeout(() => {
      setShowSpinner(false)
    }, 2000)
    if (showSpinner) {
      return <Spinner />
    }
    return <NoBag />
  }
  if (!bag.line_items || !bag.line_items.length) return loading()
 
  return (
    <>
      <JumboCover>
        <div className='jumboBag jumbotron-fluid p-5 border-top'>
          <div className='d-flex justify-content-center text-center align-items-center'>
            <div className='overlay'>
              <div className='p-3 text-center'>
                <h1 className='text mt-lg-5'>SHOPPING BAG</h1>
              </div>
            </div>
          </div>
        </div>
      </JumboCover>
      <Container fluid className='mt-4'>
        <BagWrapper>
          <Row className='py-5 px-2 mt-5 justify-content-center'>
            <Col lg={7} md={6}>
              <h6 className='mt-lg-5 border-bottom border-dark'>
                YOUR SELECTIONS
              </h6>
              {bag.line_items.map((item) => (
                <div className='mb-3' key={item.id}>
                  <BagItems
                    item={item}
                    onUpdateBagQty={handleUpdateBagQty}
                    onRemoveFromBag={handleRemoveFromBag}
                  />
                </div>
              ))}
            </Col>
            <Col lg={3} md={5}>
              <div className='backdrop py-2 px-3 mt-5'>
                <h6 className='mt-4'>ORDER SUMMARY</h6>
                <p className='border-bottom pb-2'>{bag.id}</p>
                <div className='d-flex justify-content-between'>
                  <p>Subtotal</p>
                  <p>{bag.subtotal.formatted_with_symbol}</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p>Total Items</p>
                  <p>{bag.total_items}</p>
                </div>
                <div className='d-flex justify-content-between'>
                  <p>Estimated Total</p>
                  <p>{bag.subtotal.formatted_with_symbol}</p>
                </div>
                <Link to='/checkout' className='d-grid gap-2 mb-2'>
                  <Button variant='dark'>CHECKOUT</Button>
                </Link>
                <div className='d-grid gap-2 border-bottom mb-4 pb-4'>
                  <Button variant='warning' onClick={handleEmptyBag}>
                    EMPTY BAG
                  </Button>
                </div>
                <h6>VIEW DETAILS</h6>
                <p>
                  <small>
                    Please review the contents of your shopping bag before
                    proceeding to checkout. You will be charged at the time of
                    purchase.
                  </small>
                </p>
              </div>
              <div className='backdrop py-2 px-4 mt-4'>
                <h6 className='mt-4 border-bottom pb-4'>
                  <i className='bi bi-truck mx-2'></i>SHIPPING DETAILS
                </h6>
                <AccordionBag />
              </div>
            </Col>
          </Row>
        </BagWrapper>
       <NewsLink/>
      </Container>
    </>
  )
}
export const BagWrapper = styled.div`
  background-color: var(--lightWhite);
  .backdrop {
    background-color: white;
  }
  .bi bi-truck {
    font-size: 15px;
  }

  a p:hover {
    text-decoration: underline !important;
    color: none !important;
  }
  @media (min-width: 992px) {
    p {
      font-size: 0.8rem;
    }
  }
`
