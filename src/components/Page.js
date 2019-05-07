import React from 'react';

import './Page.scss';

class Page extends React.PureComponent {
  render() {
    const { children, className  } = this.props;
    return (
      <div className={`Page ${className}`}>
        {children}
      </div>
    );
  }
}

export default Page;
