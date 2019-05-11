import React from "react";
import classnames from "classnames";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";
import Navigation from "./Navigation";
import Home from "./Home";
import ButtonsPage from "./buttons/ButtonsPage";
import "./App.scss";

export type AppState = {
  showMenu?: boolean;
}

class App extends React.PureComponent<AppState> {
  state = {
    showMenu: false
  }

  handleShowMenuToggle = () => {
    console.log(!this.state.showMenu);
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    return (
      <Router>
        <div className={"App"}>
          <Header onClick={this.handleShowMenuToggle}/>
          <Navigation />

          <Route exact path="/" component={Home} />
          <Route path="/buttons" component={ButtonsPage} />
        </div>
      </Router>
    );
  }
}

export default App;
