import { RESTAURANT_IMAGE_CLOUDINARY } from "./constants/constants";
const ItemCard = ({
  info: { name, imageId, description, price, defaultPrice },
}) => {
  return (
    <>
      <section className="m-6 flex justify-between border-t-2 pt-4 border-white">
        <section className="w-8/12">
          <h1 className="font-bold text-white text-xl">
            {name} -- ₹ {(price || defaultPrice) / 100}
          </h1>
          <p className="font-bold text-lg text-white my-6">{description}</p>
        </section>
        <section className="w-3/12 flex flex-col justify-center items-end relative">
          <img
            className="w-36 h-32  rounded-xl"
            src={RESTAURANT_IMAGE_CLOUDINARY + imageId}
            alt="Restaurant-Logo"
          />
          <button className="bg-white w-3/5 mx-auto text-lg rounded-md italic text-amber-950 absolute bottom-0 right-2 shadow-lg py-2">
            Add +
          </button>
        </section>
      </section>
    </>
  );
};
export default ItemCard;
