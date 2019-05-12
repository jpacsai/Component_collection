import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { paths } from '../paths';

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

            <Route exact path={paths.HOME_PAGE} component={Home} />
            <Route path={paths.BUTTONS_PAGE} component={ButtonsPage} />
            <Route path={paths.INPUTS_PAGE} component={InputsPage} />
            <Route path={paths.PICKERS_PAGE} component={PickerPage} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
