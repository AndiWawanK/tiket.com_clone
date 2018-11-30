import React, { Component } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardTitle,

} from 'reactstrap';
import Slider from "react-slick";

class SurabayaPesona extends Component {
    state = {
        display: true,
        // width: 600
    };
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1.1,
            slidesToScroll: 1
        };
        return (
            <Container>
              
                    <div className="_hotel_title">
                    <h5>Surabaya dan Pesonanya</h5>
                    <p>Semua hal di Surabaya bisa bikin kamu terpana!</p>
                </div>


                <Slider {...settings}>

                    {/* <div className="col-xs-6"> */}
                        <div className="_boxPesona">
                            <img src={require("../assets/surabaya.jpg")} />
                            <CardTitle>Surabaya Punya Destinasi Keren</CardTitle>
                            <p>Pergi ke Surabaya bisa seperti ke luar negeri!</p>
                        </div>
                    {/* </div> */}

                    {/* <div className="col-xs-6"> */}
                        <div className="_boxPesona">
                            <img src={require("../assets/kulinersurabaya.jpg")} />
                            <CardTitle>Kuliner Malam di Surabaya</CardTitle>
                            <p>Wisata kuliner saat malam hari di Surabaya adalah ide bagus!</p>
                        </div>
                    {/* </div> */}

                    {/* <div className="col-xs-6"> */}
                        <div className="_boxPesona">
                            <img src={require("../assets/hangoutsurabaya.jpg")} />
                            <CardTitle>Tempat Hangout di Surabaya</CardTitle>
                            <p>Surabaya juga punya tempat hangout yang asyik!</p>
                        </div>
                    {/* </div> */}
                
                </Slider>
                
       
            </Container >
        );
    }
}

export default SurabayaPesona;