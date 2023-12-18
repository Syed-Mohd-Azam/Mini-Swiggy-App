import { useState } from "react";
import { LOGO_URL } from "./constants/constants";
const Header = () => {
  const [button, setButton] = useState("Login");
  return (
    <>
      <header className="header">
        <div className="logo-container">
          <img src={LOGO_URL} className="logo" />
        </div>
        <nav className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Conatct</li>
            <li>Cart</li>
            <li>
              <button
                className="login-logout"
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
