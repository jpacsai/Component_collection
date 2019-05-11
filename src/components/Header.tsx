import React from 'react';

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
        <button onClick={this.handleClick}>Menu</button>
      </div>
    );
  }
}

export default Header;
