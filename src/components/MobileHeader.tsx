import React from 'react';
import { NavLink } from "react-router-dom";

import './MobileHeader.scss';

export type MobileHeaderProps = {
  onClick: Function;
}

class MobileHeader extends React.PureComponent<MobileHeaderProps> {
  handleClick = () => {
    this.props.onClick();
  }
  render() {
    return (
      <div className="MobileHeader">
        <button className="menu-button" onClick={this.handleClick}>Menu</button>
        <NavLink exact to="/" className="Link" activeClassName="selected">
          <span>Home</span>
        </NavLink>
      </div>
    );
  }
}

export default MobileHeader;
