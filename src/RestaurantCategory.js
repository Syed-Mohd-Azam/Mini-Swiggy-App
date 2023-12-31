const RestaurantCategory = ({ title, itemCards }) => {
  return (
    <>
      <section className="max-w-4xl mx-auto mt-6 mb-4 bg-pink-200 rounded-xl shadow-lg">
        <article className="flex justify-between p-4 ">
          <p className="text-white font-bold text-lg">
            {title} ({itemCards?.length})
          </p>
          <p className="text-white">▲</p>
        </article>
      </section>
    </>
  );
};
export default RestaurantCategory;
