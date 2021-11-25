import {useState, useEffect} from 'react'
import {commerce} from '../../lib/Commerce'
import {Container, Row, Col, Button, Alert, Image} from 'react-bootstrap/'
import {ProductWrapper} from './styles'
import AccordionView from './Accordion'
import Spinner from '../others/Spinner'
import Slide from 'react-reveal/Slide'
// import RelatedProducts from './RelatedProducts'

export default function ProductDetail({ onAddToBag, isLoading}) {
   const [product, setProducts] = useState({})
   const [ogPrice, setOgPrice] = useState(0)
  
   const fetchProducts = async (id) => {
   const response = await commerce.products.retrieve(id)
   const { name, price, image, assets, inventory, description, variant_groups, conditionals, related_products } = response
    console.log({ response })
       setOgPrice(price.raw)
       setProducts({
         id,
         name,
         inventory: inventory.available,
         description,
         src: image.url,
         assets,
         variant_groups,
         price: price.formatted_with_code,
         conditionals: conditionals.is_inventory_managed,
         related_products,
       })
     }
 
   console.log(product);

     useEffect(() => {
       const id = window.location.pathname.split('/')
       fetchProducts(id[2])
     }, [])

     const priceCalculator = (optionPrice) => {
       if (optionPrice === ogPrice) {
         return product.price
       }

       const priceArray = product.price.split(' ')
       const total = ogPrice + optionPrice
       return `${total} ${priceArray[1]}`
     }

     const updateProduct = (optionPrice, src, { id, variantId }) => {
       setProducts({
         ...product,
         price: priceCalculator(optionPrice),
         src,
         option: { [variantId]: id },
       })
     }

      const getImageUrl = (assetId) => {
        const relatedAsset = product.assets.find((pro) => pro.id === assetId)
        return relatedAsset?.url || ''
      }
    
  return (
    <div className='detail'>
      <ProductWrapper>
        <Container className='py-5'>
          <Row>
            <Col lg={4} md={6}>
             {isLoading && <Spinner />}
              <Slide left>
             <Image fluid src={product.src} alt={product.name} />
             </Slide>
            </Col>
            
            <Col lg={4} md={6} className='align-self-center'>
              <div className='text-center px-4'>
                <h4 className='border-bottom border-secondary text-secondary p-2'>{product.name}</h4>
                <p className='mb-0'>{product.price}</p>
                {product.inventory > 0 ? (
                  <div className='d-grid gap-2'>
                    <p className='mt-4 mb-0'>AVAILABLE</p>
                    <p className='mb-0 text-muted text-wrap'>
                      <small>
                        This product is available for immediate purchase.
                      </small>
                    </p>
                    <Button variant='dark'className='mt-3 mb-4'
                    onClick={() => {onAddToBag(product.id,1,product.option)}}>
                       ADD TO SHOPPING BAG
                      </Button>
                  </div> 
                ) : (
                  <Alert variant='dark'>out of stock</Alert>
                )}  
              </div>
            </Col>
             <Col lg={4} md={6} className='d-lg-block d-none'>
              {isLoading && <Spinner />}
              <Slide right>
              <Image fluid src={product.src} alt={product.name} />
              </Slide>
            </Col>
          </Row>
        </Container>
      </ProductWrapper>
      
      <div className='mt py-5 px-3 bg-white'>
        <Container>
        <Row>
          <Col lg={8} className='mb-4'>
            {product.variant_groups?.length ? (<h6>VARIATIONS</h6>) : null}
             <div className='d-flex justify-content-start mb-4'>
              {product.variant_groups?.length ? product.variant_groups[0].options?.map((option) => (
              <div>
                <Image className='px-4' fluid src={getImageUrl(option.assets[0])} alt={option.name}
                onClick={() => updateProduct(option.price.raw, getImageUrl(option.assets[0]), option.name, {
                  id: option.id, variantId: product.variant_groups[0].id,})}
                  style={{ width: '10rem', height: '10rem' }}/>
                   </div>
                  ))
                : null}
            </div>
            <AccordionView />
          </Col>
          <Col lg={4}>
            <div className='bg-white border-white shadow p-3'>
              <Image className='d-block mx-auto' src={product.src} alt={product.name}
                style={{ width: '10rem', height: '10rem' }}/>
              <p className='mt-5'>
                <small>PRODUCT DETAILS</small>
              </p>
              <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
          </Col>
        </Row>
        </Container>
      </div>
    </div>
  )
}
