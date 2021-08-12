import React,{Component} from "react";
import HomeTop from "../components/home-top";
import MenuShort from "../components/menu_short";
import ProductPromo from "../components/product_promo"
import ContactShort from "../components/contact-short";

class Home extends Component{
    render(){
        return(          
            <main className="minh-footer-adj bg-home">     
                <HomeTop/>
                <MenuShort/>
                <ProductPromo/>
                <ContactShort/>
            </main> 
        );
    }
}

export default Home;