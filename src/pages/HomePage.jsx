import React from "react";
import CreateCustomerForm from "../components/CreateCustomerForm";
import CustomerList from "../components/CustomerList";
import Navbar from "../components/Navbar";
/* import SideBar from "../components/SideBar"; */
import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function HomePage() {
  return (
    <FlexContainer>
      <Navbar />
      {/*      <SideBar /> */}

      <div className="container">
        <CustomerList />

        <CreateCustomerForm />
      </div>
    </FlexContainer>
  );
}
