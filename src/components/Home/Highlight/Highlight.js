import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Row, Col, Image} from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { commerce } from '../../../lib/Commerce'
import Spinner from '../../others/Spinner'
import Slide from 'react-reveal/Slide'

const Highlight = () => {
  const [pixel, setPixel] = useState([])
  const [iphone, setIphone] = useState([])
  const [samultra, setSamultra] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchPixel = async () => {
    const { data } = await commerce.products.list({ query: 'pixel 6 pro' })
    setIsLoading(false)
    setPixel(data)
  }
  const fetchIphone = async () => {
    const { data } = await commerce.products.list({
      query: 'iphone 13 pro max',
    })
    setIsLoading(false)
    setIphone(data)
  }
  const fetchSamultra = async () => {
    const { data } = await commerce.products.list({ query: 's21 ultra' })
    setIsLoading(false)
    setSamultra(data)
  }
  useEffect(() => {
    fetchPixel()
    fetchIphone()
    fetchSamultra()
  }, [])

  console.log(pixel)
  console.log(iphone)
  console.log(samultra)

  return (
    <Highimage>
      <Row className='border-bottom'>
        {isLoading && <Spinner />}
        <Col md={4} xs={10} lg={2} className='mb-4 mx-auto push-up'>
          {pixel.map((product) => (
            <Slide left>
              <div key={product.id} className='paint'>
                <Image
                  src={product.image.url}
                  alt='pixel6pro'
                  className='img-fluid image'
                />
                <div className='py-3 text-center'>
                  <p className='fw-bold'>Google Pixel 6 Pro</p>
                  <p>
                    <em>Premium smartphone just for you.</em>
                  </p>
                  <Link to={`/details/${product.id}`}>
                    <p>
                      <small>SHOP PIXEL</small>
                      <i className='bi bi-chevron-compact-right'></i>
                    </p>
                  </Link>
                </div>
              </div>
            </Slide>
          ))}
        </Col>
        <Col md={4} xs={10} lg={6} className='mb-4 mx-auto hover-zoom'>
          {iphone.map((product) => (
            <Slide top>
              <div key={product.id}>
                <img
                  src='https://res.cloudinary.com/ceenobi/image/upload/v1635439806/Gadgets/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_09142021_rmb4w8.jpg'
                  className='img-fluid image hover-shadow'
                  alt='iphone13series'
                />
                <div className='text-center mt-3'>
                  <p className='text-uppercase'>all new</p>
                  <h2 className=''>iPhone 13 Series</h2>
                  <Link to={`/details/${product.id}`} className='btn btn-dark'>
                    SHOP NOW
                  </Link>
                </div>
              </div>
              <Slide></Slide>
            </Slide>
          ))}
        </Col>
        <Col md={4} xs={10} lg={2} className='mb-4 mx-auto push-down'>
          {samultra.map((product) => (
            <Slide right>
              <div key={product.id} className='paint'>
                <Image
                  src={product.image.url}
                  alt='s21ultra'
                  className='img-fluid image'
                />
                <div className='py-3 text-center'>
                  <p className='fw-bold'>Samsung Galaxy S21 Ultra</p>
                  <p>
                    <em>The all round performer.</em>
                  </p>
                  <Link to={`/details/${product.id}`}>
                    <p>
                      <small>SHOP SAMSUNG</small>
                      <i className='bi bi-chevron-compact-right'></i>
                    </p>
                  </Link>
                </div>
              </div>
            </Slide>
          ))}
        </Col>
      </Row>
    </Highimage>
  )
}

export default Highlight

const Highimage = styled.div`
  margin-top: 5rem;
  .image {
    width: 40rem;
  }
  a {
    color: var(--mainWhite) !important;
  }
  .paint {
    background: var(--mainWhite) !important;
  }
  @media (min-width: 1030px) {
    .push-up {
      transform: translateX(70%);
      margin-top: 30rem;
    }
    .push-down {
      transform: translateX(-70%);
      margin-top: 3rem;
    }
  }
  @media screen and (min-width: 990px) and (max-width: 1028px) {
    .push-up {
      transform: translateX(70%);
      margin-top: 20rem;
    }
    .push-down {
      transform: translateX(-70%);
      margin-top: 3rem;
    }
  }
  @media (max-width: 850px) {
    .image {
      width: 20rem;
    }
  }
`
