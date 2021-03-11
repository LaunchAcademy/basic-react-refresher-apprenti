import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BarShowContainer from "./BarShowContainer";
import BarsIndexContainer from "./BarsIndexContainer";
// import data from data.js file --- last week's pattern 

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={BarsIndexContainer} />
        <Route exact path="/bars" component={BarsIndexContainer} />
        <Route exact path="/bars/:id" component={BarShowContainer} />
      </Switch>
    </BrowserRouter>
    // <BarsIndexContainer/>
  );
};

export default App;
