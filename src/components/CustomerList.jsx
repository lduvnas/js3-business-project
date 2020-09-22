import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
/* import slugify from "slugify"; */
import UserKit from "../data/UserKit";
import styled from "styled-components";

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 1em;
`;

export default function GetCustomers() {
  const userKit = new UserKit();
  const [customerList, setCustomerList] = useState(null);

  function getCustomerList() {
    userKit
      .getCustomerList()
      .then(res => res.json())
      .then(data => {
        setCustomerList(data.results);
      });
  }

  useEffect(() => {
    getCustomerList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h3>Your Customers</h3>

      {/*      <Button onClick={getCustomerList}>Get Customars</Button> */}
      {/*     <p>You dont have any costumers yet</p> */}

      <Div>
        {customerList &&
          customerList.map(customer => {
            const id = customer.id;

            /*   const slug = slugify(customer.name, { lower: true }); */
            return (
              <div key={id}>
                <Link to={`/customers/${id}`}>{customer.name}</Link>
                <p>{customer.organisationNr}</p>
                <p>{customer.reference}</p>
                <p>id: {customer.id}</p>
              </div>
            );
          })}
      </Div>
    </div>
  );
}
