import { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      name: task
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  return (
    <div className="exercise-box">

      <h2>1. To-Do List</h2>

      <div className="todo-input">

        <input
          type="text"
          value={task}
          placeholder="Enter a task"
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>
          Add
        </button>

      </div>

      <ul className="todo-list">

        {tasks.map((item) => (

          <li key={item.id}>

            <span>
              {item.name}
            </span>

            <button
              className="delete-btn"
              onClick={() => deleteTask(item.id)}
            >
              Delete
            </button>

          </li>

        ))}

      </ul>

    </div>
  );
}

export default TodoList;