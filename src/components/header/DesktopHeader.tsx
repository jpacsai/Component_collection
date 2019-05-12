import React from 'react';
import { NavLink } from "react-router-dom";

import './DesktopHeader.scss';

export type DesktopHeaderProps = {
  onClick: Function;
}

class DesktopHeader extends React.PureComponent<DesktopHeaderProps> {
  handleClick = () => {
    this.props.onClick();
  }
  render() {
    return (
      <div className="DesktopHeader">
        <NavLink exact to="/" className="Link" activeClassName="selected">
          <span>Home</span>
        </NavLink>
      </div>
    );
  }
}

export default DesktopHeader;
