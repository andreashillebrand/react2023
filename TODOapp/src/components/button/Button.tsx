import { useEffect } from "react";
import "./button.css"

interface ButtonProps {
    text: String;
    click_fn: VoidFunction;
}

export default function Button(props: ButtonProps) {
    let text:String = "click me";
    let handleClick:VoidFunction = () => {
        console.log("-> Button: clic in Button");
    }

    if(props.click_fn && props.text){
        text = props.text;
        handleClick = props.click_fn;
    }
    
    useEffect(() => {
        console.log("-> Button: Button rendered");
        console.log("-> Button props:", props);
    });
    
    return (
        <button 
            className="btn" 
            onClick={ handleClick }
        >
            {text}
        </button>
    );
}