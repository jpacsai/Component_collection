import React from "react";

import Page from "../app-common/Page";
import Section from "../app-common/Section";
import BasicSlider from "./BasicSlider";
import BasicSettingsSlider from "./BasicSettingsSlider";
import "./SliderPage.scss";

class SliderPage extends React.PureComponent {
  render() {
    return (
      <Page className="SliderPage" title="Sliders">
        <Section title="react-slick">
          <div className="slider-container">
            <BasicSlider />
            <BasicSettingsSlider />
          </div>
        </Section>
      </Page>
    );
  }
}

export default SliderPage;
