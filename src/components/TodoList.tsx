import DeleteButton from "./DeleteButton";
import type { Todo } from "../lib/types";

type TodoListProps = {
  todos: Todo[];
  handleToggleTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
};
/* Declaring outside the component to avoid re-creating it on every render, instead of inside the component
    which would cause the array to be re-created on every render, affecting performance. */
export default function TodoList({
  todos,
  handleToggleTodo,
  handleDeleteTodo,
}: TodoListProps) {
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
          <DeleteButton id={todo.id} handleDeleteTodo={handleDeleteTodo} />
          {/* Passing setTodos as a prop
            to DeleteButton so it can access and modify the todos state in the
            parent component */}
        </li>
      ))}
    </ul>
  );
}
