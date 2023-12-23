import { useState } from "react";
import { LOGO_URL } from "./constants/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./custom-hooks/useOnlineStatus";
const Header = () => {
  const [button, setButton] = useState("Login");
  const status = useOnlineStatus();
  return (
    <>
      <header className="flex justify-between bg-pink-200 shadow-lg ">
        <div>
          <img src={LOGO_URL} className="w-28 h-28 min-w-10 min-h-10" />
        </div>
        <nav className="flex justify-center items-center p-8">
          <ul className="flex gap-x-6">
            <li className="text-xl  px-5">
              Online Status | {status === "online" ? "💡" : "🔴"}
            </li>
            <li>
              <Link
                to="/"
                className="text-xl text-orange-950 hover:text-3xl hover:text-violet-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="grocery"
                className="text-xl text-orange-950 hover:text-3xl hover:text-violet-500"
              >
                Grocery
              </Link>
            </li>
            <li>
              <Link
                to="about"
                className="text-xl text-orange-950 hover:text-3xl hover:text-violet-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                className="text-xl text-orange-950 hover:text-3xl hover:text-violet-500"
              >
                Contact
              </Link>
            </li>
            <li className="text-xl text-orange-950 hover:text-3xl hover:text-violet-500">
              Cart
            </li>
            <li>
              <button
                className="text-2xl  hover:bg-yellow-300 hover:text-3xl bg-blue-500 text-white px-3  tracking-wide rounded-md pb-0.5"
                onClick={() =>
                  setButton(button === "Login" ? "Logout" : "Login")
                }
              >
                {button}
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
