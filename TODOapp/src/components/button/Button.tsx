import { useEffect } from "react";
import "../../assets/settings.css";
import "./button.css";

interface ButtonProps {
    text: string;
    click_fn: VoidFunction;
    aria: string;
}

export default function Button(props: ButtonProps) {
    let text:string = "click me";
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
            aria-label={props.aria}
        >
            {text}
        </button>
    );
}