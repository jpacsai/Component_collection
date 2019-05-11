import React from "react";
import classnames from 'classnames';
import { Link } from "react-router-dom";

import "./Navigation.scss";

export type NavigationProps = {
  showMenu: boolean;
}

class Navigation extends React.PureComponent<NavigationProps> {
  render() {
    const { showMenu } = this.props;
    return (
      <div className={classnames("Navigation", showMenu ? 'showMenu' : '')}>        
        <Link to="/buttons">
          <span>Buttons</span>
        </Link>
      </div>
    );
  }
}

export default Navigation;
