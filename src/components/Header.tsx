import React from 'react';
import { NavLink } from "react-router-dom";

import './Header.scss';

export type HeaderProps = {
  onClick: Function;
}

class Header extends React.PureComponent<HeaderProps> {
  handleClick = () => {
    this.props.onClick();
  }
  render() {
    return (
      <div className="Header">
        <button className="menu-button" onClick={this.handleClick}>Menu</button>
        <NavLink exact to="/" className="Link" activeClassName="selected">
          <span>Home</span>
        </NavLink>
      </div>
    );
  }
}

export default Header;
