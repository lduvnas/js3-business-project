import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import styled from "styled-components";

import ConfirmPage from "./pages/ConfirmPage";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import { CustomerListContext } from "./contexts/CustomerListContext";
import { GlobalStyles } from "./styles/GlobalStyles";

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
`;

function App() {
  const [customerList, setCustomerList] = useState(null);
  return (
    <div className="App">
      <GlobalStyles></GlobalStyles>
      <Title>Business Project</Title>
      <CustomerListContext.Provider value={{ customerList, setCustomerList }}>
        <Switch>
          <Route path="/customers/:id" component={CustomerDetailPage} />

          <Route path="/home" component={HomePage} />

          <Route path="/login" component={LoginPage} />

          <Route path="/confirm" component={ConfirmPage} />

          <Route path="/" component={RegisterPage} />
        </Switch>
      </CustomerListContext.Provider>
    </div>
  );
}
export default App;
