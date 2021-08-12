import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";

class ContactShort extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path}>
                <Button variant="outline-light" className="rounded-pill">
                    {this.props.backLink.name}
                </Button>
            </Link>;
        }
        return(        
            <Container fluid className={"bg-contact-short align-items-center p-0 d-flex minh-25vh border-top border-dark-brw "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 pt-5">
                    <Col xs={12} sm={6} className="mx-auto text-white p-0 d-flex align-items-center">
                        <div className="p-5 text-shadow opacity-8 w-100 text-center text-sm-start">
                            <h1 className="display-6 fw-bold font-logo text-white">
                                Contact us
                            </h1>
                            <address className="d-block w-50 ps-sm-2 mx-auto mb-4 initialism ps-0 ms-sm-0">
                                00-001 City,<br/> 
                                Street 12A,<br/>
                                678 142 838<br/>
                                contact&#64;mail.it
                            </address>
                            {linking}
                        </div>
                    </Col>
                    <Col xs={12} sm={6} className="d-flex align-items-end">
                        <div className="w-100">
                            <ul className="list-inline ms-sm-auto mx-auto text-center text-sm-end">
                                <li className="list-inline-item">
                                    <span className="fa fa-facebook text-white mx-2"></span>
                                </li>
                                <li className="list-inline-item">
                                    <span className="fa fa-twitter text-white mx-2"></span>
                                </li>
                                <li className="list-inline-item">
                                    <span className="fa fa-instagram text-white mx-2"></span>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default ContactShort;