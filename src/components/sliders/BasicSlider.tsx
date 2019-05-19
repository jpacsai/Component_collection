import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './BasicSlider.scss';

export type BasicSliderProps = {
  photos: string[];
}

class BasicSlider extends React.PureComponent<BasicSliderProps> {
  static defaultProps = {
    photos: [
      '/assets/cats/cat_01.jpg',
      '/assets/cats/cat_02.jpg',
      '/assets/cats/cat_03.jpg',
      '/assets/cats/cat_04.jpg',
      '/assets/cats/cat_05.jpg'
    ]
  }

  render() {
    const { photos } = this.props;

    const settings = {
      dots: false,
      infinite: false,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: 'progressive' as any
    };

    return (
      <div className="BasicSlider">
        <h4>Basic</h4>
        <Slider {...settings} className='slider'>
          {photos.map((photo, i) => (
            <div key={i} className='image'>
              <img src={process.env.PUBLIC_URL + photo} alt="cat"/>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default BasicSlider;
