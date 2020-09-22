import React from "react";
import styled from "styled-components";
import RegisterForm from "../components/RegisterForm";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default function RegisterPage() {
  return (
    <Container>
      <RegisterForm />
    </Container>
  );
}
