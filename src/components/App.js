import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./Navigation";
import Home from "./Home";
import ButtonsPage from "./buttons/ButtonsPage";
import "./App.css";

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />

          <Route exact path="/" component={Home} />
          <Route path="/buttons" component={ButtonsPage} />

        </div>
      </Router>
    );
  }
}

export default App;
