import React, { useState } from "react";
import { Link } from "react-router-dom";
/*  import slugify from "react-slugify";  */
import UserKit from "../data/UserKit";
import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  border-radius: 5px;
  border: none;
  background-color: #67a4d9;
  color: white;
  &:hover {
    background-color: #5885ac;
  }
`;
export default function GetCustomers() {
  const userKit = new UserKit();
  const [customerList, setCustomerList] = useState([]);

  function getCustomerList() {
    userKit
      .getCustomerList()
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        setCustomerList(data.results);
      });
  }

  return (
    <div>
      <h3>Your Customers</h3>
      <Button onClick={getCustomerList}>Get Customars</Button>
      <p>You dont have any costumers yet</p>
      {customerList &&
        customerList.map(customerItem => {
          return (
            <div key={customerItem.id}>
              <p>{customerItem.id}</p>
              <Link to={`/customers/${customerItem.name}`}>
                {customerItem.name}
              </Link>
            </div>
          );
        })}
    </div>
  );
}
