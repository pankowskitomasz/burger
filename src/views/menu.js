import React,{Component} from "react";
import MenuList from "../components/menu_list";

class Menu extends Component{
    render(){
        return(          
            <main className="minh-footer-adj bg-basket">     
                <MenuList/>
            </main>
        );
    }
}

export default Menu;