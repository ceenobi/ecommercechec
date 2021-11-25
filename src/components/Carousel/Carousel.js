import {Carousel, Button} from 'react-bootstrap/'
import React from 'react'
import {CarouselWrapper} from './styles'
import {Link} from 'react-router-dom'


export default function Caroul() {
    return (
      <CarouselWrapper>
        <div>
          <Carousel fade controls={false} className='shadow'>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src='https://res.cloudinary.com/ceenobi/image/upload/v1627984381/Gadgets/anh-nhat-yqcloMb3Abw-unsplash_nthvku.jpg'
                alt='First slide'
              />
              <Carousel.Caption>
                <h1 className='display-2'>The gadget you've always needed</h1>
                <p className='text-uppercase'>a range of products for you</p>
                <Link to='/shop'>
                  <Button variant='outline-success' size='lg' className='mt-3'>
                    Shop now
                  </Button>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
            {/* <Carousel.Item>
              <img
                className='d-block w-100'
                src='https://res.cloudinary.com/ceenobi/image/upload/v1627985187/Gadgets/onur-binay-OKjJZNTl004-unsplash_vmhj44.jpg'
                alt='Second slide'
              />

              <Carousel.Caption>
                <h1 className='display-2'>The gadget you've always needed</h1>
                <p className='text-uppercase'>a range of products for you</p>
                <Link to='/shop'>
                  <Button variant='outline-success' size='lg' className='mt-3'>
                    Shop now
                  </Button>
                </Link>
              </Carousel.Caption>
            </Carousel.Item> */}
            {/* <Carousel.Item>
              <img
                className='d-block w-100'
                src='https://res.cloudinary.com/ceenobi/image/upload/v1627861194/Gadgets/daniel-romero-ArcRAMb_YZI-unsplash_urqajn.jpg'
                alt='Third slide'
              />

              <Carousel.Caption>
                <h1 className='display-2'>The gadget you've always needed</h1>
                <p className='text-uppercase'>a range of products for you</p>
                <Link to='/shop'>
                  <Button variant='outline-success' size='lg' className='mt-3'>
                    Shop now
                  </Button>
                </Link>
              </Carousel.Caption>
            </Carousel.Item> */}
          </Carousel>
        </div>
      </CarouselWrapper>
    )
}
