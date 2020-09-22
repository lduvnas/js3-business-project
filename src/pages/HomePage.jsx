import React from "react";
import styled from "styled-components";
import CreateCustomerForm from "../components/CreateCustomerForm";
import CustomerList from "../components/CustomerList";
import ActiveUser from "../components/ActiveUser";

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

export default function HomePage() {
  return (
    <Div>
      <h2>Home</h2>
      <ActiveUser />
      <Container>
        <CustomerList />

        <CreateCustomerForm />
      </Container>
    </Div>
  );
}
