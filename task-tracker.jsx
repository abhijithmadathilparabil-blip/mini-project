import React, { useState } from "react";

function TaskTracker() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  function addTask() {
    if (task.trim() === "") {
      alert("Please enter a task!");
      return;
    }
    setTasks([...tasks, task]);
    setTask("");
  }

  function deleteTask(index) {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl font-sans">
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
        📌 Task Tracker
      </h2>

      {/* Input + Add Button */}
      <div className="flex mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
          className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>

      {/* Task List */}
      <ul className="space-y-2">
        {tasks.length === 0 ? (
          <p className="text-gray-400 text-center">No tasks yet. Add one!</p>
        ) : (
          tasks.map((t, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-3 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition"
            >
              <span className="text-gray-700">{t}</span>
              <button
                onClick={() => deleteTask(index)}
                className="text-red-500 hover:text-red-700 font-medium"
              >
                ❌
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TaskTracker;
