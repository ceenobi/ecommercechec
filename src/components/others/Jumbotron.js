import styled from 'styled-components'

export const JumboCover = styled.div`
  .jumbotron {
    background: ${(prop) =>
      prop.backdrop
        ? 'url(https://res.cloudinary.com/ceenobi/image/upload/v1635599351/Gadgets/emiliano-cicero-z7ivykX2NLE-unsplash_ajnegx.jpg)'
        : 'url(https://res.cloudinary.com/ceenobi/image/upload/v1635617441/Gadgets/jeremy-bezanger-ybqVWpf_1eM-unsplash_t5d9th.jpg)'};
    background-size: cover;
    color: var(--mainWhite);
    height: 500px;
    position: relative;
    z-index: -99;
  }
  .jumboBag {
    background: ${(prop) =>
      prop.bag
        ? 'url(https://res.cloudinary.com/ceenobi/image/upload/v1635599351/Gadgets/emiliano-cicero-z7ivykX2NLE-unsplash_ajnegx.jpg)'
        : 'url(https://res.cloudinary.com/ceenobi/image/upload/v1635541888/Gadgets/lucrezia-carnelos-wQ9VuP_Njr4-unsplash_u72pgk.jpg)'};
    background-size: cover;
    height: 500px;
    position: relative;
    z-index: -99;
  }
  .jumboShop {
    background: ${(prop) =>
      prop.phone
        ? 'url(https://res.cloudinary.com/ceenobi/image/upload/v1635897242/Gadgets/nikolay-tarashchenko-1qFHFkKk8OA-unsplash_gc5rww.jpg)'
        : 'url(https://res.cloudinary.com/ceenobi/image/upload/v1635897242/Gadgets/nikolay-tarashchenko-1qFHFkKk8OA-unsplash_gc5rww.jpg)'};
    background-size: cover;
    height: 500px;
    position: relative;
    z-index: -99;
  }
  .overlay {
    position: absolute;
    top: 40%;
    z-index: 99;
  }
  h1,
  p {
    color: ${(prop) => (prop.text ? 'white!important' : 'black!important')};
  }
  p {
    font-size: 1.3rem;
  }

  @media (max-width: 992px) {
    .jumbotron {
      height: 220px;
    }
    .jumboBag {
      height: 220px;
    }
    .jumboShop {
      height: 220px;
    }
    p {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 300px) {
    p {
      font-size: 1rem;
    }
  }
`
