import React from 'react';

import Page from '../app-common/Page';
import Section from '../app-common/Section';
import BasicSlider from './BasicSlider';
import './SliderPage.scss';

class SliderPage extends React.PureComponent {
  render() {
    return (
      <Page className="SliderPage" title="Sliders">
        <Section title="react-slick">
          <BasicSlider />
        </Section>
      </Page>
    );
  }
}

export default SliderPage;
