import { Carousel, Button, Image} from 'react-bootstrap/'
import { Link } from 'react-router-dom'
import {CarouselShot} from './styles'
import { useState, useEffect } from 'react'
import { commerce } from '../../../lib/Commerce'
import Spinner from '../../others/Spinner'

const CarouselShop = () => {
  const [beats, setBeats] = useState([])
  const [powerpro, setPowerpro] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchBeats = async () => {
    const { data } = await commerce.products.list({ query: 'studio buds' })
    setIsLoading(false)
    setBeats(data)
  }
  const fetchPowerpro = async () => {
    const { data } = await commerce.products.list({ query: 'powerpro' })
    setIsLoading(false)
    setPowerpro(data)
  }

  useEffect(() => {
    fetchBeats()
    fetchPowerpro()
  }, [])

  console.log(beats);
  console.log(powerpro);
    
  return (
    <CarouselShot>
      <div className='d-flex justify-content-center'>
          {isLoading && (
            <Spinner/>
          )}
        </div>
      <Carousel>
          <Carousel.Item>
            {beats.map((product) => (
            <div  key={product.id}>
            <Image className='d-block w-100' src={product.image.url}alt='First slide'/>
            <Carousel.Caption>
              <h1 className=''>Beats Studio Buds</h1>
              <Link to={`/details/${product.id}`}>
                <Button variant='dark' size='lg' className='mt-3 hover-shadow'>
                  SHOP NOW
                </Button>
              </Link>
            </Carousel.Caption>
            </div>
             ))}
          </Carousel.Item>
       
        <Carousel.Item>
          {powerpro.map((product) => (
          <div key={product.id}>
          <Image className='d-block w-100' src={product.image.url}alt='Second slide'/>
          <Carousel.Caption>
            <h1>Powerbeats Pro</h1>
            <Link to={`/details/${product.id}`}>
              <Button variant='dark' size='lg' className='mt-3 hover-shadow'>
                SHOP NOW
              </Button>
            </Link>
          </Carousel.Caption>
          </div>
          ))}
        </Carousel.Item>
      </Carousel>
    </CarouselShot>
  )
}

export default CarouselShop
