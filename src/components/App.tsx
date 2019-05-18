import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { paths } from '../paths';

import Header from "./app-Header/Header";
import Navigation from "./app-Navigation/NavigationBar";

import Home from "./app-HomePage/Home";
import ButtonsPage from "./buttons/ButtonsPage";
import InputsPage from './inputs/InputsPage';
import PickerPage from './pickers/PickerPage';
import SliderPage from './sliders/SliderPage';

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
          <Header onClick={this.handleShowMenuToggle} menuOpen={showMenu} />
          <main>
            <Navigation showMenu={showMenu}/>

            <Route exact path={paths.HOME_PAGE} component={Home} />
            <Route path={paths.BUTTONS_PAGE} component={ButtonsPage} />
            <Route path={paths.INPUTS_PAGE} component={InputsPage} />
            <Route path={paths.PICKERS_PAGE} component={PickerPage} />
            <Route path={paths.SLIDERS_PAGE} component={SliderPage} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
