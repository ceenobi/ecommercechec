import React from 'react'
import { ListGroup} from 'react-bootstrap'

export default function Review({ checkoutToken }) {
  return (
    <>
    <h5 className='fw-bold mt-3'>Order summary</h5>
      <ListGroup as='ol' className='mt-4 shadow'> 
        {checkoutToken.live.line_items.map((product) => (
          <ListGroup.Item key={product.id} as='li'
           className='d-flex justify-content-between align-items-start'>
            <div className="ms-2 me-auto">
              <h6 className='fw-bold'>{product.name}</h6>
              <p>{`Quantity: ${product.quantity}`}</p>
            </div>
            <h6>{product.line_total.formatted_with_symbol}</h6>
          </ListGroup.Item>
        ))}
        <ListGroup.Item className='d-flex justify-content-between align-items-start'>
          <h6 className='fw-bold'>Total Price</h6>
          <p>{checkoutToken.live.subtotal.formatted_with_symbol}</p>
        </ListGroup.Item>
      </ListGroup>
    </>
    
  )
}
