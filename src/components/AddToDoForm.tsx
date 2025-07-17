import { useState } from "react";
import Button from "./Button";

export default function AddToDoForm({ todos, setTodos }) {
  const [todoText, setTodoText] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setTodos((prev) => [
          ...prev,
          {
            id: todos.length + 1,
            text: todoText,
            isCompleted: false,
          },
        ]);
        setTodoText(""); // Clear input field after adding a todo
      }}
    >
      <h1 className="font-medium text-{#231d15]">Add a todo</h1>
      <input
        type="text"
        className="h-[45px] border border-black/[12%] rounded-[5px]
        my-[5px] text-[14px] block w-full px-[16px]"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <Button>Add to list</Button>
    </form>
  );
}
