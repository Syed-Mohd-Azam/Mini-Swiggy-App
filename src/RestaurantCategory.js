import ItemCards from "./ItemCards";
const RestaurantCategory = ({
  title,
  itemCards,
  showItems,
  index,
  setShowIndex,
}) => {
  return (
    <>
      <section
        style={{ backgroundColor: "#f0f0f0" }}
        className="mt-6 mb-4 rounded-xl shadow-lg p-7 cursor-pointer"
        onClick={() => setShowIndex(showItems ? null : index)}
      >
        <article className="flex justify-between  ">
          <p className="text-black font-bold text-xl">
            {title} ({itemCards?.length})
          </p>
          <p className="text-white font-bold">{showItems ? "▼" : "▲"}</p>
        </article>
        {showItems && (
          <article>
            {itemCards?.length > 0 ? (
              <>
                <ItemCards itemCards={itemCards} />
              </>
            ) : (
              <>
                <section className="p-5 m-5">
                  <span className=" text-3xl">🤔 </span>
                  <span className=" text-white font-bold text-2xl">
                    Sorry!! No Item Cards
                  </span>
                </section>
              </>
            )}
          </article>
        )}
      </section>
    </>
  );
};
export default RestaurantCategory;
