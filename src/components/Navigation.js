import React from "react";
import { Link } from "react-router-dom";

import "./Navigation.scss";

class Navigation extends React.PureComponent {
  render() {
    return (
      <div className="Navigation">
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
