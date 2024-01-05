import { useContext, useState } from "react";
import { LOGO_URL } from "./constants/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./custom-hooks/useOnlineStatus";
import UserContext from "./constants/UserContext";
const Header = () => {
  const [button, setButton] = useState("Login");
  const status = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  return (
    <>
      <header className="flex justify-between shadow-lg bg-purple-50">
        <div>
          <img src={LOGO_URL} className="w-28 h-28 min-w-10 min-h-10" />
        </div>
        <nav className="flex justify-center items-center p-8">
          <ul className="flex gap-x-6">
            <li className="text-2xl  px-5 text-black  italic">
              Online Status | {status === "online" ? "💡" : "🔴"}
            </li>
            <li>
              <Link
                to="/"
                className="text-2xl hover:text-3xl hover:text-violet-500 text-black  italic"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="grocery"
                className="text-2xl text-black hover:text-3xl hover:text-violet-500  italic"
              >
                Grocery
              </Link>
            </li>
            <li>
              <Link
                to="about"
                className="text-2xl text-black hover:text-3xl hover:text-violet-500 italic"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                className="text-2xl text-black hover:text-3xl hover:text-violet-500 italic"
              >
                Contact
              </Link>
            </li>
            <li className="text-2xl text-black hover:text-3xl hover:text-violet-500 italic">
              Cart
            </li>
            <li>
              <button
                className="text-2xl  hover:bg-blue-500 hover:text-3xl hover:text-white bg-zinc-50 text-black px-3  tracking-wide rounded-md pb-0.5"
                onClick={() =>
                  setButton(button === "Login" ? "Logout" : "Login")
                }
              >
                {button}
              </button>
            </li>
            <li className="text-2xl text-black hover:text-3xl hover:text-violet-500 font-bold italic">
              {loggedInUser}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
