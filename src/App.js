import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./Views/Home";
import About from "./Views/About";
import Contact from "./Views/Contact";
import SwissArabian from "./Views/SwissArabian";
import Nabeel from "./Views/Nabeel";
import iCare from "./Views/iCare";
import SectoinReusable from "./Views/SectoinReusable";


function App() {
  return (
    <div>
      <Router>
        <Switch >
          <Route exact path="/" component={Home} ></Route>
          <Route path="/About" component={About} ></Route>
          <Route path="/Contact" component={Contact} ></Route>
          <Route path="/SwissArabian" component={SwissArabian} ></Route>
          <Route path="/Nabeel" component={Nabeel} ></Route>
          <Route path="/iCare" component={iCare} ></Route>
          <Route path="/SectoinReusable" component={SectoinReusable} ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

