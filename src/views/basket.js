import React,{Component} from "react";
import BaksetData from "../components/basket_data";

class Basket extends Component{
    render(){
        return(          
            <main className="minh-footer-adj bg-basket">     
                <BaksetData/>
            </main>
        );
    }
}

export default Basket;