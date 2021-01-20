import React from "react";
import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import { Route, Switch } from "react-router-dom";
import Shop from "./Pages/Shop/Shop";
import Header from "./Components/Header/Header";
import SignInAndSignUp from "./Pages/SignInAndSignUp/SignInAndSignUp";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
