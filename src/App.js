import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./Views/Home";
import About from "./Views/About";
import Contact from "./Views/Contact";
import Perfumes from "./Views/Perfumes";
import Sprays from "./Views/Sprays";
import SectionCarousel from "./Views/SectionCarousel";


function App() {
  return (
    <div>
      <Router>
        <Switch >
          <Route exact path="/" component={Home} ></Route>
          <Route path="/About" component={About} ></Route>
          <Route path="/Contact" component={Contact} ></Route>
          <Route path="/Perfumes" component={Perfumes} ></Route>
          <Route path="/Sprays" component={Sprays} ></Route>
          <Route path="/SectionCarousel" component={SectionCarousel} ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

