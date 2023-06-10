import { useState } from "react";
import Button from "../../components/button/Button";
import List from "../../components/list/list";
import './todo-app.css'

export default function ToDoApp(){

  const [jobs, setJobs] = useState("");
  
  const btnTextAdd:String = "Add ToDo";
  const btnTextDel:String = "Remove ToDos";

  const addJob:VoidFunction = () => {
    setJobs("Something to do");
  }
  const deleteJobs  = () => {
    setJobs("");
  }
  
  return (
      <section className="todo">
        <h1>ToDo App</h1>
        <List listContent={jobs}  />
        
        <div className="todo__buttons">
          <Button text={btnTextAdd} click_fn={addJob}/>
          <Button text={btnTextDel} click_fn={deleteJobs}/>
        </div>
        
      </section>
  )
}