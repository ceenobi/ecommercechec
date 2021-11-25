import styled from 'styled-components'

export const JumboWrapper = styled.div`
  .jumbotron {
    background: url('https://res.cloudinary.com/ceenobi/image/upload/v1627984381/Gadgets/anh-nhat-yqcloMb3Abw-unsplash_nthvku.jpg');
    background-size: cover;
    color: var(--mainWhite);
    height: 900px;
    position: relative;
  }
  .overlay {
    position: absolute;
    top: 50%;
  }
  @media (max-width: 992px) {
    .jumbotron {
      height: 700px;
    }
  }
    
`
