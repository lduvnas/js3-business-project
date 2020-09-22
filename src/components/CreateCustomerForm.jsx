import React, { useState, useContext } from "react";
import UserKit from "../data/UserKit";
import { CustomerListContext } from "../contexts/CustomerListContext";
import Button from "./Button";

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
  const { setCustomerList } = useContext(CustomerListContext);

  function handleCreateCustomer() {
    userKit
      .createCustomar(
        name,
        organisationNr,
        vatNr,
        reference,
        paymentTerm,
        website,
        email,
        phoneNumber
      )
      .then(() => {
        userKit
          .getCustomerList()
          .then(res => res.json())
          .then(data => setCustomerList(data.results));
      });

    setName("");
    setOrganisationNr("");
    setVatNr("");
    setReference("");
    setPaymentTerm("");
    setWebsite("");
    setEmail("");
    setPhoneNumber("");
  }

  function renderInput(index, placeholder, stateVarible, stateSetVarible) {
    return (
      <div key={index}>
        <input
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
      <Button onClick={handleCreateCustomer} title="Create Customer" />
    </div>
  );
}
