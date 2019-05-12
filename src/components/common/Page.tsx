import React from 'react';

import './Page.scss';

export type PageProps = {
  className: string;
  title?: string;
}

class Page extends React.PureComponent<PageProps> {
  render() {
    const { children, className, title  } = this.props;
    return (
      <div className={`Page ${className}`}>
        {title && <h2 className="title">{title}</h2>}
        {children}
      </div>
    );
  }
}

export default Page;
