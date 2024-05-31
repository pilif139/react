/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Task({task}) {
    const [completed, setCompleted] = useState(false);

    return (
        <div className={completed? "Completed Task": "Task"}>
            <p>{task.text}</p>
            <h3>{completed ? "ukończono: "+new Date().toLocaleString(): "dodano: "+task.date}</h3>
            <button type='button' onClick={()=>setCompleted(!completed)}>{completed ? "uncomplete" : "complete"}</button>
        </div>
    )
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

