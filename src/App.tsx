import image from "./assets/1.png";
import "./App.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";

function App() {
  useEffect(() => {
    themeChange(false);
    return () => {
      themeChange(false);
    };
    // 👆 false parameter is required for react project
  }, []);
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <button data-toggle-theme="forest,light" data-act-class="ACTIVECLASS" className="h-6 ">
        <input type="checkbox" className="toggle " />
      </button>
    </>
  );
}

export default App;
