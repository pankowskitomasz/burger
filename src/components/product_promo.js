import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Card from "../../node_modules/react-bootstrap/Card";

class ProductPromo extends Component{
    render(){
        return(          
            <Container fluid className="minh-50vh d-flex align-items-center p-5 bg-white">     
                <Row className="mx-0 w-100">
                    <Col xs={12} md={11} xl={10} className="mx-auto">
                        <Row>
                            <Col xs={12} className="text-center text-dark-brw my-4">
                                <h3 className="display-4 fw-bold">
                                    Our top burgers
                                </h3>
                                <p className="text-muted w-75 mx-auto">
                                    Our mission is to creatively fuse familiar flavors of American 
                                    fare with the unique flavors of Korean Cuisine to our diners. 
                                </p>
                            </Col>
                            <Col xs={12} md={6} lg={4} className="minh-25vh p-3 text-center">
                                <img src="../img/offer/burger_1.png" alt="burger" className="mx-auto img-fluid"/>
                                <div className="mx-auto text-dark-brw py-2">
                                    <h4 className="fw-bold">
                                        Beef Burger
                                    </h4>
                                    <p className="initialism text-muted">
                                        Packed with onions and herbs for extra flavour,
                                        that are perfect for topping with cheese, lettuce 
                                        and tomato, and sandwiching between floury buns
                                    </p>
                                </div>
                            </Col>
                            <Col xs={12} md={6} lg={4} className="minh-25vh p-3 text-center">
                                <img src="../img/offer/burger_2.png" alt="burger" className="mx-auto img-fluid"/>
                                <div className="mx-auto text-dark-brw py-2">
                                    <h4 className="fw-bold">
                                        Chicken Burger
                                    </h4>
                                    <p className="initialism text-muted">
                                        Chicken burger have been given a Korean kick thanks to a tangy 
                                        dark soy sauce and ginger marinade
                                    </p>
                                </div>
                            </Col>
                            <Col xs={12} md={6} lg={4} className="minh-25vh p-3 text-center">
                                <img src="../img/offer/burger_3.png" alt="burger" className="mx-auto img-fluid"/>
                                <div className="mx-auto text-dark-brw py-2">
                                    <h4 className="fw-bold">
                                        Pork Burger
                                    </h4>
                                    <p className="initialism text-muted">
                                        The classic combination of pork and pear works wonderfully and 
                                        gives a burger with a gorgeous natural sweetness.Topped with 
                                        sticky cider onions
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ProductPromo;