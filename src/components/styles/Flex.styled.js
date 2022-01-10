import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: flex-start;

  & > div {
    flex: 1;
  }
`