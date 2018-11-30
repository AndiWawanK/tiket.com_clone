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
    src: require("../assets/tixpoint.svg"),
    header: 'TIX Point & TIX Spot',
    caption: 'Dapatkan TIX Point dan nikmati hematnya TIX Spot'
  },
  {
    src: require("../assets/pembayaran.svg"),
    header: 'Pembayaran Aman dan Mudah',
    caption: 'Tersedia berbagai metode pembayaran yang terjamin keamanannya.'
  },
  {
    src: require("../assets/layanan.svg"),
    header: 'Layanan Pelanggan 24/7',
    caption: 'Kami selalu siap membantu melancarkan perjalanan Anda.'
  },
  {
    src: require("../assets/promo.svg"),
    header: 'Promo Terbaik Setiap Hari',
    caption: 'Selalu dapatkan harga termurah, sepanjang tahun.'
  }
];

class WhyTiketCom extends Component {
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
          className="_item_carousel_why_tiket_com text-center"
        >
          <img className="__item_why_tiketcom_carousel_image" src={item.src} alt={item.altText} />
          <CarouselCaption className="_carousel_caption" captionText={item.caption} captionHeader={item.header} />
        </CarouselItem>
      );
    });

    return (
        <Container>
          <div className="_whytiketcom">
            <h5 className="text-center" style={{ color: "#35405a", marginBottom: 40 }}>Kenapa memesan di tiket.com?</h5>
            <Carousel
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
              className="_carousel_why_tiket_com"
            >
              {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} /> */}
              {slides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} style={{ color: "#ddd" }} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} style={{ color: "#ddd" }} />
            </Carousel>
          </div>
        </Container>
    );
  }
}


export default WhyTiketCom;