import React from "react";
import classnames from 'classnames';
import { NavLink } from "react-router-dom";

import "./Navigation.scss";

export type NavigationProps = {
  showMenu: boolean;
}

class Navigation extends React.PureComponent<NavigationProps> {
  render() {
    const { showMenu } = this.props;
    return (
      <div className={classnames("Navigation", showMenu ? 'showMenu' : '')}>        
        <NavLink to="/buttons" className="Link" activeClassName="selected">
          <span>Buttons</span>
        </NavLink>
        <NavLink to="/inputs" className="Link" activeClassName="selected">
          <span>Inputs</span>
        </NavLink>
      </div>
    );
  }
}

export default Navigation;
