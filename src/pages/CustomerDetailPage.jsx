import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import styled from "styled-components";
import UserKit from "../data/UserKit";
import { AiOutlineArrowLeft, AiOutlineDelete } from "react-icons/ai";
import Navbar from "../components/Navbar";
import CustomerDetailItem from "../components/CustomerDetailItem";
import Container from "../styles/Container";
import Button from "../styles/Button";
import FlexContainer from "../styles/FlexContainer";

const CustomerFlexContainer = styled(FlexContainer)`
  flex-direction: column;
`;
const CustomerDetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 1em;
`;

const LinkContainer = styled.a`
  display: flex;
  align-items: center;
`;

const ButtonWarning = styled(Button)`
  margin-top: 3em;
  background-color: #ed4b4b;
  &:hover {
    background-color: #c43e3e;
  }
`;

export default function CustomerDetailPage(props) {
  let [customerData, setCustomerData] = useState({});
  const customerId = props.match.params.id;

  const userKit = new UserKit();
  const history = useHistory();

  function fetchCustomer() {
    userKit
      .getCustomer(customerId)
      .then(res => res.json())
      .then(data => {
        setCustomerData(data);
      });
  }

  useEffect(() => {
    fetchCustomer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function deleteCustomer() {
    if (
      window.confirm(
        "Are you sure you want to permanently delete this customer?"
      )
    ) {
      userKit.deleteCustomer(customerId);
      history.push("/home");
    }
  }

  return (
    <CustomerFlexContainer>
      <Navbar />
      <Container>
        <Link to={`/home`}>
          <LinkContainer>
            <AiOutlineArrowLeft />
            Back to home page
          </LinkContainer>
        </Link>
        <h2>{customerData.name}</h2>
        <CustomerDetailGrid>
          <CustomerDetailItem title="Name:" content={customerData.name} />
          <CustomerDetailItem
            title="organistationNr:"
            content={customerData.organisationNr}
          />
          <CustomerDetailItem title="vatNr:" content={customerData.vatNr} />
          <CustomerDetailItem
            title="Reference:"
            content={customerData.reference}
          />
          <CustomerDetailItem
            title="PaymentTerm:"
            content={customerData.paymentTerm}
          />
          <CustomerDetailItem title="Website:" content={customerData.website} />
          <CustomerDetailItem title="Email:" content={customerData.email} />
          <CustomerDetailItem
            title="PhoneNumber:"
            content={customerData.phoneNumber}
          />
        </CustomerDetailGrid>
        <ButtonWarning onClick={deleteCustomer}>
          Delete customer
          <AiOutlineDelete />
        </ButtonWarning>
      </Container>
    </CustomerFlexContainer>
  );
}
