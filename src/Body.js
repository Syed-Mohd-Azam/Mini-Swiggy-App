import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
const Body = () => {
  // State Variable --> Super Powerful Variable
  // useState() is a hook which is used to declare a state variable.
  // State variable is a variable which stores the value or you can say a state of a component and as sson as its value is changed component is re-rendered.
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  return (
    <>
      <section className="body">
        <div className="filter">
          <button className="top-rated-restaurants" onClick={() => {}}>
            Top Rated Restaurants
          </button>
        </div>
        <div className="res-container">
          {listOfRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant?.info?.id}
              restaurant={restaurant}
            />
          ))}
        </div>
      </section>
    </>
  );
};
export default Body;
