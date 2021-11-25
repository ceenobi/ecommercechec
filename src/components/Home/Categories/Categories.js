import React from 'react'
import {Container, Row, Col} from 'react-bootstrap/'
import {CatWrapper} from './styles'
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade'


export default function Categories() {
    return (
      <CatWrapper>
        <Container fluid='md' className='pad py-5'>
          <Fade bottom duration={5000}>
            <h2 className='text-center'>Categories</h2>
            <Row className='mt-5'>
              <Col lg={4} md={4} xs={12} className='mx-auto'>
                <Link to='/'>
                  <img
                    src='https://res.cloudinary.com/ceenobi/image/upload/c_scale,h_500,w_400/v1627861197/Gadgets/glodi-miessi-MLs-YORva88-unsplash_m69h4v.jpg'
                    alt='product'
                    className='img-fluid mb-4'
                  />
                  <p className='text-center'>Smartphones</p>
                </Link>
              </Col>

              <Col lg={4} md={4} xs={12} className='mx-auto push-down'>
                <Link to='/' className='py-5'>
                  <img
                    src='https://res.cloudinary.com/ceenobi/image/upload/c_scale,h_500,w_400/v1627988999/Gadgets/omid-armin-7sOTCjI1-5I-unsplash_etczcm.jpg'
                    alt='product'
                    className='img-fluid mb-4'
                  />
                  <p className='text-center'>Earbuds</p>
                </Link>
              </Col>
              <Col lg={4} md={4} xs={12} className='mx-auto'>
                <Link to='/'>
                  <img
                    src='https://res.cloudinary.com/ceenobi/image/upload/c_scale,h_500,w_400/v1627861195/Gadgets/dseifert_200811_4139_0001.0_mzbc46.jpg'
                    alt='product'
                    className='img-fluid mb-4'
                  />
                  <p className='text-center'>Accessories</p>
                </Link>
              </Col>
            </Row>
          </Fade>
        </Container>
      </CatWrapper>
    )
}

