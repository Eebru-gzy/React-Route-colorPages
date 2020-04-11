import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./app.css";
import Color from "./components/color";
import Red from "./colors/red";
import Green from "./colors/green";
import Orange from "./colors/orange";
import Form from "./components/form";

class App extends Component {
  state = {
    pages: [
      { link: "/color/red", name: "Red", component: Red },
      { link: "/color/green", name: "Green", component: Green },
      { link: "/color/orange", name: "Orange", component: Orange },
    ],
  };
  render() {
    const { pages } = this.state;
    return (
      <div className="container">
        <Switch>
          {pages.map((page) => (
            <Route
              key={page.name}
              path={page.link}
              component={page.component}
            />
          ))}

          <Route
            path="/color"
            exact
            component={() => <Color pages={pages} />}
          />
          <Route path="/color/form" component={Form} />
          <Redirect from="/" exact to="/color" />
          <Redirect to="/color" />
        </Switch>
      </div>
    );
  }
}

export default App;
