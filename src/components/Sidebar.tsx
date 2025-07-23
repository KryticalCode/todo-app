import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import AddToDoForm from "./AddToDoForm";
import Button from "./Button";

export default function Sidebar() {
  const { login, register, logout, isAuthenticated, isLoading, user } =
    useKindeAuth();

  return (
    <section className="flex flex-col col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08] px-[25px] pt-[18px] pb-[28px]">
      <AddToDoForm />
      <div className="mt-auto space-y-2">
        {isLoading ? null : isAuthenticated ? (
          <>
            <p className="text-sm">Logged in as {user?.email}</p>{" "}
            {/*If the user doesnt exist, return undefined so it will not throw an error / crash */}
            <Button onClick={logout} buttonType={"secondary"}>
              LogOut
            </Button>
          </>
        ) : (
          <>
            {/* React fragment is used instead of a div to avoid adding an extra node to the DOM structure, 
            also can only return one element from a component}
            {/* Could use mt-auto here when using flexbox in the parent, to push both these buttons to the bottom */}
            <Button onClick={login} buttonType="secondary">
              Log In
            </Button>
            <Button onClick={register} buttonType="secondary">
              Register
            </Button>
            {/* Using a prop (passing through as a parameter) to change the button type, in plain html we would have attribute like type="secondary" 
        - Primary button has no props (the Add a todo in the AddToDoForm component */}
          </>
        )}
      </div>
    </section>
  );
}
