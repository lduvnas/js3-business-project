import React, { useEffect, useState } from "react";
import UserKit from "../data/UserKit";
import styled from "styled-components";
import CreateCustomerForm from "../components/CreateCustomerForm";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 50%;
  background-color: white;
  padding: 3rem;
  box-shadow: 0 1px 15px rgba(113, 113, 113, 0.06),
    0 5px 12px rgba(211, 211, 211, 0.08);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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

export default function HomePage() {
  const userKit = new UserKit();
  const [customerList, setCustomerList] = useState(null);

  useEffect(() => {
    getCustomerList();
  }, []);

  function getCustomerList() {
    userKit
      .getCustomerList()
      .then(res => res.json())
      .then(data => {
        setCustomerList(data.results);
      });
  }

  return (
    <Div>
      <h2>Home</h2>
      <Container>
        <CreateCustomerForm />

        <Button onClick={getCustomerList}>Get Customar</Button>

        <h3>Customers</h3>
        {customerList &&
          customerList.map(eventItem => {
            return (
              <div key={eventItem.count}>
                <p>{eventItem.name}</p>
                <p>{eventItem.website}</p>
                <p>{eventItem.email}</p>
                <p>{eventItem.phoneNumber}</p>
                <p></p>
              </div>
            );
          })}
      </Container>
    </Div>
  );
}
