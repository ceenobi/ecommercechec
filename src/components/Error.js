import { Container, Row, Col } from 'react-bootstrap'

export default function Error() {
  return (
    <Container>
      <Row className='mt-5'>
        <Col className='mx-auto text-center text-title text-uppercase py-5'>
          <h1 className='display-3 mt-5'>404</h1>
          <h1>error</h1>
          <h2>page not found!</h2>
          <h3>
            the requested URL does
            <span className='text-danger'> not exist.</span>
          </h3>
        </Col>
      </Row>
    </Container>
  )
}
