import React from 'react';
import {
    Container,
    Row,
    Col
 } from "reactstrap";

class PenawaranSpesialText extends React.Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col md="12">
                        <div className="_Penawaran_Title_Area">
                            <div className="_Penawaran_Title">Penawaran Spesial</div>
                            <div className="_Penawaran_Subtitle">Penawaran spesial khusus buat kamu</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default PenawaranSpesialText;