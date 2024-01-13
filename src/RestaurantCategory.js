import ItemCards from "./ItemCards";
const RestaurantCategory = ({
  title,
  itemCards,
  showItems,
  index,
  setShowIndex,
  categories,
}) => {
  return (
    <>
      <section className="mt-6 mb-4 rounded-xl shadow-lg p-7  bg-purple-50">
        <article className="flex justify-between  ">
          <p className="text-black font-bold text-xl">
            {title} ({itemCards?.length || categories?.length})
          </p>
          <p
            className="text-black font-bold cursor-pointer"
            onClick={() => setShowIndex(showItems ? null : index)}
          >
            {showItems ? "▼" : "▲"}
          </p>
        </article>
        {showItems && (
          <article>
            {itemCards?.length > 0 ? (
              <>
                <ItemCards itemCards={itemCards} />
              </>
            ) : (
              <>
                {categories &&
                  categories.map(({ itemCards }) => (
                    <>
                      {" "}
                      <ItemCards itemCards={itemCards} />
                    </>
                  ))}
              </>
            )}
          </article>
        )}
      </section>
    </>
  );
};
export default RestaurantCategory;
