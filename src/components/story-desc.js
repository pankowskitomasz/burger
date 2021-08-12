import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";

class StoryDesc extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path}>
                <Button variant="outline-dark" className="rounded-pill">
                    {this.props.backLink.name}
                </Button>
            </Link>;
        }
        return(        
            <Container fluid className={"story-desc p-0 minh-50vh d-flex align-items-center py-3 border-bottom border-dark-brw "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 pt-5 pb-2">
                    <Col xs={12} md={7} className="text-center text-md-start p-4 d-flex align-items-center">
                        <div className="w-75 mx-auto">
                            <h2 className="mb-3 mt-5 fw-bold text-dark-brw">
                                Our story
                            </h2>
                            <p className="lead text-dark-brw">
                                As an independent services provider focused on representing best quality, 
                                we offer wide range of services and products for pets. Our company was founded 
                                in 2003 and our shop has grown into a reginally recognized brand with a strong 
                                community. In addition to our seasonal offer, we collaborate and partner with 
                                the top brands on market.                                                
                            </p>
                            {linking}
                        </div>
                    </Col>
                    <Col xs={12} md={5} className="text-center mx-auto d-flex align-items-center">
                        <img alt="about"
                            className="img-fluid w-75 mx-auto"
                            src="img/story/story_desc_img.png"/>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default StoryDesc;