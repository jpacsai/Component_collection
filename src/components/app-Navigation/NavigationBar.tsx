import React from "react";
import classnames from 'classnames';
import { NavLink } from "react-router-dom";
import { paths } from '../../paths';

import "./NavigationBar.scss";

export type NavigationProps = {
  showMenu: boolean;
}

class Navigation extends React.PureComponent<NavigationProps> {
  render() {
    const { showMenu } = this.props;
    return (
      <div className={classnames("Navigation", showMenu ? 'showMenu' : '')}>        
        <NavLink to={paths.BUTTONS_PAGE} className="Link" activeClassName="selected">
          <span>Buttons</span>
        </NavLink>
        <NavLink to={paths.INPUTS_PAGE} className="Link" activeClassName="selected">
          <span>Inputs</span>
        </NavLink>
        <NavLink to={paths.PICKERS_PAGE} className="Link" activeClassName="selected">
          <span>Pickers</span>
        </NavLink>
        <NavLink to={paths.SLIDERS_PAGE} className="Link" activeClassName="selected">
          <span>Sliders</span>
        </NavLink>
      </div>
    );
  }
}

export default Navigation;
