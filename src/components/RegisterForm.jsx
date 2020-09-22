import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import UserKit from "../data/UserKit";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  width: 50%;
  background-color: white;
  padding: 3rem;
  box-shadow: 0 1px 15px rgba(113, 113, 113, 0.06),
    0 5px 12px rgba(211, 211, 211, 0.08);
  border-radius: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  background-color: #f1f1f1;
  color: black;
`;

export default function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [organisationKind, setOrganisationKind] = useState("");

  const history = useHistory();

  const userKit = new UserKit();

  function handleRegister() {
    userKit.register(
      firstName,
      lastName,
      email,
      password,
      organisationName,
      organisationKind
    );
    history.push("/confirm");
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
    ["First Name", firstName, setFirstName],
    ["Last Name", lastName, setLastName],
    ["Email", email, setEmail],
    ["Password", password, setPassword],
    ["Organistaion Name", organisationName, setOrganisationName],
    ["Organistion Kind (0,1,2)", organisationKind, setOrganisationKind]
  ];
  return (
    <Container>
      <h2>Register</h2>
      <p>Enter details to register</p>

      {inputObjects.map((inputItem, index) => {
        return renderInput(index, inputItem[0], inputItem[1], inputItem[2]);
      })}
      <Button onClick={handleRegister} title="Register" />
      <p>
        Already have an account? Press <Link to={`/login`}>here</Link>
      </p>
    </Container>
  );
}
