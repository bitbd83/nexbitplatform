import React, { Component } from 'react';
import item1 from '../../../Assets/ellada/phone-item-1.png';
import item2 from '../../../Assets/ellada/phone-item-2.png';
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
        axis="vertical"
        style={{ borderRadius: '50%' }}
      >
        <div>
          <img src={item1} width="50px" height="480px" alt="1" />
        </div>
        <div>
          <img src={item2} width="50px" height="480px" alt="2" />
        </div>
      </Carousel>
    );
  }
}
