import Button from "./Button";

export default function AddToDoForm() {
  return (
    <form>
      <h1 className="font-medium text-{#231d15]">Add a todo</h1>
      <input
        type="text"
        className="h-[45px] border border-black/[12%] rounded-[5px]
        my-[5px] text-[14px] block w-full px-[16px]"
      />
      <Button>Add to list</Button>
    </form>
  );
}
