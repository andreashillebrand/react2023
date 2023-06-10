import ReactDOM from 'react-dom/client'
import ToDoApp from './container/ToDoApp/ToDoApp.tsx'
import './assets/settings.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ToDoApp />
)
