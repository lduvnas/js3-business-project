import React from "react";
import styled from "styled-components";

const PrimaryButton = styled.button`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  border-radius: 5px;
  border: none;
  background-color: #67a4d9;
  color: white;
  &:hover {
    background-color: #5885ac;
  }
`;
export default function Button({ title, onClick }) {
  return <PrimaryButton onClick={onClick}>{title}</PrimaryButton>;
}
