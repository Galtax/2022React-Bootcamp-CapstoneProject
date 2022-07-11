import styled from 'styled-components';
import {
  bluePrince,  
} from '../../utils/constant.styles';

export const HeaderMain = styled.header`
  padding: 0 2rem;
  min-height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  background: #D4A373;
  top: 0;
  left: 0;
  right: 0;
  z-index: 31;

  @media (max-width: 576px) {
    justify-content: center;
  }
  }
  
  @media screen and (max-width: 800px){
    max-height: 20rem;
    flex-flow: row wrap;
    justify-content: space-between;
    padding-bottom: 2rem;
  }
`;

export const Name = styled.h1`
  font-size: 3.5rem;
  text-indent: 2rem;
  color: ${bluePrince};
  flex: 2 1 auto;
  font-weight: 600;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 800px) {
    justify-content: center;
    text-indent: 0;
    width: 65%;
  }
  @media screen and (max-width: 485px) {
    justify-content: center;
    text-indent: 0;
    width: fit-content;
  }
`;

export const Image = styled.img`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-top-left-radius: .0rem;
  margin-left: 0;
  width: 10rem;
  height: 10rem;
  border-radius: 15px;

`;
