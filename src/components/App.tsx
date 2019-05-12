import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./header/Header";
import Navigation from "./Navigation";

import Home from "./Home";
import ButtonsPage from "./buttons/ButtonsPage";
import InputsPage from './inputs/InputsPage';
import PickerPage from './pickers/PickerPage';

import "./App.scss";

export type AppState = {
  showMenu?: boolean;
};

class App extends React.PureComponent<AppState> {
  state = {
    showMenu: false
  };

  handleShowMenuToggle = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    const { showMenu } = this.state;
    return (
      <Router>
        <div className="App">
          <Header onClick={this.handleShowMenuToggle} />
          <main>
            <Navigation showMenu={showMenu} />

            <Route exact path="/" component={Home} />
            <Route path="/buttons" component={ButtonsPage} />
            <Route path="/inputs" component={InputsPage} />
            <Route path="/pickers" component={PickerPage} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
