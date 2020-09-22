import React from "react";
import styled from "styled-components";
import EmailImage from "../paper-plane.png";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 50%;
  background-color: white;
  padding: 3rem;
  box-shadow: 0 1px 15px rgba(113, 113, 113, 0.06),
    0 5px 12px rgba(211, 211, 211, 0.08);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function ConfirmPage() {
  return (
    <Div>
      <Container>
        <h2>Please check your email</h2>
        <img src={EmailImage} alt="email" />
        <h3>We've sent you a link in your email to confirm your account</h3>
        <h3>Just click the link to complete the sign-up process</h3>
        <p>
          Haven't received an email? Please check your spam folder to make sure
          it's not there.
        </p>
      </Container>
    </Div>
  );
}
