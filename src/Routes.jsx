import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CreateAccount from "./Pages/CreateAccount";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import TerminalDeposit from "./Pages/TerminalDeposit";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/createaccount" component={CreateAccount} />
      <Route path="/deposit" component={TerminalDeposit} />
    </BrowserRouter>
  );
}
