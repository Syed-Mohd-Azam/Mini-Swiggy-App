import { useParams } from "react-router-dom";
import useMenu from "./custom-hooks/useMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const { resid } = useParams();
  const resInfo = useMenu(resid);
  // console.log(resInfo);
  if (resInfo === null) {
    return (
      <h1 style={{ color: "brown", padding: "1.5rem" }}>
        Please Wait!! Data is Loading .....
      </h1>
    );
  }
  const {
    name,
    avgRating,
    city,
    cuisines,
    costForTwoMessage,
    locality,
    totalRatingsString,
  } = resInfo?.data?.cards?.[0]?.card?.card?.info;
  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) => category?.card?.card?.["@type"].includes("ItemCategory")
    );
  return (
    <>
      <main className="max-w-4xl mx-auto mt-3 mb-3">
        <section className="flex justify-between mt-5 mb-5">
          <article>
            <h1 className="font-bold text-3xl">{name}</h1>
            <h4 className="italic">
              {cuisines.join(", ")} -- {costForTwoMessage}
            </h4>
            <h4 className="italic">
              {locality}, {city}
            </h4>
          </article>
          <button className="p-2 w-16 h-24  rounded-sm shadow-md border-solid">
            <h5 className="text-xl text-brown-500 font-bold mb-1">
              {avgRating}
            </h5>
            <hr />
            <h6 className="text-sm  text-brown-500 font-bold mt-1 italic">
              {totalRatingsString}
            </h6>
          </button>
        </section>
        {categories?.map(
          (
            {
              card: {
                card: { itemCards, title },
              },
            },
            index
          ) => (
            <RestaurantCategory
              key={index}
              itemCards={itemCards}
              title={title}
            />
          )
        )}
      </main>
    </>
  );
};
export default RestaurantMenu;
