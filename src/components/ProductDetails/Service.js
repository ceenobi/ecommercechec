import { Container, Row, Col} from 'react-bootstrap/'
import styled from 'styled-components'

export default function Service() {
    return (
      <ServiceWrapper>
        <Container>
          <Row className='py-5'>
            <Col lg={3}>
              <div className='d-flex bg-dark py-3'>
                <i className='bi bi-truck mx-2' />
                <div className='d-flex flex-column'>
                  <h6 className='fw-bold'>Free delivery Worldwide</h6>
                  <p>We deliver anywhere and everywhere</p>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className='d-flex bg-dark py-3'>
                <i className='bi bi-cart-x mx-2' />
                <div className='d-flex flex-column'>
                  <h6 className='fw-bold'>Satisfied or Refunded</h6>
                  <p>We priortise keeping our customers happy</p>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className='d-flex bg-dark py-3'>
                <i className='bi bi-headset mx-2' />
                <div className='d-flex flex-column'>
                  <h6 className='fw-bold'>Top-notch support</h6>
                  <p>24/7, we are a phonecall or email away</p>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className='d-flex bg-dark py-3'>
                <i className='bi bi-credit-card-2-back mx-2' />
                <div className='d-flex flex-column'>
                  <h6 className='fw-bold'>Secure payments</h6>
                  <p>Safe, smooth and secured transactions</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </ServiceWrapper>
    )
}

const ServiceWrapper = styled.div`
  .bi {
    font-size: 40px;
  }
  color: var(--mainWhite);
`
