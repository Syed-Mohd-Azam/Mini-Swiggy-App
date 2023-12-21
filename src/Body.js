import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_API } from "./constants/constants";
const Body = () => {
  const [search, setSearch] = useState("");
  // State Variable --> Super Powerful Variable
  // useState() is a hook which is used to declare a state variable.
  // State variable is a variable which stores the value or you can say a state of a component and as sson as its value is changed component is re-rendered.
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    setFilteredRestaurants(
      listOfRestaurants.filter((restaurant) =>
        restaurant?.info?.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);
  const fetchData = async () => {
    const response = await fetch(SWIGGY_API);
    const json = await response.json();
    console.log(
      json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setListOfRestaurants(
      json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  return (
    <>
      {listOfRestaurants.length > 0 ? (
        <section className="body">
          <div className="filter">
            <div className="search">
              <input
                className="search-input"
                type="search"
                placeholder="Search Restaurant"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div>
                <button
                  className="search-button"
                  onClick={(e) => e.preventDefault()}
                >
                  Search
                </button>
              </div>
            </div>
            <button
              className="top-rated-restaurants"
              onClick={() => {
                setFilteredRestaurants(
                  listOfRestaurants.filter(
                    (restaurant) => restaurant?.info?.avgRating > 4
                  )
                );
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
          <div className="res-container">
            {filteredRestaurants.map((restaurant) => (
              <Link
                className="link"
                to={"restaurant-menu/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                <RestaurantCard restaurant={restaurant} />
              </Link>
            ))}
          </div>
        </section>
      ) : (
        <Shimmer />
      )}
    </>
  );
};
export default Body;
