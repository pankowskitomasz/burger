import React,{Component} from "react";
import StoryDesc from "../components/story-desc";
import StoryExt from "../components/story-ext";

class Story extends Component{
    render(){
        return(          
            <main className="minh-footer-adj">     
                <StoryDesc/>
                <StoryExt/>
            </main>
        );
    }
}

export default Story;