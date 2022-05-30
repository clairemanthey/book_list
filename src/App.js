import React, { useState} from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {

  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState([
  {
    id: 1,
    title: "The Very Hungry Caterpillar",
    author: "Eric Carle",
  },
  {
    id: 2,
    title: "The Snowy Day",
    author: "Ezra Jack Keats",
  },
  {
    id: 3,
    title: "Pat the Bunny",
    author: "Dorothy Kunhardt",
  }
]);

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1;
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

//Delete Taks
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}


  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks 
            tasks={tasks} 
            onDelete={deleteTask} 

            /> : "no tasks"}

    </div>
  );
}


export default App;
