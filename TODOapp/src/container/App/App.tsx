import { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Button from "../../components/button/Button";

import './app.css';

export default function App(){

    const [navi, setNavi] = useState("hidden");

    const location = useLocation();
    const date = new Date();

    const openMenu:VoidFunction = () => {
        setNavi("open");
    }

    const closeMenu:VoidFunction = () => {
        setNavi("hidden");
    }

    useEffect(() => {
        closeMenu();
    }, [location]);
    
    return (
        <div className="app">
            <header className="app__header">
                <Button text={"MENU"} click_fn={openMenu} aria="open menu" />
               
                <nav className={`app__menu ${navi === 'open' ? 'app__menu--open' : ''}`}>
                    <Button text={"MENU"} click_fn={closeMenu} aria="close menu" />
                    <ul >
                        <li>
                        <Link to="/">Home</Link>
                        <Link to="/todo-app">ToDo App</Link>
                        <Link to="/form-one">Form One</Link>
                        </li>
                    </ul>
                 </nav>
            
            </header>
            <main className="app__main">
                <Outlet />
            </main>
            
            <footer className="app__footer">Andreas Hillebrand {date.getFullYear()} </footer>
           
        </div>
    )
}