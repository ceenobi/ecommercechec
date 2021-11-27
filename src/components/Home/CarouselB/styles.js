import styled from 'styled-components'
export const CarouselShot = styled.div`
  .carousel-item img {
    height: 600px;
    object-fit: contain;
    overflow: hidden;
  }
  .carousel-indicators {
    display: none !important;
  }
  .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='black' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
  }

  .carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='black' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
  }

  h1 {
    color: var(--mainDark);
  }
  @media (min-width: 768px) {
    .carousel-item img {
      margin-bottom: 5rem;
    }
  }
`
