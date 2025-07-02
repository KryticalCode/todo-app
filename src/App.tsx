function App() {
  return (
    <div className="flex justify-center items-center flex-col font-inter bg-[#f1d4b3] min-h-screen">
      <h1 className="text-[120px] font-bold text-black/5 uppercase absolute left-1/2 -translate-x-1/2 tracking-[0.2em]">
        {/* absolute ensures the text does not push other elements down -- left-1/2 -translate-x-1/2 centers the text 
        horizontally by moving it left by 50% of its width and then translating it back by 50% of its width */}
        Todo App
      </h1>

      <main className="relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols[7fr_4fr] grid-rows-[59px_1fr]">
        <header className="col-[1/3] row-[1/2] bg-[#fbf5ed] border-b border-black/[0.08]"></header>

        <ul></ul>

        <section className="col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08]"></section>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
