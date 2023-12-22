import { useState } from "react";
import { LOGO_URL } from "./constants/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./custom-hooks/useOnlineStatus";
const Header = () => {
  const [button, setButton] = useState("Login");
  const status = useOnlineStatus();
  return (
    <>
      <header className="header">
        <div className="logo-container">
          <img src={LOGO_URL} className="logo" />
        </div>
        <nav className="nav-items">
          <ul>
            <li>Online Status | {status === "online" ? "💡" : "🔴"}</li>
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="grocery" className="link">
                Grocery
              </Link>
            </li>
            <li>
              <Link to="about" className="link">
                About
              </Link>
            </li>
            <li>
              <Link to="contact" className="link">
                Contact
              </Link>
            </li>
            <li>Cart</li>
            <li>
              <button
                className="login-logout "
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
