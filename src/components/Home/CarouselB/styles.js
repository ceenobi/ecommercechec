import styled from 'styled-components'
export const CarouselShot = styled.div`
  .carousel-item img {
    height: 500px;
    object-fit: contain;
    overflow: hidden;
  }
  .carousel-indicators {
    display: none !important;
  }
  @media (max-width: 992px) {
    h1 {
      color: var(--mainDark);
    }
  }
`
