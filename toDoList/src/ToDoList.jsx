import { useState } from "react"

export default function ToDoList() {
    const [tasks, setTasks] = useState(["Make breakfast"]);
    const [newTask, setNewTask] = useState("");

    function changeInput(e){
        setNewTask(e.target.value)
    }

    function addTask(){
        if(newTask.trim()!==""){
            setTasks(t=>[...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_,idx) => idx!==index)
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index>0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="to-do-list">

            <h1>To Do List</h1>

            <form>
                <input type="text"
                       placeholder="Enter a task..."
                       value={newTask}
                       onChange={changeInput}
                 />
                 <button type="button" className="addBtn" onClick={addTask}>
                    Add
                 </button>
            </form>

            <ol>
                {tasks.map((task,index)=> <li key={index}>
                    <span className="text">{task}</span>
                    <button className="deleteBtn" 
                            onClick={()=>deleteTask(index)}
                            >Delete</button>
                    <button className="moveBtn" 
                            onClick={()=>moveTaskUp(index)}
                            >UP</button>
                    <button className="moveBtn" 
                            onClick={()=>moveTaskDown(index)}
                            >DOWN</button>

                </li>)}

            </ol>

        </div>
    )
}
