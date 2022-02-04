import React,{Component} from "react";
import MenuList from "../components/menu_list";
import TitleTextTableCenter from "../components/title-text-table-center"

class Menu extends Component{
    render(){
        return(          
            <main className="minh-footer-adj bg-basket">     
                <TitleTextTableCenter/>
            </main>
        );
    }
}

export default Menu;