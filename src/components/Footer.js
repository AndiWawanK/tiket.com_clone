import React from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    Row,
    Col,
    Container,
    DropdownItem, } from 'reactstrap';

import logo from "../logo.svg";
class Footer extends React.Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render(){
        return(
            <footer className="_footer_index">
                <Container>
                <Row>
                    <Col xs="4">
                        <a href="#">
                            <img src={require("../assets/footer_home.svg")} alt="home" className="_image_footer_menu"/>
                            <div className="_footer_text active">Home</div>
                        </a>
                    </Col>  
                    <Col xs="4">
                        <a href="#">
                            <img src={require("../assets/footer_order.svg")} alt="home" className="_image_footer_menu"/>
                            <div className="_footer_text active">Check Order</div>
                        </a>
                    </Col>
                    <Col xs="4">
                        <a href="#">
                            <img src={require("../assets/footer_profile.svg")} alt="home" className="_image_footer_menu"/>
                            <div className="_footer_text active">Contact</div>
                        </a>
                    </Col>
                </Row>
                </Container>
            </footer>
        )
    }
}

export default Footer;