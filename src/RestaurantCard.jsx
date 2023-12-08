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
export default RestaurantCard;
