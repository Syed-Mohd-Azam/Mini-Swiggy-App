// import { CORS_PROXY_URL } from "./constants/constants";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_API } from "./constants/constants";
import useOnlineStatus from "./custom-hooks/useOnlineStatus";
const Body = () => {
  const onlineStatus = useOnlineStatus();
  const [search, setSearch] = useState("");
  // State Variable --> Super Powerful Variable
  // useState() is a hook which is used to declare a state variable.
  // State variable is a variable which stores the value or you can say a state of a component and as sson as its value is changed component is re-rendered.
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
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
    setListOfRestaurants(
      json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  if (onlineStatus === "offline") {
    return (
      <h1 className="text-pink-400 text-center p-5 m-5 text-3xl ">
        Please check your Internet Connection!!
      </h1>
    );
  }
  return (
    <>
      {listOfRestaurants?.length > 0 ? (
        <section className="mb-8">
          <div className="flex gap-x-8 px-14 py-8 ">
            <div className="flex gap-x-3">
              <input
                className="outline-2 outline-offset-1 outline-blue-500 px-2 border-blue-500 border-2 rounded-md"
                type="search"
                placeholder="Search Restaurant"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                className="bg-lime-400 rounded-md text-white font-bold py-2 px-2 cursor-pointer hover:bg-slate-400 shadow-xl"
                onClick={(e) => e.preventDefault()}
              >
                Search
              </button>
            </div>
            <button
              className="bg-cyan-950 text-white rounded-md p-2 font-bold cursor-pointer hover:text-cyan-950 hover:bg-white hover:border-cyan-950 hover:border-2 shadow-xl"
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
          <div className="flex flex-wrap gap-y-12 gap-x-4 px-10 ">
            {filteredRestaurants.map((restaurant) => (
              <Link
                className="link"
                to={"restaurant-menu/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                {restaurant?.info?.aggregatedDiscountInfoV3 ? (
                  <RestaurantCardPromoted restaurant={restaurant} />
                ) : (
                  <RestaurantCard restaurant={restaurant} />
                )}
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
