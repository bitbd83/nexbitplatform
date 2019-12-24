import React, { Component } from 'react';
import item1 from '../../../Assets/ellada/tablet-item-1.jpg';
import item2 from '../../../Assets/ellada/tablet-item-2.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default class DemoCarousel extends Component {
  render() {
    return (
      <Carousel
        autoPlay={true}
        showArrows={false}
        showThumbs={false}
        transitionTime={700}
        stopOnHover={false}
        interval={2000}
        infiniteLoop={true}
      >
        <div>
          <img src={item1} width="100px" height="300px" alt="1" />
        </div>
        <div>
          <img src={item2} width="100px" height="300px" alt="2" />
        </div>
      </Carousel>
    );
  }
}
