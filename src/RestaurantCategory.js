import ItemCards from "./ItemCards";
const RestaurantCategory = ({ title, itemCards }) => {
  return (
    <>
      <section className=" mt-6 mb-4 bg-pink-200 rounded-xl shadow-lg p-4">
        <article className="flex justify-between  ">
          <p className="text-white font-bold text-xl">
            {title} ({itemCards?.length})
          </p>
          <p className="text-white font-bold">▲</p>
        </article>
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
      </section>
    </>
  );
};
export default RestaurantCategory;
