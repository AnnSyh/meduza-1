import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { StateMachineProvider, createStore } from "little-state-machine";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Result from "./Result";

import "./MultyHookForm.css";

createStore({
  data: {}
});



class MultyHookForm extends Component {
  render() {
    return (  
      <StateMachineProvider>
        <h1>1111 Page Form Wizzard</h1>
        <Router>
          <Route exact path="/" element={Step1} />
          <Route path="/step2" element={Step2} />
        <Route path="/result" element={<Result/>} />
        </Router>
      </StateMachineProvider>
    );
  }
}

export default MultyHookForm;