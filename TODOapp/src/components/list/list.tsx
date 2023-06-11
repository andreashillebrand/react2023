import "../../assets/settings.css";
import "./list.css";

interface ListProps {
    listContent: String;
}

export default function List(props:ListProps) {

    let listContent:String = "No To Dos";

    if(props.listContent){
        listContent = props.listContent;
    }
    
    return (
        <ul className="list">
            <li className="list__item">{listContent}</li>
        </ul>
    )
}