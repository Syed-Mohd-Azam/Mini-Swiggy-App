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
const RestaurantCard = () => {
  return (
    <>
      <section className="res-card">
        <img
          className="res-logo"
          src="https://cdn.squaremeal.co.uk/article/9779/images/diy-restaurant-meal-kits-bubala_10052023015403.jpg?w=913&auto=format%2Ccompress"
          alt="Restaurant Logo"
        />
        <section className="res-info">
          <h1 className="info res-name">Meghna Foods</h1>
          <h5 className="info">Biryani, North Indian, Asian</h5>
          <h5 className="info">4.4. stars</h5>
          <h5 className="info">38 mins</h5>
        </section>
      </section>
    </>
  );
};
const Body = () => {
  return (
    <>
      <section className="body">
        <div className="search">Search</div>
        <div className="res-container">
          <RestaurantCard />
        </div>
      </section>
    </>
  );
};
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
