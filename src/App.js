import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import styled from "styled-components";
import "./App.css";
import ConfirmPage from "./pages/ConfirmPage";
import CustomerDetailPage from "./pages/CustomerDetailPage";

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
`;

function App() {
  return (
    <div>
      <Title>Business Project</Title>
      <Switch>
        <Route
          path="/customers/:customer"
          render={props => {
            return <CustomerDetailPage {...props} />;
          }}
        ></Route>

        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/confirm">
          <ConfirmPage />
        </Route>
        <Route path="/">
          <RegisterPage />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
