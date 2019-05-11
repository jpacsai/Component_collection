import React from 'react';

import './Page.scss';

export type PageProps = {
  className: string;
}

class Page extends React.PureComponent<PageProps> {
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
