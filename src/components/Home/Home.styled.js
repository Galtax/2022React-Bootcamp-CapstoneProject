import styled from 'styled-components';

export const HomeMain = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 13rem 5rem;
  max-width: 100%;
  min-height: 95vh;

  @media (max-width: 576px) {
    margin: 7rem 2rem;
  }

  @media (min-width: 577px) and (max-width: 1024px) {
    margin: 4rem 5rem;
  }
`;