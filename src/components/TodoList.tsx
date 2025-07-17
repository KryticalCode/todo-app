import { useState } from "react";
import DeleteButton from "./DeleteButton";

/* Declaring outside the component to avoid re-creating it on every render, instead of inside the component
    which would cause the array to be re-created on every render, affecting performance. */
export default function TodoList() {
  const handleClick = () => {
    setTodos(
      todos.map((t) => {
        if (t.id === todo.id) {
          return { ...t, isCompleted: !t.isCompleted }; // Toggle isCompleted to opposite value
        }
        return t; // else return the todo unchanged
      })
    );
  };

  const [todos, setTodos] = useState([
    // when useState is called, it will re-render the whole component below
    {
      id: 1,
      text: "buy groceries",
      isCompleted: false,
    },
    {
      id: 2,
      text: "walk the dog",
      isCompleted: false,
    },
    {
      id: 3,
      text: "do laundry",
      isCompleted: true,
    },
  ]);

  const totalNumberOfTodos = todos.length;
  console.log("Total number of todos:", totalNumberOfTodos);

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center px-8 h-[50px] text-[14px] 
          cursor-pointer border-black/[8%]"
          onClick={handleClick}
        >
          <span
            className={`${todo.isCompleted ? "line-through text-[#ccc]" : ""}`}
          >
            {todo.text}
          </span>
          <DeleteButton id={todo.id} setTodos={setTodos} />
          {/* Passing setTodos as a prop
            to DeleteButton so it can access and modify the todos state in the
            parent component */}
        </li>
      ))}
    </ul>
  );
}
