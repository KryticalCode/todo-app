export default function Button(props) {
  console.log(props);
  console.log(props.buttonType);

  return (
    <button
      className={`h-[45px] bg-[#473a2b] hover:bg-[#322618] w-full
     text-white rounded-[5px] cursor-pointer ${
       props.buttonType === "secondary" ? "opacity-[85%]" : ""
     }`}
    >
      {props.children} {/* Accesing a property of the props object */}
    </button>
  );
}

/* When using reusable components, try to not add layout styles like padding or margin  to the component itself, 
    as it can lead to inconsistent spacing across different uses.
    
    Instead, wrap it in a seperate div, and apply the layout style there */

/* When using template literals, need to use backticks ``, alongside ${} to insert variables.
    Additionally, in className for example, you need to wrap it in curly braces to evaluate the
    expression, as it does not see it javascript */
