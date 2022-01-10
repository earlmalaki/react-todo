import styled from "styled-components";


export const TextField = styled.input`
  border: 0;
  margin: 0;
  width: 90%;
  height: 2em;
  font-size: 1em;
  border-bottom: 1px solid black;
  font-family: 'Open Sans';
  font-size: 1em;
`

export const StyledSheet = styled.div`
 height: 100%;
 width: 100%;
 background-color: ${({ theme }) => theme.colors.body };
 text-align: center;

 & > h1 {
   margin-top: 1em;
   margin-bottom: 0;
 }

 & > p {
  margin-top: .25em;
  font: 1em 'Open Sans' ;
 }
`