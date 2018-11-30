import React, { Component } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody

} from 'reactstrap';
import Slider from "react-slick";

class Hotel extends Component {
    state = {
        display: true,
        width: 100
    };
    render() {
        const settings = {
            className: "center",
            infinite: true,
            centerPadding: "60px",
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1 
                }
                },
                {
                    breakpoint: 768,
                    settings: 'unslick',
                  }
              ]
        };
        return (
            <Container>

                <div className="_hotel_title">
                    <h5>Harga Gledek Hotel Bintang 5</h5>
                    <p>Yeay! Harga gledek samber hotel mewah favoritmu!</p>
                </div>


                <Slider {...settings}>




    
                            <div className="_boxHotel">
                                <img src={require("../assets/hotel1.jpg")} />
                                <CardTitle>Hotel Borobudur Jakarta</CardTitle>
                                <p>Liburan asyik di hotel mewah ini</p>
                            </div>      
    
                            <div className="_boxHotel">
                                <img src={require("../assets/hotel1.jpg")} />
                                <CardTitle>Hotel Borobudur Jakarta</CardTitle>
                                <p>Liburan asyik di hotel mewah ini</p>
                            </div>

                            <div className="_boxHotel">
                                <img src={require("../assets/hotel1.jpg")} />
                                <CardTitle>Hotel Borobudur Jakarta</CardTitle>
                                <p>Liburan asyik di hotel mewah ini</p>
                            </div>
         
                 
                    
                        {/* <div className="col-12">
                            <Card className="_boxHotel">
                                <img src={require("../assets/hotel2.jpg")} />
                                <CardTitle>Padma Hotel Bandung</CardTitle>
                                <p>Nginep di sini bikin liburan nyaman</p>
                            </Card>
                        </div>

                        <div className="col-12">
                            <Card className="_boxHotel">
                                <img src={require("../assets/hotel2.jpg")} />
                                <CardTitle>Padma Hotel Bandung</CardTitle>
                                <p>Nginep di sini bikin liburan nyaman</p>
                            </Card>
                        </div> */}

                

                </Slider>

            </Container>
        );
    }
}

export default Hotel;