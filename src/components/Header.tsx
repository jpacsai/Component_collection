import React from 'react';
import { Link } from "react-router-dom";

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
        <Link to="/">
          <span>Home</span>
        </Link>
      </div>
    );
  }
}

export default Header;
