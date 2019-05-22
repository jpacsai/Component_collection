import React from "react";
import { NavLink } from "react-router-dom";
import Breakpoint, { BreakpointProvider } from "react-socks";

import "./Header.scss";

export type HeaderProps = {
  onClick: Function;
  menuOpen: boolean;
};

class Header extends React.PureComponent<HeaderProps> {
  handleClick = () => {
    this.props.onClick();
  };
  render() {
    const { menuOpen } = this.props;
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <div className="Header">
          <BreakpointProvider>
            <Breakpoint small down className="menu-button">
              <div
                onClick={this.handleClick}
                className={menuOpen ? "menu-open" : ""}
              >
                <i className="fas fa-bars" />
              </div>
            </Breakpoint>
          </BreakpointProvider>
          <NavLink exact to="/" className="Link" activeClassName="selected">
            <span>Home</span>
          </NavLink>
        </div>
      </React.Suspense>
    );
  }
}

export default Header;
