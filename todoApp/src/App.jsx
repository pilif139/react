import './css/app.css';
import { useState } from 'react';
import { GoXCircleFill } from "react-icons/go";
import { AiFillGithub } from "react-icons/ai";
import Task from './Task.jsx';

function App() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (newTask !== "") {
      setTasks([...tasks, {
        "checked": false,
        "text": newTask,
        "date": new Date().toLocaleString()
      }])
      setShowOverlay(false);
      setNewTask("");
    }
  }


  return (
    <div className="app">
      <nav>
        <h1>To Do App</h1>
        <button type='button' onClick={() => setShowOverlay(true)}>Add to list</button>
      </nav>
      <div className="list">
        {
          tasks != null &&
          tasks.map((element, index) => <Task key={index} task={element} />)
        }
      </div>

      {/* input overlay */}
      {showOverlay &&
        <div className="overlay">
          <form>
            <GoXCircleFill onClick={() => setShowOverlay(false)} />
            <h2>Add Task</h2>
            <textarea placeholder='Add task...' cols={50} rows={7} value={newTask} onChange={e => setNewTask(e.target.value)}></textarea>
            <button onClick={handleAddTask} type="button">Add</button>
          </form>
        </div>
      }

      <footer>
        <a href="https://github.com/pilif139" target='_blank'>
          <AiFillGithub></AiFillGithub>Github
        </a>
      </footer>
    </div>
  );
}
export default App
