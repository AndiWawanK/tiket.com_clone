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
    Container,
    Row,
    Col,
    DropdownItem, } from 'reactstrap';

import logo from "../assets/Logo.png";
class Header extends React.Component{
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
            <Container>
                <Row>
                    <Col md="12">
                    <Navbar fixed="top">
                    <NavbarBrand href="/">
                        <img src={logo} className="img-responsive __navLogo" />
                    </NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <i className="fa fa-ellipsis-v" style={{ color: "#fff" }}></i>
                        </NavItem>
                    </Nav>
                </Navbar>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Header;