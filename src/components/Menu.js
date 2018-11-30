import React, { Component } from "react";
import { 
    Card,
    CardImg,
    CardTitle,
    Row,
    Col,
    Container
 } from "reactstrap";

class Menu extends Component{
    render(){
        return(  
            <div className="menu_tiketcom">
                <Container style={{marginBottom: 50}}>
                    <div className="col-md-12 text-center _menu_title">
                        <h4>Hey kamu, mau ke mana?</h4>
                    </div>
                
                    <Row>
                        <Col xs="4" className="_wbox">
                            <Card body className="_box text-center">
                                <CardImg top width="100%" src={require('../assets/pesawat.svg')} />
                                <CardTitle className="_title_card">Pesawat</CardTitle>
                            </Card>
                        </Col>
                        <Col xs="4" className="_wbox">
                            <Card body className="_box text-center">
                                <CardImg top width="100%" src={require('../assets/hotel.svg')} />
                                <CardTitle className="_title_card">Hotel</CardTitle>
                            </Card>
                        </Col>
                        <Col xs="4" className="_wbox">
                            <Card body className="_box text-center">
                                <CardImg top width="100%" src={require('../assets/kereta.svg')} />
                                <CardTitle className="_title_card">Kereta Api</CardTitle>
                            </Card>
                        </Col>
                        <Col xs="4" className="_wbox">
                            <Card body className="_box text-center">
                                <CardImg top width="100%" src={require('../assets/mobil.svg')} />
                                <CardTitle className="_title_card">Sewa Mobil</CardTitle>
                            </Card>
                        </Col>
                        <Col xs="4" className="_wbox">
                            <Card body className="_box text-center">
                                <CardImg top width="100%" src={require('../assets/entertainment.svg')} />
                                <CardTitle className="_title_card">Entertainment</CardTitle>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Menu;