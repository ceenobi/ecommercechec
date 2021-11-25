import { Image } from 'react-bootstrap/'
import { Link} from 'react-router-dom'
import styled from 'styled-components'

export default function ProductContainer({ product }) {

  return (
    <ProductWrap>
      <div className='cover'>
        <div className='overlay'>
          <Image
            src={product.image.url}
            fluid
            alt={product.name}
            className='img-size'
          />
        </div>
        <div className='cast text-center'>
          <Image
            src={product.image.url}
            fluid
            alt={product.name}
            className='d-none d-lg-block mb-lg-5 mt-lg-2'
          />
          <p className=''>{product.name}</p>
          <div className='mt-lg-4'>
            <p className='text-secondary mb-0'>
              {product.price.formatted_with_symbol}
            </p>
            <Link to={`/details/${product.id}`}>
              <p>
                <small>SHOP THIS</small>
                <i className='bi bi-chevron-compact-right'></i>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </ProductWrap>
  )
}

export const ProductWrap = styled.div`
  .cover {
    width: 100%;
    position: relative;
    background-color: var(--lightWhite);
    height: 400px;
  }

  .overlay {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .img-size {
    width: 10rem !important;
    height: 10rem !important;
  }

  @media (max-width: 992px) {
    .cover {
      height: 300px;
    }
    .img-size {
      width: 5rem !important;
      height: 5rem !important;
    }
    .cover .cast p {
      position: relative;
      left: 50%;
      top: 70%;
      transform: translate(-50%, -50%);
    }
    .cast {
      position: absolute;
      left: 50%;
      top: 70%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 0;
      transition: 0.5s ease-in-out;
    }
  }

  @media (min-width: 992px) {
    .cover:hover {
      transform: scale(1);
      box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
      transition: all 0.5s ease-in-out;
      height: 500px;
    }
    .overlay {
      top: 70%;
    }

    .cast {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      overflow: hidden;
      width: 100%;
      height: 0;
      transition: 0.5s ease-in-out;
      opacity: 0.5;
    }
    .cover:hover .cast {
      height: 100%;
      opacity: 1;
    }
    .cover:hover .cast p {
      position: relative;
      left: 50%;
      top: 5%;
      transform: translate(-50%, -50%);
    }
  }
`
