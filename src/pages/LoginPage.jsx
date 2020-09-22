import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import UserKit from "../data/UserKit";
import Button from "../components/Button";

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
    <div>
      {uid && token ? (
        <div className="container">
          <h2>Active Account</h2>
          <Button onClick={handleActivateUser} title="Activate User" />
        </div>
      ) : (
        <div className="container">
          <h2>Login</h2>
          <input
            placeholder="Email"
            value={loginEmail}
            onChange={e => setLoginEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            value={loginPassword}
            onChange={e => setLoginPassword(e.target.value)}
          />
          <Button onClick={handleLogin} title="Login" />
        </div>
      )}
    </div>
  );
}
