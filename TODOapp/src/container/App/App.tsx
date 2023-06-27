import './app.css';
import ToDoApp from '../ToDoApp/ToDoApp'
import FormOne from '../FormOne/FormOne'
export default function App(){
    
    const d = new Date();

    
    return (
        <>
        <header className="header">menu</header>
        <main className="main">
           
            <FormOne />
            
        </main>
        <footer className="footer">Andreas Hillebrand {d.getFullYear()} </footer>
        </>
    )
}