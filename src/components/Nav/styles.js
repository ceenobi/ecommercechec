import styled from 'styled-components'
export const NavWrapper = styled.nav`
  a:hover {
    color: var(--mainYellow) !important;
  }
  .bi-search,
  .bi-list {
    font-size: 20px;
  }
  .dropdown-menu,
  p {
    background: var(--lightRed);
    color: var(--mainWhite) !important;
  }
  hr {
    border-top: 2px solid var(--mainWhite);
  }
  .nav a.active {
    color: var(--lightRed)!important;
  }
  
 .nav.navbar a:hover {
   background-color: var(--mainYellow)!important;
 }
  @media all and (min-width: 992px) {
    .navbar-brand {
      font-size: 2rem;
    }
    a {
      font-size: 0.9rem;
    }
  }
`
