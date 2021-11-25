import styled from 'styled-components'

export const CarouselWrapper = styled.div`
  .carousel-item img {
    height: 630px;
    object-fit: cover;
    overflow: hidden;
  }
  .carousel .carousel-item .carousel-caption {
    display: block !important;
    margin-bottom: 8rem;
  }
  carousel .carousel-item {
    height: 400px !important;
  }
  @media (max-width: 850px) {
    .carousel-item img {
      height: 500px;
    }
  }
`
