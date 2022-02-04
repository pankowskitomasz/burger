import React,{Component} from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Table from "react-bootstrap/esm/Table";

class TitleTextTableCenter extends Component{
    render(){
        return(        
            <Container fluid className={"contact-data align-items-center py-5 d-flex minh-footer-adj "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 pt-5">
                    <Col xs={12} md={7} className="mx-auto minh-50vh d-flex align-items-center">
                        <div className="w-100 text-center text-dark-brw">
                            <h2 className="dispaly-6 fw-bold">
                                Burgers and pricing
                            </h2>
                            <p className="text-dark-brw">
                                A burger is cooked by placing a filling of meat or vegetables in between 
                                sliced parts of a round bun, whereas Hamburger is also a kind of burger 
                                that consists of a cooked patty of ground meat as filling. They have 
                                gained popularity due to various options of fillings and buns.
                            </p>
                            <h4 className="fst-italic fw-normal text-dark-brw mt-5 mb-3 text-start opacity-8">
                                Standard menu
                            </h4>
                            <Table hover striped className="text-start">
                                <thead>
                                    <tr className="text-dark-brw">
                                        <th className="w-25">Burger</th>
                                        <th className="w-50">Description</th>
                                        <th className="w-25">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                            <h4 className="fst-italic fw-normal text-dark-brw mt-5 mb-3 text-start opacity-8">
                                Specials' menu
                            </h4>
                            <Table hover striped className="text-start">
                                <thead>
                                    <tr className="text-dark-brw">
                                        <th className="w-25">Burger</th>
                                        <th className="w-50">Description</th>
                                        <th className="w-25">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default TitleTextTableCenter;