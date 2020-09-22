import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import styled from "styled-components";
import "./App.css";
import ConfirmPage from "./pages/ConfirmPage";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import { GlobalStyles } from "./styles/GlobalStyles";

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
`;

function App() {
  return (
    <div>
      <GlobalStyles></GlobalStyles>
      <Title>Business Project</Title>
      <Switch>
        <Route path="/customers/:id" component={CustomerDetailPage} />

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
