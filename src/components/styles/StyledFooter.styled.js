import styled, { ThemeConsumer } from "styled-components";

export const StyledFooter = styled.footer`
  width: 100vw;
  padding: .5em;
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  position: fixed;
  bottom: 0;

  & > p {
    margin: auto;
    font-size: .75em;
  }

  & > p > a {
    color: ${({ theme }) => theme.colors.primary};
  }
`

