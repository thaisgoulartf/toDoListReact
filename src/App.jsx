import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import './App.css'
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks"

const App = () => {
  //deixamos o tasks aqui pois assim todos os comp filhos tem acesso ao tasks
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Tarefa 1",
      completed: false,
    },
    {
      id: "2",
      title: "Tarefa 2",
      completed: true,
    },
    {
      id: "3",
      title: "Tarefa 3",
      completed: true,
    },
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return {...task, completed: !task.completed};
       return task;
    });
     setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks, 
      {
        title: taskTitle,
        id: uuidv4,
        completed: false,
      },
    ];
    setTasks(newTasks)

  }

  return (
    <>
       <div className="container">
         <AddTask handleTaskAddition={handleTaskAddition}></AddTask>
         <Tasks tasks={tasks} handleTaskClick={handleTaskClick}/>
       </div>
       
    </>
  );
};

export default App;
