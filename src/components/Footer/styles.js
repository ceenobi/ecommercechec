import styled from 'styled-components'

export const FooterWrapper = styled.footer`
   {
    margin-top: rem;
    background: var(--mainDark);
    padding-top: 2rem;
  }
  a {
    color: grey !important;
    font-size: 0.8em;
  }
  ul li a:hover {
    color: var(--lightRed) !important;
  }
  h6,
  p {
    color: var(--mainWhite) !important;
  }
  p {
    font-size: 0.6em;
  }
  input::placeholder {
    color: var(--lightWhite) !important;
  }

  @media (min-width: 992px) {
     {
      padding-top: 2rem;
    }
  }
`
