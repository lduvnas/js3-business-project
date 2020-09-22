import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import slugify from "slugify";
import UserKit from "../data/UserKit";

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
      {customerList &&
        customerList.map(customerItem => {
          const slug = slugify(customerItem.name, { lower: true });
          return (
            <div key={customerItem.id}>
              <p>{customerItem.id}</p>
              <Link to={`/customers/${slug}`}>{customerItem.name}</Link>
            </div>
          );
        })}
    </div>
  );
}
