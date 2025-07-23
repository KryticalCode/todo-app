type ButtonProps = {
  onClick: () => Promise<void>;
  buttonType?: "primary" | "secondary"; // Union type , only specify these two strings primary or secondary
  children: React.ReactNode; // Children prop of the button e.g., text inside the button
};

export default function Button({ onClick, buttonType, children }: ButtonProps) {
  // Destructuring props to access buttonType directly e.g., instead of props.buttonType => buttonType
  // console.log(props);
  // console.log(props.buttonType);
  return (
    <button
      onClick={onClick}
      className={`h-[45px] bg-[#473a2b] hover:bg-[#322618] w-full
     text-white rounded-[5px] cursor-pointer ${
       buttonType === "secondary" ? "opacity-[85%]" : ""
     }`}
    >
      {children}
      {/* Accessing a property of the props object by deconstructing the props object */}
    </button>
  );
}

/* When using reusable components, try to not add layout styles like padding or margin  to the component itself, 
    as it can lead to inconsistent spacing across different uses.
    
    Instead, wrap it in a seperate div, and apply the layout style there */

/* When using template literals, need to use backticks ``, alongside ${} to insert variables.
    Additionally, in className for example, you need to wrap it in curly braces to evaluate the
    expression, as it does not see it javascript */
