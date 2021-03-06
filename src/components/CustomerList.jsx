import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserKit from "../data/UserKit";
import { CustomerListContext } from "../contexts/CustomerListContext";
import styled from "styled-components";

const CustomerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 1em;
`;

export default function GetCustomers() {
  const { customerList, setCustomerList } = useContext(CustomerListContext);
  const userKit = new UserKit();

  function fetchCustomerList() {
    userKit
      .getCustomerList()
      .then(res => res.json())
      .then(data => {
        setCustomerList(data.results);
      });
  }

  useEffect(() => {
    fetchCustomerList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h3>Your Customers</h3>

      <CustomerGrid>
        {}
        {customerList && customerList.length ? (
          customerList.map(customer => {
            const id = customer.id;
            return (
              <div key={id}>
                <Link to={`/customers/${id}`}>{customer.name}</Link>
                <p>{customer.organisationNr}</p>
                <p>{customer.reference}</p>
                <p>id: {customer.id}</p>
              </div>
            );
          })
        ) : (
          <p>You don't have any customers</p>
        )}
      </CustomerGrid>
    </div>
  );
}
