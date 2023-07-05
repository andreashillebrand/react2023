import { useEffect } from "react";
import "../../assets/settings.css";
import "./button.css";

interface ButtonProps {
   
    click_fn: VoidFunction;
    aria: string;
    cssClass:string;
    children: JSX.Element;
}

export default function Button(props: ButtonProps) {
   
    let handleClick:VoidFunction = () => {
        console.log("fn handleClick UIC Button");
    }

    if(props.click_fn){
        handleClick = props.click_fn;
    }

    const css = `btn ${props.cssClass}`;


    
    useEffect(() => {
        //console.log("-> Button: Button rendered");
        //console.log("-> Button props:", props);
    });
    
    return (
        <button className={css} onClick={ handleClick } aria-label={props.aria}>
            {props.children}
        </button>
    );
}