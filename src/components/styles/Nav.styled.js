import styled, { ThemeConsumer } from "styled-components";

export const Nav = styled.nav`
  /* min-height: 1.5em; */
  width: 100vw;
  padding: 0 4em;
  margin: 0;
  align-items: baseline;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  display: flex;

  & > h1 { 
    margin: .25em;
    flex: auto;
  }

  & > div {
    flex: none;
  }

  & > div > p {
    margin: 0;
  }
`

