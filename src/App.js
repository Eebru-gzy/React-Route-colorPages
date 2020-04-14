import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import "./app.css";
import Color from "./components/color";
import Form from "./components/form";
import FormColor from "./components/formColor";

 const colorList = [
  { name: "white", hex: '#fff' },
  { name: "Gray", hex: '#ddd' },
  { name: "Black", hex: '#000' },
]
class App extends Component {
  state = {
    colorList: colorList
  };

  handleChangeforTextField = ({target}) => {
    this.setState({ formInputValue: target.value});
  };

  handleChangeforColorField = ({target}) => {
    this.setState({ formColorValue: target.value});
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    const formValues = [{name:this.state.formInputValue, hex: this.state.formColorValue}]
    const updateValues = formValues.concat(this.state.colorList)
    this.setState({
      colorList: updateValues
    })
    this.props.history.push('/color')
  };

  render() {
    return (
      <div className="container">
        <Switch>
          <Route
            path="/color"
            exact
            component={() => <Color colorList={this.state.colorList}/>}
          />
          <Route path="/formColor/:color" component={FormColor} />
          <Route
            path="/color/form"
            render={ () =>
              <Form
                handleSubmit={this.handleSubmit}
                handleColorChange={this.handleChangeforColorField}
                handleInputChange={this.handleChangeforTextField}
              />
            }
          />
          <Redirect from="/" exact to="/color" />
          <Redirect to="/color" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
