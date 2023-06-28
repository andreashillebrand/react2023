import { useState } from "react";
import Button from "../../components/button/Button";
import List from "../../components/list/list";
import './todo-app.css';

export default function ToDoApp(){

  const [jobs, setJobs] = useState("");
  
  const btnTextAdd:string = "Add ToDo";
  const btnTextDel:string = "Remove ToDos";

  const addJob:VoidFunction = () => {
    setJobs("Something to do");
  }
  const deleteJobs  = () => {
    setJobs("");
  }
  
  return (
      <section className="uic-todo-app">
        <div className="uic-todo-app__wrapper">
          <h1>ToDo App</h1>
          <List listContent={jobs}  />
          
          <div className="uic-todo-app__buttons">
            <Button text={btnTextAdd} click_fn={addJob} aria="add" cssClass={""} />
            <Button text={btnTextDel} click_fn={deleteJobs} aria="delete" cssClass={""} />
          </div>
        </div>
        
      </section>
  )
}