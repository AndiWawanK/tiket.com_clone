import React, { Component } from "react";

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';

  const items = [
    {
      src: require('../assets/slide1.jpg'),
    },
    {
      src: require('../assets/slide2.jpg'),
    },
    {
      src: require('../assets/slide3.jpg'),
    }
  ];

class Carousels extends Component{
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }
    
      onExiting() {
        this.animating = true;
      }
    
      onExited() {
        this.animating = false;
      }
      
      next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
      }

      goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
      }
    
      render() {
        const { activeIndex } = this.state;
    
        const slides = items.map((item) => {
          return (
            <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.src}
              className="_carousel_header"
            >
              <img src={item.src} alt={item.altText} />
              <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
          );
        });
    
        return (
          <div>

            <Carousel
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
            >
              {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} /> */}
              {slides}
              {/* <CarouselControl direction="prev" directionText="Previous" />
            <CarouselControl direction="next" directionText="Next"/> */}
              <div className="button_count_slide">
                <p>1/2</p>
              </div>
              <div className="button_lihat_promo">
                <p>Lihat Semua Promo</p>
              </div>
            </Carousel>
            <div className="image_border">
              <img src={require("../assets/bottom_slide.png")} />
            </div>
          </div>
        );
      }
    }

export default Carousels;