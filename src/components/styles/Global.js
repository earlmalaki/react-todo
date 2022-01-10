import { createGlobalStyle, ThemeConsumer } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* 1 - Add google font cdn */
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Open+Sans&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.body};
    color: #000;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.15em;
    margin: 0;
  }

  h1, h2, h3, h4 {
    font-family: 'Bebas Neue', serif;
  }

  p {
    line-height: 1.5;
  }

  img {
    max-width: 100%;
  }
`

export default GlobalStyles