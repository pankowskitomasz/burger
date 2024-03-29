import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";

class ContactData extends Component{
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
            <Container fluid className={"bg-contact align-items-center p-0 d-flex minh-50vh border-bottom border-dark-brw "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 pt-5">
                    <Col xs={10} sm={6} className="mx-auto text-dark p-0">
                        <img alt="about"
                            className="img-fluid w-75"
                            src="img/contact/contact-data.png"/>
                    </Col>
                    <Col xs={10} sm={6} className="mx-auto text-dark-brw p-0 d-flex align-items-center">
                        <div className="p-5">
                            <h1 className="display-4 fw-bold font-logo text-dark-brw">
                                Contact us
                            </h1>
                            <p className="initialism">
                                Hungry? Don't wait call us! Our delicious pizzas are 
                                waiting for you!
                            </p>
                            <address className="d-block w-50 mx-auto p-2 mb-4 initialism text-center">
                                00-001 City,<br/> 
                                Street 12A,<br/>
                                678 142 838<br/>
                                contact&#64;mail.it
                            </address>
                            {linking}
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default ContactData;