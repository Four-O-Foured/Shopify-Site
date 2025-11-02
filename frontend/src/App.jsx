import Nav from "./components/Nav";
import MainRoutes from "./routes/MainRoutes";


function App() {
  return (
    <div className="w-screen h-min-screen bg-[#FFFDF6]">
      <div className="px-[8%] py-3">
        <Nav />
        <MainRoutes />
      </div>
    </div>
  );
}

export default App;
