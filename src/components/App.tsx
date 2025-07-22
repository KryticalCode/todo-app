import { useState } from "react";
import BackgroundHeading from "./BackgroundHeading.tsx";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import Sidebar from "./Sidebar.tsx";
import TodoList from "./TodoList.tsx";

function App() {
  const [todos, setTodos] = useState([]);

  // Good concept to name functions that are used to handle events by prefixing with 'handle'
  const handleAddTodo = (todoText) => {
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

  const handleToggleTodo = (id) => {
    setTodos(
      todos,
      map((todo) => {
        if (todos.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todos; // if the todo id does not match the id passed in, return the todo unchanged
      })
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id)); // passes the 'prev' state to the function, which is the current state of todos, and filters out the todo with the specified id
  };

  return (
    <div className="flex justify-center items-center flex-col font-inter bg-[#f1d4b3] min-h-screen">
      <BackgroundHeading />

      <main className="relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <Header todos={todos} />

        <TodoList
          todos={todos}
          handleToggleTodo={handleToggleTodo}
          handleDeleteTodo={handleDeleteTodo}
        />

        <Sidebar todos={todos} handleAddTodo={handleAddTodo} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
