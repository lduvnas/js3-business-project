import React, { useState, useEffect } from "react";
import UserKit from "../data/UserKit";
import { useHistory, Link } from "react-router-dom";
import Button from "../components/Button";

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
    <div>
      <Link to={`/home`}>Back to home page</Link>
      <Button onClick={deleteCustomer} title="Delete customer" />
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
