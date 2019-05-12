import React from 'react';

import './Section.scss';

export type SectionProps = {
  title?: string;
}

class Section extends React.PureComponent<SectionProps> {
  render() {
    const { children, title  } = this.props;
    return (
      <div className="Section">
        {title && <h3 className="title">{title}</h3>}
        {children}
      </div>
    );
  }
}

export default Section;
