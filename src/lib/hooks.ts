import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContextProvider";
// custom hook to use the TodosContext and avoid repeating the context logic in every component that needs it
// Checks if the context is available (not null) and throws an error if it is not, else returns the context value to be used
// 'use' is a prefix that indicates its a custom hook, follows the React convention for naming hooks
export function useTodosContext() {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error(
      "TodoList must be used within a TodosContextProvider in main.tsx"
    );
  }
  return context;
}
