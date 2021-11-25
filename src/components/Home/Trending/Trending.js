import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Trending() {
  return (
    <TrendWrap>
      <Container className='bg'>
        <h3 className='text-center px-4 borderBottom'>DISCOVER WHAT'S NEW</h3>
        <Row className='py-5 px-4'>
          <Col lg={4} className='mx-auto'>
            <div>
              <div className='text-center mt-5'>
                <Image
                  fluid
                  src='https://res.cloudinary.com/ceenobi/image/upload/v1635536292/Gadgets/shawn-fields-zsppCWsxJy0-unsplash_wf2uyc.jpg'
                  className='image'
                  alt='dealoftheweek'
                />
                <p className='mt-5'>Don't miss our deal of the week</p>
                <Link to='/'>
                  <p>
                    DISCOVER WEEKLY DEALS
                    <i className='bi bi-chevron-compact-right'></i>
                  </p>
                </Link>
              </div>
              <div className='text-center mt-5'>
                <Image
                  fluid
                  src='https://res.cloudinary.com/ceenobi/image/upload/v1635541888/Gadgets/lucrezia-carnelos-wQ9VuP_Njr4-unsplash_u72pgk.jpg'
                  className='image'
                  alt='dealoftheweek'
                />
                <p className='mt-5'>Clearance Sales</p>
                <Link to='/'>
                  <p className='text-uppercase'>
                    Everything must go
                    <i className='bi bi-chevron-compact-right'></i>
                  </p>
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={4} className='mx-auto'>
            <div className='text-center mt-5 hover-zoom'>
              <Image
                fluid
                src='https://res.cloudinary.com/ceenobi/image/upload/v1635542807/Gadgets/george-coletrain-JLEbZE1y3EA-unsplash_yaotbl.jpg'
                className='image'
                alt='dealoftheweek'
              />
              <p className='text-uppercase mt-5'>Ownatek Store</p>
              <Link to='/'>
                <p>
                  DISCOVER US<i className='bi-chevron-compact-right'></i>
                </p>
              </Link>
            </div>
          </Col>
          <Col lg={4} className='mx-auto'>
            <div>
              <div className='text-center mt-5'>
                <Image
                  fluid
                  src='https://res.cloudinary.com/ceenobi/image/upload/v1635547950/Gadgets/mael-balland-wcBFtctph_M-unsplash_nxl7jo.jpg'
                  className='image'
                  alt='dealoftheweek'
                />
                <p className='mt-5'>Follow you package as it arrives</p>
                <Link to='/'>
                  <p>
                    TRACK MY PACKAGE
                    <i className='bi bi-chevron-compact-right'></i>
                  </p>
                </Link>
              </div>
              <div className='text-center mt-5'>
                <Image
                  fluid
                  src='https://res.cloudinary.com/ceenobi/image/upload/v1635536292/Gadgets/shawn-fields-zsppCWsxJy0-unsplash_wf2uyc.jpg'
                  className='image'
                  alt='dealoftheweek'
                />
                <p className='mt-5'>Don't miss our deal of the week</p>
                <Link to='/'>
                  <p>
                    DISCOVER WEEKLY DEALS
                    <i className='bi bi-chevron-compact-right'></i>
                  </p>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </TrendWrap>
  )
}

const TrendWrap = styled.div`
  .image {
    width: 20rem;
  }
  .bg {
    background-color: var(--lightWhite);
    padding-top: 7rem;
  }
`
