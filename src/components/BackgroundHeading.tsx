export default function BackgroundHeading() {
  return (
    <h1 className="text-[120px] font-bold text-black/5 uppercase absolute left-1/2 -translate-x-1/2 tracking-[0.2em]">
      {/* absolute ensures the text does not push other elements down -- left-1/2 -translate-x-1/2 centers the text 
        horizontally by moving it left by 50% of its width and then translating it back by 50% of its width */}
      Todoapp
    </h1>
  );
}
// Inner function is used here instead of an arrow function, can use export default directly on the function
// declaration this way.
