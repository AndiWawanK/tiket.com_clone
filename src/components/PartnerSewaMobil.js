import React, { Component } from 'react';
import {
  Container,
} from 'reactstrap';


class PartnerSewaMobil extends Component {
  render() {
    return (
        <Container>
            <div className="_parner_sewa_mobil text-center">
                <h5 style={{color: "#35405a", marginBottom: 30}}>Partner Sewa Mobil</h5>
                <img src={require('../assets/partnersewamobil.png')} className="img-fluid"/>
            </div>
        </Container>
    );
  }
}


export default PartnerSewaMobil;