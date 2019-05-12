import React from 'react';
import classnames from 'classnames';

import './BootstrapButton.scss';

export type BootstrapButtonProps = {
  text: string;
  color?: string;
}

class BootstrapButton extends React.PureComponent<BootstrapButtonProps> {
  render() {
    const { text, color } = this.props;
    return (
      <div className={classnames("BootstrapButton", color ? color : '')}>
        {text}
      </div>
    );
  }
}

export default BootstrapButton;
