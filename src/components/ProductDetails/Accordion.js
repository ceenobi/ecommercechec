import { Accordion } from 'react-bootstrap'
import { useState } from 'react'
import styled from 'styled-components'

export default function AccordionView() {
  const [items] = useState([
    {
      heading: 'PACKAGING AND CARE',
      content:
        'Ownatek products are packaged with carefully selected materials. Please handle with care for longer product life.',
      id: 1,
    },
    {
      heading: 'SHIPPING AND DELIVERY',
      content:
        ' We offer free shipping on selected items within the Nigeria. At checkout you can select different delivery methods and view the prices per method. With our standard delivery method within Nigeria, your order is usually delivered the next working day when placed before 22:00. After you have placed your order, you will receive a tracking number so that you can track your package and view the planned delivery time. Additional information is available during the checkout process or on the FAQs Section. ',
      id: 2,
    },
    {
      heading: 'RETURN POLICY',
      content:
        ' Free return within 10 days for Official Store items and 7 days for other eligible items. ',
      id: 3,
    },
  ])
  return (
    <AccordionWrapper>
      <Accordion flush>
        {items.map((item) => (
          <Accordion.Item key={item.id} eventKey={item.id}>
            <Accordion.Header className='text-secondary border-top'>{item.heading}</Accordion.Header>
            <Accordion.Body>{item.content}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </AccordionWrapper>
  )
}

const AccordionWrapper = styled.div`
  .accordion-body {
    font-size: 0.8em;
    font-family: 'Noto Sans Mono', sans-serif;
  }
  background: var(--lightNeon) !important;
`
