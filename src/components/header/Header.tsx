import React from "react";
import { NavLink } from "react-router-dom";
import Breakpoint, { BreakpointProvider } from "react-socks";

import "./Header.scss";

export type HeaderProps = {
  onClick: Function;
};

class Header extends React.PureComponent<HeaderProps> {
  handleClick = () => {
    this.props.onClick();
  };
  render() {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <BreakpointProvider>
          <div className="Header" onClick={this.handleClick}>
            <Breakpoint small down className="menu-button">
              <button  onClick={this.handleClick}>
                Menu
              </button>
            </Breakpoint>
            <NavLink exact to="/" className="Link" activeClassName="selected" >
              <span>Home</span>
            </NavLink>
          </div>
        </BreakpointProvider>
      </React.Suspense>
    );
  }
}

export default Header;
