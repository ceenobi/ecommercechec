import React from 'react'
import {Row, Col, Image, Alert} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router'
import styled from 'styled-components'

export default function BagItems({item, onUpdateBagQty, onRemoveFromBag}) {
    const navigate = useNavigate()
    return (
      <>
        <Row className='border-bottom py-4'>
          <Col lg={4} xs={12} sm={12} md={''}>
            <div className='text-center mb-2'>
              <Link to={`/details/${item.product_id}`}>
                <Image
                  src={item.image.url}
                  alt={item.name}
                  style={{ width: '10rem', height: '10rem' }}
                />
              </Link>
            </div>
          </Col>
          <Col lg={4} xs={12} sm={12} md={''}>
            <div className=''>
              <h6 className='text-center text-lg-start'>{item.name}</h6>
              {item.quantity > 0 ? (
                <div className='text-center text-lg-start'>
                  <p className='mt-4 mb-0'>AVAILABLE FOR PURCHASE</p>
                  <p className='mb-0 text-muted text-wrap'>
                    <small>Estimated delivery in 24-48hrs.</small>
                  </p>
                </div>
              ) : (
                <Alert variant='danger'>out of stock</Alert>
              )}
              <BagItemWrap>
                <div className='d-flex justify-content-center justify-content-lg-start'>
                  <p
                    className='mt-4 remove'
                    onClick={() => onRemoveFromBag(item.id)}
                  >
                    Remove
                  </p>
                  <p
                    className='mt-4 mx-3 remove border-start border-dark px-2'
                    onClick={() => navigate(-2)}
                  >
                    Back
                  </p>
                </div>
              </BagItemWrap>
            </div>
          </Col>
          <Col lg={4} xs={12} sm={12} md={''}>
            <div className='d-flex justify-content-center'>
              <h6 className='mx-3 align-self-center'>Qty:</h6>
              <select
                aria-label='Default select quantity'
                onChange={(e) => onUpdateBagQty(item.id, e.target.value)}
                value={item.quantity}
              >
                {[...Array(10).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
              <h6 className='mx-3 align-self-center'>
                {item.price.formatted_with_symbol}
              </h6>
            </div>
          </Col>
        </Row>
      </>
    )
}
export const BagItemWrap = styled.div`
.remove:hover {
  color: var(--lightRed)!important;
  cursor: pointer!important;
}
`
