import RestaurantCard from "./RestaurantCard";
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
export default Body;
