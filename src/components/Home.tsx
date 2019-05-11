import React from 'react';

import Page from './Page';
import './Home.scss';

class Home extends React.PureComponent {
  render() {
    return (
      <Page className="Home">
        <h1>Component collection</h1>
      </Page>
    );
  }
}

export default Home;
