import React, { useState } from "react";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return <div className="todo">{todo.text}</div>;
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group input-group-sm mb-1">
        <input
          type="text"
          className="form-control"
          placeholder="add an item"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
}

function List() {
  const [todos, setTodos] = useState([
    {
      text: "Jujubes",
      isCompleted: false,
    },
    {
      text: "Gummi bears",
      isCompleted: false,
    },
    {
      text: "Macaroon",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <TodoForm addTodo={addTodo} />
      <ul className="flex-column p-3">
        {todos.map((todo, index) => (
          <li className="badge badge-pill badge-dark m-1">
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
