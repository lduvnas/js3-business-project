import React from "react";
import LoginForm from "../components/LoginForm";
import styled from "styled-components";
import FlexContainer from "../styles/FlexContainer";

const LoginContainer = styled(FlexContainer)`
  padding-top: 4em;
`;
export default function LoginPage() {
  return (
    <LoginContainer>
      <LoginForm />
    </LoginContainer>
  );
}
