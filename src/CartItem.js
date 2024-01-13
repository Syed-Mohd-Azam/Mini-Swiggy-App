import { useDispatch, useSelector } from "react-redux";
import { RESTAURANT_IMAGE_CLOUDINARY } from "./constants/constants";
const CartItem = ({ item }) => {
  return (
    <>
      <section className="m-6 my-8 flex justify-between  pt-4 border-black bg-purple-50 p-8 rounded-xl shadow-lg">
        <section className="w-8/12">
          <h1 className=" text-black text-xl font-semibold ">
            {item?.info?.name} -- ₹{" "}
            {(item?.info?.price || item?.info?.defaultPrice) / 100}
          </h1>
          <p className=" text-lg text-black my-6">{item?.info?.description}</p>
        </section>
        <section className="w-3/12 flex flex-col justify-center items-end">
          {item?.info?.imageId ? (
            <>
              <img
                className="min-w-36 min-h-32 w-36 h-32 rounded-xl shadow-2xl hover:scale-90 hover:translate-x-6 cursor-pointer"
                src={RESTAURANT_IMAGE_CLOUDINARY + item?.info?.imageId}
                alt="Restaurant-Logo"
              />
            </>
          ) : (
            <>
              <button className="min-w-36 min-h-32 w-36 h-32 rounded-xl shadow-2xl hover:scale-90 hover:translate-x-6 cursor-pointer text-white font-bold text-xl bg-black">
                Image not Available
              </button>
            </>
          )}
        </section>
      </section>
    </>
  );
};
export default CartItem;
