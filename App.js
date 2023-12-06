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
const RestaurantCard = ({ name, cuisines, stars, minutes }) => {
  return (
    <>
      <section className="res-card">
        <img
          className="res-logo"
          src="https://cdn.squaremeal.co.uk/article/9779/images/diy-restaurant-meal-kits-bubala_10052023015403.jpg?w=913&auto=format%2Ccompress"
          alt="Restaurant Logo"
        />
        <section className="res-info">
          <h1 className="info res-name">{name}</h1>
          <h5 className="info">{cuisines}</h5>
          <h5 className="info">{stars}</h5>
          <h5 className="info">{minutes}</h5>
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
          <RestaurantCard
            name="Meghna Foods"
            cuisines="Burger, Pizza, Fries"
            stars="4.3 stars"
            minutes="38 minutes"
          />
          <RestaurantCard
            name="KFC"
            cuisines="Chicken Fries, Chicken Wings, Cold Drink"
            stars="4.2 stars"
            minutes="29 minutes"
          />
          <RestaurantCard
            name="Sindh Sweets"
            cuisines="Snacks, Sweets, Bakery"
            stars="4.1 stars"
            minutes="17 minutes"
          />
          <RestaurantCard
            name="VIP Pizza Delhi"
            cuisines="Italian, Pizzas"
            stars="4.1 stars"
            minutes="25 minutes"
          />
          <RestaurantCard
            name="Milkbar Delight"
            cuisines="South Indian, Chinese, Pizza, Cakes, FastFood"
            stars="4 stars"
            minutes="24 minutes"
          />
          <RestaurantCard
            name="Kwality's Snack Shoppe"
            cuisines="North Indian, Mughlai"
            stars="4.1 stars"
            minutes="21 minutes"
          />
          <RestaurantCard
            name="Pie Pizza"
            cuisines="Pizzas, Burgers"
            stars="3.4 stars"
            minutes="24 minutes"
          />
          <RestaurantCard
            name="Pizza Hut"
            cuisines="Pizzas,snacks"
            stars="3.7 stars"
            minutes="29 minutes"
          />
          <RestaurantCard
            name="Hot Wok"
            cuisines="Chinese"
            stars="3.7 stars"
            minutes="24 minutes"
          />
          <RestaurantCard
            name="Jassi's Bread and Bytes"
            cuisines="Bakery, Fast Foods, Desserts"
            stars="4 stars"
            minutes="15 minutes"
          />
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
