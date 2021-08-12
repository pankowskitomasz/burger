import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Card from "../../node_modules/react-bootstrap/Card";

class MenuShort extends Component{
    render(){
        return(          
            <Container fluid className="minh-50vh p-5 bg-white d-flex align-items-center">     
                <Row className="mx-0 w-100">
                    <Col xs={12} md={11} lg={10} className="mx-auto">
                        <Row>
                            <Col xs={12} md={6} className="minh-25vh p-2">
                                <Card className="h-100">
                                    <Card.Img src="../img/home/most_popular.jpg"  className="h-100 object-fit"/>
                                    <Card.ImgOverlay className="fw-bold text-shadow lead">
                                        The most popular
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                            <Col xs={12} md={6}>
                                <Row>
                                    <Col xs={12} className="minh-25vh p-2">
                                        <Card className="h-100">
                                            <Card.Img src="../img/home/fun.jpg" className="h-100 object-fit"/>
                                            <Card.ImgOverlay className="fw-bold text-shadow lead">
                                                More Fun
                                            </Card.ImgOverlay>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} className="minh-25vh p-2">
                                    <Card className="h-100">
                                            <Card.Img src="../img/home/taste.jpg" className="h-100 object-fit"/>
                                            <Card.ImgOverlay className="fw-bold text-shadow lead">
                                                Unique Taste
                                            </Card.ImgOverlay>
                                        </Card>
                                    </Col>  
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default MenuShort;