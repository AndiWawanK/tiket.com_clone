import React, { Component } from "react";

import { 
    Card,
    Row,
    Col,
    Container
} from "reactstrap";

class UnduhAplikasi extends Component{
    render(){
        return(
            <div className="_unduh_aplikasi text-center">
                <Container>
                <h5 style={{color: "#35405a", marginBottom: 10,paddingTop:20}}>Unduh aplikasi tiket.com sekarang!</h5>
            <Row>
                <div className="col align-self-center _icon_unduh_aplikasi">
                    <img src={require('../assets/googleplay.svg')}/>
                    <img src={require('../assets/appstore.svg')}/>
                </div>
            </Row>
                </Container>
            </div> 
        )
    }
}

export default UnduhAplikasi;