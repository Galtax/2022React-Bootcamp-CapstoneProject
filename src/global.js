import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: verdana;
  }

  body {
    background: #FAEDCD;
  }
`;

export default Global;
