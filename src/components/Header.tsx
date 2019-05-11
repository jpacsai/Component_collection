import React from 'react';
import Breakpoint, { BreakpointProvider } from 'react-socks';

const MobileHeader = React.lazy(() => import("./MobileHeader"));
const DesktopHeader = React.lazy(() => import("./DesktopHeader"));

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
      <BreakpointProvider>
        <div className="example">
          <Breakpoint small down>
            <MobileHeader onClick={this.handleClick}/>
          </Breakpoint>
          <Breakpoint medium up>
            <DesktopHeader onClick={this.handleClick}/>
          </Breakpoint>
        </div>
      </BreakpointProvider>
    );
  }
}

export default Header;
