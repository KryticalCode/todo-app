import DeleteButton from "./DeleteButton";
import { useTodosContext } from "../lib/hooks";

/* Declaring outside the component to avoid re-creating it on every render, instead of inside the component
    which would cause the array to be re-created on every render, affecting performance. */

export default function TodoList() {
  // Checking if the context is available as it also could be null if the context provider is not used
  // If it is null, throw an error to indicate , else we destructure the context to get the todos and the functions to handle toggling
  const { todos, handleToggleTodo, handleDeleteTodo } = useTodosContext();

  // const totalNumberOfTodos = todos.length;
  // console.log("Total number of todos:", totalNumberOfTodos);
  return (
    <ul>
      {todos.length === 0 && (
        <li className="h-full flex justify-center items-center font-semibold">
          Start by adding a todo
        </li>
      )}

      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center px-8 h-[50px] text-[14px] 
          cursor-pointer border-black/[8%]"
          onClick={() => {
            handleToggleTodo(todo.id);
          }}
        >
          <span
            className={`${todo.isCompleted ? "line-through text-[#ccc]" : ""}`}
          >
            {todo.text}
          </span>
          <DeleteButton id={todo.id} onDeleteTodo={handleDeleteTodo} />
          {/* Passing setTodos as a prop
            to DeleteButton so it can access and modify the todos state in the
            parent component */}
        </li>
      ))}
    </ul>
  );
}
