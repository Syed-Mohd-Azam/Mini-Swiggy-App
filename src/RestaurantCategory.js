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
          <ItemCards itemCards={itemCards} />
        </article>
      </section>
    </>
  );
};
export default RestaurantCategory;
