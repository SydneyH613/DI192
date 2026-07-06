import './App.css';
import { TaskProvider } from './context/TaskContext';
import TaskForm from './Components/TaskForm';
import TaskFilter from './Components/TaskFilter';
import TaskList from './Components/TaskList';

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <h1>Task Manager</h1>
        <TaskForm />
        <TaskFilter />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
