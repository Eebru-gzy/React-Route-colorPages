import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./app.css";
import Color from "./components/color";
import Red from "./colors/red";
import Green from "./colors/green";
import Orange from "./colors/orange";
import Form from "./components/form";

const App = () => {
 return (
  <div className="container">
   <Switch>
    <Route path="/color/red" component={Red} />
    <Route path="/color/green" component={Green} />
    <Route path="/color/orange" component={Orange} />
    <Route path="/color" exact component={Color} />
    <Route path="/color/form" component={Form} />
    <Redirect from="/" exact to="/color" />
    <Redirect to="/color" />
   </Switch>
  </div>
 );
};

export default App;
