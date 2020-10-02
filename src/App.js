import React, { useState } from "react";
import { HashRouter, Route } from "react-router-dom";

import StepOne from "./components/step1.component";
import StepTwo from "./components/step2.component";
import StepThree from "./components/step3.component";
import StepFour from "./components/step4.component";

import "./App.css";
import MenuBar from "./components/menubar.component";

function App() {
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <MenuBar />
        <Route exact path="/" component={StepOne} />
        <Route path="/step2/:id" component={StepTwo} />
        <Route path="/step3/:id" component={StepThree} />
        <Route path="/step4/review" component={StepFour} />
      </HashRouter>
    </div>
  );
}

export default App;
