import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const getTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  const createTask = async () => {
    await api.post("/tasks", task);

    setTask({
      title: "",
      description: "",
    });

    getTasks();
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    getTasks();
  };

  const toggleComplete = async (item) => {
    await api.put(`/tasks/${item._id}`, {
      completed: !item.completed,
    });

    getTasks();
  };

  return (
    <div>
      <Navbar />

      <h2>Dashboard</h2>

      <input
        placeholder="Title"
        value={task.title}
        onChange={(e) =>
          setTask({
            ...task,
            title: e.target.value,
          })
        }
      />

      <br />
      <br />

      <input
        placeholder="Description"
        value={task.description}
        onChange={(e) =>
          setTask({
            ...task,
            description: e.target.value,
          })
        }
      />

      <br />
      <br />

      <button onClick={createTask}>Create Task</button>

      <hr />

      {tasks.map((item) => (
        <div key={item._id}>
          <h3>{item.title}</h3>

          <p>{item.description}</p>

          <p>
            Status:
            {item.completed ? " Completed" : " Pending"}
          </p>

          <button onClick={() => toggleComplete(item)}>Toggle Status</button>

          <button onClick={() => deleteTask(item._id)}>Delete</button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
