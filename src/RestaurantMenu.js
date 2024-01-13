import { useParams } from "react-router-dom";
import useMenu from "./custom-hooks/useMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resid } = useParams();
  const resInfo = useMenu(resid);
  const [showIndex, setShowIndex] = useState(null);
  // console.log(resInfo);
  if (resInfo === null) {
    return (
      <h1 className="text-center p-5 m-5 text-black text-4xl italic">
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
  console.log(categories);
  return (
    <>
      <main className="max-w-4xl mx-auto mt-3 mb-3">
        <section className="flex justify-between mt-5 mb-5 ">
          <article className="hover:scale-125 cursor-pointer">
            <h1 className="font-bold text-3xl">{name}</h1>
            <h4 className="italic">
              {cuisines.join(", ")} -- {costForTwoMessage}
            </h4>
            <h4 className="italic ">
              {locality}, {city}
            </h4>
          </article>
          <section className="py-4 px-4  rounded-lg shadow-xl border-solid  hover:scale-125 cursor-pointer bg-purple-50 ">
            <h5 className="text-xl text-black font-bold mb-1 text-center">
              {avgRating}
            </h5>
            <hr className="border-t-2 border-black" />
            <h6 className="text-sm  text-black font-bold mt-1 italic">
              {totalRatingsString}
            </h6>
          </section>
        </section>
        {categories?.map(
          (
            {
              card: {
                card: { itemCards, title, categories },
              },
            },
            index
          ) => (
            // Controlled Component RestaurantCategory
            <RestaurantCategory
              key={title}
              index={index}
              itemCards={itemCards}
              categories={categories}
              title={title}
              setShowIndex={setShowIndex}
              showItems={index === showIndex && true}
            />
          )
        )}
      </main>
    </>
  );
};
export default RestaurantMenu;
