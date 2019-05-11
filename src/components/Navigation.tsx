import React from "react";
import classnames from 'classnames';
import { Link } from "react-router-dom";

import "./Navigation.scss";

export type NavigationProps = {
  // showMenu: boolean;
}

export type NavigationState = {
  menuOpen: boolean;
}

class Navigation extends React.PureComponent<NavigationProps, NavigationState> {
  state = {
    menuOpen: true
  }

  handleMenuToggle = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    // const { showMenu } = this.props;
    const { menuOpen } = this.state;
    return (
      <div className={classnames("Navigation", /* showMenu ? 'showMenu' : '' */)}>
        <Link to="/">
          <span>Home</span>
        </Link>
        
        <Link to="/buttons">
          <span>Buttons</span>
        </Link>
      </div>
    );
  }
}

export default Navigation;
