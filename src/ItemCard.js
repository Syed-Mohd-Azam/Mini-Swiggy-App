import { RESTAURANT_IMAGE_CLOUDINARY } from "./constants/constants";
const ItemCard = ({
  info: { name, imageId, description, price, defaultPrice },
}) => {
  return (
    <>
      <section className="m-6 flex justify-between border-t-2 pt-4 border-black">
        <section className="w-8/12">
          <h1 className="font-bold text-black text-xl">
            {name} -- ₹ {(price || defaultPrice) / 100}
          </h1>
          <p className="font-bold text-lg text-black my-6">{description}</p>
        </section>
        <section className="w-3/12 flex flex-col justify-center items-end">
          {imageId ? (
            <>
              <img
                className="min-w-36 min-h-32 w-36 h-32 rounded-xl shadow-2xl hover:scale-90 hover:translate-x-6 cursor-pointer"
                src={RESTAURANT_IMAGE_CLOUDINARY + imageId}
                alt="Restaurant-Logo"
              />
            </>
          ) : (
            <>
              <button className="min-w-36 min-h-32 w-36 h-32 rounded-xl shadow-2xl hover:scale-90 hover:translate-x-6 cursor-pointer text-white font-bold text-xl bg-black">
                Image not Avaailable
              </button>
            </>
          )}
          <button className="bg-black w-3/5  text-lg rounded-md italic text-white   shadow-lg py-2 mt-3 mr-3 cursor-pointer hover:scale-110 hover:bg-white hover:text-black">
            Add +
          </button>
        </section>
      </section>
    </>
  );
};
export default ItemCard;
