import React from 'react';
import "./Task.css"


// recebe como prop o titulo
const Task = ({ task, handleTaskClick }) => {

    return <div className="task-container"
                style={task.completed ? {borderLeft: "6px solid chartreuse"} : {}} 
            >
                <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                    {task.titulo}
                </div>
            </div> ;
};
 
export default Task;