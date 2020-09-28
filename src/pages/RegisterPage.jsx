import React from "react";
import RegisterForm from "../components/RegisterForm";
import styled from "styled-components";
import FlexContainer from "../styles/FlexContainer";

const RegisterContainer = styled(FlexContainer)`
  padding-top: 4em;
`;

export default function RegisterPage() {
  return (
    <RegisterContainer>
      <RegisterForm />
    </RegisterContainer>
  );
}
