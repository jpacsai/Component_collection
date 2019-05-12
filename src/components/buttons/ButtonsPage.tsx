import React from 'react';

import Page from '../app-common/Page';
import Section from '../app-common/Section';
import BootstrapButton from './BootstrapButton';
import './ButtonsPage.scss';

class ButtonsPage extends React.PureComponent {
  render() {
    return (
      <Page className="ButtonsPage" title="Buttons">
        <Section title="Bootstrap style buttons">
          <div className="bootstrap-button-group">
            <BootstrapButton text="Primary"/>
            <BootstrapButton text="Secondary" color="secondary"/>
          </div>
        </Section>
      </Page>
    );
  }
}

export default ButtonsPage;
