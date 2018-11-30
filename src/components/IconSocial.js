import React, { Component } from "react";

import { 
    Card,
    Row,
    Col,
    Container
} from "reactstrap";

class IconSocial extends Component{
    render(){
        return(
            <div className="_icon_social text-center">
                <Container>
                <Row>
                    <div className="col align-self-center _core_icon_social">
                        <ul>
                            <li><a href="/">
                                <img src={require("../assets/facebook.svg")} />
                            </a></li>
                            <li><a href="/">
                                <img src={require("../assets/instagram.svg")} />
                            </a></li>
                            <li><a href="/">
                                <img src={require("../assets/youtube.svg")} />
                            </a></li>
                            <li><a href="/">
                                <img src={require("../assets/twitter.svg")} />
                            </a></li>
                            <li><a href="/">
                                <img src={require("../assets/linkedin.svg")} />
                            </a></li>
                        </ul>
                    </div>
                </Row>
                </Container>
            </div>
        )
    }
}

export default IconSocial;