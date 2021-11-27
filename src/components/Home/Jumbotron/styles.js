import styled from 'styled-components'

export const JumboWrapper = styled.div`
  .jumbotron {
    background: url('https://res.cloudinary.com/ceenobi/image/upload/v1635498483/Gadgets/le-buzz-tVnm9I9jb8I-unsplash_krckzp.jpg');
    background-size: cover;
    color: var(--mainWhite);
    height: 500px;
    position: relative;
  }
  .overlay {
    position: absolute;
    top: 30%;
  }
  .paint {
    background: var(--mainWhite) !important;
  }
  .image {
    width: 10rem;
  }
  h6,p
  {
    color: var(--mainDark);
  }
  @media (max-width: 992px) {
    .jumbotron {
      height: 700px;
    }
  }
`
