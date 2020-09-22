import React, { useState, useEffect } from "react";
import UserKit from "../data/UserKit";

export default function CustomerDetailPage(props) {
  let [customerData, setCustomerData] = useState({});
  const customerId = props.match.params.id;
  console.log(customerId);

  const userKit = new UserKit();

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

  return (
    <div>
      <h2>Customer Detail Page</h2>
      <p>Name: {customerData.name}</p>
      <p>organistationNr: {customerData.organisationNr}</p>
      <p>vatNr: {customerData.vatNr}</p>
      <p>Reference: {customerData.reference}</p>
      <p>PaymentTerm: {customerData.paymentTerm}</p>
      <p>Website: {customerData.website}</p>
      <p>Email: {customerData.email}</p>
      <p>PhoneNumber: {customerData.phoneNumber}</p>
    </div>
  );
}
