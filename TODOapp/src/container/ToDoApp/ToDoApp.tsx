import { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import List from "../../components/list/list";
import Modal from "../../components/modal/modal";
import './todo-app.css';


export default function ToDoApp(){
 ;
  console.log("www");
  const [jobs, setJobs] = useState("");
  
  const btnTextAdd:string = "Add ToDo";
  const btnTextDel:string = "Remove ToDos";

  const addToDo:VoidFunction = () => {
    setJobs("There is Something to do!");
  }

  const deleteJobs = () => {
    setJobs("");
  }
  
  return (
      <section className="uic-todo-app">
        
        <div className="uic-todo-app__wrapper">
          <h1>ToDo App</h1>
          <List listContent={jobs}  />
          
          <div className="uic-todo-app__buttons">
            
            <Modal containerId="todo-modal" modal_fn={addToDo}/>
            <Button click_fn={deleteJobs} aria="delete" cssClass={""} ><span>{btnTextDel}</span></Button>
          </div>
        </div>
        
      </section>
  )
}