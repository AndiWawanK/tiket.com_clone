import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container,
} from 'reactstrap';

const items = [
  {
    src: require("../assets/coba1.png"),
  },
  {
    src: require("../assets/coba2.png"),
  }
];

class PartnerMaskapai extends Component {
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
          className="_item_partner_maskapai text-center"
        >
          <img className="img-responsive _item_partner_maskapai_image" src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.header} />
        </CarouselItem>
      );
    });

    return (
        <Container>
            <div className="_parner_maskapai">
                <h5 className="text-center" style={{color: "#35405a", marginBottom: 10}}>Partner Maskapai</h5>
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                    className="_carousel_why_tiket_com"
                >
                    {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} /> */}
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} style={{color: "#ddd"}} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} style={{color: "#ddd"}} />
                </Carousel>
            </div>
        </Container>
    );
  }
}


export default PartnerMaskapai;