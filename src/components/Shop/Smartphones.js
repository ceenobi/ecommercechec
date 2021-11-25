import React from 'react'
import { JumboCover } from '../others/Jumbotron'
import Spinner from '../others/Spinner'
import ProductContainer from './ProductContainer'
import { Breadcrumb, Container, Row, Col } from 'react-bootstrap/'


export default function Smartwatch({products, isLoading}) {
    return (
      <>
        <JumboCover>
          <div className='jumboShop jumbotron-fluid p-5 border-top'>
            <div className='d-flex justify-content-center text-center align-items-center'>
              <div className='overlay'>
                <div className='px-4 text-center'>
                  <h1 className='mb-0 mt-lg-5'>WIDE RANGE OF DEVICES FOR YOU</h1>
                  <p>
                    We've got the right smatphone for you
                  </p>
                </div>
              </div>
            </div>
          </div>
        </JumboCover>
        <Container fluid className='bg-white'>
          <Breadcrumb className='mt-2'>
            <Breadcrumb.Item href='#'>SHOP</Breadcrumb.Item>
            <Breadcrumb.Item active>Smartphones</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
        <Container fluid>
          {isLoading && <Spinner />}
          <Row>
            {products.map((product) => (
              <Col lg={3} md={4} xs={6} sm={6} key={product.id} className='mb-1'>
                <ProductContainer product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      </>
    )
}
