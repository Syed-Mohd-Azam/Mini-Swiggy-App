import { useEffect, useState } from "react";
import { MENU_API } from "./constants/constants";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resid } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const response = await fetch(MENU_API + resid);
    const jsonData = await response.json();
    console.log(jsonData);
    setResInfo(jsonData);
  };
  if (resInfo === null) {
    return (
      <h1 style={{ color: "brown", padding: "1.5rem" }}>
        Please Wait!! Data is Loading .....
      </h1>
    );
  }
  const { name, avgRating, city, cuisines, costForTwoMessage } =
    resInfo?.data?.cards?.[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
      ?.card?.card;
  return (
    <>
      <main className="menu">
        <h2 style={{ marginBottom: "1rem" }}>
          {name}, {city}
        </h2>
        <h3 style={{ marginBottom: "1rem" }}>
          {cuisines.join(", ")}--{costForTwoMessage}
        </h3>
        <h3 style={{ marginBottom: "1rem" }}>{avgRating} stars</h3>
        <h2 style={{ marginBottom: "1rem" }}>Menu</h2>
        <ul>
          {itemCards ? (
            itemCards?.map(
              ({
                card: {
                  info: { name, price, id },
                },
              }) => (
                <li key={id}>
                  {name} || Rs.{price / 100}
                </li>
              )
            )
          ) : (
            <p>No Items in the menu</p>
          )}
        </ul>
      </main>
    </>
  );
};
export default RestaurantMenu;
