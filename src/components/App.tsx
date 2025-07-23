import { useState } from "react";
import BackgroundHeading from "./BackgroundHeading.tsx";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import Sidebar from "./Sidebar.tsx";
import TodoList from "./TodoList.tsx";
import type { Todo } from "../lib/types";

function App() {
  // state
  const [todos, setTodos] = useState<Todo[]>([]);

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

  return (
    <div className="flex justify-center items-center flex-col font-inter bg-[#f1d4b3] min-h-screen">
      <BackgroundHeading />

      <main className="relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <Header
          totalNumberOfTodos={totalNumberOfTodos}
          numberOfCompletedTodos={numberOfCompletedTodos}
        />

        <TodoList
          todos={todos}
          handleToggleTodo={handleToggleTodo}
          handleDeleteTodo={handleDeleteTodo}
        />

        <Sidebar handleAddTodo={handleAddTodo} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
