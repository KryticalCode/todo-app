export default function DeleteButton({ id, setTodos }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation(); // Prevents the click event from bubbling up to the parent element
        setTodos((prev) => prev.filter((todo) => todo.id !== id)); // passes the 'prev' state to the function, which is the current state of todos, and filters out the todo with the specified id
      }}
    >
      ❌
    </button>
  );
}
