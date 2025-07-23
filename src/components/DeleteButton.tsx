type DeleteButtonProps = {
  id: number;
  handleDeleteTodo: (id: number) => void;
};

export default function DeleteButton({
  id,
  handleDeleteTodo,
}: DeleteButtonProps) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation(); // Prevents the click event from bubbling up to the parent element]
        handleDeleteTodo(id);
      }}
    >
      ❌
    </button>
  );
}
