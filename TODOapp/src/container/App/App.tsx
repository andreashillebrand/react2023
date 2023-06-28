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
                <Button text={"menu"} click_fn={openMenu} aria="open menu" />
               
                <nav className={`app__menu ${navi === 'open' ? 'app__menu--open' : ''}`}>
                    <Button text={"X"} click_fn={closeMenu} aria="close menu" />
                    <ul className="app__menu-links">
                        <li className="app__menu-link"><Link to="/" >HOME</Link></li>
                        <li className="app__menu-link"><Link to="/todo-app">TODO APP</Link></li>
                        <li className="app__menu-link"><Link to="/form-one">FORM ONE</Link></li>
                    </ul>
                 </nav>
            
            </header>
            <main className="app__main">
                <Outlet />
            </main>
            
            <footer className="app__footer">&copy; andreas hillebrand {date.getFullYear()} </footer>
           
        </div>
    )
}