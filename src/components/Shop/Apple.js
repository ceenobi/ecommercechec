import { JumboCover } from '../others/Jumbotron'
import React from 'react'
// import styled from 'styled-components'
// import { Link } from 'react-router-dom'
import { Breadcrumb, Container, Row, Col } from 'react-bootstrap/'
import Spinner from '../others/Spinner'
import ProductContainer from './ProductContainer'

export default function Apple({ apple, beats, isLoading}) {

  return (
        <>
          <JumboCover>
            <div className='jumbotron jumbotron-fluid p-5 border-top'>
              <div className='d-flex justify-content-center text-center align-items-center'>
                <div className='overlay'>
                  <div className='px-4 text-center'>
                    <h1 className='mt-lg-5 mb-0'>WELCOME TO APPLE STORE</h1>
                    <p className='lead'>
                      Stand out from the crowd with our premium apple devices
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </JumboCover>
          <Container fluid className='bg-white'>
            <Breadcrumb className='mt-2'>
              <Breadcrumb.Item href='#'>APPLE</Breadcrumb.Item>
              <Breadcrumb.Item active>Devices</Breadcrumb.Item>
            </Breadcrumb>
          </Container>
          <Container fluid>
           {isLoading && <Spinner />}
              <Row className='mx-lg-1'>
                {apple.map((product) => (
                  <Col xs={6} sm={6}md={4}lg={3}key={product.id} className='mb-1 px-1'>
                    <ProductContainer product={product} />
                  </Col>
                ))}
              </Row>
              {/* <Row>
                <Col xs={12} sm={12} md={12} lg={6}>
                  <div className='jumbotron jumbotron-fluid p-5 border-top'>
                    <div className='d-flex justify-content-center text-center align-items-center'>
                      <div className='overlay'>
                        <div className='p-3 text-center'>
                          <p className='fw-bold lead'>Flex to the Beats</p>
                          <Link to='/'>
                            <p className='th'>
                              SHOP THIS
                              <i className='bi bi-chevron-compact-right th'></i>
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row> */}
              <Row className='mt-4 mx-lg-1'>
                {beats.map((product) => (
                  <Col xs={6} sm={6} md={4} lg={3}key={product.id}className='mb-1 px-1'>
                    <ProductContainer product={product} />
                  </Col>
                ))}
              </Row>
          </Container>
        </>
  )
}

// const AppleWrap = styled.div`
//   .jumbotron {
//     background: url('https://res.cloudinary.com/ceenobi/image/upload/v1635782026/Gadgets/Zrzut-ekranu-2021-06-14-o-21.38.25_ow2rwm.jpg');
//     background-size: cover;
//     color: var(--mainWhite);
//     height: 400px;
//     position: relative;
//   }
//   .overlay {
//     position: absolute;
//     top: 40%;
//   }
//   h1,
 
//   a .th {
//     color: var(--mainWhite) !important;
//   }
//   @media (max-width: 992px) {
//     .jumbotron {
//       height: 200px;
//     }
//   }
// `
