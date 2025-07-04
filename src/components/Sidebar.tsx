import AddToDoForm from "./AddToDoForm";
import Button from "./Button";

export default function Sidebar() {
  return (
    <section className="flex flex-col col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08] px-[25px] pt-[18px] pb-[28px]">
      <AddToDoForm />
      <div className="mt-auto space-y-2">
        {/* Could use mt-auto here when using flexbox in the parent, to push both these buttons to the bottom */}
        <Button buttonType="secondary">Log In</Button>
        <Button buttonType="secondary">Register</Button>
        {/* Using a prop (passing through as a parameter) to change the button type, in plain html we would have attribute like type="secondary" 
        - Primary button has no props (the Add a todo in the AddToDoForm component */}
      </div>
    </section>
  );
}
