import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  CardDeck,
  CardBody,
  CardSubtitle,
  CardImg,
  Button
} from "reactstrap";
import Slider from "react-slick";

class PenawaranSpesialSlide extends Component {
  state = {
    display: true
  };
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
        breakpoint: 480,
        settings: {
          slidesToShow:1,
          slidesToScroll: 1 
        }
        }
      ]
    };

    var bg1 = require("../assets/penawaranSpesial_1.jpg");
    var bg2 = require("../assets/penawaranSpesial_2.jpg");
    var bg3 = require("../assets/penawaranSpesial_3.jpg");
    return (
      <Container>
          <Row>
              <Col md="12">
              <div className="_landscape_card">
        <Slider {...settings} style="outline= none;">
            <div className="_Penawaran_Slide">
              <Card>
                <a href="#">
                <div className="_Penawaran_image_box" style={ { backgroundImage: "url("+bg1+")"}}>
                </div>
                <div className="_detail">
                    <CardTitle>
                      Tix Deals
                    </CardTitle>
                    <CardSubtitle>Lebih murah Checkin Malam ini</CardSubtitle>
                    </div>
                </a>
              </Card>
            </div>
            <div className="_Penawaran_Slide">
            <a href="#">
                <Card className="_Penawaran_Card">
                    <div className="_Penawaran_image_box" style={ { backgroundImage: "url("+bg2+")"}}>
                    </div>
                    <div className="_detail">
                    <CardTitle>
                      Tix Deals
                    </CardTitle>
                    <CardSubtitle>Lebih murah Checkin Malam ini</CardSubtitle>
                    </div>
                </Card>
                </a>
            </div>
            <div className="_Penawaran_Slide">
            <a href="#">
                <Card className="_Penawaran_Card">
                <div className="_Penawaran_image_box" style={ { backgroundImage: "url("+bg3+")"}}>
                    </div>
                    <div className="_detail">
                    <CardTitle>
                      Tix Deals
                    </CardTitle>
                    <CardSubtitle>Bisa Dicicil</CardSubtitle>
                    </div>
                </Card>
                </a>
            </div>
        </Slider>
        </div>
              </Col>
          </Row>
      </Container>
    );
  }
}

export default PenawaranSpesialSlide;
