import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import UserKit from "../data/UserKit";
import Button from "../styles/Button";
import Container from "../styles/Container";

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
        <input
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
      <Button onClick={handleRegister}>Register</Button>
      <p>
        Already have an account? Press <Link to={`/login`}>here</Link>
      </p>
    </Container>
  );
}
