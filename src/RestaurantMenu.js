import { useEffect, useState } from "react";
import { MENU_API } from "./constants/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
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
    return <Shimmer />;
  }
  const { name, avgRating, city, cuisines, costForTwoMessage } =
    resInfo?.data?.cards?.[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
      ?.card?.card;
  console.log(itemCards);
  return (
    <>
      <main className="menu">
        <h2>
          {name},{city}
        </h2>
        <h3>
          {cuisines.join(", ")}--{costForTwoMessage}
        </h3>
        <h3>{avgRating} stars</h3>
        <h2>Menu</h2>
        <ul>
          {itemCards.map(
            ({
              card: {
                info: { name, price },
              },
            }) => (
              <li>
                {name} || Rs.{price / 100}
              </li>
            )
          )}
        </ul>
      </main>
    </>
  );
};
export default RestaurantMenu;
