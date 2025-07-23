type DeleteButtonProps = {
  id: number;
  onDeleteTodo: (id: number) => void;
};

export default function DeleteButton({ id, onDeleteTodo }: DeleteButtonProps) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation(); // Prevents the click event from bubbling up to the parent element]
        onDeleteTodo(id);
      }}
    >
      ❌
    </button>
  );
}
