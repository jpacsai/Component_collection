import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BasicSettingsSlider.scss";

export type BasicSettingsSliderProps = {
  photos: string[];
};

export type BasicSettingsSliderState = {
  dots: boolean;
  infinite: boolean;
  fade: boolean;
  arrows: boolean;
  autoplay: boolean;
};

class BasicSettingsSlider extends React.PureComponent<
  BasicSettingsSliderProps,
  BasicSettingsSliderState
> {
  static defaultProps = {
    photos: [
      "/assets/cats/cat_01.jpg",
      "/assets/cats/cat_02.jpg",
      "/assets/cats/cat_03.jpg",
      "/assets/cats/cat_04.jpg",
      "/assets/cats/cat_05.jpg"
    ]
  };

  state = {
    dots: false,
    infinite: false,
    fade: false,
    arrows: false,
    autoplay: false
  };

  handleChange = (evt: any) => {
    const { checked } = evt.target;
    const { name } = evt.target;
    this.setState(state => ({ ...state, [name]: checked }));
  };

  render() {
    const { photos } = this.props;
    const { dots, infinite, fade, arrows, autoplay } = this.state;

    const settings = {
      dots,
      infinite,
      arrows,
      fade,
      autoplay,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: "progressive" as any
    };

    return (
      <div className="BasicSettingsSlider">
        <h4>Settings</h4>
        <div className="settings">
          <label>
            Arrows
            <input
              type="checkbox"
              name="arrows"
              checked={arrows}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Dots
            <input
              type="checkbox"
              name="dots"
              checked={dots}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Infinite
            <input
              type="checkbox"
              name="infinite"
              checked={infinite}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Autoplay
            <input
              type="checkbox"
              name="autoplay"
              checked={autoplay}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Fade
            <input
              type="checkbox"
              name="fade"
              checked={fade}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <Slider {...settings} className="slider">
          {photos.map((photo, i) => (
            <div key={i}>
              <img src={process.env.PUBLIC_URL + photo} alt="cat" />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default BasicSettingsSlider;
