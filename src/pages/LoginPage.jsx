import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import UserKit from "../data/UserKit";
import styled from "styled-components";
import Button from "../components/Button";

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

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  background-color: #f1f1f1;
  color: black;
`;

export default function LoginPage() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const history = useHistory();
  const searchString = history.location.search;
  const urlParameters = new URLSearchParams(searchString);

  const [uid, setUid] = useState(urlParameters.get("uid"));
  const [token, setToken] = useState(urlParameters.get("token"));

  const userKit = new UserKit();

  function handleActivateUser() {
    userKit.activateUser(uid, token).then(() => {
      setUid(null);
      setToken(null);
      history.push("/login");
    });
  }

  function handleLogin() {
    userKit
      .login(loginEmail, loginPassword)
      .then(res => res.json())
      .then(data => {
        userKit.setToken(data.token);
        const success = data.token;
        if (success) {
          history.push("/home");
        } else {
          return <p>wrong password or email</p>;
        }
      });
  }

  return (
    <Div>
      {uid && token ? (
        <Container>
          <h2>Active Account</h2>
          <Button onClick={handleActivateUser} title="Activate User" />
        </Container>
      ) : (
        <Container>
          <h2>Login</h2>
          <Input
            placeholder="Email"
            value={loginEmail}
            onChange={e => setLoginEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            value={loginPassword}
            onChange={e => setLoginPassword(e.target.value)}
          />
          <Button onClick={handleLogin} title="Login" />
        </Container>
      )}
    </Div>
  );
}
