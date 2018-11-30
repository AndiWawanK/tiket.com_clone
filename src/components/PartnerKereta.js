import React, { Component } from 'react';
import {
  Container,
} from 'reactstrap';

class PartnerKereta extends Component {
  render() {
    return (
        <Container>
            <div className="_parner_kereta text-center">
                <h5 style={{color: "#35405a", marginBottom: 30}}>Partner Kereta Api</h5>
                <img src={require('../assets/partnerkereta.png')} className="img-fluid"/>
            </div>
        </Container>
    );
  }
}


export default PartnerKereta;