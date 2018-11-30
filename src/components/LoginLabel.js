import React from 'react';
import {
    Button, 
    Form, 
    FormGroup,
    Label,
    Input,
    Container,
    FormText,
    Row,
    Col 
  } from 'reactstrap';

class LoginLabel extends React.Component {
    render(){
        return (
            <Container>
                <Row>
                    <Col md="12">
                        <div className="_login_area">
                            <div className="_login_box">
                                <div className="_login_box_text">Login untuk lihar rekomendasi yang lebih oke</div>
                                <Button color="primary" className="_login_box_button">Log in</Button>
                            </div>
                        </div>                    
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default LoginLabel;