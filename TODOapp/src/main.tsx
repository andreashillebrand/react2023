import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './container/App/App.tsx'
import './assets/settings.css'

import Home from './container/Home/Home';
import ToDoApp from './container/ToDoApp/ToDoApp';
import FormOne from './container/FormOne/FormOne';

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="todo-app" element={<ToDoApp />} />
            <Route path="form-one" element={<FormOne />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Main />
)
