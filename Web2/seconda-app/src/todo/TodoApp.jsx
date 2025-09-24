import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const API_URL = "http://localhost:3000/tasks";
const TodoApp = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Errore fetch");
      const data = await response.json();
      console.log(data);
      setTasks(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);
  return (
    <div>
      TodoApp
      <TodoForm></TodoForm>
      <TodoList tasks={tasks}></TodoList>
    </div>
  );
};

export default TodoApp;