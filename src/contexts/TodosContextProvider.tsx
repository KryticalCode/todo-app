import { createContext, useEffect, useState } from "react";
import type { Todo } from "../lib/types";

type TodosContextProviderProps = {
  children: React.ReactNode;
};

type TTodosContext = {
  todos: Todo[];
  totalNumberOfTodos: number;
  numberOfCompletedTodos: number;
  handleAddTodo: (todoText: string) => void;
  handleToggleTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
  // The context will provide these values and functions to any component that consumes it
  // This allows components to access and modify the todos state without having to pass props down through
};
export const TodosContext = createContext<TTodosContext | null>(null);

// getting the data from localStorage before the component mounts / setting the initial state
const getInitialTodos = () => {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    return JSON.parse(savedTodos); // parse the string back into an array of objects
  } else {
    return []; // if no todos are saved in localStorage, return an empty array on initialization
  }
};

export default function TodosContextProvider({
  children,
}: TodosContextProviderProps) {
  // state
  const [todos, setTodos] = useState<Todo[]>(getInitialTodos);

  // derived state
  const totalNumberOfTodos = todos.length; // derived from the length of the todos state array
  const numberOfCompletedTodos = todos.filter(
    (todo) => todo.isCompleted
  ).length;

  // event handlers / actions
  // Good concept to name functions that are used to handle events by prefixing with 'handle'
  const handleAddTodo = (todoText: string) => {
    if (todos.length >= 3) {
      alert("You can only add up to 3 todos without creating an account.");
      return;
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: todos.length + 1,
          text: todoText,
          isCompleted: false,
        },
      ]);
    }
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo; // if the todo id does not match the id passed in, return the todo unchanged
      })
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id)); // passes the 'prev' state to the function, which is the current state of todos, and filters out the todo with the specified id
  };

  // side effects
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); // stringify as its an array of objects, localStorage only accepts strings
  }, [todos]); // Runs whenever the todos array state changes, saving the current todos array to localStorage

  return (
    <TodosContext.Provider
      value={{
        todos,
        totalNumberOfTodos,
        numberOfCompletedTodos,
        handleAddTodo,
        handleToggleTodo,
        handleDeleteTodo,
      }}
    >
      {
        children /* This allows any child components to access the context values */
      }
    </TodosContext.Provider>
  );
}
