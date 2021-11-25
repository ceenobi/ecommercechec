import React from 'react'
import { Container, Spinner} from 'react-bootstrap/'
import { ShopWrapper } from './styles'
// import Products from './ProductContainer'


export default function Shop({categories, isLoading}) {
 
    return (
      <ShopWrapper>
        <Container className='p-5'>
          <div className='d-flex justify-content-center'>
            {isLoading && (
              <div>
                <Spinner animation='border' role='status' variant='warning'>
                  <span className='visually-hidden'>Loading...</span>
                </Spinner>
              </div>
            )}
          </div>
          <div className='px-4 d-flex'>
            <div className='mt-5 flex-column d-none d-lg-block'>
              {categories.map((category) => (
                <div lg={2} md={4} key={category.id}>
                  <h2>{category.name}</h2>
                  <p>Products: {category.products}</p>
                </div>
              ))}
            </div>

            {/* <div className='px-lg-5'>
              {categories.map((category) => {
                return (
                  <Row>
                    <h2 className='mt-5'>{category.name}</h2>
                    {category.productsData.map((product) => (
                      <Products product={product} />
                    ))}
                  </Row>
                )
              })}
            </div> */}
          </div>
        </Container>
      </ShopWrapper>
    )
}

                         
                        