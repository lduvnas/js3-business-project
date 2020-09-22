import React, { useState } from "react";
import UserKit from "../data/UserKit";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  background-color: #f1f1f1;
  color: black;
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

export default function CreateCustomerForm() {
  const [name, setName] = useState("");
  const [organisationNr, setOrganisationNr] = useState("");
  const [vatNr, setVatNr] = useState("");
  const [reference, setReference] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const userKit = new UserKit();

  function handleCreateCustomer() {
    userKit.createCustomar(
      name,
      organisationNr,
      vatNr,
      reference,
      paymentTerm,
      website,
      email,
      phoneNumber
    );
  }

  function renderInput(index, placeholder, stateVarible, stateSetVarible) {
    return (
      <div key={index}>
        <Input
          placeholder={placeholder}
          value={stateVarible}
          onChange={e => stateSetVarible(e.target.value)}
        />
      </div>
    );
  }
  const inputObjects = [
    ["name", name, setName],
    ["organisationNr", organisationNr, setOrganisationNr],
    ["vatNr", vatNr, setVatNr],
    ["reference", reference, setReference],
    ["paymentTerm", paymentTerm, setPaymentTerm],
    ["website", website, setWebsite],
    ["Email", email, setEmail],
    ["Phone", phoneNumber, setPhoneNumber]
  ];
  return (
    <div>
      <h3>Create A New Costumer</h3>

      {inputObjects.map((inputItem, index) => {
        return renderInput(index, inputItem[0], inputItem[1], inputItem[2]);
      })}

      <Button onClick={handleCreateCustomer}>Create Customer</Button>
    </div>
  );
}
