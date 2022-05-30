import React from "react";
import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete, onToggle }) => {
	return(
      <div className="task">
        <h3>{task.title} 
        <FaTimes 
        style={{ color: "#BC4B51", cursor: "pointer" }} 
        onClick={() => onDelete(task.id)}/>
        </h3>
        <p>{task.author}</p>
      </div>
	)
}

export default Task