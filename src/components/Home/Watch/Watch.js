import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Row, Col, Image, Button} from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { commerce } from '../../../lib/Commerce'
import Spinner from '../../others/Spinner'
import Slide from 'react-reveal/Slide'

const Watch = () => {
  const [products, setProducts] = useState([])
  const [samwatch, setSamwatch] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchProducts = async () => {
    const { data } = await commerce.products.list({ query: 'series 7' })
    setIsLoading(false)
    setProducts(data)
  }
  const fetchSamwatch = async () => {
    const { data } = await commerce.products.list({ query: 'watch 4 classic' })
    setIsLoading(false)
    setSamwatch(data)
  }
  useEffect(() => {
    fetchProducts()
    fetchSamwatch()
  }, [])

  console.log(products)
  console.log(samwatch)

  return (
    <Watchwrap>
      <Row>
        {isLoading && <Spinner />}
        <Col md={8} xs={10} lg={12} className='mb-4 mx-auto push'>
          {products.map((product) => (
            <div className='text-center mt-3' key={product.id}> 
              <Image
                src={product.image.url}
                alt='applewatchs7'
                className='image'
                fluid
              />
              <p className='text-uppercase mt-3'>More than just a time piece</p>
              <h2>Apple Watch Series 7</h2>
              <Link
                to={`/details/${product.id}`}>
                <Button variant='dark' size='lg'>SHOP NOW</Button>
              </Link>
            </div>   
          ))}
        </Col>
        <Col md={4} xs={10} className='d-lg-none image2 mx-auto'>
          {samwatch.map((product) => (
            <Slide right>
              <div className='text-center mt-3 paint' key={product.id}>
                <Image
                  src={product.image.url}
                  alt='applewatchs7'
                  className='image'
                  fluid
                />
                <div className='p-3 text-center'>
                  <p className='fw-bold'>Galaxy Watch 4 Classic</p>
                  <p>
                    <em>Do more than just tell time.</em>
                  </p>
                  <Link
                    to={`/details/${product.id}`}
                    className='d-flex justify-content-center'
                  >
                    <p>
                      <small>SHOP SMARTWATCH</small>
                    </p>
                    <i className='bi bi-chevron-compact-right'></i>
                  </Link>
                </div>
              </div>
            </Slide>
          ))}
        </Col>

        <div className='d-none d-lg-block image2'>
          {samwatch.map((product) => (
              <Slide right>
            <div key={product.id} className='paint py-3'>
              <Image
                src={product.image.url}
                alt='smartwatch'
                className='img-fluid'
              />
              <div className='text-center'>
                <p className='fw-bold'>Galaxy Watch 4 Classic</p>
                <p>
                  <em>Do more than just tell time.</em>
                </p>
                <Link to={`/details/${product.id}`}>
                  <p>
                    <small>SHOP SMARTWATCH</small>
                    <i className='bi bi-chevron-compact-right'></i>
                  </p>
                </Link>
              </div>
            </div>
            </Slide>
          ))}
        </div>
      </Row>
    </Watchwrap>
  )
}

export default Watch

const Watchwrap = styled.div`
  .image {
    width: 20rem;
  }
  .push {
    margin-top: 5rem;
  }
  .paint {
    background: var(--mainWhite) !important;
  }
  margin-top: 5rem;
  a {
    color: var(--mainWhite) !important;
  }

  @media screen and (min-width: 990px) and (max-width: 1028px) {
    .push-up {
      transform: translateY(70%);
      margin-bottom: 10rem;
    }
    .image2 {
      width: 10rem;
      position: absolute;
      right: 100px;
    }
  }
  @media (min-width: 1030px) {
    .image2 {
      width: 13rem;
      position: absolute;
      right: 100px;
    }
    .push {
      margin-top: 8rem;
    }
  }
  @media (max-width: 850px) {
    .image2 {
      width: 15rem;
    }
  }
`
