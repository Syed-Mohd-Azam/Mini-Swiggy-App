import React from "react";
import ReactDOM from "react-dom/client";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo-container">
          <img
            src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018"
            alt="Food-App-Logo"
            className="logo"
          />
        </div>
        <nav className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Conatct</li>
            <li>Cart</li>
          </ul>
        </nav>
      </header>
    </>
  );
};
const AppLayout = () => {
  return (
    <>
      <Header />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
