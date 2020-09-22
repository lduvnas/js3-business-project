import React, { useState, useEffect } from "react";
import UserKit from "../data/UserKit";
import { useHistory, Link } from "react-router-dom";
import Button from "../components/Button";
import styled from "styled-components";

const CustomerDetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 1em;
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
    <div className="container">
      <Link to={`/home`}>Back to home page</Link>

      <h2>{customerData.name}</h2>
      <CustomerDetailGrid>
        <div>
          <h6>Name:</h6> <p> {customerData.name}</p>
        </div>

        <div>
          <h6>organistationNr:</h6> <p> {customerData.organisationNr}</p>
        </div>
        <div>
          <h6>vatNr:</h6> <p>{customerData.vatNr}</p>
        </div>
        <div>
          <h6>Reference:</h6> <p> {customerData.reference}</p>
        </div>
        <div>
          <h6>PaymentTerm:</h6> <p>{customerData.paymentTerm}</p>
        </div>
        <div>
          <h6>Website:</h6> <p>{customerData.website}</p>
        </div>
        <div>
          <h6>Email: </h6> <p>{customerData.email}</p>
        </div>
        <div>
          <h6>PhoneNumber:</h6> <p>{customerData.phoneNumber}</p>
        </div>
      </CustomerDetailGrid>
      <Button onClick={deleteCustomer} title="Delete customer" />
    </div>
  );
}
