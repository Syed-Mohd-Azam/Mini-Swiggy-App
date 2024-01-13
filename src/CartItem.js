import { useDispatch, useSelector } from "react-redux";
import { RESTAURANT_IMAGE_CLOUDINARY } from "./constants/constants";
import { removeItem } from "./constants/cartSlice";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store?.cart?.items);
  const handleCartDelete = (item) => {
    dispatch(
      removeItem(
        items?.filter((cartItem) => cartItem?.info?.id !== item?.info?.id)
      )
    );
  };
  return (
    <>
      <section className="m-6 my-8 flex justify-between   border-black bg-purple-50 p-8 rounded-xl shadow-lg">
        <section className="w-8/12">
          <h1 className=" text-black text-xl font-semibold ">
            {item?.info?.name} -- ₹{" "}
            {(item?.info?.price || item?.info?.defaultPrice) / 100}
          </h1>
          <p className=" text-lg text-black my-6">{item?.info?.description}</p>
          <button
            className="bg-black text-purple-50 p-2 rounded-lg font-semibold hover:bg-yellow-200 hover:text-black hover:font-semibold"
            onClick={() => handleCartDelete(item)}
          >
            Remove Item
          </button>
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
