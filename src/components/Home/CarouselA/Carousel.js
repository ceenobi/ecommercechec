import { Carousel, Button } from 'react-bootstrap/'
import { CarouselWrapper } from './styles'
import { Link } from 'react-router-dom'

const CarouselView = () => {
  return (
    <CarouselWrapper>
      <Carousel fade>
        <Carousel.Item className='img-fluid'>
          <img
            className='d-block w-100'
            src='https://res.cloudinary.com/ceenobi/image/upload/v1635897242/Gadgets/nikolay-tarashchenko-1qFHFkKk8OA-unsplash_gc5rww.jpg'
            alt='First slide'
          />
          <Carousel.Caption>
            <h1 className='text-uppercase'>Smartphones</h1>
            <Link to='/shop/smartphones'>
              <Button variant='dark' size='lg' className='mt-3 '>
                SHOP NOW
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://res.cloudinary.com/ceenobi/image/upload/v1635435301/Gadgets/daniel-romero-6V5vTuoeCZg-unsplash_jrzmb6.jpg'
            alt='Second slide'
          />
          <Carousel.Caption>
            <h1 className='text-uppercase'>Earbuds</h1>
            <Link to='/'>
              <Button variant='dark' size='lg' className='mt-3 '>
                SHOP NOW
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://res.cloudinary.com/ceenobi/image/upload/v1635436324/Gadgets/mitchell-hollander-8b1cWDyvT7Y-unsplash_zopqcr.jpg'
            alt='Third slide'
          />

          <Carousel.Caption>
            <h1>Smartwatch</h1>
            <Link to='/'>
              <Button variant='dark' size='lg' className='mt-3'>
                SHOP NOW
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </CarouselWrapper>
  )
}

export default CarouselView
