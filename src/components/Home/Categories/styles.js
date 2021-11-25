import styled from "styled-components";

export const CatWrapper = styled.div`
  div {
    background: #f4fafb !important;
  }
 h2, p {
    color: var(--mainDark)!important;
  }
  @media (min-width: 992px) {
    .push-down {
      transform: translateY(20%);
    }
     {
      padding-bottom: 7rem;
      padding-top: 5rem;
    }
  }
`