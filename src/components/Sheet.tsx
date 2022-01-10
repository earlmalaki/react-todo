import React from "react";
import { StyledSheet, TextField } from "./styles/Sheet.styled";

export default function Sheet(props: any) {
  return (
    <StyledSheet>
      <h1>{props.title}</h1>
      <p>{props.date}</p>

      <TextField />
      <TextField />
      <TextField />
      <TextField />
      <TextField />
      <TextField />
      <TextField />
      <TextField />
      <TextField />
      <TextField />
    </StyledSheet>
  );
}

// Textfields
// 1. Initially text fields
// 2. if not empty, make it a text with edit and tick/untick action
// 2.1 turn to a text when lose focus
// 2.2 tap on any of the text rectangular field, tick/untick; edit icon on right, edit.1em
