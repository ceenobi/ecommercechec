import styled from 'styled-components'

export const ProductWrapper = styled.div`
  background-color: var(--lightWhite) !important;
  padding-top: 10rem;
  .alert-dark {
    background-color: none !important;
    border-color: none !important;
    border: none !important;
  }

  .img-wrapper {
    width: 100%;
    margin-bottom: 20px;
    text-align: center;
    > img {
      max-width: 320px;
    }
    @media (min-width: 768px) {
      margin-bottom: 0;
    }
  }

  .colo {
    background-color: var(--lightNeon) !important;
  }

  @media (max-width: 850px) {
     padding-top: 5rem;
    .carousel-item img {
      height: 500px;
    }
  }
`
