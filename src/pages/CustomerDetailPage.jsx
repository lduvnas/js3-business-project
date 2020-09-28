import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import styled from "styled-components";
import UserKit from "../data/UserKit";
import { AiOutlineArrowLeft, AiOutlineDelete } from "react-icons/ai";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import CustomerDetailItem from "../components/CustomerDetailItem";

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

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    if (window.confirm("Are you sure?")) {
      userKit.deleteCustomer(customerId);
      history.push("/home");
    }
  }

  return (
    <FlexContainer>
      <Navbar />
      <div className="container">
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
            ßcontent={customerData.organisationNr}
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
        <AiOutlineDelete />
        <Button onClick={deleteCustomer} title={"Delete customer"} />
      </div>
    </FlexContainer>
  );
}
