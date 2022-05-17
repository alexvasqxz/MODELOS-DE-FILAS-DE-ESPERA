import React from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./components/HomePage";
import ServerOne from './components/MM1'
import ServerK from './components/MMsK'
import MG1 from "./components/MG1";
import ServerS from './components/MMs'
import MG1E from "./components/MG1_E";

function App() {
  return (
    <HashRouter>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/mm1" component={ServerOne} />
        <Route exact path="/mmk" component={ServerK} />
        <Route exact path="/mms" component={ServerS} />
        <Route exact path="/mg1" component={MG1} />
        <Route exact path="/mg1e" component={MG1E} />
      </Switch>
    </HashRouter>
  );

  
}

const redirectToHome = () => <Redirect to="/" />;

export default App;
