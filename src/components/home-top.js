import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";

class HomeTop extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path}>
                <Button variant="outline-light" className="rounded-pill border-dark-yellow text-dark-yellow">
                    {this.props.backLink.name}
                </Button>
            </Link>;
        }
        return(        
            <Container fluid className={"align-items-center py-3 d-flex minh-50vh border-bottom border-dark-brw "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 py-5">
                    <Col xs={12} lg={6} className="mx-auto text-dark p-0 d-flex align-items-center text-end order-2 order-lg-1">
                        <img alt="about"
                            className="img-fluid mx-auto ms-md-start w-75"
                            src="img/home/home-img.png"/>
                    </Col>
                    <Col xs={12} lg={6} className="mx-auto p-0 d-flex align-items-center order-1 order-lg-2">
                        <div className="p-5 text-lg-start text-center mx-auto">
                            <h1 className="display-4 text-dark-brw fw-bold text-uppercase">
                                Burger House 
                            </h1>
                            <h1 className="lead text-dark-brw fw-bold text-uppercase">
                                Hungry? This your place!
                            </h1>
                            {linking}
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default HomeTop;