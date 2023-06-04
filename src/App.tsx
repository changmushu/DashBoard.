import "./App.css";
import Head from "./components/Head";
import LeftBoard from "./components/LeftBoard";
import RightBoard from "./components/RightBoard";

function App() {
  return (
    <>
      <Head />
      <div className="flex w-screen h-auto flex-row">
        <LeftBoard />
        <RightBoard />
      </div>
    </>
  );
}

export default App;
