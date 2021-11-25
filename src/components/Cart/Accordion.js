import React from 'react'
import { Accordion } from 'react-bootstrap'
import styled from 'styled-components'

export default function AccordionBag() {
  return (
    <AccordionWrapper>
      <Accordion flush defaultActiveKey='0'>
        <Accordion.Item eventKey='0'>
          <Accordion.Header> MAY WE HELP?</Accordion.Header>
          <Accordion.Body>
            <p>
              <i className='bi bi-telephone-fill mx-2'></i>08030000000
            </p>
            <p>
              <i className='bi bi-envelope-fill mx-2'></i>ownatek@anywhere.com
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>SHIPPING COST</Accordion.Header>
          <Accordion.Body>
            <div className='d-flex justify-content-between'>
              <p>Within State</p>
              <p>1500</p>
            </div>
            <div className='d-flex justify-content-between'>
              <p>Outside State</p>
              <p>3000</p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </AccordionWrapper>
  )
}
export const AccordionWrapper = styled.div`
  .accordion-body {
    font-size: 0.8em;
    font-family: 'Noto Sans Mono', sans-serif;
  }
  background: var(--lightNeon) !important;
  .bi bi-telephone-fill,
  .bi bi-envelope-fill {
    font-size: 15px;
  }
`
