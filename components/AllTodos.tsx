"use client";

import { useState, useEffect } from "react";

interface TodosArray {
  todos: Todos[]
}

interface Todos {
  collectionId: string;
  collectionName: string;
  created: string;
  description: string;
  id: string;
  todo: string;
  updated: string;
}



const AllTodos: React.FC  = () => {
  const [todos, setTodos] = useState<TodosArray>([]);
  
  useEffect(() => {
    fetch("http://127.0.0.1:8090/api/collections/todos/records")
    .then((d) => d.json())
    .then((res) => setTodos(res));
  }), []

  return (
    <div className="mt-5 bred w-[700px]">
      <h1 className="text-5xl font-normal">List of all todos</h1>
      <div className="mt-10">
        {
          todos.map(t => (
            <li>t.id</li>
          ))
        }
      </div>
    </div>
  );
};

export default AllTodos;
