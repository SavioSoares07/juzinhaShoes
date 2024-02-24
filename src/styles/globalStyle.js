import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body{
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }
  a{
    text-decoration: none;
  }
  button, a{
    cursor: pointer;
    transition: filter 0.2s;
  }
  button:hover, a:hover {
    filter: brightness(0.9);
  }

`;
