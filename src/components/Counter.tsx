type CounterProps = {
  totalNumberOfTodos: number;
  numberOfCompletedTodos: number;
};

export default function Counter({
  totalNumberOfTodos,
  numberOfCompletedTodos,
}: CounterProps) {
  /* const [count, setCount] = useState(0); */
  return (
    <p>
      <b>{numberOfCompletedTodos}</b> /{totalNumberOfTodos} todos completed
    </p>
  );
}
