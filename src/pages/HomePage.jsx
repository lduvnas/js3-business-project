import React from "react";
import CreateCustomerForm from "../components/CreateCustomerForm";
import CustomerList from "../components/CustomerList";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Container from "../styles/Container";
import FlexContainer from "../styles/FlexContainer";

const HomePageContainer = styled(FlexContainer)`
  flex-direction: column;
`;

export default function HomePage() {
  return (
    <HomePageContainer>
      <Navbar />
      <Container>
        <CustomerList />

        <CreateCustomerForm />
      </Container>
    </HomePageContainer>
  );
}
