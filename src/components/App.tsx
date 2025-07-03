import BackgroundHeading from "./BackgroundHeading.tsx";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import Sidebar from "./Sidebar.ts";
import TodoList from "./TodoList.tsx";

function App() {
  return (
    <div className="flex justify-center items-center flex-col font-inter bg-[#f1d4b3] min-h-screen">
      <BackgroundHeading />

      <main className="relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <Header />

        <TodoList />

        <Sidebar />
      </main>

      <Footer />
    </div>
  );
}

export default App;
