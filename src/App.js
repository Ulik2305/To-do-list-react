import './App.css';
import {useState} from "react";
import TodoList from './components/TodoList';
import Example from './components/Example';


function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
      if (newTask.trim() !== '') {
          const updatedTasks = [...tasks, { id: Date.now(), text: newTask, completed: false }];
          setTasks(updatedTasks);
          setNewTask('');
      }
  };

  const toggleTask = taskId => {
      const updatedTasks = tasks.map(task =>
          task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      setTasks(updatedTasks);
  };

  const deleteTask = taskId => {
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      setTasks(updatedTasks);
  };
return (
  <div className="App">
      <h1>To Do List</h1>
      <input
          type="text"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="  Add a new task"
      />
      <br></br>
      <button onClick={addTask}>Add Task</button>
      <TodoList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      <Example/>

  </div>
);
}

export default App;
