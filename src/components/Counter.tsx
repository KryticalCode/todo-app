import { useState } from "react";

export default function Counter({ todos }) {
  /* const [count, setCount] = useState(0); */

  return (
    <p>
      <b>{todos.filter((todo) => todo.isCompleted).length}</b> /{todos.length}{" "}
      todos completed
    </p>
  );
}
