import { useEffect } from "react";
import { themeChange } from "theme-change";
import "./style.css";
import image from "../assets/1.png";

const Head = () => {
  useEffect(() => {
    themeChange(false);
    return () => {
      themeChange(false);
    };
    // 👆 dark&&light
  }, []);
  return (
    <div className="flex justify-center items-center">
      <div className="navbar bg-base-100 h-1/6 w-10/12 ">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Dashboard.</a>
        </div>
        <div className="flex-none gap-2">
          <button
            data-toggle-theme="forest,light"
            data-act-class="ACTIVECLASS"
            className="h-6 rounded-xl"
          >
            <input type="checkbox" className="toggle h-6" />
          </button>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={image} />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
