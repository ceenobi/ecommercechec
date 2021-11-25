import { Breadcrumb, Container, Row, Col} from 'react-bootstrap/'
import ProductContainer from './ProductContainer'
import { JumboCover } from '../others/Jumbotron'
import Spinner from '../others/Spinner'

export default function Samsung({ samsung, isLoading }) {
  return (
    <>
      <JumboCover bag>
        <div className='jumboBag jumbotron-fluid p-5 border-top'>
          <div className='d-flex justify-content-center text-center align-items-center'>
            <div className='overlay'>
              <div className='px-4 text-center'>
                <h1 className='mb-0 mt-lg-5'>WELCOME TO SAMSUNG STORE</h1>
                <p className=''>
                  Stand out from the crowd with our premium Galaxy devices
                </p>
              </div>
            </div>
          </div>
        </div>
      </JumboCover>
      <Container fluid className='bg-white'>
        <Breadcrumb className='mt-2'>
          <Breadcrumb.Item href='#'>SAMSUNG</Breadcrumb.Item>
          <Breadcrumb.Item active>Devices</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      <Container fluid>
       {isLoading && <Spinner />}
        <Row className='mx-lg-1'>
          {samsung.map((product) => (
            <Col xs={6} sm={6} md={4} lg={3} key={product.id} className='mb-1 px-1'>
              <ProductContainer product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}
